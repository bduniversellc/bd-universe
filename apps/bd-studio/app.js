/*
======================================

BD Studio
Application

======================================
*/

console.clear();

console.log("BD Studio Alpha");

document.getElementById("kernel-status").textContent = "Kernel: Ready";

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
        <h1>Repository Explorer</h1>
        <div id="repository-tree"></div>
    `,

    packages: `
        <h1>Packages</h1>
        <p>Browse reusable packages.</p>
    `,

    components: `
        <h1>Components</h1>
        <p>Build and manage reusable UI components.</p>
    `,

    blueprints: `
        <h1>Blueprints</h1>
        <p>Explore architecture and project blueprints.</p>
    `,

    documentation: `
        <h1>Documentation</h1>
        <p>Read project documentation.</p>
    `,

    settings: `
        <h1>Settings</h1>
        <p>Configure BD Studio preferences.</p>
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
            "bdui-lab",
            "bduniverse"
        ]
    },

    {
        name: "core",
        children: [
            "bd-kernel",
            "services"
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

/*
======================================

Repository Statistics

======================================
*/

const statistics = {

    applications: 2,
    core: 2,
    packages: 1,
    blueprints: 5,
    status: "Healthy",
    version: "Alpha 0.7"

};

/*
======================================

Renderer

======================================
*/

const content = document.getElementById("content");

function show(view) {

    content.innerHTML = views[view];

    if (view === "dashboard") {

        const dashboard = document.getElementById("dashboard");

        dashboard.innerHTML = `
            <p><strong>Applications:</strong> ${statistics.applications}</p>
            <p><strong>Core Modules:</strong> ${statistics.core}</p>
            <p><strong>Packages:</strong> ${statistics.packages}</p>
            <p><strong>Blueprints:</strong> ${statistics.blueprints}</p>
            <p><strong>Status:</strong> ${statistics.status}</p>
            <p><strong>Version:</strong> ${statistics.version}</p>
        `;

    }

    if (view === "explorer") {

        const tree = document.getElementById("repository-tree");

        repository.forEach(folder => {

            tree.innerHTML += `
                <div class="folder">

                    <div
                        class="folder-name"
                        onclick="toggleFolder('${folder.name}')"
                        style="cursor:pointer; font-weight:bold; margin:6px 0;">

                        ▶ ${folder.name}

                    </div>

                    <div
                        id="${folder.name}"
                        class="children"
                        style="display:none; margin-left:20px;">

                    </div>

                </div>
            `;

        });

    }

}

/*
======================================

Folder Toggle

======================================
*/

function toggleFolder(name) {

    const folder = repository.find(item => item.name === name);

    const children = document.getElementById(name);

    if (children.style.display === "none") {

        children.style.display = "block";

        children.innerHTML = "";

        folder.children.forEach(child => {

            children.innerHTML += `
                <div style="margin:4px 0;">
                    📂 ${child}
                </div>
            `;

        });

    } else {

        children.style.display = "none";

        children.innerHTML = "";

    }

}

window.toggleFolder = toggleFolder;

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