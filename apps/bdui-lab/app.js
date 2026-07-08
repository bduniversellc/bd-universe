/*
======================================

BD Studio

Application

======================================
*/

console.clear();

console.log("BD Studio Alpha");

document
    .getElementById("kernel-status")
    .textContent = "Kernel: Ready";

/*
======================================

Views

======================================
*/

const views = {

    dashboard: `

        <h1>Dashboard</h1>

        <p>

            Welcome to BD Studio.

        </p>

    `,

    explorer: `

        <h1>Explorer</h1>

        <p>

            Browse the BD Universe repository.

        </p>

    `,

    packages: `

        <h1>Packages</h1>

        <p>

            Browse reusable packages.

        </p>

    `,

    documentation: `

        <h1>Documentation</h1>

        <p>

            Read project documentation.

        </p>

    `

};

/*
======================================

Renderer

======================================
*/

const content = document.getElementById("content");

function show(view){

    content.innerHTML = views[view];

}

/*
======================================

Navigation

======================================
*/

const buttons = document.querySelectorAll(".sidebar button");

buttons[0].onclick = () => show("dashboard");

buttons[1].onclick = () => show("explorer");

buttons[2].onclick = () => show("packages");

buttons[5].onclick = () => show("documentation");

/*
======================================

Start

======================================
*/

show("dashboard");