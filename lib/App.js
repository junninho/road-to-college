import React from "react";
import BottomAppBar from "./ui/BottomAppBar";
import TopAppBar from "./ui/TopAppBar";
import Viewer from "./ui/Viewer";

export default class App extends React.Component {
    render() {
        return (
            <div className="Application">
                <TopAppBar />
                <Viewer />
                <BottomAppBar />
            </div>
        );
    }
}
