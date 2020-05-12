import React, { useEffect } from 'react'

const MapComponent = (props) => {

  useEffect(() => {
    const uluru = {lat: 60, lng: 60}

    const map = new google.maps.Map(document.getElementById('map'), {
         center: uluru,
         zoom: 12
    })

    const marker = new google.maps.Marker({position: uluru, map: map})
    google.maps.event.addListener(marker, 'click', function () {
      window.open(`https://www.google.com/maps?z=12&t=m&q=loc:60+60`);
   })
   marker.setMap( map )
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
