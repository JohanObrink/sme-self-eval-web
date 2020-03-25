import React from 'react'
import { SelectQuestion } from '../../components'

export default (props) => {
  const branches = [
    {label: 'a', value: 'a'},
    {label: 'b', value: 'b'},
    {label: 'c', value: 'c'}
  ]
  return (
    <div className="row">
      <SelectQuestion
        className="col"
        headline="Vilken bransch jobbar du inom?"
        data={branches} />
    </div>
  )
}
