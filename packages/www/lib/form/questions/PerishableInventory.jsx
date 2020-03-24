import React from 'react'
import { SliderQuestion } from '../../components'

export default () => {
  return (
    <div>
      <SliderQuestion
        headline="Värde på lager som snabbt tappar värde/förstörs:"
        min={0}
        max={10000000}
        step={1000} />
    </div>
  )
}