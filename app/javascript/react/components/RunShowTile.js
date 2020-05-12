import React from 'react'
import { Link } from 'react-router-dom'

const RunShowTile = (props) => {

  return (
    <div>
      <div>
        <h2>{props.run.name}</h2>
      </div>
      <div className="show callout">
        <p>Description: {props.run.description}</p>
        <p>Start Time: {props.run.start_time}</p>
        <p>Distance: {props.run.distance}</p>
        <p>Map: {props.run.start_location}</p>
      </div>
    </div>
  )
}

export default RunShowTile;