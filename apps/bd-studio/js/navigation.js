/*
======================================

BD Studio
Navigation Module

Version 0.8.5

======================================
*/

export function initializeNavigation(buttons, pages, show){

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {

            buttons.forEach(b => {

                b.classList.remove("active");

            });

            button.classList.add("active");

            show(pages[index]);

        });

    });

}