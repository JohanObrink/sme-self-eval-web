import React from 'react'
import { SelectQuestion } from '../../components'
import { getList } from '../linesOfBusiness'

export default (props) => {
  const list = getList()

  return (
    <div className="row">
      <SelectQuestion
        className="col"
        headline="Vilken bransch jobbar du inom?"
        data={list} />
    </div>
  )
}
