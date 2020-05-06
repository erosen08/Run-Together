import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GroupsIndexContainer from '../containers/GroupsIndexContainer'

export const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GroupsIndexContainer} />
        <Route exact path='/groups' component={GroupsIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
