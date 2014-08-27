This view maps the composition of 
* a tenant (a string), and
* the creation time of the order
to
* a string containing the product name.

EXAMPLE

	# searches for orders that are created by tenant "11" before January, 1st 2010
	http://127.0.0.1:5984/office-db/_design/office-domain/_view/orders-by-created-at?endkey=%2211_2010%22&descending=true&limit=2&skip=1
	