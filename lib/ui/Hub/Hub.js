import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class Hub extends React.Component {
    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    render() {
        return (
            <div className="hub">
                <a onClick={(ev) => this._openPanel("ToolsMenu")}>Back to Menu</a>
                <div>
                    <div className="grid-block hub-contents">
                        <div className="medium-6 grid-block">
                            <img className="hub-images" src="http://balladeer.files.wordpress.com/2010/12/nyuathleticslogo2.jpg"/>
                        </div>
                        <div className="medium-6 grid-block">
                            <a>NYU Polytechnic Institute<br/><br/>New York, NY</a>
                        </div>
                    </div>
                    <div className="grid-block hub-contents">
                    <div className="medium-6 grid-block">
                            <img className="hub-images" src="http://delawarevalley.alumclub.mit.edu/s/1314/images/gid104/editor/1-logos_mit/logo_mit_athletics_250.jpg"/>
                        </div>
                        <div className="medium-6 grid-block">
                            <a>Massachusetts Institute of Technology<br/><br/>Cambridge, MA</a>
                        </div>
                    </div>
                    <div className="grid-block hub-contents">
                    <div className="medium-6 grid-block">
                            <img className="hub-images" src="https://upload.wikimedia.org/wikipedia/en/4/4e/NYITBears.png"/>
                        </div>
                        <div className="medium-6 grid-block">
                            <a>New York Institute of Technology<br/><br/>New York, NY</a>
                        </div>
                    </div>
                    <div className="grid-block hub-contents">
                    <div className="medium-6 grid-block">
                            <img className="hub-images" src="https://www.rit.edu/diversity/sites/rit.edu.diversity/files//images/RIT-Logo.png"/>
                        </div>
                        <div className="medium-6 grid-block">
                            <a>Rochester Institute of Technology<br/><br/>Rochester, NY</a>
                        </div>
                    </div>
                    <div className="grid-block hub-contents">
                    <div className="medium-6 grid-block">
                            <img className="hub-images" src="http://www.lib.rpi.edu/Archives/gallery/symbols/red_hawk.gif"/>
                        </div>
                        <div className="medium-6 grid-block">
                            <a>Rensselaer Polytechnic Institute<br/><br/>Troy, NY</a>
                        </div>
                    </div>
                    <div className="grid-block hub-contents">
                    <div className="medium-6 grid-block">
                            <img className="hub-images" src="http://image.lasermagic.net/?width=575&height=575&productid=16580"/>
                        </div>
                        <div className="medium-6 grid-block">
                            <a>Cornell University<br/><br/>Ithaca, NY</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
