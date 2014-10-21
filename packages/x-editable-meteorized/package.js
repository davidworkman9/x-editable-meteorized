'use strict';
Package.describe({
    summary: 'Wraps x-editable in a Blaze template'
});

Package.on_use(function (api) {
    api.use([
        'templating'
    ], 'client');

    api.add_files([
        'main.html',
        'main.js'
    ], 'client');
});