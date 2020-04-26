import React, { useState } from 'react'
import { Button } from '@sebgroup/react-components/dist/Button/Button'
import thumbsUp from '../assets/thumbs-up.svg'
import thumbsDown from '../assets/thumbs-down.svg'
import { vote } from '../api'

const iconThumbsUp = <img alt="Ja" src={thumbsUp} />
const iconThumbsDown = <img alt="Nej" src={thumbsDown} />

export default ({ reportId }) => {
  const [voted, setVoted] = useState()
  const [voting, setVoting] = useState(false)

  const submitVote = async (value) => {
    if (voted) {
      return
    }
    setVoting(true)
    try {
      await vote(reportId, value)
      setVoted(true)
    } finally {
      setVoting(false)
    }
  }

  return (
    <div class="greybox">
      <h2>Var checklistan användbar för dig?</h2>
      <Button
        label="Ja"
        icon={iconThumbsUp}
        onClick={() => submitVote(1)}
        disabled={voting || voted}
      />
      <Button
        label="Nej"
        icon={iconThumbsDown}
        onClick={() => submitVote(-1)}
        disabled={voting || voted}
      />
    </div>
  )
}
