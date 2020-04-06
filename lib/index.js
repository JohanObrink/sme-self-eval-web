import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

if (typeof Object.entries !== 'function') {
  Object.entries = (obj) => Object.keys(obj).map(key => ([key, obj[key]]))
}

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
