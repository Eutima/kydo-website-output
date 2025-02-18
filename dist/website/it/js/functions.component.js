class functionsComponent extends HTMLElement {
    connectedCallback() {
        const i18n = window.i18n || {};
        this.innerHTML = `
        
            <div class="title-use-cases">
                <h2><span class="text-style-1">KYDO</span><span class="text-style-2"> Funzioni</span></h2>
            </div>
        <div class="function-container">

            <div class="row content-row">
                <div class="col s12 m6">
                    <div class="function-text-content">
                        <h5><span class="text-style-1">Struttura</span> del Tenant</h5>
                        <div>
                            Ogni cliente ha il proprio tenant. I responsabili del mandato vi accedono tramite l&#39;account fiduciario.
                        </div>
                        <div class="info-circle-functions-center additional-info-white">KYDO ha un&#39;API gratuita
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
                        <h5>Definire i <span class="text-style-1">tipi di documenti</span> centrali</h5>
                        <div>
                            I tipi di documenti validi per tutti i clienti possono essere definiti centralmente e integrati con tipi specifici per cliente.
                        </div>
                        <div class="additional-info function-rotate">
                            Puoi gestire e creare autonomamente i tipi di documenti e i loro attributi
                        </div>
                        <div class="info-circle-functions-right additional-info-white">100% Swissmade
                        </div>
                    </div>
                </div>
            </div>

            <div class="row content-row">
                <div class="col s12 m6">
                    <div class="function-text-content">
                        <h5 class="text-style-1">Posta in arrivo</h5>
                        <div>
                            I clienti possono caricare e classificare direttamente i documenti – tramite la propria app mobile, trascinando e rilasciando, o inviando un&#39;email con allegato alla loro casella di posta KYDO.
                        </div>
                        <div class="additional-info function-rotate">
                            Collegati al tuo account KYDO esistente e carica facilmente documenti fisici nella tua organizzazione KYDO
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
                        <h5>Elaborazione automatica delle <span class="text-style-1">ricevute</span></h5>
                        <div>
                            Le ricevute contabili come creditori e note spese possono essere trattate automaticamente, registrate e trasferite direttamente nella contabilità finanziaria tramite un flusso di lavoro separato.
                        </div>
                        <div class="additional-info function-rotate">
                            Estrazione delle informazioni dai documenti tramite IA
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-first">
                    <div class="function-text-content">
                        <h5 class="text-style-1">Archivio</h5>
                        <div>
                            Niente più cartelle da trasportare o invio di documenti via email o posta! I clienti hanno accesso all&#39;archivio digitale in qualsiasi momento.
                        </div>
                        <div class="info-circle-functions-right additional-info-white">Archiviazione dei dati a Berna, Svizzera
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
                        <h5 class="text-style-1">Flusso di approvazione</h5>
                        <div>
                            I creditori e altre ricevute possono essere assegnati per l&#39;approvazione digitale.
                        </div>
                        <div class="additional-info function-rotate">
                            I tuoi clienti possono gestire le loro fatture e spese senza la necessità di una licenza per un software contabile.
                        </div>
                    </div>
                </div>
            </div>

            <div class="row content-row row-reverse">
                <div class="col s12 m6 mobile-last">
                    <div class="function-text-content">
                        <h5>Dashboard di gestione</h5>
                        <div>
                            Panoramica dei clienti! Tutte le informazioni importanti sui tuoi clienti sono disponibili sulla dashboard di gestione – naturalmente anche filtrate per responsabili di mandato
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-first">
                    <div class="function-text-content">
                        <div class="info-circle-functions-center additional-info-white">Modulo debitori in arrivo nel 2° trimestre 2025
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-last">
                    <div class="function-text-content">
                        <div class="additional-info">
                            I tuoi clienti hanno sistemi di cassa? La nostra azienda sorella Pinit può integrarli facilmente. <a href="https://www.pinit.ch/" target="_blank">A Pinit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="demo-section">
            <a 
              href="/it/demo.html" 
              class="waves-effect waves-light btn btn-white kydo-blue demo-button">Provateli KYDO!</a>
            <p class="additional-info">oppure parliamo davanti a una tazza di caffè – da voi o da noi</p>
            <div class="phone-number">+41 31 511 19 44</div>
        </div>
        `;
    }
}

// Define the custom element
customElements.define('functions-component', functionsComponent);
