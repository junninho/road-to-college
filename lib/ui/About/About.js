import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class About extends React.Component {
    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div className="about vertical">
                <div className="grid-block">
                    <div className="grid-content canvas-title">
                        <ul>
                            <li>
                                <a onClick={(ev) => this._openPanel("ToolsMenu")}>Back to Menu</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="vertical grid-block about-content">
                    <p>My name is Junninho. I am a senior at Brooklyn High School for Law and Technology. I was born and raised in Jamaica up until age 16. I am highly enthusiastic about Computer Science and technology in general. It is my intention to attend college to study Computer Science and subsequently become a Computer Systems Analyst or Web/Software Developer.</p>
                </div>
            </div>
        );
    }
}
