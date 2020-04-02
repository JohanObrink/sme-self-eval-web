import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import IntroView from './IntroView'
import UserView from './UserView'
import ReportView from './ReportView'
import PageTracker from './components/PageTracker'

export default () => {
  return (
    <Router>
      <nav className='navbar navbar-light bg-light'>
        <span className='navbar-brand' href='#'>
          Självtest
        </span>
        <span className='navbar-text'>Testa din verksamhet</span>
      </nav>
      <PageTracker>
        <Switch>
          <Route path='/' exact component={IntroView} />
          <Route path='/test' exact component={UserView} />
          <Route path='/report/:reportId?' exact component={ReportView} />
        </Switch>
      </PageTracker>
    </Router>
  )
}
