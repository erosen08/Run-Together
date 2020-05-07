import React, { useState, useEffect } from 'react'

import GroupShowTile from '../components/GroupShowTile'

const GroupsShowContainer = props => {
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
    .then(parsedGroup => setGroup(parsedGroup.group))
    .catch(error => console.error(`Error in fetch: ${errorMessage}`))
  }, [])

  return(
    <div>
      <GroupShowTile group={group} />
    </div>
  )
}

export default GroupsShowContainer
