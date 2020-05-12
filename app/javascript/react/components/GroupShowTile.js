import React from 'react'

import RunTile from './RunTile'

const GroupShowTile = props => {

  const groupRuns = props.runs.map(run => {
    return (
      <RunTile
        key={run.id}
        run={run}
      />
    )
  })

  return (
    <div>
      <div>
        <h2>{props.group.name}</h2>
      </div>
      <div className="show callout">
        <h5>Description:</h5>
        <p>{props.group.description}</p>
      </div>
      <div>
        <h4>{props.group.name}'s Runs</h4>
        {groupRuns}
      </div>
    </div>
  )
}

export default GroupShowTile
