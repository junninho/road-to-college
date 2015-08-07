import React from "react";
import ActionSheet from "react-foundation-apps/lib/action-sheet/index.jsx";
import Trigger from "react-foundation-apps/lib/trigger/index.jsx";
import SettingsLink from "./SettingsLink";

export default class TopAppBar extends React.Component {
    render() {
        return (
            <div className="title-bar top-app-bar">
                <div className="center title">Center</div>
                {/* Reveals Action Sheet*/}
                <div className="right">
                    <ActionSheet id="yz-as" className="settings-sheet">
                        <SettingsLink />
                        <ActionSheet.Content>
                            <Trigger close="yz-as">
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
                                            <a onClick={(ev) => this._openPanel("Annotations")}>Annotations</a>
                                        </li>
                                        <li><a href="#">History</a></li>
                                        <li>
                                            <a onClick={(ev) => this._openPanel("TableOfContents")}>Contents</a>
                                        </li>
                                    </ul>
                                    <hr />
                                    <ul>
                                        <li><a href="#">Settings</a></li>
                                        <li>
                                            <a onClick={(ev) => this._openPanel("Help")}>Help</a>
                                        </li>
                                    </ul>
                                    <hr />
                                    <ul>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Customer Care</a></li>
                                    </ul>
                                    <hr />
                                    <ul>
                                        <li><a href="#">Deauthorize</a></li>
                                    </ul>
                                </section>
                            </Trigger>
                        </ActionSheet.Content>
                    </ActionSheet>
                </div>
            </div>
        );
    }
}


