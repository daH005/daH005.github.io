const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

const sidebar = fs.readFileSync(path.resolve(__dirname, 'src/sample/sidebar.mustache'), 'utf-8');

module.exports = {
    getSidebarTemplate: () => {
        return  Mustache.render(sidebar, {})
    }
}