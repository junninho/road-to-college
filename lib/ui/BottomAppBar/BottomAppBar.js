import React from "react";

export default class BottomAppBar extends React.Component {
    render() {
        return (
            <div className="BottomAppBar">
                <input id="scrubber" type="range"/>
                <div className="menu-group primary" id="footer">
                    <div className="menu-group-left">
                        <ul className="menu-bar primary">
                            <li><a href="#" onClick="toggleScrubber('scrubber')">Scrubber</a></li>
                        </ul>
                    </div>

                    <div className="menu-group-center">
                        <ul className="menu-bar primary">
                            <form>
                                <input id="pageInput" type="text" placeholder="Page Number" onkeypress="changePage()"/>
                            </form>
                        </ul>
                    </div>

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



