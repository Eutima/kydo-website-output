document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('imprint-modal');
    var link = document.getElementById('imprint-link');
    var closeBtn = document.getElementById('imprint-close');

    // When the user clicks on the link, open the modal
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        modal.style.display = 'block';
    });

    // When the user clicks on <span> (x), close the modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
