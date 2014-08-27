require.config({
    "baseUrl": "lib",
    "packages": [
        {
            "name": "jquery",
            "main": "../jquery-latest.min"
        },
        {
            "name": "jquery-tmpl",
            "main": "../jquery.tmpl"
        },
        {
            "name": "jquery-ui",
            "main": "../jquery-ui-latest/jquery-ui-latest.custom.min"
        },
        {
            "name": "alpaca",
            "main": "alpaca"
        },
        {
            "name": "generic",
            "main": "../../generic"
        }
    ],
    "shim": {
        "jquery-ui": ["jquery"],
        "jquery-tmpl": ["jquery"],
        "jquery": []
    }
});

require(["generic"], function() {

    // all done

});