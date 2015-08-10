import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class ToolsMenu extends React.Component {
    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div className="tools-menu">
                <section>
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a onClick={(ev) => this._openPanel("Hub")}>Hub</a>
                        </li>
                    </ul>
                    <hr />
                    <ul>
                        <li>
                            <a onClick={(ev) => this._openPanel("About")}>About</a>
                        </li>
                    </ul>
                    <hr />
                    <ul>
                        <li>
                            <a href="#">Deauthorize</a>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}
