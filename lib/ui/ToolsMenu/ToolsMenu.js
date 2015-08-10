import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class ToolsMenu extends React.Component {
    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div>
                <section>
                    <ul>
                        <li>
                            <a onClick={(ev) => this._openPanel("Hub")}>Hub</a>
                        </li>
                    </ul>
                    <hr />
                    <ul>
                        <li>
                            <a onClick={(ev) => this._openPanel("ItemInfo")}>Item Info</a>
                        </li>
                        <li>
                            <a onClick={(ev) => this._openPanel("Search")}>Search</a>
                        </li>
                        <li>
                            <a onClick={(ev) => this._openPanel("TableOfContents")}>Contents</a>
                        </li>
                    </ul>
                    <hr />
                    <ul>
                        <li>
                            <a onClick={(ev) => this._openPanel("Help")}>Help</a>
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
