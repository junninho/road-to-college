import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class About extends React.Component {
    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div className="about vertical">
                <div className="grid-block">
                    <div className="grid-content canvas-title">
                        <ul>
                            <li>
                                <a className="canvas-title">about</a>
                            </li>
                            <li>
                                <a onClick={(ev) => this._openPanel("ToolsMenu")}>Back to Menu</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="vertical grid-block about-content">
                    <p>Hi</p>
                </div>
            </div>
        );
    }
}
