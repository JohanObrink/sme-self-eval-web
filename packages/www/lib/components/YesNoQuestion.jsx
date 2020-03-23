import React from 'react'
import Question from './Question'
import { Button } from '@sebgroup/react-components/dist/Button'

export default class YesNoQuestion extends Question {
  constructor (props) {
    super({ headline: 'Yes/No Question', ...props })
    this.value = null
  }
  render () {
    return super.render(
      <div>
        <Button theme="primary">Yes</Button>
        <Button theme="secondary">No</Button>
      </div>
    )
  }
}
