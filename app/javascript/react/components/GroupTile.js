import React from "react"
import { Link } from 'react-router-dom'

const GroupTile = (props) => {

  return (
    <div  className="cell callout text-center medium-4">
      <h3>
        <Link to={`/groups/${props.group.id}`} className="group-name">{props.group.name}</Link>
      </h3>
    </div>
  )
}

export default GroupTile;