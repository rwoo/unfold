define(["jquery", "alpaca"], function($) {
    
    
    // take parameters from the URL
    // the following URL parameters are supported:
    // doc - the ID of the document
    // type - the name of the type
    // view - VIEW_WEB_EDIT (default), VIEW_WEB_CREATE
    
    function getUrlParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0]==sParam)
            {
                return sParameterName[1];
            }
        }
    }
    
    
    var alpacaConfig = {};

    var viewType = getUrlParameter('view');
    if (viewType) {
        alpacaConfig.view = viewType; // EXAMPLE: VIEW_WEB_CREATE, VIEW_WEB_DISPLAY
    }
    else {
        alpacaConfig.view = "VIEW_WEB_EDIT"; // this is the default 
    }
    

    
    /**
     * Initial data
     *
     * Fill in the JSON data that should be populated into the form.  This can be any JSON data that you'd like
     * provided that it fits the schema and options (if you provide those).
     *
     */
    var docId = getUrlParameter('doc');
    if (docId) {
        alpacaConfig.dataSource = "/office-db/" + docId;
    }
    else {
        alpacaConfig.data = {}; // no defaults 
    }
    
    
    
    //var schemaUrlPrefix = "./ui-schemas/";
    var schemaUrlPrefix = "../../office-domain/generic/ui-schemas/";

    /**
     * JSON-schema for the form
     *
     * The form schema defines the data types, validation logic and other constraints that need to be satisfied in
     * order for the form to be considered valid.
     *
     * This should follow the JSON-schema convention.
     * @see http://json-schema.org
     *
     * Full schema settings are listed here:
     * @see http://www.alpacajs.org
     *
     */
    var schemaId = getUrlParameter('type');
    if (schemaId) {
        alpacaConfig.schemaSource = schemaUrlPrefix + schemaId + ".schema.json";
    }
    else {
        alpacaConfig.schemaSource = schemaUrlPrefix + "customer.schema.json"; // default
    }

     /**
      * Layout options for the form
      *
      * These options describe UI configuration for the controls that are rendered for the data and schema.  You can
      * tweak the layout and presentation aspects of the form in this section.
      *
      * Full options settings are listed here:
      * @see http://www.alpacajs.org
      *
      */
    if (schemaId) {
        alpacaConfig.optionsSource = schemaUrlPrefix + schemaId + ".options.json";
    }
    else {
        alpacaConfig.optionsSource = schemaUrlPrefix + "customer.options.json"; // default
    }
    

     /**
      * Render the form.
      *
      * We call alpaca() with the data, schema and options to tell Alpaca to render into the selected dom element(s).
      *
      */
    $("#form").alpaca(alpacaConfig);
    
});