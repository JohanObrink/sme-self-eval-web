import React, { useContext, useState, useEffect } from 'react'
import { questionTypes } from './data'
import { SelectQuestion, YesNoQuestion } from '../components'

const novalidation = () => true

const renderQuestion = ({ question, type, path, seed, validate = novalidation }) => {
  switch (type) {
    case questionTypes.BUTTON_GROUP:
      return <div key={path}>Button Group [{question}]</div>
    case questionTypes.DROP_DOWN:
      return <div key={path}>Dropdown [{question}]</div>
    case questionTypes.YES_NO:
      return <div key={path}>Yes/No [{question}]</div>
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
          <h3>{headline}</h3>
        </div>
      </div>
      <section role='questions'>
        {questions.map(q => renderQuestion(q))}
      </section>
    </>
  )
}
