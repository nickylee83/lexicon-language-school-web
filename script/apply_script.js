/* Apply Form */
/* declare variables */
var myForm = document.getElementById("myForm");
var btnReset = document.getElementById("appClear");
var btnSubmit = document.getElementById("appSubmit");
var textBox = document.getElementsByClassName("inputApply");

var name, age, gender, qualification,course, contact, email;

btnReset.addEventListener("click",reset);
btnSubmit.addEventListener("click",appSubmit);
/* reset all entries */
function reset(){
	myForm.reset();
}

function appSubmit(){
	validateFields();
}
/* validate entries when click submit */
function validateFields(){
	//assign all data fields to respective variables
	name = textBox[0].value;
	age = myForm.age.value;
	gender = myForm.gender.value;
	qualification = myForm.qualification.value;
	country = myForm.country.value;
	course = myForm.course.value;
	contact = textBox[1].value;
	email = textBox[2].value;
	// if name field is empty or less than 3 chars
	if(name.length<3 || name == ""){
		alert("Please enter your name!");
	}
	// if age field is empty
	else if(age == ""){
		alert("Please select your age!");
	}
	// if gender field is empty
	else if(gender == ""){
		alert("Please select your gender!");
	}
	// if qualification field is empty
	else if(qualification == ""){
		alert("Please select your qualification!");
	}
	// if country field is empty
	else if(country == ""){
		alert("Please select your country!");
	}
	// if course field is empty
	else if(course == ""){
		alert("Please select your course!");
	}
	// if contact field is empty or less than 6 chars or is not a number
	else if(contact.length<6 || contact == "" || isNaN(contact) == true){

		alert("Please enter a valid contact number!");
	}
	// if email field is empty and less than 6 chars and "@" and "." are not included
	else if((email.length<6 || email == "") ||
	(email.indexOf("@") == -1 || email.indexOf(".") == -1)){

		alert("Please enter a valid email address!");
	}
	// if all data have been verified, show submitted
	else{
		alert("Your application is successfully submitted! Thank you for applying with us.");
		alert("Your details\nName   : " + name + "\nAge      : " + age + "\nGender : "
		+ gender + "\nQualification: " + qualification + "\nCountry  : " + country + 
		"\nCourse    : " + course + "\nContact   : " + contact + "\nEmail       : " + email);
	} 
}