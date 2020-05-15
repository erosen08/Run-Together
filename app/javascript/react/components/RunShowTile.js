import React from 'react'

import MapComponent from './MapComponent'

const RunShowTile = (props) => {

  return (
    <div>
      <div>
        <h2>{props.run.name}</h2>
      </div>
      <div className="show callout">
        <p>Description: {props.run.description}</p>
        <p>Start Time: {props.run.start_time}</p>
        <p>Distance: {props.run.distance} miles</p>
        <p>{props.run.start_location}</p>
        <MapComponent location={props.run.start_location} />
      </div>
    </div>
  )
}

export default RunShowTile;
