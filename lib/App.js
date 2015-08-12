import React from "react";
import Router from "react-router";
import BottomAppBar from "./ui/BottomAppBar";
import TopAppBar from "./ui/TopAppBar";
import Viewer from "./ui/Viewer";
import ViewerPanel from "./ui/ViewerPanel";

var { RouteHandler } = Router;

export default class App extends React.Component {
    render() {
        return (
            <div className="Application">
                <TopAppBar />
                <RouteHandler/>
                <BottomAppBar />
                <ViewerPanel />
            </div>
        );
    }
}
