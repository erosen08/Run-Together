import React from 'react'

const GroupRunTile = (props) => {

  return (
    <div>

      <h3>Name: {props.run.name}</h3>
      <p>Description: {props.run.description}</p>
      <p>Distance: {props.run.distance}</p>
      <p>Start Time: {props.run.start_time}</p>
      <p>Start Location (MAP): {props.run.start_location}</p>
    </div>
  )
}

export default GroupRunTile;
