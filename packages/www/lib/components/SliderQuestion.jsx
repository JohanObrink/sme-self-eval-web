import React, { useState } from 'react'
import Question from './Question'
import { Slider } from '@sebgroup/react-components/dist/Slider'

export default ({ headline='Slider Question', min=0, max=100, step=1, value=0, ...props }) => {
  const [sliderValue, setSliderValue] = useState(value)
  return (
    <Question {...{headline, ...props}}>
      <Slider {...{min, max, step, value: sliderValue}} onChange={(event) => setSliderValue(event.target.value)} />
    </Question>
  )
}
