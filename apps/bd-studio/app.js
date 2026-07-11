/*
======================================

BD Studio
Application

Version 0.8.0

======================================
*/

console.clear();

console.log("BD Studio v0.8.0");

/*
======================================

Application

======================================
*/

const APP = {

    name: "BD Studio",

    version: "0.8.0",

    status: "Kernel: Ready"

};

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

        <p>
            Production Release 0.8.0
        </p>
    `,

    explorer: `
        <h1>Repository Explorer</h1>

        <div id="repository-tree"></div>
    `,

    packages: `
        <h1>Packages</h1>

        <p>
            Package Manager coming soon.
        </p>
    `,

    components: `
        <h1>Components</h1>

        <p>
            UI Component Library.
        </p>
    `,

    blueprints: `
        <h1>Blueprints</h1>

        <p>
            Architecture Blueprints.
        </p>
    `,

    documentation: `
        <h1>Documentation</h1>

        <p>
            Project Documentation.
        </p>
    `,

    settings: `
        <h1>Settings</h1>

        <p>
            Configure BD Studio.
        </p>
    `

};

/*
======================================

Repository

======================================
*/

const repository = [

    {
        name: "apps",
        children: [
            "bd-studio",
            "bdui-lab"
        ]
    },

    {
        name: "core",
        children: [
            "bd-kernel"
        ]
    },

    {
        name: "packages",
        children: [
            "bdui"
        ]
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
        name: "tests",
        children: []
    }

];

/*
======================================

Elements

======================================
*/

const content =
    document.getElementById("content");

const status =
    document.getElementById("kernel-status");

const version =
    document.getElementById("app-version");

/*
======================================

Startup

======================================
*/

status.textContent = APP.status;

version.textContent =
    "v" + APP.version;

/*
======================================

Navigation

======================================
*/

const buttons =
    document.querySelectorAll(".sidebar button");

const pages = [

    "dashboard",

    "explorer",

    "packages",

    "components",

    "blueprints",

    "documentation",

    "settings"

];

buttons.forEach((button,index)=>{

    button.addEventListener("click",()=>{

        buttons.forEach(b=>{

            b.classList.remove("active");

        });

        button.classList.add("active");

        show(pages[index]);

    });

});

/*
======================================

Render

======================================
*/

function show(view){

    content.innerHTML =
        views[view];

    if(view==="explorer"){

        renderRepository();

    }

}

/*
======================================

Repository

======================================
*/

function renderRepository(){

    const tree =
        document.getElementById("repository-tree");

    tree.innerHTML = "";

    repository.forEach(folder=>{

        const details =
            document.createElement("details");

        const summary =
            document.createElement("summary");

        summary.textContent =
            "📂 " + folder.name;

        details.appendChild(summary);

        folder.children.forEach(child=>{

            const div =
                document.createElement("div");

            div.style.marginLeft="24px";

            div.style.padding="4px 0";

            div.textContent =
                "📁 " + child;

            details.appendChild(div);

        });

        tree.appendChild(details);

    });

}

/*
======================================

Start

======================================
*/

buttons[0].classList.add("active");

show("dashboard");