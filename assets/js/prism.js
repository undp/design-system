//Prism.js & plugins
let Prism = require('prismjs');
require('prismjs/plugins/line-numbers/prism-line-numbers.min');
require('prismjs/plugins/toolbar/prism-toolbar');
require('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard');
require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');

const init = function () {
    Prism.plugins.NormalizeWhitespace.setDefaults({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true,
    });
}

export default init