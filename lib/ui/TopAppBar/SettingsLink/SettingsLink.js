import React from "react";

export default class SettingsLink extends React.Component {
    static get displayName() { return "ActionSheetButton" }

    toggle() {
        this.props.setActiveState(!this.props.active);
        return false;
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
