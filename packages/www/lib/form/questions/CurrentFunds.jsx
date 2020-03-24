import React from 'react'
import { SliderQuestion } from '../../components'

export default () => {
  return (
    <div>
      <SliderQuestion
        headline="Ange aktuell kassa:"
        min={0}
        max={10000000}
        step={1000} />
    </div>
  )
}