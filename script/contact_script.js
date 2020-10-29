/* Contact page */
/* declare variables */
var conClear = document.getElementById("conClear");
conClear.addEventListener("click",clearText);

var comment = document.getElementById("comment");
var conTextBox = document.getElementsByClassName("inputContact");

var conSubmit = document.getElementById("conSubmit");
conSubmit.addEventListener("click",contactSubmit);
/* Clear all text boxes */
function clearText(){
	comment.value = "";
	conTextBox[0].value = "";
	conTextBox[1].value = "";
}
/* validate entries when click submit */
function contactSubmit(){
	// if name field is empty
	if(conTextBox[0].value == ""){
		alert("Please enter your name!");
	}
	// if email field is empty or "@" and "." are not included 
	else if(conTextBox[1].value == "" || conTextBox[1].value.indexOf("@") == -1 || 
	conTextBox[1].value.indexOf(".") == -1){

		alert("Please enter a valid email address!");
	}
	// if comment field is empty
	else if(comment.value == ""){
		alert("Please enter your comment!");
	}
	// all data have been verified
	else{
		alert("Your comment has been submitted successfully!\n" + "Thank you.");
	}		
}
