import React, { useState, useEffect } from 'react'
import Question from './Question'
import { Button } from '@sebgroup/react-components/dist/Button/Button'

export default (props) => {
  const { value, seed, onChange } = props
  const [val, setVal] = useState(value)
  const data = seed()
  const perRow = data.length === 4 ? 2 : 3

  const getButtons = (list) => {
    const children = []
    list.forEach(({label, value}, index) => {
      children.push(
        <Button
          label={label}
          value={value}
          theme={(val === value) ? 'primary' : 'secondary'}
          onChange={(newVal) => setVal(newVal)}
        />
      )
      if (index & perRow === 0) {
        children.push(<hr />)
      }
    })
    return children
  }
  
  useEffect(() => { onChange && onChange(val) }, [val])
  return (
    <Question {...props}>
      <div className='form-check form-check-inline'>
        {getButtons(data)}
      </div>
    </Question>
  )
}
