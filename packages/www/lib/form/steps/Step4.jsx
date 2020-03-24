import React, { useContext } from 'react'
import { Button } from '@sebgroup/react-components/dist/Button'
import FormContext from '../FormContext'
import { actions } from '../constants'
import {
  SuspendedInvoices,
  EarlyPayments,
  ShortTermLayoffs,
  IncreaseEquity,
  ShortTermSavings,
  RightsIssue,
  SuspendedPensionProvisions,
  RenegotiateContracts
} from '../questions'

export default () => {
  const {dispatch} = useContext(FormContext)
  
  return (
    <>
      <h2>Egna åtgärder</h2>
      <SuspendedInvoices />
      <EarlyPayments />
      <ShortTermLayoffs />
      <IncreaseEquity />
      <ShortTermSavings />
      <RightsIssue />
      <SuspendedPensionProvisions />
      <RenegotiateContracts />
      <Button theme="primary" onClick={() => dispatch({type: actions.ANSWER})}>Next</Button>
    </>
  )
}
