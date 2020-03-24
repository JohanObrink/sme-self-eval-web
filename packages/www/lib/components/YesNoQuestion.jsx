import React from 'react'
import Question from './Question'
import { Button } from '@sebgroup/react-components/dist/Button'

export default ({ headline = 'Yes/No Question', ...props }) => {
  return (
    <Question {...{headline, ...props}}>
      <Button theme="primary">Yes</Button>
      <Button theme="secondary">No</Button>
    </Question>
  )
}
