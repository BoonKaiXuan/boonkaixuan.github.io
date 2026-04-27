const toggleButton = document.getElementById("menu-toggle");

const navBar = document.getElementById("mobile-menu");


toggleButton.addEventListener(
    "click", () => {
        navBar.classList.toggle("active");

        if (navBar.classList.contains("active")) {

            toggleButton.classList.replace('fa-bars', 'fa-chevron-up');
        }
        else {
            toggleButton.classList.replace('fa-chevron-up', 'fa-bars');
        }
    }
)