fetch('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json')
        .then(result => result.json())
    .then((res) => {
        createSpaceAPI(res);
    })
.catch(err => console.log(err))

function createSpaceAPI(result){
    document.getElementById('spaceAPI').innerHTML += '<p class="apiInfo"> People in space: ' + result.number +' </p>';
}


fetch('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json')
        .then(result => result.json())
    .then((res) => {
        createSpaceAPI1(res);
    })
.catch(err => console.log(err))

function createSpaceAPI1(result){
    document.getElementById('spaceAPI').innerHTML += '<h4>ISS Current position</h4> <p class="apiInfo"> Longitude: ' + result.iss_position.longitude +'</p><p class="apiInfo"> Latitude: ' + result.iss_position.latitude + '</p>';
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
