import React from 'react'
import { SliderQuestion } from '../../components'

const tooltip = (val) => {
  if (val === 0) return '0 SEK'
  if (val < 1000000) return `${val / 1000} kSEK`
  return `${val / 1000000} MSEK`
}

export default () => {
  return (
    <div className="row">
      <SliderQuestion
        className="col"
        headline="Ange aktuell kassa:"
        min={0}
        max={10000000}
        step={1000}
        tooltip={tooltip} />
    </div>
  )
}