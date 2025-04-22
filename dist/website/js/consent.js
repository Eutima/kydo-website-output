function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + "; path=/; domain=.kydo.ch" + expires;
}

function getCookie(name) {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function () {
    const bannerId = "tracking-banner";
    const trackingStatus = getCookie("trackingAccepted");

    function enableTracking() {
        loadGoogleTracker();
        loadLinkedInTracker();
        loadTeadsPixel();
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
        window._linkedin_partner_id = "8216201";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);

        let script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        document.body.appendChild(script);
    }

    function loadTeadsPixel() {
        let teadsScript = document.createElement("script");
        teadsScript.type = "text/javascript";
        teadsScript.src = "https://p.teads.tv/teads-fellow.js";
        teadsScript.async = true;
        document.head.appendChild(teadsScript);

        let inlineScript = document.createElement("script");
        inlineScript.innerHTML = `
        window.teads_e = window.teads_e || [];
        window.teads_buyer_pixel_id = 13794;
    `;
        document.head.appendChild(inlineScript);
    }

    function insertBanner() {
        fetch("/consent-banner/consent-banner.html")
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
            setCookie("trackingAccepted", "true", 365);
            banner.style.display = "none";
            enableTracking();
        });

        declineBtn.addEventListener("click", function () {
            setCookie("trackingAccepted", "false", 365);
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
