import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import GroupRunTile from '../components/GroupRunTile'

const GroupRunsContainer = (props) => {
  const [runs, setRuns] = useState([])

  const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/groups/${id}/runs`)
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
            error = new Error(errorMessage)
        throw error
      }
    })
    .then((response) => response.json())
    .then(parsedRunData => setRuns(parsedRunData.runs))
    .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const runTiles = runs.map(run => {
    return (
      <GroupRunTile
        key={run.id}
        run={run}
      />
    )
  })

  return (
    <div>
    <h3>Group Runs</h3>
      {runTiles}
    </div>
  )
}

export default GroupRunsContainer;
