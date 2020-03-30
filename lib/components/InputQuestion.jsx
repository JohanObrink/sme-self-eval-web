import React, { useState, useEffect } from 'react'
import Question from './Question'
import { TextBox } from '@sebgroup/react-components/dist/TextBox/TextBox'

export default (props) => {
  const { inputType, value, onChange } = props
  const [val, setVal] = useState(value)
  useEffect(() => { onChange && onChange(val)}, [val])
  return (
    <Question {...props}>
      <TextBox type={inputType} value={val} onChange={(event) => setVal(event.target.value)} />
    </Question>
  )
}
