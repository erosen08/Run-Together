import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import GroupShowTile from '../components/GroupShowTile'
import UserTile from '../components/UserTile'

const GroupsShowContainer = props => {
  const [errors, setErrors] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [group, setGroup] = useState({
    name: "",
    description: "",
    users: []
  })
  const [groupUsers, setGroupUsers] = useState([])

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
      setGroupUsers(parsedGroup.group.users)
    })
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  const usersList = groupUsers.map(user => {
    return (
      <UserTile
      key={user.id}
      first_name={user.first_name}
      last_name={user.last_name}
      />
    )
  })

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

  return(
    <div>
      <GroupShowTile group={group} />
      <h5>Roster:</h5>
      {usersList}
      <Link to={`/groups/${id}/edit`}>Edit this Group</Link><br />
      <button onClick={handleDelete}>Delete</button><br />
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default GroupsShowContainer
