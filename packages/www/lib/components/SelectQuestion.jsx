import React, { useState } from 'react'
import Question from './Question'
import { Dropdown } from '@sebgroup/react-components/dist/Dropdown'

export default ({ headline='Select Question', data, ...props }) => {
  const [selected, setSelected] = useState()
  return (
    <Question {...{headline, ...props}}>
      <Dropdown list={data} selectedValue={selected} onChange={(val) => setSelected(val)} />
    </Question>
  )
}
