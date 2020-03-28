import React from 'react'
import { SelectQuestion } from '../../components'
import { getList } from '../linesOfBusiness'
import { useFormData } from '../hooks'

export default (props) => {
  const list = getList()
  const [answer, setAnswer] = useFormData(props)
  const onChange = (value) => {
    setAnswer(value)
  }

  return (
    <div className="row">
      <SelectQuestion
        className="col"
        headline={props.headline}
        data={list}
        onChange={onChange} />
    </div>
  )
}
