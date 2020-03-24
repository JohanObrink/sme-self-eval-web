import React from 'react'
import { YesNoQuestion } from '../../components'

export default () => {
  return (
    <div>
      <YesNoQuestion
        headline="Är du eller anställd i läkarbeordad karantän?" />
      <YesNoQuestion
        headline="Har du ansökt om smittbärarpenning hos försäkringskassan?" />
    </div>
  )
}
