class MyNavbar extends HTMLElement {
    connectedCallback() {
        const currentPath = location.pathname.replace(/^\/[a-z]{2}\//, '').replace(/\/$/, '');
        this.innerHTML = `
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper grey lighten-5">
                <a href="/fr/" class="brand-logo left">
                    <img src="/images/KYDO-D.png">
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons"
                        style="color: black;">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/fr/">Home</a></li>
                    <li><a href="/fr/functions.html">Fonctionnalités</a></li>
                    <li><a href="https://api.kydo.ch/doc/" target="_blank">API</a></li>
                    <li><a href="/fr/pricing.html">Tarifs</a></li>
                    <li>
                        <a 
                            href="/fr/demo.html"
                            class="waves-effect waves-light btn btn-white kydo-blue demo-button-nav-bar hover-active">
                            Essayez KYDO!
                        </a>
                    </li>
                    <li><a class="dropdown-trigger" href="#!" data-target="languages"><i
                                class="material-icons">g_translate</i></a></li>
                </ul>
            </div>
        </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
        <li><a href="/fr/">Home</a></li>
        <li><a href="/fr/functions.html">Fonctionnalités</a></li>
        <li><a href="https://api.kydo.ch/doc/" target="_blank">API</a></li>
        <li><a href="/fr/pricing.html">Tarifs</a></li>
        <li><a class="dropdown-trigger" data-target="languages-sidenav"><i
                    class="material-icons">g_translate</i><i class="material-icons right">arrow_drop_down</i></a></li>
        <div class="side-nav-demo-button-wrapper">
            <a 
                href="/fr/demo.html"
                class="waves-effect waves-light btn btn-white kydo-blue demo-button-nav-bar hover-active ">
                Essayez KYDO!
            </a>
        </div>
    </ul>
    <ul id="languages" class="dropdown-content">
        <li><a href="/de/${currentPath}">DE</a></li>
        <li><a href="/en/${currentPath}">EN</a></li>
        <li><a href="/fr/${currentPath}">FR</a></li>
        <li><a href="/it/${currentPath}">IT</a></li>
    </ul>
    <ul id="languages-sidenav" class="dropdown-content">
        <li><a href="/de/${currentPath}">DE</a></li>
        <li><a href="/en/${currentPath}">EN</a></li>
        <li><a href="/fr/${currentPath}">FR</a></li>
        <li><a href="/it/${currentPath}">IT</a></li>
    </ul>
        `;
    }
}

// Define the custom element
customElements.define('kydo-navbar', MyNavbar);
