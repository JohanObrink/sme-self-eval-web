import React from 'react'
import { InputQuestion } from '../../components'

export default () => {
  return (
    <div className="row">
      <InputQuestion
        className="col"
        type="number"
        headline="Hur många anställda har ni?" />
    </div>
  )
}
