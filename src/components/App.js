import React, { Component } from "react";
import styles from '../scss/_variables.scss'

// components
import Header from './Header.js';
import { Avatar } from './Typography.js';
import Website from './Website.js';
import Footer from './Footer.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <section className="content">
                    <div className="container">

                        <section id="about" className="row">
                            <article className="col-12 col-sm-8 col-lg-9 col-xl-10">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videamus animi partes, 
                                    quarum est conspectus illustrior; Qui non moveatur et offensione turpitudinis et 
                                    comprobatione honestatis? Sit sane ista voluptas. Nec lapathi suavitatem acupenseri 
                                    Galloni Laelius anteponebat, sed suavitatem ipsam neglegebat; Claudii libidini, qui 
                                    tum erat summo ne imperio, dederetur. Sed ad illum redeo. Duo Reges: constructio 
                                    interrete. Idem adhuc;</p>
                            </article>
                            <article className="col-12 col-sm-4 col-lg-3 col-xl-2">
                                <Avatar yellow src="assets/avatar.png" />
                            </article>
                        </section>

                        <section id="work" className="row">
                            <div className="col-12">
                                <h2>Experience</h2>
                            </div>

                            <article className="col-12 col-md-4">
                                <h3>Front-end</h3>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3 / Sass</li>
                                    <li>Javascript (ES6)</li>
                                    <li>Angular / Ionic</li>
                                    <li>jQuery</li>
                                </ul>
                            </article>

                            <article className="col-12 col-md-4">
                                <h3>Back-end</h3>
                                <ul>
                                    <li>PHP</li>
                                    <li>SQL</li>
                                    <li>REST API</li>
                                </ul>
                            </article>

                            <article className="col-12 col-md-4">
                                <h3>Other</h3>
                                <ul>
                                    <li>WordPress (themes &amp; plugins)</li>
                                    <li>Subversion (SVN) / Git</li>
                                    <li>Sketch / Photoshop</li>
                                    <li>Documentation &amp; User Guides</li>
                                    <li>JIRA / Help Desk</li>
                                </ul>
                            </article>
                                
                            <div className="col-12">
                                <h2>Recent work</h2>
                            </div>

                            <Website classes="col-12 col-md-6" 
                                title="Seeing Machines" 
                                caption="Caption here"
                                src="assets/seeingmachines.jpg"
                                tags={['HTML', 'Sass', 'JS', 'AJAX', 'PHP', 'Responsive', 'WordPress']} />

                            <Website classes="col-12 col-md-6" 
                                title="AFLOAT" 
                                caption="Caption here"
                                src="assets/afloat.jpg"
                                tags={['HTML', 'Sass', 'JS', 'PHP', 'Responsive', 'WordPress']} />

                            <Website classes="col-12 col-md-6" 
                                title="Newington College" 
                                caption="Caption here"
                                src="assets/newington.jpg"
                                tags={['HTML', 'CSS', 'JS', 'PHP', 'Responsive', 'WordPress']} />

                            <Website classes="col-12 col-md-6" 
                                title="Hunter Valley Grammar School" 
                                caption="Caption here"
                                src="assets/hvgs.jpg"
                                tags={['HTML', 'Sass', 'JS', 'PHP', 'Responsive', 'WordPress']} />

                            <article className="col-12 col-md-6">
                                <h3>More</h3>
                                <p>The Buzz online newsletter system</p>
                                <p>Buzz docs</p>
                            </article>
                        </section>

                        <section id="contact" className="row">
                            <article className="col-12 col-md-8 col-lg-6">
                                <h2>Send me a message</h2>

                                <form className="form" action="" method="post">
                                    <label for="name">Name <span class="required">*</span></label>
                                    <input type="text" name="name" required />
                                    <label for="email">Email <span class="required">*</span></label>
                                    <input type="email" name="email" required />
                                    <label for="message">Message</label>
                                    <textarea name="message" rows="10"></textarea>
                                    <button type="submit" className="button">
                                        <span>Send</span>
                                    </button>
                                </form>

                                <p>Or email me at <a href="mailto:ben@benclark.dev">ben@benclark.dev</a></p>
                            </article>
                        </section>

                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default App;