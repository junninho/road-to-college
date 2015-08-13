import React from "react";

export default class BottomAppBar extends React.Component {
    render() {
        return (
            <div className="bottom-app-bar">
                <input id="scrubber" type="range"/>
                <div className="menu-group primary" id="footer">
                    <div className="menu-group-right">
                        <ul className="primary menu-bar">
                            <li>Copyright &copy; 2015</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}



