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

                        <div id="about" class="row">
                            <div class="col">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videamus animi partes, 
                                    quarum est conspectus illustrior; Qui non moveatur et offensione turpitudinis et 
                                    comprobatione honestatis? Sit sane ista voluptas. Nec lapathi suavitatem acupenseri 
                                    Galloni Laelius anteponebat, sed suavitatem ipsam neglegebat; Claudii libidini, qui 
                                    tum erat summo ne imperio, dederetur. Sed ad illum redeo. Duo Reges: constructio 
                                    interrete. Idem adhuc;</p>
                            </div>
                        </div>

                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default App;