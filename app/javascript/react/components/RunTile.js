import React from 'react'
import { Link } from 'react-router-dom'

const RunTile = props => {

  return (
    <div className="run callout">
      <Link to={`/groups/${props.run.group_id}/runs/${props.run.id}`}>{props.run.name}</Link> - {props.run.start_time}
    </div>
  )
}

export default RunTile
