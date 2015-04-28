$(function() {
	$("#searchNames").autocomplete({
		source : peoplesNames
	});
});

function resetFormField(id) {
	$('#' + id).val(function() {
		return this.defaultValue;
	});
}
function getValues(event) {
	var usr_name = document.name4search.searchNames.value;
	var cus_id = -1;

	for (var i = 0; i < peoplesNames.length; i++)
		if (usr_name == peoplesNames[i])
			cus_id = i;

	if (cus_id != -1) {
		document.getElementById("cus_name").value = peoplesNames[cus_id];
		document.getElementById("b_addr").value = billingAddress[cus_id][0];
		document.getElementById("b_city").value = billingAddress[cus_id][1];
		document.getElementById("b_zip").value = billingAddress[cus_id][2];
		document.getElementById("b_state").value = billingAddress[cus_id][3];
		document.getElementById("s_name").value = shippingAddress[cus_id][0];
		document.getElementById("s_addr").value = shippingAddress[cus_id][1];
		document.getElementById("s_city").value = shippingAddress[cus_id][2];
		document.getElementById("s_state").value = shippingAddress[cus_id][3];
		document.getElementById("s_zip").value = shippingAddress[cus_id][4];
		document.getElementById("card_type").value = paymentInfo[cus_id][0];
		document.getElementById("card_num").value = paymentInfo[cus_id][1];
		document.getElementById("card_exp").value = paymentInfo[cus_id][2];
		document.getElementById("gift").value = userPrefrences[cus_id][0];
		document.getElementById("exp_delivery").value = userPrefrences[cus_id][1];
		document.getElementById("insurance").value = userPrefrences[cus_id][2];
		document.getElementById("coupon").value = userPrefrences[cus_id][3];
	} else if (usr_name != '') {
		console.log("User name entered: " + usr_name);
		resetFormField("cus_name");
		resetFormField("b_addr");
		resetFormField("b_city");
		resetFormField("b_zip");
		resetFormField("b_state");
		resetFormField("s_name");
		resetFormField("s_addr");
		resetFormField("s_city");
		resetFormField("s_state");
		resetFormField("s_zip");
		resetFormField("card_type");
		resetFormField("card_num");
		resetFormField("card_exp");
		resetFormField("gift");
		resetFormField("exp_delivery");
		resetFormField("insurance");
		resetFormField("coupon");
	}

	// document.getElementById("work").innerHTML = "mrJEFF";
}
// else
// document.getElementById("cus_name").innerHTML = "error";
