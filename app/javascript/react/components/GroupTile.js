import React from "react";

const GroupTile = (props) => {

  return (
    <div className="group-tile">
      <p>{props.group.name}</p>
    </div>
  )
}

export default GroupTile;
