import React from "react";
import BottomAppBar from "./ui/BottomAppBar";
import TopAppBar from "./ui/TopAppBar";
import Viewer from "./ui/Viewer";
import ViewerPanel from "./ui/ViewerPanel";
import ToolsPanel from "./ui/ToolsPanel";

export default class App extends React.Component {
    render() {
        return (
            <div className="Application">
                <TopAppBar />
                <Viewer />
                <BottomAppBar />
                <ViewerPanel />
                <ToolsPanel />
            </div>
        );
    }
}
