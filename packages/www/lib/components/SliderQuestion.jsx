import React, { useState } from 'react'
import Question from './Question'
import { Slider } from '@sebgroup/react-components/dist/Slider'

export default ({ headline='Slider Question', min=0, max=100, step=1, ...props }) => {
  const [value, setValue] = useState(props.value || 0)
  return (
    <Question {...{headline, ...props}}>
      <Slider {...{min, max, step, value}} onChange={(event) => setValue(event.target.value)} />
    </Question>
  )
}
