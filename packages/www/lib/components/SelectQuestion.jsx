import React from 'react'
import Question from './Question'
import { Dropdown } from '@sebgroup/react-components/dist/Dropdown'

export default class SelectQuestion extends Question {
  constructor (props) {
    super(props)
    this.value = null
  }
  render () {
    return super.render(
      <div>
        <Dropdown list={this.props.data} />
      </div>
    )
  }
}
