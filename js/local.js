var availableTags = [ "Sarah Jensen", "12345", "32452", "Billy Johnson" ];

document.addEventListener("keyup", documentKeyUp, false);

function documentKeyUp(e) {
	var keyCode = e.keyCode;
	if (keyCode == 113) {
		// ref: http://stackoverflow.com/a/480754/577298
		$("#search").focus();
	}
}

function searchKeyup(event) {
	var keyCode = event.keyCode;
	// clear search field on Escape
	if (keyCode == 27) {
		document.getElementById("search-form").reset();
		location.reload();
	} else {
		var search = document.getElementById("search").value
		document.getElementById("content").innerHTML = search;
	}
}
