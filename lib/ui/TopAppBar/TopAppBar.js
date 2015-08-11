import React from "react";
import SettingsLink from "./SettingsLink";

export default class TopAppBar extends React.Component {
    render() {
        return (
            <div className="title-bar top-app-bar">
                <div className="center title">Center</div>
                <div className="right">
                    <SettingsLink />
                </div>
            </div>
        );
    }
}


