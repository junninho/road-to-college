import React from "react";
import foundationApi from "react-foundation-apps/lib/utils/foundation-api";

export default class ItemInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: {} };
    }

    componentDidMount() {
        Actions.dispatch("getItemDetails", { itemPresenter: this });
    }

    _openPanel(panelName) {
        foundationApi.publish("open-viewer-panel", panelName);
    }

    populate(item) {
        this.setState({ item });
    }

    render() {
        return (
            <div className="item-info">
                <h5>Item Info</h5>
                <a onClick={(ev) => this._openPanel("Hub")}>Back to Hub</a>
                <div className="book-info vertical grid-block">
                    <div className="grid-block">
                        <h5>{this.state.item.title}</h5>
                    </div>
                    <div className="grid-block">
                        <h6>{this.state.item.subtitle}</h6>
                    </div>
                    <div className="grid-block">
                        <h7>{this.state.item.author}</h7>
                    </div>
                </div>
                <div className="grid-block">
                    <div id="sidebar" className="medium-7 grid-block">
                        <img src={this.state.item.coverSrc} />
                    </div>
                    <div id="main" className="medium-5 grid-block"></div>
                </div>
                <div className="vertical grid-block">
                    <div className="details grid-block">
                        <p>Edition: {this.state.item.editionDescription}</p>
                    </div>
                    <div className="details grid-block">
                        <p>Pub. Date: {this.state.item.publishedDate}</p>
                    </div>
                    <div className="details grid-block">
                        <p>Pub. In: {this.state.item.publishedIn}</p>
                    </div>
                    <div className="details grid-block">
                        <p>Publisher: {this.state.item.publisher}</p>
                    </div>
                    <div className="details grid-block">
                        <p>ISBN-13: {this.state.item.isbn13}</p>
                    </div>
                    <div className="details grid-block">
                        <p>ISBN-10: {this.state.item.isbn10}</p>
                    </div>
                    <div className="details grid-block">
                        <p>e-ISBN-13: {this.state.item.eIsbn13}</p>
                    </div>
                    <div className="details grid-block">
                        <p>e-ISBN-10: {this.state.item.eIsbn10}</p>
                    </div>
                    <div className="details grid-block">
                        <p>Pages: {this.state.item.printPagesCount}</p>
                    </div>
                    <div className="details description grid-block">
                        <p>Description: <br/> {this.state.item.synopsis}</p>
                    </div>
                </div>
            </div>


        );
    }
}
