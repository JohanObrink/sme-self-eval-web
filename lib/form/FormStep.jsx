import React from 'react'
import { questionTypes } from './data'
import {
  ButtonGroupQuestion,
  DropDownQuestion,
  InputQuestion,
  YesNoQuestion
} from '../components'

const novalidation = () => true

const renderQuestion = ({ question, type, path, seed, validate = novalidation }) => {
  const onChange = () => {}
  const props = {
    question,
    seed,
    onChange
  }
  switch (type) {
    case questionTypes.BUTTON_GROUP:
      return <ButtonGroupQuestion key={path} {...props} />
    case questionTypes.DROP_DOWN:
      return <DropDownQuestion key={path} {...props} />
    case questionTypes.INPUT:
      return <InputQuestion key={path} {...props} />
    case questionTypes.YES_NO:
      return <YesNoQuestion key={path} {...props} />
    default:
      throw new Error('Unknown question type')
  }
}

export default ({ headline, title, questions = [] }) => {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <h6>{title}</h6>
          <h2>{headline}</h2>
        </div>
      </div>
      <section role='questions'>
        {questions.map(q => renderQuestion(q))}
      </section>
    </>
  )
}
