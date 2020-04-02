import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import IntroView from './IntroView'
import UserView from './UserView'
import ReportView from './ReportView'

export default () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={IntroView} />
        <Route path='/test' exact component={UserView} />
        <Route path='/report/:reportId?' exact component={ReportView} />
      </Switch>
    </Router>
  )
}
