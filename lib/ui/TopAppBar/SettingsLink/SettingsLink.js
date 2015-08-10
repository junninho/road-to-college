import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";
import ToolsMenu from "../../ToolsMenu";

export default class SettingsLink extends React.Component {
    static get displayName() { return "ActionSheetButton" }

    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div>
                <a className="more" href="#" onClick={(ev) => this._openPanel("ToolsMenu")}>
                    <span>...</span>
                </a>
                <div>{this.props.children}</div>
          </div>
        );
    }
}
