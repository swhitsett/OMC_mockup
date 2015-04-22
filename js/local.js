var availableTags = [ "Sarah Jensen", "12345", "32452", "Billy Johnson" ];

document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
	var keyCode = e.keyCode;
	if (keyCode == 113) {
		alert('fuk yea');
		// ref: http://stackoverflow.com/a/480754/577298
		$("#search").focus();
	}
}