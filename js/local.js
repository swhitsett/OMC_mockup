var availableTags = [ "Sarah Jensen", "12345", "32452", "Billy Johnson" ];

// ------------------- User order Info -------------------------------
var peoplesNames = [ "Billy Johnson", "Scarlet Johanson", "Sarah Jensen" ];

var billingAddress = [ [ "123 Main st", "Chico", "95926", "CA" ],
		[ "123 Nord", "Chico", "54321", "NY" ],
		[ "626 B st", "Los Angles", "95933", "CA" ] ];

var shippingAddress = [
		[ "Billy Johnson", "123 Main st", "Chico", "CA", "95926" ],
		[ "Scarlet Johanson", "123 Nord", "Chico", "NY", "54321" ],
		[ "Sarah Jensen", "626 B st", "Los Angles", "CA", "95933" ] ];

var paymentInfo = [ [ "Visa", "****6453", "09/12" ],
		[ "Amex", "****7763", "02/18" ], [ "Master Card", "****9944", "11/20" ] ];

var userPrefrences = [ [ "No", "Yes", "Yes", "No" ],
		[ "No", "Yes", "Yes", "No" ], [ "Yes", "Yes", "Yes", "No" ] ];
// ------------------------------------------------------------------------

document.addEventListener("keyup", documentKeyUp, false);

function documentKeyUp(e) {
	var keyCode = e.keyCode;
	if (keyCode == 113) {
		// ref: http://stackoverflow.com/a/480754/577298
		$("#search").focus();
	} else if (keyCode == 27 && $("#search").val() != '') {
		document.getElementById("search-form").reset();
		location.reload();
	}
}

function setSearchHeader(search_term) {
	$("#header").empty().append(
			"<h1>Search	results for '" + search_term + "'</h1>").append(
			"<p style='font-style:italic'>(hit Esc to clear results)</p>");
}

$(function() {
	$("#navigation").load("nav.html", function() {
		// ref: https://jqueryui.com/autocomplete/
		// ref: http://stackoverflow.com/a/4450861/577298
		$("#search").autocomplete({
			source : availableTags
		});
	});
});

function searchKeyup(event) {
	var keyCode = event.keyCode;
	var search = $("#search").val();
	console.log("search term: " + search);
	if (search == "Sarah Jensen") {
		$("#search-results").load("sarah_jensen.html", function() {
			setSearchHeader(search)
		});
	} else if (search == "Billy Johnson") {
		$("#search-results").load("billy_johnson.html", function() {
			setSearchHeader(search)
		});
	} else if (search == "12345") {
		$("#search-results").load("12345.html", function() {
			setSearchHeader(search)
		});
	} else if (search == "32452") {
		$("#search-results").load("32452.html", function() {
			setSearchHeader(search)
		});
	}
}

function goBack() {
	window.history.go(-1);
}
