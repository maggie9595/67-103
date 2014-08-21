window.onload = function(){

	// add some js that will fill in the three id fields on the 
	// page - name, hometown, and fact - with your information
	var name = document.getElementById("name"), hometown = document.getElementById("hometown"), fact = document.getElementById("fact");
	name.innerHTML = "Maggie Yu", hometown.innerHTML = "Hershey", fact.innerHTML = "Jennifer Jin is here";
	
	
	// get all the list items on the page into a variable, loop through
	// each item and set its class name (className) to 'listitem' so it 
	// can be styled appropriately
	var listItems = document.getElementsByTagName("ul");
	for (var i = 0; i < listItems.length; i++) {
		var currentItem = listItems[i];
		currentItem.className = "listitem";
	}

	// create a variable called myPic that is essentially an img tag
	// and set the source to a photo of you that is online (Facebook, etc.)
	// and then append it to the body
	var myPic = document.createElement('img');
	myPic.src = 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-prn2/t1.0-9/p720x720/1459860_788743437809708_93027428_n.jpg';
	document.body.appendChild(myPic);
	
	// IF TIME ALLOWS:
	// add some js to the document that will make the font Verdana



	// use js to reset the meta's content attribute to your name


}