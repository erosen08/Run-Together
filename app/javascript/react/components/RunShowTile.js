import React from 'react'

import MapComponent from './MapComponent'
import WeatherComponent from './WeatherComponent'

const RunShowTile = (props) => {

  return (
    <div>
      <div>
        <h2>{props.run.name}</h2>
      </div>
      <div className="run-show callout">
        <div className= "run-info">
          <p >Description: {props.run.description}</p>
          <p>Distance: {props.run.distance} miles</p>
          <p>Start Time: {props.run.start_time}</p>
          <div className="weather-container">
            <WeatherComponent location={props.run.start_location} />
          </div>
          <MapComponent location={props.run.start_location} />
          <p className="starting-point">Starting Location: {props.run.start_location}</p>
        </div>
      </div>
    </div>
  )
}

export default RunShowTile;
