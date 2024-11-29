class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="navbar-header">
                <!-- Mobile Toggle Menu Button -->
                <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse"
                   data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                <a class="navbar-brand" href="#">
                    <img src="/images/kydo-icon.png">
                </a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"><a href="/fr/index.html" data-nav-section="home"><span>Accueil</span></a>
                    </li>
                    <li><a href="/fr/pages/pricing.html" data-nav-section="pricing"><span>pric</span></a>
                    </li>
                    <li><a href="/fr/pages/functions.html"
                           data-nav-section="functions"><span>Funktionen</span></a></li>
                    <li><a href="/fr/pages/testimonials.html"
                           data-nav-section="testimonials"><span>Testimonials</span></a></li>
<!--                    <li class="dropdown">-->
<!--                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">-->
<!--                            <span>Use-Cases</span>-->
<!--                        </a>-->
<!--                        <ul class="dropdown-menu">-->
<!--                            <li><a href="/fr/pages/use-cases/trustee.html"><span>Trustee</span></a></li>-->
<!--                            <li><a href="/fr/pages/use-cases/kmu-owner.html">KMU-Owner</a></li>-->
<!--                            <li><a href="/fr/pages/use-cases/accounting-manager.html">Accounting Manager</a></li>-->
<!--                            <li><a href="/fr/pages/use-cases/software-manufactorer.html">CTO Software</a></li>-->
<!--                        </ul>-->
<!--                    </li>-->
                </ul>
            </div>
            <span id="languages-container">
                <a href="/de">DE</a>
                <a href="/fr">FR</a>
                <a href="/it">IT</a>
                <a href="/en">EN</a>
            </span>
        </nav>
        `;
    }
}

// Define the custom element
customElements.define('kydo-navbar', MyNavbar);
