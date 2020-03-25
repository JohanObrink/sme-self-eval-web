import React, { useState, useEffect } from 'react'
import Question from './Question'
import { TextBox } from '@sebgroup/react-components/dist/TextBox/TextBox'

export default ({ headline='Input Question', type='text', onChange, ...props }) => {
  function valueOrDefault (val) {
    if (val) return val
    switch (type) {
      case 'number':
        return 0
      default:
        return ''
    }
  }
  const [value, setValue] = useState(valueOrDefault(props.value))
  useEffect(() => { onChange && onChange(value)}, [value])
  return (
    <Question {...{headline, ...props}}>
      <TextBox type={type} value={value} onChange={(event) => setValue(event.target.value)} />
    </Question>
  )
}
