(function() {
	let search = document.getElementById('filter-search');
	let tags = document.getElementById('buttons');
	let images = document.getElementsByTagName('img');
	/*
	let cache = [];

	for(i = 0; i<images.length; i++){
		cache.push(images[i].alt);
	}
	*/

	function searchFilter(){
		
		let query = search.value.trim().toLowerCase();

		for(i = 0; i<images.length; i++){
			index = images[i].alt.trim().toLowerCase().indexOf(query);
	      	images[i].style.display = index === -1 ? 'none' : '';
		}
	}

	search.addEventListener("keyup", searchFilter);
	//tags.addEventListener("onclick", searchFilter);
}());