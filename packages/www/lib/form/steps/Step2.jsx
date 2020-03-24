import React, { useContext } from 'react'
import { Button } from '@sebgroup/react-components/dist/Button'
import FormContext from '../FormContext'
import { actions } from '../constants'
import { DropInDemand, SickLeave, ProductionMaterial, ObstructingDecisions } from '../questions'

export default () => {
  const {dispatch} = useContext(FormContext)
  
  return (
    <>
      <h2>Hur påverkas din verksamhet av Corona epidemin?</h2>
      <DropInDemand />
      <SickLeave />
      <ProductionMaterial />
      <ObstructingDecisions />
      <Button theme="primary" onClick={() => dispatch({type: actions.ANSWER})}>Next</Button>
    </>
  )
}
