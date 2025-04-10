class MyNavbar extends HTMLElement {
    connectedCallback() {
        const currentPath = location.pathname.replace(/^\/[a-z]{2}\//, '').replace(/\/$/, '');
        this.innerHTML = `
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper grey lighten-5">
                <a href="/de/" class="brand-logo left">
                    <img src="/images/KYDO-D.png">
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons"
                        style="color: black;">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/de/">Home</a></li>
                    <li><a href="/de/functions.html">Funktionen</a></li>
                    <li><a href="https://api.kydo.ch/doc/" target="_blank">API</a></li>
                    <li><a href="/de/pricing.html">Preise</a></li>
                    <li><a href="/de/blog.html">Blog</a></li>
                    <li>
                        <a 
                            href="/de/demo.html"
                            class="waves-effect waves-light btn btn-white kydo-blue demo-button-nav-bar hover-active">
                            Probiere KYDO aus!
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://web.kydo.ch"
                            class="waves-effect waves-light btn btn-white kydo-blue demo-button-nav-bar">
                            Login
                        </a>
                    </li>
                    <li><a class="dropdown-trigger" href="#!" data-target="languages"><i
                                class="material-icons">g_translate</i></a></li>
                </ul>
            </div>
        </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
        <li><a href="/de/">Home</a></li>
        <li><a href="/de/functions.html">Funktionen</a></li>
        <li><a href="https://api.kydo.ch/doc/" target="_blank">API</a></li>
        <li><a href="/de/pricing.html">Preise</a></li>
        <li><a href="/de/blog.html">Blog</a></li>
        <li><a class="dropdown-trigger" href="#" data-target="languages-sidenav"><i
                    class="material-icons">g_translate</i><i class="material-icons right">arrow_drop_down</i></a></li>
        <div class="side-nav-demo-button-wrapper">
            <a 
                href="/de/demo.html"
                class="waves-effect waves-light btn btn-white kydo-blue demo-button-nav-bar hover-active ">
                Probiere KYDO aus!
            </a>
        </div>
        <div class="side-nav-demo-button-wrapper">
            <a 
                href="https://web.kydo.ch"
                class="waves-effect waves-light btn btn-white kydo-blue demo-button-nav-bar">
                Login
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
