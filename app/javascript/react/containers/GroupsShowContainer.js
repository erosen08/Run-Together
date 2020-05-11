import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import GroupShowTile from '../components/GroupShowTile'

const GroupsShowContainer = props => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [redirectJoin, setRedirectJoin] = useState(false)
  const [redirectLeave, setRedirectLeave] = useState(false)
  const [group, setGroup] = useState({
    name: "",
    description: ""
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
    fetch('/api/v1/memberships', {
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
        setRedirectJoin(true)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (redirectJoin) {
    return <Redirect to={'/groups'} />
  }

  const handleJoin = event => {
    event.preventDefault()
    joinGroup(group)
  }

  const leaveGroup = (group) => {
    fetch(`/api/v1/memberships/${id}`, {
      credentials: "same-origin",
      method: 'DELETE',
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
        setRedirectLeave(true)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const handleLeave = event => {
    event.preventDefault()
    leaveGroup(group)
  }

  if (redirectLeave) {
    return <Redirect to={'/groups'} />
  }

  return(
    <div>
      <GroupShowTile group={group} />
      <button onClick={handleJoin}>Join this Group</button><br />
      <button onClick={handleLeave}>Leave this Group</button><br />
      <Link to={`/groups/${id}/edit`}>Edit this Group</Link><br />
      <button onClick={handleDelete}>Delete</button><br />
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default GroupsShowContainer
