/*
======================================

BD Studio
Repository Module

Version 1.0.2

======================================
*/

export const repository = [

    {
        id: 1,
        name: "apps",
        type: "folder",
        path: "/apps",
        children: [
            "bd-studio",
            "bdui-lab"
        ]
    },

    {
        id: 2,
        name: "core",
        type: "folder",
        path: "/core",
        children: [
            "bd-kernel",
            "services"
        ]
    },

    {
        id: 3,
        name: "packages",
        type: "folder",
        path: "/packages",
        children: [
            "bdui"
        ]
    },

    {
        id: 4,
        name: "blueprints",
        type: "folder",
        path: "/blueprints",
        children: []
    },

    {
        id: 5,
        name: "docs",
        type: "folder",
        path: "/docs",
        children: []
    },

    {
        id: 6,
        name: "knowledge",
        type: "folder",
        path: "/knowledge",
        children: []
    },

    {
        id: 7,
        name: "tests",
        type: "folder",
        path: "/tests",
        children: []
    },

    {
        id: 8,
        name: "tools",
        type: "folder",
        path: "/tools",
        children: []
    }

];

/*
======================================

Repository API

======================================
*/

export function getRepository() {

    return repository;

}

export function getFolder(name) {

    return repository.find(

        folder => folder.name === name

    );

}