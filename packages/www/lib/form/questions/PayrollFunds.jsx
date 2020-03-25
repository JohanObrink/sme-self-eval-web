import React from 'react'
import { YesNoQuestion } from '../../components'

export default () => {
  return (
    <div className="row">
      <YesNoQuestion
        className="col"
        headline="Saknar kassa för nästa löneutbetalning:" />
    </div>
  )
}
