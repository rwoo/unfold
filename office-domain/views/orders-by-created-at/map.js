function (doc) { 
	if (doc.type == "order") {
		var searchKey = doc.tenant + "_" + doc.created_at;
		var value = doc.product;
		emit(searchKey, value); 
	};
}