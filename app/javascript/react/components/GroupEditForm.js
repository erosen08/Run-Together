import React, { useState } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import ErrorList from './ErrorList'

const GroupEditForm = props =>  {
  const [errors, setErrors] = useState({})
  const [editFormPayload, setEditFormPayload] = useState({
    name: "",
    description: ""
  })

  const handleInputChange = event => {
    setEditFormPayload({
      ...editFormPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "description"]
    requiredFields.forEach(field => {
      if (editFormPayload[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      props.editGroup(editFormPayload)
      setEditFormPayload({
        name: "",
        description: ""
      })
      setErrors({})
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <label className="name">
          Name:
          <input
            name="name"
            id="name"
            type="text"
            onChange={handleInputChange}
            value={editFormPayload.name}
          />
        </label>
        <label className="description">
          Description:
          <input
            name="description"
            id="description"
            type="text"
            onChange={handleInputChange}
            value={editFormPayload.description}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Update Group" />
        </div>
      </form>
    <Link to={`/groups/${props.id}`}>Back to Details</Link><br />
    <Link to="/">Back to Home</Link>
  </div>
  )
}

export default GroupEditForm
