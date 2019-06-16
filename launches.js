// UPCOMING LAUNCHES

fetch('https://api.spacexdata.com/v3/launches/upcoming')
        .then(result => result.json())
    .then ((res) => {
            createUpcomingLaunches(res);
    })
.catch(err => console.log(err))

function createUpcomingLaunches(result){
    for(var i=0; i < result.length; i++){
        document.getElementById('upcominglaunches').innerHTML += '<div class="launchcontainer"><h5>' + result[i].mission_name +' </h5> <b><p class="column"> Flight Number:</b> '+ result[i].flight_number +' </p> <b> <p class="column"> Launch Year: </b> '+ result[i].launch_year +' </p> <b><p class="column"> Launch date UTC:</b> '+ result[i].launch_date_utc +' </p> <b> <p class="column"> Rocket ID:</b> '+ result[i].rocket.rocket_id +' </p><b> <p class="column"> Rocket Name:</b> '+ result[i].rocket.rocket_name +' <b></p> <p class="column"> Launch Site:</b> '+ result[i].launch_site.site_name_long +' </p> <b><p class="column"> Details:</b> '+ result[i].details +' </p></div>'; 
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
        document.getElementById('nextlaunch').innerHTML += '<div class="launchcontainer"><h5>' + result.mission_name +' </h5><b> <p class="column"> Flight Number: </b>'+ result.flight_number +' </p> <b> <p class="column"> Launch Year:</b> '+ result.launch_year +' </p> <b> <p class="column"> Launch date UTC: </b>'+ result.launch_date_utc +' </p> <b><p class="column"> Rocket ID:</b> '+ result.rocket.rocket_id +' </p> <b><p class="column"> Rocket Name:</b> '+ result.rocket.rocket_name +' </p> <b><p class="column"> Launch Site: </b>'+ result.launch_site.site_name_long +' </p> <a class="links" href="' + result.links.reddit_campaign +' "><b> Reddit Campaign</b> </a> <p class="column"><b> Details:</b> '+ result.details +' </p>   </div>';
}


// LATEST LAUNCH

fetch('https://api.spacexdata.com/v3/launches/latest')
        .then(result => result.json())
    .then ((res) => {
        createLatestLaunch(res);
    })
.catch(err => console.log(err))

function createLatestLaunch(result){
        document.getElementById('latestlaunch').innerHTML += '<div class="launchcontainer"><h5>' + result.mission_name +' </h5> <b> <p class="column"> Flight Number:</b> '+ result.flight_number +' </p><b> <p class="column"> Launch Success:</b> '+ result.launch_success +' </p> <b> <p class="column"> Launch Year:</b> '+ result.launch_year +' </p>  <p class="column"><b> Launch date UTC:</b> '+ result.launch_date_utc +' </p> <p class="column"> <b>Rocket ID:</b> '+ result.rocket.rocket_id +' </p> <p class="column"> <b>Rocket Name:</b> '+ result.rocket.rocket_name +' </p> <p class="column"><b> Launch Site:</b> '+ result.launch_site.site_name_long +' </p>  <p class="column"> <b>Details:</b> '+ result.details +' </p> <h3> LINKS </h3> <a class="linkslaunch" href="' + result.links.reddit_campaign +' "> Reddit Campaign </a> <a class="linkslaunch" href="' + result.links.reddit_launch +' "> Reddit Launch </a> <a class="linkslaunch" href="' + result.links.reddit_media +' "> Reddit Media </a> <a class="linkslaunch" href="' + result.links.presskit +' "> Press Kit </a> <a class="linkslaunch" href="' + result.links.article_link +' "> Article Link </a> <a class="linkslaunch" href="' + result.links.wikipedia +' "> Wikipedia </a> <a class="linkslaunch" href="' + result.links.video_link +' "> Youtube Video </a> <img src="' + result.links.flickr_images[0] + '" class="rocketimages"> <img src="' + result.links.flickr_images[1] + '" class="rocketimages"> <img src="' + result.links.flickr_images[5] + '" class="rocketimages"> </div>';
}
