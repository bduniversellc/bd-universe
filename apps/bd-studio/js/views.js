/*
======================================

BD Studio
Views Module

Version 0.8.4

======================================
*/

import { APP } from "./config.js";

export const views = {

    dashboard: `
        <h1>Dashboard</h1>

        <p>Welcome to ${APP.name}</p>

        <p>Version ${APP.version}</p>
    `,

    explorer: `
        <h1>Repository Explorer</h1>

        <div id="repository-tree"></div>
    `,

    packages: `
        <h1>Packages</h1>

        <p>Package Manager coming soon.</p>
    `,

    components: `
        <h1>Components</h1>

        <p>UI Component Library coming soon.</p>
    `,

    blueprints: `
        <h1>Blueprints</h1>

        <p>Architecture Blueprints.</p>
    `,

    documentation: `
        <h1>Documentation</h1>

        <p>Project Documentation.</p>
    `,

    settings: `
        <h1>Settings</h1>

        <p>Configure BD Studio.</p>
    `

};