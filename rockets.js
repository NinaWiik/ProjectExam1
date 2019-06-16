// ROCKETS

fetch('https://api.spacexdata.com/v3/rockets')
        .then(result => result.json())
    .then((res) => {
        createRockets(res);
    })
.catch(err => console.log(err))

function createRockets(result){
    for(var i=0; i < result.length; i++){
        document.getElementById('rockets').innerHTML += '<div class="rocketcontainer"><h2>' + result[i].rocket_name +' </h2> <img src="' + result[i].flickr_images[1] + '" class="rocketimages"> <b><p class="column"> Rocket ID: </b> '+ result[i].rocket_id +' </p> <b><p class="column"> Rocket type:</b> '+ result[i].rocket_type +' </p> <b><p class="column"> Height in meters: </b>'+ result[i].height.meters + '  </p> <b> <p class="column"> Diameter in meters: </b> '+ result[i].diameter.meters + ' </p> <b>  <p class="column"> Mass in kilos:</b> '+ result[i].mass.kg + '  </p> <b><p class="column">Cost per launch: </b>'+ result[i].cost_per_launch +' </p> <b><p class="column">First Flight:</b> '+ result[i].first_flight +' </p> <b> <p class="column">Country:</b> '+ result[i].country +' </p><b><p class="column"> Description: </b> '+ result[i].description + '  </p>  <a class="links" href="' + result[i].wikipedia +' "> INFO ON WIKIPEDIA </a>  </div>';
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
        document.getElementById('dragons').innerHTML += '<div class="rocketcontainer"><h2>' + result[i].name +' </h2> <img src="' + result[i].flickr_images[0] + '" class="rocketimages"> <b><p class="column"> Dragon ID: </b>'+ result[i].id +' </p><b> <p class="column"> Type:</b> '+ result[i].type +' </p> <b><p class="column"> Crew Capacity:</b> '+ result[i].crew_capacity +' </p><b> <p class="column"> First Flight: </b>'+ result[i].first_flight +' </p><b> <p class="column"> Dry Mass in Kg:</b> '+ result[i].dry_mass_kg +' </p> <b><p class="column"> Diameter in meters:</b> '+ result[i].diameter.meters +' </p><b> <p class="column"> Description: </b>'+ result[i].description +' </p>  <a class="links" href="' + result[i].wikipedia +' "> INFO ON WIKIPEDIA </a> </div>';
    }
    
}