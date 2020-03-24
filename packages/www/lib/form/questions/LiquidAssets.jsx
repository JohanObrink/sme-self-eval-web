import React from 'react'
import { SliderQuestion } from '../../components'

export default () => {
  return (
    <div>
      <SliderQuestion
        headline="Likvida medel tar slut inom:"
        min={1}
        max={100}
        step={1}
        tooltip={(val) => `${val} dagar`} />
    </div>
  )
}