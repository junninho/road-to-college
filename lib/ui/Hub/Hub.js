import React from "react";

export default class Hub extends React.Component {
    render() {
        return (
            <div>
                <div className="books">
                    <div className="grid-block">
                        <div id="cover" className="grid-block shrink"> <img src="http://ucrtoday.ucr.edu/wp-content/uploads/2012/08/Irwin-Sherman-Book-Cover.jpg"/></div>
                        <div id="book-info" className="grid-block"><p>The Malaria Genome Projects<br/>by Irwin Sherman</p></div>
                    </div>
                    <div className="grid-block">
                        <div id="cover" className="grid-block shrink"> <img src="http://images.veerle.duoh.com/uploads/design-article-images/adaptive-web-bookcover-final-design.jpg"/></div>
                        <div id="book-info" className="grid-block"><p>Adaptive Web Design<br/>by Aaron Gustafson</p></div>
                    </div>
                    <div className="grid-block">
                        <div id="cover" className="grid-block shrink"> <img src="http://craigmod.com/images/journal/coccyx/aba-06.png"/></div>
                        <div id="book-info" className="grid-block"><p>Mobile First<br/>by Luke Wroblewski</p></div>
                    </div>
                    <div className="grid-block">
                        <div id="cover" className="grid-block shrink"> <img src="http://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg"/></div>
                        <div id="book-info" className="grid-block"><p>Enchantment<br/>by Guy Kawasaki</p></div>
                    </div>
                    <div className="grid-block">
                        <div id="cover" className="grid-block shrink"> <img src="http://speckycdn.sdm.netdna-cdn.com/wp-content/uploads/2012/05/TBCE05.jpg"/></div>
                        <div id="book-info" className="grid-block"><p>Making Short Films<br/>by Clifford Thurlow</p></div>
                    </div>
                    <div className="grid-block">
                        <div id="cover" className="grid-block shrink"> <img src="http://bookcoverarchive.com/images/books/uncommon_sense.large.jpg"/></div>
                        <div id="book-info" className="grid-block"><p>Uncommon Sense<br/>by Gary Becker</p></div>
                    </div>
                </div>
            </div>
        )
    }
}
