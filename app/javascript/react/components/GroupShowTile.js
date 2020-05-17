import React from 'react'

const GroupShowTile = props => {

  return (
    <div>
      <div>
        <h2>{props.group.name}</h2>
      </div>
      <div className="show callout">
        <h5 className="description-run">Description:</h5>
        <p>{props.group.description}</p>
        <div className="grid-x">
          <div className="cell small-6 difficulty-run">
            <h6>Difficulty:</h6>
            <p>{props.group.difficulty}</p>
          </div>
          <div className="cell small-6 zip-run">
            <h6>Zip Code:</h6>
            <p>{props.group.zip}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupShowTile
