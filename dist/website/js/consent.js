document.addEventListener("DOMContentLoaded", function () {
    const bannerId = "tracking-banner";
    const trackingStatus = localStorage.getItem("trackingAccepted");

    // Function to load tracking scripts
    function enableTracking() {
        console.log("Tracking enabled.");
        loadGoogleTracker();
        loadLinkedInTracker();
    }

    function loadGoogleTracker() {
        let gtmScript = document.createElement("script");
        gtmScript.async = true;
        gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-16898679223";
        document.head.appendChild(gtmScript);

        gtmScript.onload = function () {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "AW-16898679223");
        };
    }

    function loadLinkedInTracker() {
        window._linkedin_partner_id = "xxxxx";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);

        let script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        document.body.appendChild(script);
    }

    // Insert the tracking banner into the page
    function insertBanner() {
        fetch("consent-banner.html")
            .then(response => response.text())
            .then(html => {
                document.body.insertAdjacentHTML("beforeend", html);
                setupBannerEvents();
            })
            .catch(error => console.error("Error loading consent banner:", error));
    }

    function setupBannerEvents() {
        const banner = document.getElementById(bannerId);
        const acceptBtn = document.getElementById("accept-btn");
        const declineBtn = document.getElementById("decline-btn");

        if (!banner) return;

        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("trackingAccepted", "true");
            banner.style.display = "none";
            enableTracking();
        });

        declineBtn.addEventListener("click", function () {
            localStorage.setItem("trackingAccepted", "false");
            banner.style.display = "none";
        });

        banner.style.display = "block";
    }

    if (!trackingStatus) {
        insertBanner();
    } else if (trackingStatus === "true") {
        enableTracking();
    }
});
