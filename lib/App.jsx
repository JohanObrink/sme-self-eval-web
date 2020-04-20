import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import IntroView from './IntroView'
import UserView from './UserView'
import ReportView from './ReportView'
import PageTracker from './components/PageTracker'

export default () => {
  return (
    <Router>
      <nav className="navbar navbar-light bg-light">
        <a href="https://seb.se/">
          <div className="navbar-brand">Självtest</div>
        </a>
        <a href="/">
          <span className="navbar-text float-left">Testa din verksamhet</span>
        </a>
      </nav>
      <PageTracker>
        <Switch>
          <Route path="/" exact component={IntroView} />
          <Route path="/test" exact component={UserView} />
          <Route path="/report/:reportId?" exact component={ReportView} />
        </Switch>
      </PageTracker>
    </Router>
  )
}
