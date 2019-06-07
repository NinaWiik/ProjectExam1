// INDEX
fetch('http://api.open-notify.org/astros.json')
        .then(result => result.json())
    .then((res) => {
        createSpaceAPI(res);
    })
.catch(err => console.log(err))

function createSpaceAPI(result){
    document.getElementById('spaceAPI').innerHTML += '<p class="apiInfo"> People in space: ' + result.number +' </p>';
}


fetch('http://api.open-notify.org/iss-now.json')
        .then(result => result.json())
    .then((res) => {
        createSpaceAPI1(res);
    })
.catch(err => console.log(err))

function createSpaceAPI1(result){
    document.getElementById('spaceAPI').innerHTML += '<h4>ISS Current position</h4> <p class="apiInfo"> Longitude: ' + result.iss_position.longitude +'</p><p class="apiInfo"> Latitude: ' + result.iss_position.latitude + '</p>';
}


// ROCKETS

fetch('https://api.spacexdata.com/v3/rockets')
        .then(result => result.json())
    .then((res) => {
        createRockets(res);
    })
.catch(err => console.log(err))

function createRockets(result){
    for(var i=0; i < result.length; i++){
        document.getElementById('rockets').innerHTML += '<div class="rocketcontainer"><h2>' + result[i].rocket_name +' </h2> <img src="' + result[i].flickr_images[1] + '" class="rocketimages"> <p class="column"> Rocket ID: '+ result[i].rocket_id +' </p> <p class="column"> Rocket type: '+ result[i].rocket_type +' </p> <p class="column"> Height in meters: '+ result[i].height.meters + '  </p>  <p class="column"> Diameter in meters: '+ result[i].diameter.meters + ' </p>  <p class="column"> Mass in kilos: '+ result[i].mass.kg + '  </p> <p class="column">Cost per launch: '+ result[i].cost_per_launch +' </p> <p class="column">First Flight: '+ result[i].first_flight +' </p> <p class="column">Country: '+ result[i].country +' </p> <p class="column"> <p class="column"> Description: '+ result[i].description + '  </p>  <a class="links" href="' + result[i].wikipedia +' "> INFO ON WIKIPEDIA </a>  </div>';
    }
}

// DRAGONS

fetch('https://api.spacexdata.com/v3/dragons')
        .then(result => result.json())
    .then ((res) => {
        createDragons(res);
    })
.catch(err => console.log(err))

function createDragons(result){
    for(var i=0; i < result.length; i++){
        document.getElementById('dragons').innerHTML += '<div class="rocketcontainer"><h2>' + result[i].name +' </h2> <img src="' + result[i].flickr_images[0] + '" class="rocketimages"> <p class="column"> Dragon ID: '+ result[i].id +' </p> <p class="column"> Type: '+ result[i].type +' </p> <p class="column"> Crew Capacity: '+ result[i].crew_capacity +' </p> <p class="column"> First Flight: '+ result[i].first_flight +' </p> <p class="column"> Dry Mass in Kg: '+ result[i].dry_mass_kg +' </p> <p class="column"> Diameter in meters: '+ result[i].diameter.meters +' </p> <p class="column"> Description: '+ result[i].description +' </p>  <a class="links" href="' + result[i].wikipedia +' "> INFO ON WIKIPEDIA </a> </div>';
    }
    
}

// UPCOMING LAUNCHES

fetch('https://api.spacexdata.com/v3/launches/upcoming')
        .then(result => result.json())
    .then ((res) => {
            createUpcomingLaunches(res);
    })
.catch(err => console.log(err))

function createUpcomingLaunches(result){
    for(var i=0; i < result.length; i++){
        document.getElementById('upcominglaunches').innerHTML += '<div class="launchcontainer"><h5>' + result[i].mission_name +' </h5> <p class="column"> Flight Number: '+ result[i].flight_number +' </p> <p class="column"> Launch Year: '+ result[i].launch_year +' </p> <p class="column"> Launch date UTC: '+ result[i].launch_date_utc +' </p> <p class="column"> Rocket ID: '+ result[i].rocket.rocket_id +' </p> <p class="column"> Rocket Name: '+ result[i].rocket.rocket_name +' </p> <p class="column"> Launch Site: '+ result[i].launch_site.site_name_long +' </p> <p class="column"> Details: '+ result[i].details +' </p></div>'; 
    }
}


// NEXT LAUNCH

fetch('https://api.spacexdata.com/v3/launches/next')
        .then(result => result.json())
    .then ((res) => {
        createNextLaunch(res);
    })
.catch(err => console.log(err))

function createNextLaunch(result){
        document.getElementById('nextlaunch').innerHTML += '<div class="launchcontainer"><h5>' + result.mission_name +' </h5> <p class="column"> Flight Number: '+ result.flight_number +' </p> <p class="column"> Launch Year: '+ result.launch_year +' </p>  <p class="column"> Launch date UTC: '+ result.launch_date_utc +' </p> <p class="column"> Rocket ID: '+ result.rocket.rocket_id +' </p> <p class="column"> Rocket Name: '+ result.rocket.rocket_name +' </p> Launch Site: '+ result.launch_site.site_name_long +' </p> <a class="links" href="' + result.links.reddit_campaign +' "> Reddit Campaign </a> <p class="column"> Details: '+ result.details +' </p>   </div>';
}


// LATEST LAUNCH

fetch('https://api.spacexdata.com/v3/launches/latest')
        .then(result => result.json())
    .then ((res) => {
        createLatestLaunch(res);
    })
.catch(err => console.log(err))

function createLatestLaunch(result){
        document.getElementById('latestlaunch').innerHTML += '<div class="launchcontainer"><h5>' + result.mission_name +' </h5> <p class="column"> Flight Number: '+ result.flight_number +' </p> <p class="column"> Launch Success: '+ result.launch_success +' </p>  <p class="column"> Launch Year: '+ result.launch_year +' </p>  <p class="column"> Launch date UTC: '+ result.launch_date_utc +' </p> <p class="column"> Rocket ID: '+ result.rocket.rocket_id +' </p> <p class="column"> Rocket Name: '+ result.rocket.rocket_name +' </p> Launch Site: '+ result.launch_site.site_name_long +' </p>  <p class="column"> Details: '+ result.details +' </p> <h3> Links </h3> <a class="linkslaunch" href="' + result.links.reddit_campaign +' "> Reddit Campaign </a> <a class="linkslaunch" href="' + result.links.reddit_launch +' "> Reddit Launch </a> <a class="linkslaunch" href="' + result.links.reddit_media +' "> Reddit Media </a> <a class="linkslaunch" href="' + result.links.presskit +' "> Press Kit </a> <a class="linkslaunch" href="' + result.links.article_link +' "> Article Link </a> <a class="linkslaunch" href="' + result.links.wikipedia +' "> Wikipedia </a> <a class="linkslaunch" href="' + result.links.video_link +' "> Youtube Video </a> <img src="' + result.links.flickr_images[2] + '" class="rocketimages"> </div>';
}

//CONTACT FORM
document.getElementById("submitContact").addEventListener ("click", function () {
    var firstNameValue = document.getElementById("firstName").value;
    var firstNameError = document.getElementById("firstNameError");
    document.getElementById("firstNameError").style.display = "none";
        if (!firstNameValue)  {
        document.getElementById("firstNameError").style.display = "block";
        };
    
    var lastNameValue = document.getElementById("lastName").value;
    var lastNameError = document.getElementById("lastNameError");
        document.getElementById("lastNameError").style.display = "none";
        if (!lastNameValue) {
        document.getElementById("lastNameError").style.display = "block";
        };
    
    
    var telephoneValue = document.getElementById("phone").value;
    var phoneRegExp = /^[0-9()-]+$/;
    var phoneError = document.getElementById("phoneError");
        document.getElementById("phoneError").style.display = "none";
    
    phoneValidation = new RegExp (phoneRegExp);
    var phoneValidated = phoneValidation.test(telephoneValue);
        if (phoneValidation.test(telephoneValue) === false) {
            document.getElementById("phoneError").style.display = "block";
        };
    

    var emailValue = document.getElementById("email").value; 
    var emailRegExp = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$";
    var emailError = document.getElementById("emailError");
        document.getElementById("emailError").style.display = "none";

    emailValidation = new RegExp (emailRegExp);
    var emailValidated = emailValidation.test(emailValue);
        if (emailValidation.test(emailValue) === false) {
            document.getElementById("emailError").style.display = "block";
        };
    
}); 
