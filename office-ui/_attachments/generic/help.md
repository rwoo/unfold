# Generic REST APIs

This modules provides UI masks to create, edit, and view entities like orders and customers. 

The appearance of the masks is controlled by the following URL parameters:
* doc: The ID of the underlying document. Default is the empty object.
* view: Valid values are VIEW_WEB_EDIT (default), VIEW_WEB_CREATE, VIEW_WEB_DISPLAY.
* type: The type of the document. Default is "customer".

EXAMPLE

	# opens a form to edit the data of order_1
	http://127.0.0.1:5984/office-db/_design/office-ui/generic/index.html?doc=order_1&type=order&view=VIEW_WEB_EDIT
