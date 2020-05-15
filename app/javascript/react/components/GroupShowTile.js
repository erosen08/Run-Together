import React from 'react'

const GroupShowTile = props => {

  return (
    <div>
      <div>
        <h2>{props.group.name}</h2>
      </div>
      <div className="show callout">
        <h5>Description:</h5>
        <p>{props.group.description}</p>
      </div>
    </div>
  )
}

export default GroupShowTile
