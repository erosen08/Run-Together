import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import GroupShowTile from '../components/GroupShowTile'
import RunTile from '../components/RunTile'
import NewRunForm from '../components/NewRunForm'

const GroupsShowContainer = props => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [redirectJoin, setRedirectJoin] = useState(false)
  const [group, setGroup] = useState({
    name: "",
    description: "",
    runs: [],
    memberships: []
  })
  const [groupRuns, setGroupRuns] = useState([])
  const [newRun, setNewRun] = useState({
    name: "",
    description: "",
    start_time: "",
    start_location: "",
    distance: ""
  })

  const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/groups/${id}`)
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
    .then(parsedGroup => {
      setGroup(parsedGroup.group)
      setUser(parsedGroup.group.user)
      setGroupRuns(parsedGroup.group.runs)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  const deleteGroup = (group) =>  {
    if (window.confirm('Are you sure you would like to delete this group?')) {
      fetch(`/api/v1/groups/${id}`, {
        credentials: "same-origin",
        method: 'DELETE',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if(response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
        }
      })
      .then(response => response.json())
      .then(body => {
        if (body.notification) {
          setRedirect(true)
        } else {
          setErrors(body.error)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  if (redirect) {
    return <Redirect to={'/groups'} />
  }

  const handleDelete = event => {
    event.preventDefault()
    deleteGroup(group)
  }

  const joinGroup = (group) => {
    fetch(`/api/v1/groups/${id}/memberships`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(group),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.notification) {
        alert("You have succesfully joined the group!")
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const handleJoin = event => {
    event.preventDefault()
    joinGroup(group)
  }

  const addNewRun = (formPayload) => {
    fetch(`/api/v1/groups/${id}/runs`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error)
      }
    })
    .then(response => response.json())
    .then(parsedNewRun => {
      setGroupRuns([
        ...groupRuns,
        parsedNewRun.run
      ])
      window.scrollTo(0, 0)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const groupRunsList = groupRuns.map(run => {
    return (
      <RunTile
        key={run.id}
        run={run}
      />
    )
  })

  return(
    <div>
      <div className="show">
        <GroupShowTile group={group} />
        {groupRunsList}
        <NewRunForm
          id={id}
          addNewRun={addNewRun}
        />
      </div>
      <div className="bottom-bar">
        <button className="join-group" onClick={handleJoin}>Join this Group</button><br/ >
        <Link to={`/groups/${id}/edit`}>Edit this Group</Link><br />
        <button className="delete-group" onClick={handleDelete}>Delete Group</button><br />
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}

export default GroupsShowContainer
