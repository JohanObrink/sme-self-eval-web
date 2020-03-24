import React from 'react'
import { YesNoQuestion } from '../../components'

export default () => {
  return (
    <div>
      <YesNoQuestion
        headline="Bett anställda ansöka om sjuklön från försäkringskassan?"
        text="(Är det inte arbetsgivaren som sköter det?)" />
    </div>
  )
}
