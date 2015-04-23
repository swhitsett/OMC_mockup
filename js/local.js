var availableTags = [ "Sarah Jensen", "12345", "32452", "Billy Johnson" ];

// ------------------- User order Info -------------------------------
var peoplesNames = [ "Billy Johnson", "Scarlet Johanson", "Sarah Jensen", ];

var billingAddress = [ [ "123 Main st", "Chico", "95926", "CA" ],
					   [ "123 Nord", "Chico", "54321", "NY" ],
					   [ "626 B st", "Los Angles", "95933", "CA" ] ];

var shippingAddress = [ [ "Billy Johnson", "123 Main st", "Chico", "CA", "95926" ],
						[ "Scarlet Johanson", "123 Nord", "Chico", "NY", "54321" ], 
						[ "Sarah Jensen", "626 B st", "Los Angles", "CA", "95933" ] ];

var paymentInfo = [ [ "Visa", "****6453", "09/12" ],
					[ "Amex", "****7763", "02/18" ], 
					[ "Master Card", "****9944", "11/20" ] ];

var userPrefrences = [ [ "No", "Yes", "Yes", "No" ],
					   [ "No", "Yes", "Yes", "No" ], 
					   [ "Yes", "Yes", "Yes", "No" ] ];
// ------------------------------------------------------------------------

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
		var search = $("#search").val();
		console.log("search term: " + search);
		if (search == "Sarah Jensen") {
			$("#content").load("sarah_jensen.html");
		} else if (search == "Billy Johnson") {
			$("#content").load("billy_johnson.html");
		} else if (search == "12345") {
			$("#content").load("12345.html");
		} else if (search == "32452") {
			$("#content").load("32452.html");
		}
	}
}
