/*
======================================

BD Studio
Inspector Module

Version 1.2.1

======================================
*/

export function renderInspector() {

    return `

        <h2>Inspector</h2>

        <p>Select an item from the Explorer.</p>

    `;

}

export function updateInspector(item) {

    const inspector = document.getElementById("inspector");

    if (!inspector) return;

    inspector.innerHTML = `

        <h2>Inspector</h2>

        <div class="card">

            <p><strong>Name</strong></p>
            <p>${item.name}</p>

            <p><strong>Type</strong></p>
            <p>${item.type}</p>

            <p><strong>Path</strong></p>
            <p>${item.path}</p>

            <p><strong>Children</strong></p>
            <p>${item.children.length}</p>

        </div>

    `;

}