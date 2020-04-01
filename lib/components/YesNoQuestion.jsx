import React, { useState, useEffect } from 'react'
import Question from './Question'
import { RadioButton } from '@sebgroup/react-components/dist/RadioButton/RadioButton'

export default (props) => {
  const { value, onChange } = props
  const [val, setVal] = useState(value)

  useEffect(() => { onChange && onChange(val) }, [val])
  return (
    <Question {...props}>
      <div className='form-check form-check-inline'>
        <RadioButton key="yes" group='group' label='Ja' radioValue='ja' value={val} onChange={(value) => setVal(value)} />
        <RadioButton key="no" group='group' label='Nej' radioValue='nej' value={val} onChange={(value) => setVal(value)} />
      </div>
    </Question>
  )
}
