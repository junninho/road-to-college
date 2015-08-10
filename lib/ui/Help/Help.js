import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class Help extends React.Component {
    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div className="help vertical">
                <div className="grid-block">
                    <div className="grid-content medium-6 canvas-title">
                        <a className="canvas-title">HELP</a>
                    </div>
                </div>
                <div className="vertical grid-block help-content">
                    <div className="grid-block help-elements"><a onClick={(ev) => this._openPanel("WhatsNew")}>Whats New</a></div>
                    <div className="grid-block help-elements"><a>Check for Update</a></div>
                    <div className="grid-block help-elements"><p></p></div>
                    <div className="grid-block help-elements"><a onClick={(ev) => this._openPanel("FAQ")}>FAQ</a></div>
                    <div className="grid-block help-elements"><a href="https://customercare.yuzu.com/hc/en-us" target="_blank">Contact Yuzu</a></div>
                    <div className="grid-block help-elements"><a href="https://customercare.yuzu.com/hc/en-us/requests/new?community_id=public" target="_blank">Submit a Help Request</a></div>
                </div>
            </div>
        );
    }
}
