import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Promise from 'promise-polyfill'
import { fetch } from 'whatwg-fetch'

/**
 * Friends don't let friends run Internet Explorer
 */
if (typeof Object.entries !== 'function') {
  Object.entries = (obj) => Object.keys(obj).map(key => ([key, obj[key]]))
}
if (typeof window.Promise !== 'function') {
  window.Promise = Promise
}
if (typeof window.fetch !== 'function') {
  window.fetch = fetch
}

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
