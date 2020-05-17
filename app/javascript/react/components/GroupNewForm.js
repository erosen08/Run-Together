import React, { useState } from 'react'
import _ from "lodash"

import ErrorList from "./ErrorList"

const GroupNewForm = props => {
  const [errors, setErrors] = useState({})
  const [newFormPayload, setNewFormPayload] = useState({
    name: "",
    description: "",
    zip: "",
    difficulty: ""
  })

  const handleInputChange = event => {
    setNewFormPayload({
      ...newFormPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "description", "zip"]
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
        description: "",
        zip: "",
        difficulty: ""
      })
      setErrors({})
    }
  }

  return (
    <div className="grid-container new-group">
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <label className="name">
          Name:
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Name"
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
            placeholder="Description"
            onChange={handleInputChange}
            value={newFormPayload.description}
          />
        </label>
        <label className="zip">
          Zip Code:
          <input
            name="zip"
            id="zip"
            type="text"
            placeholder="Zip"
            onChange={handleInputChange}
            value={newFormPayload.zip}
          />
        </label>
        <label className="difficulty">
          Difficulty (optional):
          <select name="difficulty" id="difficulty" onChange={handleInputChange} value={newFormPayload.difficulty}>
            <option value =""></option>
            <option value ="Beginner">Beginner</option>
            <option value ="Intermediate">Intermediate</option>
            <option value ="Expert">Expert</option>
          </select>
        </label>

      <div className="button-group">
        <input className="button" type="submit" value="Add New Group" />
      </div>
      </form>
    </div>
  )
}

export default GroupNewForm
