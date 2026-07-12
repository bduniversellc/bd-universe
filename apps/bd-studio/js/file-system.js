/*
======================================

BD Studio
File System

Version 1.2.3

======================================
*/

export const fileSystem = [

    {
        folder: "apps",
        files: [

            "index.html",
            "app.js",
            "app.css"

        ]
    },

    {
        folder: "js",
        files: [

            "config.js",
            "kernel.js",
            "repository.js",
            "explorer.js",
            "dashboard.js",
            "navigation.js",
            "views.js",
            "viewer.js",
            "inspector.js"

        ]
    },

    {
        folder: "docs",
        files: [

            "README.md"

        ]
    }

];

/*
======================================

API

======================================
*/

export function getFileSystem(){

    return fileSystem;

}