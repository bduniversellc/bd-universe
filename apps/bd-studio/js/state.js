/*
======================================

BD Studio
Workspace State

Version 1.3.0

======================================
*/

export const State = {

    currentView: "dashboard",

    selectedFolder: null,

    selectedFile: null,

    setView(view) {

        this.currentView = view;

    },

    getView() {

        return this.currentView;

    },

    selectFolder(folder) {

        this.selectedFolder = folder;

    },

    getFolder() {

        return this.selectedFolder;

    },

    selectFile(file) {

        this.selectedFile = file;

    },

    getFile() {

        return this.selectedFile;

    }

};