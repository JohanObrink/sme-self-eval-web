import { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'

export const getText = (textKey) => {
  const [texts, setTexts] = useState()
  useEffect(() => {
    if (texts === undefined || texts.length == 0) {
      fetch(
        'https://api.seb.se/open/prod/applicationcontent/v1/content/sme_self_eval_v1?lang=sv&context=Default',
      )
        .then((response) => response.json())
        .then((data) => {
          setTexts(data)
          //console.log(JSON.stringify(data))
        })
    }
    //else if (texts && texts.result && texts.result.content && !texts.result.content[textKey])
    //console.log('Not found textkey: ' + textKey)
  })
  return texts && texts.result && texts.result.content && texts.result.content[textKey]
    ? texts.result.content[textKey]
    : ''
}
