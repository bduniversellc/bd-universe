/*
====================================================
BD Universe

BDUI-NAV-001

====================================================
*/

const navbarToggle = document.querySelector(".bd-navbar__toggle");

const navbarMenu = document.querySelector(".bd-navbar__menu");

if (navbarToggle && navbarMenu){

    navbarToggle.addEventListener("click",()=>{

        navbarMenu.classList.toggle("is-open");

        const expanded =
            navbarToggle.getAttribute("aria-expanded")==="true";

        navbarToggle.setAttribute(
            "aria-expanded",
            !expanded
        );

    });

}