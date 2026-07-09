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

<h1>Repository Dashboard</h1>

<div id="dashboard"></div>

`,

 explorer: `
   const repository = [

    {

        name: "apps",

        children: [

            "bdui-lab",

            "bduniverse"

        ]

    },

    {

        name: "core",

        children: []

    },

    {

        name: "packages",

        children: []

    },

    {

        name: "blueprints",

        children: []

    },

    {

        name: "docs",

        children: []

    },

    {

        name: "knowledge",

        children: []

    },

    {

        name: "tests",

        children: []

    },

    {

        name: "tools",

        children: []

    }

];


    packages: `
        <h1>Packages</h1>

        <p>
            Browse reusable packages.
        </p>
    `,

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

    documentation: `
        <h1>Documentation</h1>

        <p>
            Read project documentation.
        </p>
    `,

    settings: `
        <h1>Settings</h1>

        <p>
            Configure BD Studio preferences.
        </p>
    `

};
/*
======================================

Repository

======================================
*/

const repository = [

    "apps",

    "core",

    "packages",

    "blueprints",

    "docs",

    "knowledge",

    "tests",

    "tools"

];
/*
======================================

Renderer

======================================
*/

const content = document.getElementById("content");
/*
======================================

Repository Statistics

======================================
*/

const statistics = {

    applications: 2,

    core: 3,

    packages: 6,

    blueprints: 5,

    status: "Healthy",

    version: "Alpha 0.7"

};
function show(view){

    content.innerHTML = views[view];

    if(view === "dashboard"){

        const dashboard =
            document.getElementById("dashboard");

        dashboard.innerHTML = `

            <p><strong>Applications:</strong> ${statistics.applications}</p>

            <p><strong>Core Modules:</strong> ${statistics.core}</p>

            <p><strong>Packages:</strong> ${statistics.packages}</p>

            <p><strong>Blueprints:</strong> ${statistics.blueprints}</p>

            <p><strong>Status:</strong> ${statistics.status}</p>

            <p><strong>Version:</strong> ${statistics.version}</p>

        `;

    }

    if(view === "explorer"){

        const tree =
            document.getElementById("repository-tree");

        repository.forEach(folder=>{

            tree.innerHTML += `<div>📂 ${folder}</div>`;

        });

    }

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