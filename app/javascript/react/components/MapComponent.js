import React, { useEffect } from 'react'

const MapComponent = (props) => {

  useEffect(() => {
    const geocoder = new google.maps.Geocoder();
    const address = `${props.location}`

    geocoder.geocode( { 'address': address}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        let latitude = results[0].geometry.location.lat()
        let longitude = results[0].geometry.location.lng()
        const map = new google.maps.Map(document.getElementById('map'), {
             center: results[0].geometry.location,
             zoom: 15
        })
        const marker = new google.maps.Marker({position: results[0].geometry.location, map: map})
        google.maps.event.addListener(marker, 'click', function () {
          window.open('https://www.google.com/maps?z=12&t=m&q=loc:latitude+longitude');
       })
        marker.setMap( map )
      }
    })
  })

  return (
    <div id="map"></div>
  )
}

export default MapComponent

function loadJS(src) {
  let ref = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
