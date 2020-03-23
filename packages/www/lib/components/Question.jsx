import React, { Component } from 'react'

export default class Question extends Component {
  constructor (props) {
    super(props)
    this.headline = props.headline
    this.text = props.text
  }
  validate () {
    return true
  }
  render (children=[]) {
    return (
      <div>
        <h3>{this.headline}</h3>
        <p>{this.text}</p>
        {children}
      </div>
    )
  }
}
