/*
====================================================
BD Universe

BDUI-NAV-001 Navbar

====================================================
*/

const toggle = document.querySelector(".bd-navbar__toggle");
const menu = document.querySelector(".bd-navbar__menu");

if (toggle && menu) {

    toggle.addEventListener("click", () => {

        menu.classList.toggle("is-open");

        const expanded =
            toggle.getAttribute("aria-expanded") === "true";

        toggle.setAttribute(
            "aria-expanded",
            !expanded
        );

    });

}