class functionsComponent extends HTMLElement {
    connectedCallback() {
        const i18n = window.i18n || {};
        this.innerHTML = `
        
            <div class="title-use-cases">
                <h2><span class="text-style-1">KYDO</span><span class="text-style-2"> Functions</span></h2>
            </div>
        <div class="function-container">

            <div class="row content-row">
                <div class="col s12 m6">
                    <div class="function-text-content">
                        <h5><span class="text-style-1">Tenant</span> Structure</h5>
                        <div>
                            Each client has their own tenant. Mandate leaders can access client tenants through the trustee account.
                        </div>
                        <div class="info-circle-functions-center additional-info-white">KYDO has a free API
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
                        <h5>Define central <span class="text-style-1">document types</span></h5>
                        <div>
                            Document types that apply to all clients can be centrally defined and supplemented with client-specific document types.
                        </div>
                        <div class="additional-info function-rotate">
                            You can manage and create document types and their attributes yourself
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
                            Clients can directly upload and classify documents – either through their own smartphone app, by drag-and-drop, or by sending an email with an attachment to their own KYDO inbox.
                        </div>
                        <div class="additional-info function-rotate">
                            Connect with your existing KYDO account and easily upload physical documents to your KYDO organization
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
                        <h5>Automated <span class="text-style-1">Receipt Processing</span></h5>
                        <div>
                            Accounting receipts such as creditors and expense receipts can be automatically processed, allocated, and directly transferred to financial accounting in a separate workflow.
                        </div>
                        <div class="additional-info function-rotate">
                            AI-based extraction of information from documents
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-first">
                    <div class="function-text-content">
                        <h5 class="text-style-1">Archive</h5>
                        <div>
                            No more carrying folders or sending documents by email or post! Clients have access to the digital archive at any time.
                        </div>
                        <div class="info-circle-functions-right additional-info-white">Data storage in Bern, Switzerland
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
                        <h5 class="text-style-1">Approval Workflow</h5>
                        <div>
                            Creditors and other receipts can be assigned for digital approval.
                        </div>
                        <div class="additional-info function-rotate">
                            Your clients can manage their invoices and expenses without needing a license for accounting software.
                        </div>
                    </div>
                </div>
            </div>

            <div class="row content-row row-reverse">
                <div class="col s12 m6 mobile-last">
                    <div class="function-text-content">
                        <h5>Management <span class="text-style-1">Dashboard</span></h5>
                        <div>
                            Overview of clients! All key information about your clients is available on the management dashboard – naturally also filtered by mandate leaders
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-first">
                    <div class="function-text-content">
                        <div class="info-circle-functions-center additional-info-white">Debtor module coming Q2 2025
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 mobile-last">
                    <div class="function-text-content">
                        <div class="additional-info">
                            Do your clients have cash register systems? Our sister company Pinit can easily integrate them. <a href="https://www.pinit.ch/" target="_blank">To Pinit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="demo-section">
            <a class="waves-effect waves-light btn btn-white kydo-blue smooth-scroll demo-button">Book a Demo</a>
            <p class="additional-info">or let’s have a conversation over a cup of coffee – at your place or ours</p>
            <div class="phone-number">+41 31 511 19 44</div>
        </div>
        `;
    }
}

// Define the custom element
customElements.define('functions-component', functionsComponent);
