# Office-24t


## Start application (Windows)

1. Please install CouchDB.

Background: At the moment the CouchDB is the backend.

2. Please install CouchApp for Windows from https://github.com/couchapp/couchapp/downloads

Background: CouchApp allows you to push files into CouchDB design documents.

Alternatively, install Erica: https://github.com/benoitc/erica

Erica provides roughly the same functions as CouchApp and consists of a single file: erica.cmd
But the useful command "autopush" seems to be missing in Erica.

3. Install Git for Windows.

Background: The bash shell provides useful tools like curl.

4. Checkout the project files that represent the application.

    git clone https://github.com/rwoo/unfold.git

5. Move the contents of the Eclipse projects via CouchApp (or Erica) into CouchDB.
The recommended database name is: office-db

EXAMPLE:

	cd office-domain
	couchapp push . http://localhost:5984/office-db
	cd ../office-ui
	couchapp push . http://localhost:5984/office-db
	cd ../office-documentation
	couchapp push . http://localhost:5984/office-db

    # if you have security turned on, then
    # couchapp push . http://adminname:adminpass@localhost:5984/office-db
    

6. Create some example documents in the database. The module office-domain contains such example documents.

EXAMPLE:

    # create document order_3 with contents of file order_3.json
	cd ../office-documentation
	curl -X put http://localhost:5984/office-db/order_3 -T /_attachments/examples/order_3.json


7. Inspect the application. 
* Go to the admin UI Futon, available at http://127.0.0.1:5984/_utils/index.html
* Or open any domain-specific UI, see module office-domain.
* Or open this help file via http://127.0.0.1:5984/office-db/_design/office-documentation/help.md 