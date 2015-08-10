import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";
import Panel from "react-foundation-apps/lib/panel/index.jsx";

export default class ToolsPanel extends React.Component {
    _openPanel(panelName) {
            foundationApi.publish("open-viewer-panel", panelName);
        }

    constructor(props) {
        super(props);
    }

    _closePanel(ev) {
        foundationApi.publish(this.props.id, "close");
        ev.preventDefault();
    }

    render() {
        return (
            <Panel id={this.props.id} position={this.props.position || "right"} ref="panel">
                <a onClick={(ev) => this._openPanel("ToolsMenu")}>Back to Menu</a>
                <a className="close-button" onClick={(ev) => this._closePanel(ev)}>&times;</a>
                <div className="grid-container">
                    {this.props.children}
                </div>
            </Panel>
        );
    }
}
