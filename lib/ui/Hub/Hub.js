import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class Hub extends React.Component {
    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div>
                <a onClick={(ev) => this._openPanel("ToolsMenu")}>Back to Menu</a>
                <div>
                    <div className="grid-block">
                    </div>
                    <div className="grid-block">
                    </div>
                    <div className="grid-block">
                    </div>
                    <div className="grid-block">
                    </div>
                    <div className="grid-block">
                    </div>
                    <div className="grid-block">
                    </div>
                </div>
            </div>
        )
    }
}
