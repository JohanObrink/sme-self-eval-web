import React, { useState, useEffect } from 'react'
import Question from './Question'
import { RadioButton } from '@sebgroup/react-components/dist/RadioButton/RadioButton'

export default ({ headline = 'Yes/No Question', value=null, onChange, ...props }) => {
  const [val, setVal] = useState(value)
  
  useEffect(() => { onChange && onChange(val) }, [val])
  return (
    <Question {...{headline, ...props}}>
      <div className="form-check form-check-inline">
        <RadioButton group={"group"} label="Ja" radioValue="ja" value={val} onChange={(value) => setVal(value)} />
        <RadioButton group={"group"} label="Nej" radioValue="nej" value={val} onChange={(value) => setVal(value)} />
      </div>
    </Question>
  )
}
