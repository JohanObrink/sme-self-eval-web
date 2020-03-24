import React, { useContext } from 'react'
import { Button } from '@sebgroup/react-components/dist/Button'
import FormContext from '../FormContext'
import { actions } from '../constants'
import {
  SubsidisedShortTermLayoffs,
  SubsidisedSickLeave,
  SuspendedTaxPayments,
  Almi,
  Quarantine,
  OtherCostSavings,
  Reconstruction
} from '../questions'

export default () => {
  const {dispatch} = useContext(FormContext)
  
  return (
    <>
      <h2>Har du tagit del av statens åtgärder?</h2>
      <SubsidisedShortTermLayoffs />
      <SubsidisedSickLeave />
      <SuspendedTaxPayments />
      <Almi />
      <Quarantine />
      <OtherCostSavings />
      <Reconstruction />
      <Button theme="primary" onClick={() => dispatch({type: actions.ANSWER})}>Next</Button>
    </>
  )
}
