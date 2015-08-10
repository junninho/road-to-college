import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class FAQ extends React.Component {
    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div className="faq vertical">
                <div className="grid-block">
                    <div className="grid-content medium-6 canvas-title">
                        <a className="canvas-title" >FAQ</a>
                    </div>
                </div>
                <div className="vertical grid-block faq">
                    <div className="grid-block back"><a onClick={(ev) => this._openPanel("Help")}>Back to Help</a></div>
                    <div className="grid-block faq-heading"><h3>What is Yuzu?<br /></h3></div>
                    <div className="grid-block faq-text">
                        <p>
                            Yuzu is a digital education platform from Barnes & Noble that breaks down the barriers between students and knowledge by enhancing the everyday learning experience.<br /> For students, Yuzu combines a next-generation reading and note-taking experience in a simple app, with access to a catalog of rich and immersive content.<br />For educators, Yuzu makes it easier than ever to engage students with inspiring course materials.<br /> For everyone, Yuzu makes learning more friendly, organized, and enjoyable.<br /> Access Yuzu on your iPad or Windows 8 device, or online with your computer.*
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
