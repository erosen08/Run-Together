import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import GroupTile from '../components/GroupTile'

const GroupsIndexContainer = (props) => {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetch('/api/v1/groups')
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
    .then(parsedGroupData => setGroups(parsedGroupData.groups))
    .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const groupTiles = groups.map(group => {
    return (
      <GroupTile
        key={group.id}
        group={group}
      />
    )
  })

  return (
    <div>
      <h2 className="index-title">Running Groups</h2>
      <div className="groups">
        {groupTiles}
      </div>
      <div className="bottom-bar">
      <Link to="/groups/new">Add a Group</Link>
      </div>
    </div>
  )
}

export default GroupsIndexContainer;
