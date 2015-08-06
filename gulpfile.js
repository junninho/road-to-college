"use strict";

var gulp = require("gulp");
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watchify = require("watchify");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var connect = require("gulp-connect");
var open = require("gulp-open");
var watch = require("gulp-watch");

var URL_TO_RUNNER_HTML = "http://proto.localtest.me:8030/public/";
var isLiveReloadEnabled = false;

gulp.task("browserify", function () {
    function onError(e) {
        console.error(e.message);
    }

    function bundle() {
        b.bundle()
            .on("error", onError)
            .pipe(source("bundle.js"))
            .pipe(gulp.dest("./public/js"));
    }

    var opts = watchify.args;
    opts.extensions = [".jsx"];

    var b = watchify(browserify(["./lib/main.js"], opts))
        .require("jquery")
        .transform(babelify)
        .on("update", bundle);

    bundle();
});

gulp.task("styles", function () {
    gulp.src(["./public/sass/**/*.scss", "./lib/ui/**/*.scss"])
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task("sassify", function () {
    gulp.watch(["./public/sass/**/*.scss", "./lib/ui/**/*.scss"], ["styles"]);
});

gulp.task("connect", function () {
    connect.server({
        port: 8030,
        livereload: isLiveReloadEnabled
    });
});

gulp.task("reload", function () {
    gulp.src("./public/js/*.js")
        .pipe(connect.reload());
});

gulp.task("livereload", function () {
    isLiveReloadEnabled = true;
    gulp.watch("./public/js/bundle.js", ["reload"]);
});

gulp.task("open", function () {
    gulp.src("./public/index.html")
        .pipe(open("", { url: URL_TO_RUNNER_HTML }));
});

gulp.task("build", ["browserify", "styles", "sassify"]);

gulp.task("server", ["build", "livereload", "connect", "open"]);

gulp.task("default", ["build"], function () {
    connect.serverClose();
});
