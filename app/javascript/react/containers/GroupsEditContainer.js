import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import GroupEditForm from '../components/GroupEditForm'

const GroupEditContainer = props => {
  const [redirect, setRedirect] = useState(false)

  const id = props.match.params.id

  const editGroup = (editFormPayload) => {
    fetch(`/api/v1/groups/${id}`, {
      credentials: "same-origin",
      method: 'PATCH',
      body: JSON.stringify(editFormPayload),
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
    .then(parsedGroup => {
      setRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (redirect) {
    return <Redirect to={`/groups/${id}`} />
  }

  return (
    <div>
    <h2>Edit this Group</h2>
      <GroupEditForm
        editGroup={editGroup}
        id={id}
      />
    </div>
  )
}

export default GroupEditContainer
