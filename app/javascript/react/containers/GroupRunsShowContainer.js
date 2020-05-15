import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import RunShowTile from '../components/RunShowTile'

const GroupRunsShowContainer = props => {
  const [run, setRun] = useState({
    name: "",
    description: "",
    start_time: "",
    start_location: "",
    distance: null
  })

  const path = props.location.pathname

  useEffect(() => {
    fetch('/api/v1' + path)
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
            error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(parsedRun => {
      setRun(parsedRun.run)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  return(
    <div>
      <div>
        <RunShowTile run={run} />
      </div>
      <div className="bottom-bar">
        <Link to={`/groups/${run.group_id}`}>Back to Group</Link><br />
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}

export default GroupRunsShowContainer
