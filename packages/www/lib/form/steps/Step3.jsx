import React, { useContext } from 'react'
import { Button } from '@sebgroup/react-components/dist/Button'
import FormContext from '../FormContext'
import { actions } from '../constants'
import { LiquidAssets, CurrentFunds, CurrentLiabilities, PerishableInventory, PayrollFunds } from '../questions'

export default () => {
  const {dispatch} = useContext(FormContext)
  
  return (
    <>
      <h2>Uppskatta påverkan för verksamheten</h2>
      <LiquidAssets />
      <CurrentFunds />
      <CurrentLiabilities />
      <PerishableInventory />
      <PayrollFunds />
      <Button theme="primary" onClick={() => dispatch({type: actions.ANSWER})}>Next</Button>
    </>
  )
}
