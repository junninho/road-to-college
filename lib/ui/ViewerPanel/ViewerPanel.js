import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";
import ToolsPanel from "../ToolsPanel";
import Hub from "../Hub";
import Search from "../Search";
import ItemInfo from "../ItemInfo";
import Help from "../Help";
import FAQ from "../Help/FAQ";
import WhatsNew from "../Help/WhatsNew";
import ToolsMenu from "../ToolsMenu";

var PanelContents = { Hub, Search, ItemInfo, Help, FAQ, WhatsNew, ToolsMenu};

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
