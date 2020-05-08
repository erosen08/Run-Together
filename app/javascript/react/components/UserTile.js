import React from "react"
import { Link } from 'react-router-dom'

const UserTile = (props) => {

  return (
    <div>
      <ul>
        <li>{props.first_name}</li>
      </ul>
    </div>
  )
}

export default UserTile;
