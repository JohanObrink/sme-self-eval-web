import React from 'react'
import { SelectQuestion } from '../../components'

export default (props) => {
  const branches = [
    {label: 'a', value: 'a'},
    {label: 'b', value: 'b'},
    {label: 'c', value: 'c'}
  ]
  return (
    <div>
      <SelectQuestion
        headline="Vilken bransch jobbar du inom?"
        data={branches} />
    </div>
  )
}
