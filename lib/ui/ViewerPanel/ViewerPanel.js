import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";
import ToolsPanel from "../ToolsPanel";
import Hub from "../Hub";
import About from "../About";
import ToolsMenu from "../ToolsMenu";

var PanelContents = { Hub, About, ToolsMenu};

export default class ViewerPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { panelName: "ToolsMenu" };
    }

    componentDidMount() {
        foundationApi.subscribe("open-viewer-panel", (eventName, panelName) => {
            foundationApi.publish("viewer-panel", "open");
            this.setState({ panelName });
        });
    }

    componentWillUnmount() {
        foundationApi.unsubscribe("open-viewer-panel");
    }

    render() {
        var PanelContent = PanelContents[this.state.panelName];

        return (
            <ToolsPanel id="viewer-panel">
                <PanelContent />
            </ToolsPanel>
        );
    }
}
