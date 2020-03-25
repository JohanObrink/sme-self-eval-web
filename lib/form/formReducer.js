import React from 'react'
import { actions } from './constants'
import {
  LineOfBusiness,
  Turnover,
  NumberOfEmployees,
  DropInDemand,
  SickLeave,
  ProductionMaterial,
  ObstructingDecisions,
  LiquidAssets,
  CurrentFunds,
  CurrentLiabilities,
  PerishableInventory,
  PayrollFunds,
  SuspendedInvoices,
  EarlyPayments,
  ShortTermLayoffs,
  IncreaseEquity,
  ShortTermSavings,
  RightsIssue,
  SuspendedPensionProvisions,
  RenegotiateContracts,
  SubsidisedShortTermLayoffs,
  SubsidisedSickLeave,
  SuspendedTaxPayments,
  Almi,
  Quarantine,
  OtherCostSavings,
  Reconstruction
} from './questions'

export const initialValue = {
  currentStepIndex: 0,
  steps: [
    {
      headline: 'Din verksamhet',
      questions: [
        <LineOfBusiness key='lineOfBusiness' />,
        <Turnover key='turnover' />,
        <NumberOfEmployees key='numberOfEmployees' />
      ]
    },
    {
      headline: 'Hur påverkas din verksamhet av Corona epidemin?',
      questions: [
        <DropInDemand key='dropInDemand' />,
        <SickLeave key='sickLeave' />,
        <ProductionMaterial key='productionMaterial' />,
        <ObstructingDecisions key='obstructingDecisions' />
      ]
    },
    {
      headline: 'Uppskatta påverkan för verksamheten',
      questions: [
        <LiquidAssets key='liquidAssets' />,
        <CurrentFunds key='currentFunds' />,
        <CurrentLiabilities key='currentLiabilities' />,
        <PerishableInventory key='perishableInventory' />,
        <PayrollFunds key='payrollFunds' />
      ]
    },
    {
      headline: 'Egna åtgärder',
      questions: [
        <SuspendedInvoices key='suspendedInvoices' />,
        <EarlyPayments key='earlyPayments' />,
        <ShortTermLayoffs key='shortTermLayoffs' />,
        <IncreaseEquity key='increaseEquity' />,
        <ShortTermSavings key='shortTermSavings' />,
        <RightsIssue key='rightsIssue' />,
        <SuspendedPensionProvisions key='suspendedPensionProvisions' />,
        <RenegotiateContracts key='renegotiateContracts' />
      ]
    },
    {
      headline: 'Har du tagit del av statens åtgärder?',
      questions: [
        <SubsidisedShortTermLayoffs key='subsidisedShortTermLayoffs' />,
        <SubsidisedSickLeave key='subsidisedSickLeave' />,
        <SuspendedTaxPayments key='suspendedTaxPayments' />,
        <Almi key='almi' />,
        <Quarantine key='quarantine' />,
        <OtherCostSavings key='otherCostSavings' />,
        <Reconstruction key='reconstruction' />
      ]
    }
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.NEXT:
      state = { ...state, currentStepIndex: state.currentStepIndex + 1 }
      break
    case actions.PREVIOUS:
      state = { ...state, currentStepIndex: state.currentStepIndex - 1 }
      break
  }
  return state
}
