import React, { useState } from 'react'
import _ from "lodash"

import ErrorList from "./ErrorList"

const GroupNewForm = props => {
  const [errors, setErrors] = useState({})
  const [newFormPayload, setNewFormPayload] = useState({
    name: "",
    description: ""
  })

  const handleInputChange = event => {
    setNewFormPayload({
      ...newFormPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "description"]
    requiredFields.forEach(field => {
      if (newFormPayload[field].trim() === "") {
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
      props.addNewGroup(newFormPayload)
      setNewFormPayload({
        name: "",
        description: ""
      })
      setErrors({})
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <ErrorList errors={errors} />
      <label className="name">
        Name:
        <input
          name="name"
          id="name"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.name}
        />
      </label>
      <label className="description">
        Description:
        <input
          name="description"
          id="description"
          type="text"
          onChange={handleInputChange}
          value={newFormPayload.description}
        />
      </label>

    <div className="button-group">
      <input className="button" type="submit" value="Add New Group" />
    </div>
    </form>
  )
}

export default GroupNewForm
