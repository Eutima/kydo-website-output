class functionsComponent extends HTMLElement {
    connectedCallback() {
        const i18n = window.i18n || {};
        this.innerHTML = `
        
            <div class="title-use-cases">
                <h2><span class="text-style-1">KYDO</span><span class="text-style-2"> Fonctions</span></h2>
            </div>
        <div class="function-container">

            <div class="row content-row">
                <div class="col s12 m6">
                    <div class="function-text-content">
                        <h5><span class="text-style-1">Structure</span> divisée par Tenant</h5>
                        <div>
                            Chaque client dispose de son propre tenant. Les responsables de mandat y accèdent via le compte fiduciaire.
                        </div>
                        <div class="info-circle-functions-center additional-info-white">KYDO dispose d&#39;une API gratuite
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
                        <h5>Définir les <span class="text-style-1">types de documents</span> centraux</h5>
                        <div>
                            Les types de documents valables pour tous les clients peuvent être définis de manière centrale et complétés par des types spécifiques à chaque client.
                        </div>
                        <div class="additional-info function-rotate">
                            Vous pouvez gérer et créer vous-même les types de documents et leurs attributs
                        </div>
                        <div class="info-circle-functions-right additional-info-white">100% Swissmade
                        </div>
                    </div>
                </div>
            </div>

            <div class="row content-row">
                <div class="col s12 m6">
                    <div class="function-text-content">
                        <h5 class="text-style-1">Boîte de réception</h5>
                        <div>
                            Les clients peuvent télécharger et classer directement des documents – soit via leur propre application mobile, par glisser-déposer, ou en envoyant un e-mail avec une pièce jointe à leur propre boîte de réception KYDO.
                        </div>
                        <div class="additional-info function-rotate">
                            Connectez-vous à votre compte KYDO existant et téléchargez facilement des documents physiques dans votre organisation KYDO
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
                        <h5>Traitement automatisé des <span class="text-style-1">justificatifs</span></h5>
                        <div>
                            Les justificatifs comptables tels que les créanciers et les notes de frais peuvent être traités automatiquement, imputés et directement transférés dans la comptabilité financière via un flux de travail séparé.
                        </div>
                        <div class="additional-info function-rotate">
                            Extraction des informations des documents basée sur l&#39;IA
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-first">
                    <div class="function-text-content">
                        <h5 class="text-style-1">Archive</h5>
                        <div>
                            Finie l&#39;époque des classeurs et de l&#39;envoi de documents par e-mail ou par courrier ! Les clients ont un accès permanent à l&#39;archive numérique.
                        </div>
                        <div class="info-circle-functions-right additional-info-white">Stockage des données à Berne, Suisse
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
                        <h5 class="text-style-1">Workflow de validation</h5>
                        <div>
                            Les créanciers et autres justificatifs peuvent être affectés à une validation numérique.
                        </div>
                        <div class="additional-info function-rotate">
                            Vos clients peuvent gérer leurs factures et leurs dépenses sans avoir besoin d&#39;une licence pour un logiciel comptable.
                        </div>
                    </div>
                </div>
            </div>

            <div class="row content-row row-reverse">
                <div class="col s12 m6 mobile-last">
                    <div class="function-text-content">
                        <h5>Tableau de bord de gestion</h5>
                        <div>
                            Vue d&#39;ensemble des clients ! Toutes les informations clés sur vos clients sont disponibles sur le tableau de bord de gestion – bien sûr aussi filtrées par responsables de mandat
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-first">
                    <div class="function-text-content">
                        <div class="info-circle-functions-center additional-info-white">Module débiteurs disponible au 2e trimestre 2025
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-last">
                    <div class="function-text-content">
                        <div class="additional-info">
                            Vos clients ont des systèmes de caisse ? Notre entreprise sœur Pinit peut les intégrer facilement. <a href="https://www.pinit.ch/" target="_blank">Vers Pinit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="demo-section">
            <a 
              href="/fr/demo.html" 
              class="waves-effect waves-light btn btn-white kydo-blue demo-button">Essayez KYDO!</a>
            <p class="additional-info">ou discutons autour d&#39;une tasse de café – chez vous ou chez nous</p>
            <div class="phone-number">+41 31 511 19 44</div>
        </div>
        `;
    }
}

// Define the custom element
customElements.define('functions-component', functionsComponent);
