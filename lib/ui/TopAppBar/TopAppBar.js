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
                    <SettingsLink />
                </div>
            </div>
        );
    }
}


