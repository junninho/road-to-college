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
            <a className="more" href="#" onClick={() => this.toggle()}>
                <span>...</span>
            </a>
            <div>{this.props.children}</div>
          </div>
        );
    }
}
