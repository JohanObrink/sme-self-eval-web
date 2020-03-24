import React, { useState, useEffect } from 'react'
import Question from './Question'
import { Button } from '@sebgroup/react-components/dist/Button'

export default ({ headline = 'Yes/No Question', value=null, ...props }) => {
  const [theme, setTheme] = useState({yes: 'secondary', no: 'secondary'})
  const [val, setVal] = useState(value)
  useEffect(() => {
    setTheme({
      yes: val === true ? 'primary' : 'secondary',
      no: val === false ? 'primary' : 'secondary'
    })
  }, [val])
  return (
    <Question {...{headline, ...props}}>
      <Button theme={theme.yes} onClick={() => setVal(true)}>Ja</Button>
      <Button theme={theme.no} onClick={() => setVal(false)}>Nej</Button>
    </Question>
  )
}
