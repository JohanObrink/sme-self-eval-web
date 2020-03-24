import React from 'react'
import Question from './Question'
import { Dropdown } from '@sebgroup/react-components/dist/Dropdown'

export default ({ headline='Select Question', data, ...props }) => {
  return (
    <Question {...{headline, ...props}}>
      <Dropdown list={data} />
    </Question>
  )
}
