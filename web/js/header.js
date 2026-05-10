const toggleButton = document.getElementById("menu-toggle");

const navBar = document.getElementById("mobile-menu");

const subMenu = document.getElementById("submenu");

const dropDown = document.getElementById("submenu-toggle");


toggleButton.addEventListener(
    "click", () => {
        navBar.classList.toggle("active");

        if (navBar.classList.contains("active")) {

            toggleButton.classList.replace('fa-bars', 'fa-chevron-down');

            gsap.to(toggleButton, {
                rotate: 180,
                duration: 0.3,
            });

        }
        else {
            toggleButton.classList.replace('fa-chevron-down', 'fa-bars');

            gsap.to(toggleButton, {
                rotate: -180,
                duration: 0.3,
            });
        }
    });


dropDown.addEventListener(
    "click", (e) => {

        e.stopPropagation();

        e.preventDefault();

        subMenu.classList.toggle("active");

        if (subMenu.classList.contains("active")) {

            dropDown.classList.replace('fa-chevron-down', 'fa-chevron-up');
        }

        else {

            dropDown.classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
    });
