import React from 'react'
import { YesNoQuestion } from '../../components'
import { useFormData } from '../hooks'

export default (props) => {
  const [answer, setAnswer] = useFormData(props)
  const onChange = (value) => {
    setAnswer(value)
  }
  return (
    <div className="row">
      <YesNoQuestion
        className="col"
        headline={props.headline}
        onChange={onChange} />
    </div>
  )
}
