import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import GroupNewForm from '../components/GroupNewForm'

const GroupsNewContainer = props => {
  const [redirect, setRedirect] = useState(false)
  const [group, setGroup] = useState({})

  const addNewGroup = (formPayload) => {
    fetch('/api/v1/groups', {
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
    .then(parsedNewGroup => {
      let group = parsedNewGroup.group
      setGroup(group)
      setRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (redirect) {
    return <Redirect to={`/groups/${group.id}`} />
  }

  return (
    <div>
      <GroupNewForm addNewGroup={addNewGroup} />
    </div>
  )
}

export default GroupsNewContainer
