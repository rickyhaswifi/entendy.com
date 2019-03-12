function initMap() {
  // Styles a map in night mode.
    var luna = {lat: 40.518700, lng: -111.931671};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.518700, lng: -111.931671},
    zoom: 15,
    styles: []
  });
  var marker = new google.maps.Marker({
    position: luna,
    map: map,
    title: 'Hello World!'
  });
}

function openSlideMenu(){
document.getElementById('side-menu').style.width = '100%';
 document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
document.getElementById('side-menu').style.width = '0px';
 document.getElementById('main').style.marginLeft = '0px';
}


console.log("Hey!")
