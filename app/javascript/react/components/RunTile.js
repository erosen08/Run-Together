import React from 'react'
import { Link } from 'react-router-dom'

const RunTile = props => {

  return (
    <div>
      <Link to={`/groups/${props.run.group_id}/runs/${props.run.id}`}>{props.run.name}</Link>
    </div>
  )
}

export default RunTile
