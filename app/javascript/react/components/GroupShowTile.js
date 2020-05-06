import React from 'react'

const GroupShowTile = props => {

  return (
    <div>
      <h3>{props.group.name}</h3>
      <h5>Description:</h5>
      <p>{props.group.description}</p>
    </div>
  )
}

export default GroupShowTile
