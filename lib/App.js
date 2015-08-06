import React from "react";
import Panel from "react-foundation-apps/lib/panel/index.jsx";
import ActionSheet from "react-foundation-apps/lib/action-sheet/index.jsx";
import Trigger from "react-foundation-apps/lib/trigger/index.jsx";

export default class App extends React.Component {
    render() {
        return (
            <div className="Application">
                <div className= "panels">
                    <Panel id="canvas-hub" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons pin-button">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">HUB</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                        <div className="align-justify grid-block hub-action">
                            <div className="small-4 grid-container hub-add"><p>Add to Label</p></div>
                            <div className="small-4 grid-container hub-delete"><p>Delete</p></div>
                        </div>
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
                    </Panel>

                    {/*Item Info Fly-Out*/}
                    <Panel id="canvas-item-info" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">ITEM INFO</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                    </Panel>

                    {/*Search Fly-Out*/}
                    <Panel id="canvas-search" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">SEARCH</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                    </Panel>

                    {/* Sorter Fly-out*/}
                    <Panel id="canvas-sorter" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">SORTER</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                    </Panel>

                    {/* History Fly-out*/}
                    <Panel id="canvas-history" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">HISTORY</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                    </Panel>

                    {/* Contents Fly-out*/}
                    <Panel id="canvas-contents" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">CONTENTS</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                    </Panel>

                    {/* Settings Fly-out*/}
                    <Panel id="canvas-settings" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">SETTINGS</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                    </Panel>

                    {/* Help Fly-out*/}
                    <Panel id="canvas-help" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">HELP</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                        <div className="vertical grid-block help">
                            <div className="grid-block"><a zf-open="canvas-whats-new" zf-hard-toggle="separate-actionsheet">Whats New</a></div>
                            <div className="grid-block"><a zf-open="canvas-update" zf-hard-toggle="separate-actionsheet">Check for Update</a></div>
                            <div className="grid-block"><p></p></div>
                            <div className="grid-block"><a zf-open="canvas-faq" zf-hard-toggle="separate-actionsheet">FAQ</a></div>
                            <div className="grid-block"><a href="https://customercare.yuzu.com/hc/en-us" target="_blank">Contact Yuzu</a></div>
                            <div className="grid-block"><a href="https://customercare.yuzu.com/hc/en-us/requests/new?community_id=public" target="_blank">Submit a Help Request</a></div>
                        </div>
                    </Panel>

                    {/* What's New Fly-out*/}
                    <Panel id="canvas-whats-new" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title" >Whats New</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                        <div className="vertical grid-block whats-new">
                            <div className="grid-block"><a zf-open="canvas-help" zf-hard-toggle="separate-actionsheet">Back to Help</a></div>
                            <div className="grid-block"><p className="new"><b>1. Read on the go</b><br/>Access digital content online or download it to an iPad or Windows 8.1 device.*</p></div>
                            <div className="grid-block"><p className="new"><b>2. Travel lighter</b><br/>Replace many textbooks with an easy-to-use app that holds them all in one place.</p></div>
                            <div className="grid-block"><p className="new"><b>3. Stay organized</b><br/>Organize reading by term and course. Quickly find what you need, when you need it.</p></div>
                            <div className="grid-block"><p className="new"><b>4. Learn easier</b><br/>Highlight, flag important content, and add notes. Yuzu adapts to your learning style.</p></div>
                            <div className="grid-block"><p className="new"><b>5. Dig deeper</b><br/>Access a wide range of engaging course materials including rich, interactive content.</p></div>
                        </div>
                    </Panel>

                    {/* Update Fly-out*/}
                    <Panel id="canvas-update" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title" >Check for Updates</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                        <div className="vertical grid-block update">
                            <div className="grid-block"><a zf-open="canvas-help" zf-hard-toggle="separate-actionsheet">Back to Help</a></div>
                            <div className="grid-block"><p>1.</p></div>
                            <div className="grid-block"><p>2.</p></div>
                            <div className="grid-block"><p>3.</p></div>
                            <div className="grid-block"><p>4.</p></div>
                        </div>
                    </Panel>

                    {/* FAQS Fly-out*/}
                    <Panel id="canvas-faq" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title" >FAQ</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                        <div className="vertical grid-block faq">
                            <div className="grid-block"><a zf-open="canvas-help" zf-hard-toggle="separate-actionsheet">Back to Help</a></div>
                            <div className="grid-block"><h3 id="faq-heading">What is Yuzu?<br/></h3></div>
                            <div className="grid-block">
                                <p id="faq-text">
                                    Yuzu is a digital education platform from Barnes & Noble that br/eaks down the barriers between students and knowledge by enhancing the everyday learning experience.<br/> For students, Yuzu combines a next-generation reading and note-taking experience in a simple app, with access to a catalog of rich and immersive content.<br/>For educators, Yuzu makes it easier than ever to engage students with inspiring course materials.<br/> For everyone, Yuzu makes learning more friendly, organized, and enjoyable.<br/> Access Yuzu on your iPad or Windows 8 device, or online with your computer.*
                                </p>
                            </div>
                        </div>
                    </Panel>

                    {/* Shop Fly-out*/}
                    <Panel id="canvas-shop" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">SHOP</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                    </Panel>

                    {/* Customer Care Fly-out*/}
                    <Panel id="canvas-customer-care" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">CUSTOMER CARE</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                    </Panel>

                    {/* Deauthorize Fly-out*/}
                    <Panel id="canvas-deauthorize" position="right">
                        <div className="grid-block">
                            <div className="grid-content small-3">
                                <a className="canvas-buttons">Pin it</a>
                            </div>
                            <div className="grid-content medium-6">
                                <a className="canvas-title">DEAUTHORIZE</a>
                            </div>
                            <div className="grid-content small-3">
                                <a className="canvas-buttons exit-button" zf-close="">X</a>
                            </div>
                        </div>
                    </Panel>
                </div>

                {/* Title Bar*/}
                <div className="title-bar top-app-bar">
                    <div className="center title">Center</div>
                    {/* Reveals Action Sheet*/}
                    <div className="right">
                        <ActionSheet id="yz-as" className="settings-sheet">
                            <ActionSheet.Content>
                                <Trigger close="yz-as">
                                    <section>
                                        <ul>
                                            <li>
                                                <a onClick={(ev) => this._openPanel("Hub")}>Hub</a>
                                            </li>
                                        </ul>
                                        <hr />
                                        <ul>
                                            <li>
                                                <a onClick={(ev) => this._openPanel("ItemInfo")}>Item Info</a>
                                            </li>
                                            <li>
                                                <a onClick={(ev) => this._openPanel("Search")}>Search</a>
                                            </li>
                                            <li>
                                                <a onClick={(ev) => this._openPanel("Annotations")}>Annotations</a>
                                            </li>
                                            <li><a href="#">History</a></li>
                                            <li>
                                                <a onClick={(ev) => this._openPanel("TableOfContents")}>Contents</a>
                                            </li>
                                        </ul>
                                        <hr />
                                        <ul>
                                            <li><a href="#">Settings</a></li>
                                            <li>
                                                <a onClick={(ev) => this._openPanel("Help")}>Help</a>
                                            </li>
                                        </ul>
                                        <hr />
                                        <ul>
                                            <li><a href="#">Shop</a></li>
                                            <li><a href="#">Customer Care</a></li>
                                        </ul>
                                        <hr />
                                        <ul>
                                            <li><a href="#">Deauthorize</a></li>
                                        </ul>
                                    </section>
                                </Trigger>
                            </ActionSheet.Content>
                        </ActionSheet>
                    </div>
                </div>

                {/* Page body content*/}
                <div className="grid-frame">
                    <div className="vertical grid-block">
                        <div className="grid-content content">
                            <p>
                                Marion Smart was thinking about Carla Zeus again. Carla was a modest queen with tall fingers and spiky abs.
                                Marion walked over to the window and reflected on her deserted surroundings. She had always loved deserted Glasgow with its obnoxious, obedient oceans. It was a place that encouraged her tendency to feel happy.
                                Then she saw something in the distance, or rather someone. It was the a modest figure of Carla Zeus.
                                Marion gulped. She glanced at her own reflection. She was an understanding, popular, cocoa drinker with br/unette fingers and fragile abs. Her friends saw her as a powerful, powerless painter. Once, she had even made a cup of tea for a damaged kitten.
                                But not even an understanding person who had once made a cup of tea for a damaged kitten, was prepared for what Carla had in store today.
                                The sleet rained like gyrating snakes, making Marion confident. Marion grabbed a peculiar book that had been strewn nearby; she massaged it with her fingers.
                                As Marion stepped outside and Carla came closer, she could see the outrageous glint in her eye.
                                "I am here because I want a pencil," Carla bellowed, in an arrogant tone. She slammed her fist against Marion's chest, with the force of 4456 ostriches. "I frigging love you, Marion Smart."
                                Marion looked back, even more confident and still fingering the peculiar book. "Carla, I shrunk the kids," she replied.
                                They looked at each other with happy feelings, like two grubby, grisly guppies jogging at a very stupid Christening, which had piano music playing in the background and two admirable uncles cooking to the beat.
                                Marion studied Carla's tall fingers and spiky abs. Eventually, she took a deep br/eath. "I'm sorry, but I can't give you a pencil," she explained, in pitying tones.
                                Carla looked lonely, her body raw like a nervous, nosy newspaper.
                                Marion could actually hear Carlas body shatter into 5931 pieces. Then the modest queen hurried away into the distance.
                                Not even a mug of cocoa would calm Marions nerves tonight.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar*/}
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
