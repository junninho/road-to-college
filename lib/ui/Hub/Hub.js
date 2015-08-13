import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";
import Service from "../../services/CollegeService.js";

export default class Hub extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }
    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    componentDidMount() {
        var colleges = Service.fetchAll();
        this.setState({ items: colleges });
    }

    render() {
        return (
            <div className="hub">
                <a onClick={(ev) => this._openPanel("ToolsMenu")}>Back to Menu</a>
                <div>
                    {this.state.items.map((item) => {
                        return (
                            <div className="grid-block hub-contents">
                                <div className="medium-6 grid-block">
                                    <a href={"#/colleges/" + item.id}><img className="hub-images" src={item.logo}/></a>
                                </div>
                                <div className="medium-6 grid-block">
                                    <a href={"#/colleges/" + item.id}>{item.title}</a><br/><br/>{item.location}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}
