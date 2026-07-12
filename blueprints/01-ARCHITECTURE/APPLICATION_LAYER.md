# BD Studio Application Layer

The Application Layer coordinates the entire workspace.

Responsibilities:

- Start the application
- Initialize the Kernel
- Initialize the Workspace
- Initialize Navigation
- Coordinate Explorer
- Coordinate Viewer
- Coordinate Inspector
- Coordinate Tabs

Rules:

app.js
- Bootstrap only

workspace.js
- Workspace controller only

navigation.js
- Navigation only

explorer.js
- Explorer only

viewer.js
- Viewer only

inspector.js
- Inspector only

tabs.js
- Tabs only

No module may update another module directly.

All coordination flows through the Workspace Controller.