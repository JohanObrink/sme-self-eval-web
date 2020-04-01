import React, { useState, useEffect } from 'react'
import Question from './Question'
import { Dropdown } from '@sebgroup/react-components/dist/Dropdown/Dropdown'

export default (props) => {
  const { value, seed, onChange } = props
  const [val, setVal] = useState(value)
  const data = seed()

  useEffect(() => { onChange && onChange(val) }, [val])
  return (
    <Question {...props}>
      <Dropdown
        placeholder='Välj ...'
        searchPlaceholder='Sök ...'
        list={data}
        selectedValue={val}
        onChange={(newVal) => setVal(newVal)}
        searchable
      />
    </Question>
  )
}
