import React from 'react'
import { SliderQuestion } from '../../components'
import { useFormData } from '../hooks'

const tooltip = (val) => {
  if (val === 0) return '0 SEK'
  if (val < 1000000) return `${val / 1000} kSEK`
  return `${val / 1000000} MSEK`
}

export default (props) => {
  const [answer, setAnswer] = useFormData(props)
  const onChange = (value) => {
    setAnswer(value)
  }
  return (
    <div className="row">
      <SliderQuestion
        className="col"
        headline={props.headline}
        min={0}
        max={10000000}
        step={1000}
        tooltip={tooltip}
        onChange={onChange} />
    </div>
  )
}