import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GroupsIndexContainer from '../containers/GroupsIndexContainer'
import GroupsShowContainer from '../containers/GroupsShowContainer'
import GroupsNewContainer from '../containers/GroupsNewContainer'
import GroupsEditContainer from '../containers/GroupsEditContainer'
import GroupRunsShowContainer from '../containers/GroupRunsShowContainer'

export const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GroupsIndexContainer} />
        <Route exact path='/groups' component={GroupsIndexContainer} />
        <Route exact path='/groups/new' component={GroupsNewContainer} />
        <Route exact path='/groups/:id' component={GroupsShowContainer} />
        <Route exact path='/groups/:id/edit' component={GroupsEditContainer} />
        <Route exact path='/groups/:id/runs/:id' component={GroupRunsShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
