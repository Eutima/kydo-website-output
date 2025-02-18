document.addEventListener('DOMContentLoaded', function () {
    var sidenavs = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenavs, {});

    const dropdownElements = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdownElements, {coverTrigger: false});

    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbar = document.querySelector('.navbar-fixed'); // Adjust selector to match your navbar

            if (targetElement) {
                let navbarHeight = navbar ? navbar.offsetHeight : 0; // Get navbar height if exists
                console.log(navbarHeight);

                // Smooth scrolling with navbar height adjustment
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // CAROUSEL
    var carouselElem = document.querySelectorAll('.carousel');
    if (carouselElem?.length) {
        var options = {
            indicators: false, // Show navigation indicators
            duration: 100, // Animation duration in milliseconds
            numVisible: 3,
            padding: 200
        };
        var carousel = M.Carousel.init(carouselElem, options);
        setInterval(() => {
            var instance = M.Carousel.getInstance(carouselElem[0]); // Get the first carousel instance
            instance.next(); // Move to the next slide
        }, 3000);

        carouselElem.forEach(carousel => {
            carousel.style.pointerEvents = 'none'; // Disables all pointer interactions
        });
    }

    const PRICES = {
        fullUser: 10,
        uploadUser: 3,
        readUser: 0,
        storagePer5GB: 2.50,
        cvModule: 25
    };

    // Get all input elements
    const inputs = document.querySelectorAll('input');

    // Add event listeners to all inputs
    inputs.forEach(input => {
        input.addEventListener('change', calculateTotal);
        input.addEventListener('input', calculateTotal);
    });

    function calculateTotal() {
        const fullUsers = Number(document.getElementById('fullUsers')?.value) || 0;
        const uploadUsers = Number(document.getElementById('uploadUsers')?.value) || 0;
        const readUsers = Number(document.getElementById('readUsers')?.value) || 0;
        const storage = Number(document.getElementById('storage')?.value) || 0;
        const cvModule = !!document.getElementById('cvModule')?.checked ? PRICES.cvModule : 0;

        let storageCost = 0;
        if (fullUsers === 0) {
            storageCost = Math.ceil(storage / 5) * PRICES.storagePer5GB; // Charge per 5GB package when no full users
        } else {
            const chargeableStorage = Math.max(storage - 5, 0); // First 5GB free
            storageCost = Math.ceil(chargeableStorage / 5) * PRICES.storagePer5GB;
        }

        const total =
            (fullUsers * PRICES.fullUser) +
            (uploadUsers * PRICES.uploadUser) +
            (readUsers * PRICES.readUser) +
            storageCost +
            cvModule;
        if (!!document.getElementById('totalCost')) {
            document.getElementById('totalCost').textContent = `CHF ${total.toFixed(2)}`;
        }
    }

    calculateTotal();
});