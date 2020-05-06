import React, { useState, useEffect } from "react";
import GroupTile from "../components/GroupTile";

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
      .then(parsedGroupData => setGroups(parsedGroupData))
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
      {groupTiles}
    </div>
  )
}

export default GroupsIndexContainer;
