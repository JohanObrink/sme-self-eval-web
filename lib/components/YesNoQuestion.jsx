import React, { useState, useEffect } from 'react'
import Question from './Question'
import { RadioButton } from '@sebgroup/react-components/dist/RadioButton/RadioButton'

export default (props) => {
  const { value, onChange, path } = props
  const [val, setVal] = useState(value)

  useEffect(() => { onChange && onChange(val) }, [val])
  return (
    <Question {...props}>
      <div className='form-check form-check-inline'>
        <RadioButton key='yes' group={path} label='Ja' radioValue='ja' value={val} onChange={(value) => setVal(value)} />
        <RadioButton key='no' group={path} label='Nej' radioValue='nej' value={val} onChange={(value) => setVal(value)} />
        <RadioButton key='notrelevant' group={path} label='Inte aktuellt' radioValue='ignorera' value={val} onChange={(value) => setVal(value)} />
      </div>
    </Question>
  )
}
