import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class WhatsNew extends React.Component {
    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div className="whats-new vertical">
                <div className="grid-block">
                        <div className="grid-content medium-6 canvas-title">
                            <a className="canvas-title" >Whats New</a>
                        </div>
                </div>
                <div className="vertical grid-block whats-new">
                    <div className="grid-block back"><a onClick={(ev) => this._openPanel("Help")}>Back to Help</a></div>
                    <div className="grid-block whats-new-elements"><p className="new"><b>1. Read on the go</b><br/>Access digital content online or download it to an iPad or Windows 8.1 device.*</p></div>
                    <div className="grid-block whats-new-elements"><p className="new"><b>2. Travel lighter</b><br/>Replace many textbooks with an easy-to-use app that holds them all in one place.</p></div>
                    <div className="grid-block whats-new-elements"><p className="new"><b>3. Stay organized</b><br/>Organize reading by term and course. Quickly find what you need, when you need it.</p></div>
                    <div className="grid-block whats-new-elements"><p className="new"><b>4. Learn easier</b><br/>Highlight, flag important content, and add notes. Yuzu adapts to your learning style.</p></div>
                    <div className="grid-block whats-new-elements"><p className="new"><b>5. Dig deeper</b><br/>Access a wide range of engaging course materials including rich, interactive content.</p></div>
                </div>
            </div>
        );
    }
}
