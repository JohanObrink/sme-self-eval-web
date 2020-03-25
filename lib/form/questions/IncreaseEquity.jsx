import React from 'react'
import { YesNoQuestion } from '../../components'

export default () => {
  return (
    <div className="row">
      <YesNoQuestion
        className="col"
        headline="Kan ägare tillskjuta del av kapitalbehovet själv?"
        text="(Öka eget kapital)" />
    </div>
  )
}
