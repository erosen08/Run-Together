import React, { useState } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import ErrorList from './ErrorList'

const NewRunForm = props => {
  const [errors, setErrors] = useState({})
  const [newFormPayload, setNewFormPayload] = useState({
    name: "",
    description: "",
    start_time: "",
    start_location: "",
    distance: ""
  })

  const handleInputChange = event => {
    setNewFormPayload({
      ...newFormPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "description", "start_time", "start_location", "distance"]
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
      props.addNewRun(newFormPayload)
      setNewFormPayload({
        name: "",
        description: "",
        start_time: "",
        start_location: "",
        distance: ""
      })
      setErrors({})
    }
  }

  return (
    <div className="new-run">
    <h4 className="show-title">Add a New Run</h4>
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
        <label className="start_time">
          Start Time:
          <input
            name="start_time"
            id="start_time"
            type="text"
            onChange={handleInputChange}
            value={newFormPayload.start_time}
          />
        </label>
        <label className="start_location">
          Starting Location:
          <input
            name="start_location"
            id="start_location"
            type="text"
            onChange={handleInputChange}
            value={newFormPayload.start_location}
          />
        </label>
        <label className="distance">
          Distance (in miles):
          <input
            name="distance"
            id="distance"
            type="text"
            onChange={handleInputChange}
            value={newFormPayload.distance}
          />
        </label>
      <div className="button-group">
        <input className="button" type="submit" value="Submit Run" />
      </div>
      </form>
    </div>
  )
}

export default NewRunForm
