import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Promise from 'promise-polyfill'

/**
 * Friends don't let friends run Internet Explorer
 */
if (typeof Object.entries !== 'function') {
  Object.entries = (obj) => Object.keys(obj).map(key => ([key, obj[key]]))
}
if (typeof window.Promise !== 'function') {
  window.Promise = Promise
}

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
