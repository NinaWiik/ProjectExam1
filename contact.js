document.getElementById("submitContact").addEventListener ("click", function () {
    var firstNameValue = document.getElementById("firstName").value;
    var firstNameError = document.getElementById("firstNameError");
    document.getElementById("firstNameError").style.display = "none";
        if (!firstNameValue)  {
        document.getElementById("firstNameError").style.display = "block";
        }
    
    var lastNameValue = document.getElementById("lastName").value;
    var lastNameError = document.getElementById("lastNameError");
        document.getElementById("lastNameError").style.display = "none";
        if (!lastNameValue) {
        document.getElementById("lastNameError").style.display = "block";
        }
    
    
    var telephoneValue = document.getElementById("phone").value;
    var phoneRegExp = /^[0-9()-]+$/;
    var phoneError = document.getElementById("phoneError");
        document.getElementById("phoneError").style.display = "none";
    
    phoneValidation = new RegExp (phoneRegExp);
    var phoneValidated = phoneValidation.test(telephoneValue);
        if (phoneValidation.test(telephoneValue) === false) {
            document.getElementById("phoneError").style.display = "block";
        }
    

    var emailValue = document.getElementById("email").value; 
    var emailRegExp = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$";
    var emailError = document.getElementById("emailError");
        document.getElementById("emailError").style.display = "none";

    emailValidation = new RegExp (emailRegExp);
    var emailValidated = emailValidation.test(emailValue);
        if (emailValidation.test(emailValue) === false) {
            document.getElementById("emailError").style.display = "block";
        }
    
})