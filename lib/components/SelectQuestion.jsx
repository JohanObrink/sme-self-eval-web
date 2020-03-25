import React, { useState, useEffect } from 'react'
import Question from './Question'
import { Dropdown } from '@sebgroup/react-components/dist/Dropdown/Dropdown'

export default ({ headline='Select Question', data, onChange, ...props }) => {
  const [selected, setSelected] = useState()
  useEffect(() => { onChange && onChange(selected)}, [selected])
  return (
    <Question {...{headline, ...props}}>
      <Dropdown list={data} selectedValue={selected} onChange={(val) => setSelected(val)} />
    </Question>
  )
}
