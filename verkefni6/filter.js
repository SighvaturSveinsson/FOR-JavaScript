(function() {
	let search = document.getElementById('filter-search');
	let tags = document.getElementById('buttons');
	let images = [];
	//let images = document.getElementById('buttons');
	let gallery = document.getElementById('gallery');
	let imgAlts = ["Rabbit", "Sea", "Deer"]
	let imgTags = ["Animators", "Designers", "Photographers","Filmmakers", "Illustrators"]


	for (i = 0; i < imgAlts.length; i++){
		var myImage = new Image();
		myImage.src = 'img/p'+(i+1)+'.jpg';
		myImage.alt = imgAlts[i];
		images.push(myImage);
		gallery.appendChild(myImage);
	}
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
	//tags.addEventListener("onclick", tagFilter);
}());