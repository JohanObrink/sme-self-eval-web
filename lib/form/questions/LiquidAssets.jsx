import React from 'react'
import { SliderQuestion } from '../../components'

export default () => {
  return (
    <div className="row">
      <SliderQuestion
        className="col"
        headline="Likvida medel tar slut inom:"
        min={1}
        max={100}
        step={1}
        tooltip={(val) => `${val} dagar`} />
    </div>
  )
}