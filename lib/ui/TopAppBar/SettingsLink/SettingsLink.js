import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class SettingsLink extends React.Component {

    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div>
                <a className="more" href="#" onClick={(ev) => this._openPanel("ToolsMenu")}>
                    <i className="fa fa-terminal fa-2"></i>
                </a>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
