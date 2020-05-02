import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Button } from '@sebgroup/react-components/dist/Button/Button'
import { trackPage, toolStarted, toolCompleted } from '../analytics'
import FormStep from './FormStep'
import { actions } from './constants'
import * as api from '../api'
import { getText } from './appTexts'

const getNavState = (stepIndex, steps) => ({
  prev: stepIndex > 0,
  next: stepIndex < steps.length - 1,
})

const Form = ({ form, stepIndex, dispatch, data }) => {
  const { pathname } = useLocation()

  const history = useHistory()
  const [buttonIsLoading, setButtonIsLoading] = useState(false)
  const [navState, setNavState] = useState(getNavState(stepIndex, form.steps))
  const [currentStep, setCurrentStep] = useState(form.steps[stepIndex])
  useEffect(() => {
    if (stepIndex === 0) {
      toolStarted()
    }
    setNavState(getNavState(stepIndex, form.steps))
    setCurrentStep(form.steps[stepIndex])
    if (stepIndex) {
      trackPage(`${pathname}/${stepIndex + 1}`)
    }
  }, [stepIndex])

  const save = async () => {
    toolCompleted()
    const { id } = await api.create(data)
    dispatch({ type: actions.FINISH, payload: id })

    history.push(`/report/${id}`)
    history.goForward()
  }

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, c - c / 8)
    }
  }

  return (
    <>
      <FormStep {...currentStep} dispatch={dispatch} data={data} />
      <hr />
      <div className="row justify-content-end">
        <div className="col-auto prev-next-buttons">
          {navState.prev && (
            <Button
              theme="secondary"
              onClick={() => {
                scrollToTop()
                dispatch({ type: actions.PREVIOUS })
              }}
            >
              {getText("button_back")}
            </Button>
          )}
          {navState.next && (
            <Button
              theme="primary"
              onClick={() => {
                scrollToTop()
                dispatch({ type: actions.NEXT })
              }}
            >
              {getText("button_next")}
            </Button>
          )}
          {!navState.next && (
            <Button
              theme="primary"
              onClick={() => {
                save()
                setButtonIsLoading(true)
              }}
              disabled={buttonIsLoading}
            >
              {getText("button_finish")}
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

export default Form
