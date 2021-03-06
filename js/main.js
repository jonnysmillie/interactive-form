// Focus on the first text field

window.onload = function() {
  document.getElementById("name").focus();
};

// Reveal a text field when the "Other" option is selected from the "Job Role" drop down menu
document.getElementById("title").addEventListener("change", function(){
	var basicSection = document.querySelector('.basic');
	var jobSelected = title.value;
	
	if(jobSelected === 'other' ) {
		var otherText = document.createElement('input');
		// Add a text input field. Use the id of "other-title" 
		otherText.setAttribute('id', 'other-title');
		otherText.setAttribute('type', 'text');
		otherText.setAttribute('name', 'other_field');
		otherText.setAttribute('placeholder', 'Your Job Role');

		basicSection.appendChild(otherText);
	}  

	if(jobSelected !== 'other'){
		if(document.getElementById("other-title")) {
			basicSection.removeChild(document.getElementById("other-title"));
		}
	}
});

// only display the the color options that match the design selected in the "Design" menu

document.getElementById("design").addEventListener("change", function(){
	
	var tshirtMenu = document.getElementById('design');
	var designSelection = tshirtMenu.value;
	var colorSelector = document.getElementById('colors-js-puns');

	if(designSelection) {
		colorSelector.innerHTML = "";
		
	}

	// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
	if(designSelection === "js puns") {
		colorSelector.innerHTML = '<label for="color">Color:</label><select id="color"><option value="cornflowerblue">Cornflower Blue</option><option value="darkslategrey">Dark Slate Grey</option><option value="gold">Gold</option></select>';
	}


	// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
	if(designSelection === "heart js") {
		
		colorSelector.innerHTML = '<label for="color">Color:</label><select id="color"><option value="tomato">Tomato</option><option value="steelblue">Steel Blue</option><option value="dimgrey">Dim Grey</option></select>';
		
	}

	// If user reselects "Select Theme", make sure original options are shown again
	if(designSelection === "Select Theme") {
		colorSelector.innerHTML = ' <label for="color">Color:</label><select id="color"><option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option><option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option></select>';
		
	}

});


// Register for Activities

document.querySelector(".activities").addEventListener("change", function(){
	var main = document.getElementById("all");
	var framework = document.getElementById("framework");
	var libs = document.getElementById("libs");
	var express = document.getElementById("express");
	var node = document.getElementById("node");
	var build = document.getElementById("build");
	var npm = document.getElementById("npm");

	var frameworkLbl = document.getElementById("frameworkLabel");
	var libsLbl = document.getElementById("libsLabel");
	var expressLbl = document.getElementById("expressLabel");
	var nodeLbl = document.getElementById("nodeLabel");
	
	
	// If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
	if(framework.checked == true) {
		express.disabled = true;
		expressLbl.style.color = "grey";
	}
	if(express.checked == true) {
		framework.disabled=  true;
		frameworkLbl.style.color = "grey";
	} 
	if(libs.checked == true) {
		node.disabled = true;
		nodeLbl.style.color = "grey";
	}
	if(node.checked == true) {
		libs.disabled = true;
		libsLbl.style.color = "grey";
	} 

	// When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
	if(framework.checked == false) {
		express.disabled = false;
		expressLbl.style.color = "black";
	}
	if(express.checked == false) {
		framework.disabled = false;
		frameworkLbl.style.color = "black";
	}
	if(libs.checked == false) {
		node.disabled = false;
		nodeLbl.style.color = "black";
	}
	if(node.checked == false) {
		libs.disabled = false;
		libsLbl.style.color = "black";
	} 


// Calculate running total of price of events selected
	var mainPrice = 200;
	var otherPrice = 100;
	var totalPrice = 0;

	if(main.checked == true){
		totalPrice += mainPrice;
	}
	if(framework.checked == true || express.checked == true) {
		totalPrice += otherPrice;
	} 
	if(libs.checked == true || node.checked == true) {
		totalPrice += otherPrice;
	} 
	if(build.checked == true) {
		totalPrice += otherPrice;
	} 
	if(npm.checked == true) {
		totalPrice += otherPrice;
	}

	var totalNumber = totalPrice.toString();
	var totalText = "Total is $" + totalNumber;
	document.getElementById('total').innerHTML = totalText;

	if(totalPrice == 0){
		document.getElementById('total').innerHTML = "";
	}



});


// Payment Info section of the form. Display payment sections based on chosen payment option
document.getElementById("payment options").addEventListener("change", function(){
	var paymentOption = document.getElementById('payment');
	var paymentSelection = paymentOption.value;
	var container = document.getElementById('payment-container');
	
	// "Credit Card" payment option isselected by default so display of the #credit-card div... 
	// hide the "Paypal" and "Bitcoin information.
	if(paymentSelection === "credit card") {
		container.innerHTML = '<div id="credit-card" class="credit-card"><div class="col-6 col"><label for="cc-num" id="cc-numLbl">Card Number:</label><input id="cc-num" name="user_cc-num" type="text"></div><div class="col-3 col"><label for="zip" id="zipLbl">Zip Code:</label><input id="zip" name="user_zip" type="text"></div><div class="col-3 col"><label for="cvv" id="cvvLbl">CVV:</label><input id="cvv" name="user_cvv" type="text"></div><label>Expiration Date:</label><select id="exp-month" name="user_exp-month"><option value="1">1 - January</option><option value="2">2 - February</option><option value="3">3 - March</option><option value="4">4 - April</option><option value="5">5 - May</option><option value="6">6 - June</option><option value="7">7 - July</option><option value="8">8 - August</option><option value="9">9 - September</option><option value="10">10 - October</option><option value="11">11 - November</option><option value="12">12 - December</option></select><select id="exp-year" name="user_exp-year"><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option></select></div>';
		
	} else if(paymentSelection === "paypal") {
		// If user selects the "PayPal" payment option, display the Paypal information, and hide the credit card + Bitcoin
		container.innerHTML =  "<div><p>If you selected the PayPal option we'll take you to Paypal's site to set up your billing information, when you click 'Register' below.</p></div>";
		
	} else if(paymentSelection === "bitcoin") {
		/// If user selects the "Bitcoin" payment option, display the Bitcoin information, and hide the credit card + paypal.
		container.innerHTML = "<div><p>If you selected the Bitcoin option we'll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.</p></div>";                  
	}
});



// Form validation. Display error messages and don't let the user submit the form if any of these validation errors exist:
document.querySelector("button").addEventListener("click", function(e) {
	
	// Name field can't be empty
    var nameInput = document.getElementById("name");
    var nameLabel = document.getElementById("nameLabel");
	if(nameInput.value.length == 0) {
        nameLabel.innerHTML = "Name: (please provide name)";
        nameLabel.style.color = "red";
        e.preventDefault();
    } else {
    	nameLabel.innerHTML = "Name:";
        nameLabel.style.color = "black";
    }

	// Email field must be a validly formatted e-mail address
	function validateEmail(email) {
  		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		return re.test(email);
	}
 
	var emailInput = document.getElementById("mail");
    var emailLabel = document.getElementById("emailLabel");

	if(!validateEmail(emailInput.value)) {
        emailLabel.innerHTML = "Email: (please provide a valid email address)";
        emailLabel.style.color = "red";
        e.preventDefault();
    } else {
    	emailLabel.innerHTML = "Email:";
        emailLabel.style.color = "black";
    }


   	//check there's a valid credit card number
	var ccNum = document.getElementById("cc-num");
    var ccNumLbl = document.getElementById("cc-numLbl");


// takes the form field value and returns true on valid number
function valid_credit_card(value) {
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm. It's so pretty.
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}


	if(!valid_credit_card(ccNum.input)) {
        ccNumLbl.style.color = "red";
        e.preventDefault();
    } else {
        ccNumLbl.style.color = "black";
    }

    //check there's a zip code
	var zip = document.getElementById("zip");
    var zipLbl = document.getElementById("zipLbl");
	if(zip.value.length == 0) {
		e.preventDefault();
        zipLbl.style.color = "red";
    } else {
        zipLbl.style.color = "black";
    }

    //check there's a cvv
	var cvv = document.getElementById("cvv");
    var cvvLbl = document.getElementById("cvvLbl");
	if(cvv.value.length == 0) {
        cvvLbl.style.color = "red";
        e.preventDefault();
    } else {
        cvvLbl.style.color = "black";
    }

    //Check that at least 1 activity has been selected
    var activities = document.getElementsByClassName("activity");
    var counter = 0;
    var activityReminder = document.getElementById("activityReminder");
    var lineBreak = document.getElementById("lineBreak");

    for(var i = 0; i < activities.length; i++){
    	if(activities[i].checked === true) {
    		counter++;
    	}
    }

    if(counter < 1){
    	activityReminder.innerHTML = "Please select an Activity";
    	activityReminder.style.color = "red";
    	lineBreak.innerHTML = "<br>";
    	e.preventDefault();
    } if(counter >= 1){
    	activityReminder.innerHTML = "";
    	lineBreak.innerHTML = "";
    }

    //Check that a tshirt has been selected
    var tShirtMenu = document.getElementById('design');
    var tSelection = tShirtMenu.value;
    var tshirtReminder = document.getElementById("tshirtReminder");

	if(tSelection === "selectTheme"){
    	tshirtReminder.innerHTML = "Don't forget to choose a tshirt";
    	tshirtReminder.style.color = "red";
    	e.preventDefault();
    } else if (tSelection === "js puns" || tSelection === "heart js") {
    	tshirtReminder.innerHTML = "";
    }
});






