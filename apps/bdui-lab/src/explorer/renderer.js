/*
====================================================

BD Studio

Explorer Renderer

====================================================
*/

export class ExplorerRenderer {

    static render(title, items) {

        let html = `<section class="explorer-section">`;

        html += `<h3>${title}</h3>`;

        html += "<ul>";

        items.forEach(item => {

            html += `<li>${item.name}</li>`;

        });

        html += "</ul>";

        html += "</section>";

        return html;

    }

}