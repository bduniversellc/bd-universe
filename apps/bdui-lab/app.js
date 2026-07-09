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
components: `

    <h1>Components</h1>

    <p>

        Build and manage reusable UI components.

    </p>

`,

blueprints: `

    <h1>Blueprints</h1>

    <p>

        Explore architecture and project blueprints.

    </p>

`,

settings: `

    <h1>Settings</h1>

    <p>

        Configure BD Studio preferences.

    </p>

`,    `

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
buttons[3].onclick = () => show("components");
buttons[4].onclick = () => show("blueprints");
buttons[5].onclick = () => show("documentation");
buttons[6].onclick = () => show("settings");

/*
======================================

Start

======================================
*/

show("dashboard");