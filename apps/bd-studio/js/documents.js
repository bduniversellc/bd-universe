/*
======================================

BD Studio
Documents Module

Version 1.4.0

======================================
*/

export const documents = {

    "README.md": `

# BD Universe

Welcome to BD Universe.

This ecosystem contains:

• BD Studio
• xColor
• Custooom
• KartGenes
• Founder OS

`,

    "ROADMAP.md": `

# Roadmap

Current Milestone

Workspace Development

Next

Markdown Viewer

AI Integration

`,

    "CHANGELOG.md": `

# Changelog

v1.4.0

Added Documents Module.

`

};

export function getDocument(name){

    return documents[name];

}