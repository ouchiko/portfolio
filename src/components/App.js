import React, { Component } from "react";

// components
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <section class="content">
                    <div class="container">

                        <section id="about" class="row">
                            <article class="col-12 col-sm-8 col-lg-9 col-xl-10">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videamus animi partes, 
                                    quarum est conspectus illustrior; Qui non moveatur et offensione turpitudinis et 
                                    comprobatione honestatis? Sit sane ista voluptas. Nec lapathi suavitatem acupenseri 
                                    Galloni Laelius anteponebat, sed suavitatem ipsam neglegebat; Claudii libidini, qui 
                                    tum erat summo ne imperio, dederetur. Sed ad illum redeo. Duo Reges: constructio 
                                    interrete. Idem adhuc;</p>
                            </article>
                            <article class="col-12 col-sm-4 col-lg-3 col-xl-2">
                                <img class="avatar" src="http://lorempixel.com/500/500/people/" alt="Avatar"/>
                            </article>
                        </section>

                        <section id="work" class="row">
                            <div class="col-12">
                                <h2>Experience</h2>
                            </div>

                            <article class="col-12 col-md-4">
                                <h3>Front-end</h3>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3 / Sass</li>
                                    <li>Javascript (ES6)</li>
                                    <li>Angular / Ionic</li>
                                    <li>jQuery</li>
                                </ul>
                            </article>

                            <article class="col-12 col-md-4">
                                <h3>Back-end</h3>
                                <ul>
                                    <li>PHP</li>
                                    <li>SQL</li>
                                    <li>REST API</li>
                                </ul>
                            </article>

                            <article class="col-12 col-md-4">
                                <h3>Other</h3>
                                <ul>
                                    <li>WordPress (themes &amp; plugins)</li>
                                    <li>Subversion (SVN) / Git</li>
                                    <li>Sketch / Photoshop</li>
                                    <li>Documentation &amp; User Guides</li>
                                    <li>JIRA / Help Desk</li>
                                </ul>
                            </article>
                                
                            <div class="col-12">
                                <h2>Recent work</h2>
                            </div>

                            <article class="col-12 col-md-6">
                                <img src="http://lorempixel.com/1000/600/abstract/" alt="Image"/>
                                <h3>Seeing Machines</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videamus animi partes, 
                                    quarum est conspectus illustrior; Qui non moveatur et offensione turpitudinis et 
                                    comprobatione honestatis? Sit sane ista voluptas. Nec lapathi suavitatem acupenseri 
                                    Galloni Laelius anteponebat, sed suavitatem ipsam neglegebat.</p>
                            </article>

                            <article class="col-12 col-md-6">
                                <img src="http://lorempixel.com/1000/600/abstract/" alt="Image"/>
                                <h3>AFLOAT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videamus animi partes, 
                                    quarum est conspectus illustrior; Qui non moveatur et offensione turpitudinis et 
                                    comprobatione honestatis? Sit sane ista voluptas. Nec lapathi suavitatem acupenseri 
                                    Galloni Laelius anteponebat, sed suavitatem ipsam neglegebat.</p>
                            </article>

                            <article class="col-12 col-md-6">
                                <img src="http://lorempixel.com/1000/600/abstract/" alt="Image"/>
                                <h3>Newington College</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videamus animi partes, 
                                    quarum est conspectus illustrior; Qui non moveatur et offensione turpitudinis et 
                                    comprobatione honestatis? Sit sane ista voluptas. Nec lapathi suavitatem acupenseri 
                                    Galloni Laelius anteponebat, sed suavitatem ipsam neglegebat.</p>
                            </article>

                            <article class="col-12 col-md-6">
                                <img src="http://lorempixel.com/1000/600/abstract/" alt="Image"/>
                                <h3>Hunter Valley Grammar School</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videamus animi partes, 
                                    quarum est conspectus illustrior; Qui non moveatur et offensione turpitudinis et 
                                    comprobatione honestatis? Sit sane ista voluptas. Nec lapathi suavitatem acupenseri 
                                    Galloni Laelius anteponebat, sed suavitatem ipsam neglegebat.</p>
                            </article>

                            <article class="col-12 col-md-6">
                                <h3>More</h3>
                                <p>The Buzz online newsletter system</p>
                                <p>Buzz docs</p>
                            </article>
                        </section>

                        <section id="contact" class="row">
                            <article class="col">
                                <h2>Send me a message</h2>

                                <form class="form" action="" method="post">
                                    <input type="text" name="name" placeholder="Name" />
                                    <input type="email" name="email" placeholder="Email" />
                                    <textarea name="message" cols="30" rows="10" placeholder="Message" ></textarea>
                                    <button type="submit" class="button">Send</button>
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