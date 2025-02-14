class MyNavbar extends HTMLElement {
    connectedCallback() {
        const currentPath = location.pathname.replace(/^\/[a-z]{2}\//, '');
        this.innerHTML = `
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper grey lighten-5">
                <a href="/it/" class="brand-logo left">
                    <img src="/images/KYDO-D.png">
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons"
                        style="color: black;">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/it/">Home</a></li>
                    <li><a href="/it/functions.html">Funzioni</a></li>
                    <li><a href="/it/pricing.html">Prezzi</a></li>
                    <li><a href="/it/demo.html">Demo</a></li>
                    <li><a class="dropdown-trigger" href="#!" data-target="languages"><i
                                class="material-icons">g_translate</i></a></li>
                </ul>
            </div>
        </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
        <li><a href="/it/">Home</a></li>
        <li><a href="/it/functions.html">Funzioni</a></li>
        <li><a href="/it/pricing.html">Prezzi</a></li>
        <li><a href="/it/demo.html">Demo</a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="languages-sidenav"><i
                    class="material-icons">g_translate</i><i class="material-icons right">arrow_drop_down</i></a></li>
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
