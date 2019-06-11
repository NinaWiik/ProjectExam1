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