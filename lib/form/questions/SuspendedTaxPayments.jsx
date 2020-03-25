import React from 'react'
import { YesNoQuestion } from '../../components'

export default () => {
  return (
    <div className="row">
      <YesNoQuestion
        className="col"
        headline="Anstånd"
        text="Ansökt om att få anstånd med betalning av arbetsgivaravgifter, preliminärskatt på lön och mervärdesskatt som redovisas månadsvis eller kvartalsvis?" />
    </div>
  )
}
