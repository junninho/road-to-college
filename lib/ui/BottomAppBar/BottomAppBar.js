import React from "react";

export default class BottomAppBar extends React.Component {
    render() {
        return (
            <div className="BottomAppBar">
                <input id="scrubber" type="range"/>
                <div className="menu-group primary" id="footer">
                    <div className="menu-group-right">
                        <ul className="icon-left primary menu-bar">
                            <li><a href="#">View Controls</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}



