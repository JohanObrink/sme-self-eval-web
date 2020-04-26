import React from 'react'
import { Button } from '@sebgroup/react-components/dist/Button/Button'
import thumbsUp from '../assets/thumbs-up.svg'
import thumbsDown from '../assets/thumbs-down.svg'

export default () => {
  return (
    <div class="greybox">
      <h2>Var checklistan användbar för dig?</h2>
      <Button label="Ja" icon={thumbsUp} />
      <Button label="Nej" icon={thumbsDown} />
    </div>
  )
}
