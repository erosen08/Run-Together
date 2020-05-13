import React from 'react'
import { Link } from 'react-router-dom'

const GroupTile = (props) => {

  return (
    <div className="group-name callout">
      <h3>
        <Link to={`/groups/${props.group.id}`} className="group-title">{props.group.name}</Link>
      </h3>
    </div>
  )
}

export default GroupTile;
