fetch('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json')
        .then(result => result.json())
    .then((res) => {
        createSpaceAPI(res);
    })
.catch(err => console.log(err))

function createSpaceAPI(result){
    document.getElementById('spaceAPI').innerHTML += '<b><p class="apiInfo"> People in space:</b> ' + result.number +' </p>';
}


fetch('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json')
        .then(result => result.json())
    .then((res) => {
        createSpaceAPI1(res);
    })
.catch(err => console.log(err))

function createSpaceAPI1(result){
    document.getElementById('spaceAPI').innerHTML += '<h4>ISS Current position</h4><b> <p class="apiInfo"> Longitude:</b> ' + result.iss_position.longitude +'</p><b><p class="apiInfo"> Latitude: </b>' + result.iss_position.latitude + '</p>';
}

document.getElementById("toggle").addEventListener("click", function() {
    var displayText = document.getElementById("quickfactToggle").style;
    var hidePicture = document.getElementById("toggleAway").style;
    if(displayText.display === "block") {
        displayText.display = "none";
        hidePicture.display = "block";
    }
    
    else {
        displayText.display = "block";
        hidePicture.display = "none";
    }  
})

document.getElementById("submitSub").addEventListener ("click", function () {
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
