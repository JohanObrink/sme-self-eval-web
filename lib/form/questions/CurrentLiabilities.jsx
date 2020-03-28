import React from 'react'
import { SliderQuestion } from '../../components'
import { useFormData } from '../hooks'

export default (props) => {
  const [answer, setAnswer] = useFormData(props)
  const onChange = (value) => {
    setAnswer(value)
  }
  return (
    <div className="row">
      <SliderQuestion
        className="class"
        headline={props.headline}
        min={0}
        max={10000000}
        step={1000}
        onChange={onChange} />
    </div>
  )
}