/*
======================================

BD Studio
Dashboard Module

Version 0.8.6

======================================
*/

import { APP } from "./config.js";

export function renderDashboard() {

    return `

        <h1>Dashboard</h1>

        <p>Welcome to ${APP.name}</p>

        <p>Version ${APP.version}</p>

        <p>Status: ${APP.kernelStatus}</p>

    `;

}