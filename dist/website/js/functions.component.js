class functionsComponent extends HTMLElement {
    connectedCallback() {
        const i18n = window.i18n || {};
        this.innerHTML = `
        
            <div class="title-use-cases">
                <h2><span class="text-style-1">KYDO</span><span class="text-style-2"> Funktionen</span></h2>
            </div>
        <div class="function-container">

            <div class="row content-row">
                <div class="col s12 m6">
                    <div class="function-text-content">
                        <h5><span class="text-style-1">Tenant</span> Struktur</h5>
                        <div>
                            Jeder Kunde verfügt über einen eigenen Tenant. Die Mandatsleitenden haben über den
Treuhand-Account Zugriff auf die jeweiligen Kunden-Tenants.
                        </div>
                        <div class="info-circle-functions-center additional-info-white">KYDO hat eine kostenlose API
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="function-image">
                        <img src="/images/kydo_application/tenant-structure.png" class="responsive-img" alt="">
                    </div>
                </div>
            </div>

            <div class="row content-row row-reverse">
                <div class="col s12 m6 mobile-last">
                    <div class="function-image">
                        <img src="/images/kydo_application/doctypes.png" class="responsive-img" alt="">
                    </div>
                </div>
                <div class="col s12 m6 mobile-first">
                    <div class="function-text-content">
                        <h5>Zentrale <span class="text-style-1">Dokumenttypen</span> definieren</h5>
                        <div>
                            Dokumenttypen, die für alle Kunden gelten, können zentral festgelegt und mit
kundenspezifischen Dokumenttypen ergänzt werden.
                        </div>
                        <div class="additional-info function-rotate">
                            Dokumenttypen und deren Attribute kannst du selber verwalten und erstellen
                        </div>
                        <div class="info-circle-functions-right additional-info-white">100% Swissmade
                        </div>
                    </div>
                </div>
            </div>

            <div class="row content-row">
                <div class="col s12 m6">
                    <div class="function-text-content">
                        <h5 class="text-style-1">Inbox</h5>
                        <div>
                            Kunden können Dokumente direkt hochladen und klassifizieren – entweder über die eigene
Smartphone-App, per Drag-and-Drop oder indem sie eine E-Mail mit Anhang an ein eigenes
KYDO-Postfach senden.
                        </div>
                        <div class="additional-info function-rotate">
                            Verbinden Sie sich mit Ihrem bestehenden KYDO Konto und laden Sie einfach physische
Dokumente zu Ihrer KYDO Organisation hoch
                        </div>
                        <div class="store-badges">
                            <a href="https://play.google.com/store/apps/details?id=ch.kydo.kydoscan" target="_blank"
                               rel="noopener">
                                <img src="/images/kydo_application/playstore.png" alt="Google Play Store">
                            </a>
                            <a href="https://apps.apple.com/ch/app/kydo-scan/id6475171304" target="_blank"
                               rel="noopener">
                                <img src="/images/kydo_application/appstore.png" alt="Apple App Store">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="function-image">
                        <img src="/images/kydo_application/inbox.png" class="responsive-img" alt="">
                    </div>
                </div>
            </div>

            <div class="row content-row row-reverse">
                <div class="col s12 m6 mobile-last">
                    <div class="function-text-content">
                        <h5>Automatisierte <span class="text-style-1">Belegverarbeitung</span></h5>
                        <div>
                            Buchhaltungsbelege wie Kreditoren und Spesenbelege können in einem separaten Workflow
automatisiert verarbeitet, kontiert und direkt in die Finanzbuchhaltung überführt werden.
                        </div>
                        <div class="additional-info function-rotate">
                            KI-Basiertes auslesen von Informationen im Dokument
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-first">
                    <div class="function-text-content">
                        <h5 class="text-style-1">Archiv</h5>
                        <div>
                            Das Herumtragen von Ordnern und das Versenden von Dokumenten per E-Mail oder Post gehören
der Vergangenheit an! Kunden haben jederzeit Zugriff auf das digitale Archiv.
                        </div>
                        <div class="info-circle-functions-right additional-info-white">Datenspeicher in Bern - Schweiz
                        </div>
                    </div>
                </div>
            </div>

            <div class="row content-row row-reverse">
                <div class="col s12 m6 mobile-last">
                    <div class="function-image">
                        <img src="/images/kydo_application/vising.png" class="responsive-img" alt="">
                    </div>
                </div>
                <div class="col s12 m6 mobile-first">
                    <div class="function-text-content">
                        <h5 class="text-style-1">Visierungsworkflow</h5>
                        <div>
                            Kreditoren und andere Belege können zum digitalen Visieren zugeteilt werden.
                        </div>
                        <div class="additional-info function-rotate">
                            Deine Kunden können ihre Rechnungen und Ausgaben verwalten, ohne eine Lizenz für die
Buchhaltungssoftware zu benötigen.
                        </div>
                    </div>
                </div>
            </div>

            <div class="row content-row row-reverse">
                <div class="col s12 m6 mobile-last">
                    <div class="function-text-content">
                        <h5>Management <span class="text-style-1">Dashboard</span></h5>
                        <div>
                            Die Kunden im Überblick! Alle wichtigen Infos deiner Kunden sind auf dem Management
Dashboard verfügbar – Natürlich auch gefiltert nach Mandatsleiter:innen
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-first">
                    <div class="function-text-content">
                        <div class="info-circle-functions-center additional-info-white">Debitoren Modul kommt Q2 2025
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-last">
                    <div class="function-text-content">
                        <div class="additional-info">
                            Haben deine Kunden Kassensysteme?
Unser Schwesterunternehmen Pinit kann dies problemlos anbinden. <a
href="https://www.pinit.ch/" target="_blank">Zu Pinit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="demo-section">
            <a 
              href="/de/demo.html" 
              class="waves-effect waves-light btn btn-white kydo-blue demo-button">Probiere KYDO aus!</a>
            <p class="additional-info">oder lass uns bei einer Tasse Kaffee ins Gespräch kommen - bei euch oder bei uns</p>
            <div class="phone-number">+41 31 511 19 44</div>
        </div>
        `;
    }
}

// Define the custom element
customElements.define('functions-component', functionsComponent);
