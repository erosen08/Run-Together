import React from 'react'

const GroupShowTile = props => {
  debugger

  return (
    <div>
      <div>
        <h2>{props.group.name}</h2>
      </div>
      <div className="show callout">
        <h5>Description:</h5>
        <p>{props.group.description}</p>
        <h6>Zip Code:</h6>
        <p>{props.group.zip}</p>
      </div>
    </div>
  )
}

export default GroupShowTile
