import { useState, useEffect } from 'react'
import { getTexts } from './api'

let loader
export const useCMS = (key) => {
  const [texts, setTexts] = useState({})

  const loadTexts = async () => {
    if (!loader) {
      loader = getTexts()
    }
    const result = await loader
    setTexts(result)
  }

  loadTexts()

  return key ? texts[key] || '' : texts
}