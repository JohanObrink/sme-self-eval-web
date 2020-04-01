import React, { useState, useEffect } from 'react'
import Question from './Question'
import { Slider } from '@sebgroup/react-components/dist/Slider/Slider'

const noTemplate = (val) => (val)

export default ({ headline = 'Slider Question', min = 0, max = 100, step = 1, tooltip = noTemplate, onChange, ...props }) => {
  const [value, setValue] = useState(props.value || 0)
  const [tooltipValue, setTooltipValue] = useState(tooltip(value))
  useEffect(() => {
    setTooltipValue(tooltip(value))
  }, [value])
  useEffect(() => { onChange && onChange(value) }, [value])
  return (
    <Question {...{ headline, ...props }}>
      <Slider {...{ min, max, step, value }} onChange={(event) => setValue(event.target.value)} tooltipValue={tooltipValue} />
    </Question>
  )
}
