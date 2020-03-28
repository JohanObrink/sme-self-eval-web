import React, { createElement } from 'react'
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

function createQuestion(qClass, path, headline) {
  return createElement(qClass, {key: path, path, headline})
}

export const initialValue = {
  currentStepIndex: 0,
  steps: [
    {
      headline: 'Din verksamhet',
      questions: [
        createQuestion(LineOfBusiness, 'lineOfBusiness', 'Vilken bransch jobbar du inom?'),
        createQuestion(Turnover, 'turnover', 'headline'),
        createQuestion(NumberOfEmployees, 'numberOfEmployees', 'headline')
      ]
    },
    {
      headline: 'Hur påverkas din verksamhet av coronaepidemin?',
      questions: [
        createQuestion(DropInDemand, 'dropInDemand', 'headline'),
        createQuestion(SickLeave, 'sickLeave', 'headline'),
        createQuestion(ProductionMaterial, 'productionMaterial', 'headline'),
        createQuestion(ObstructingDecisions, 'obstructingDecisions', 'headline')
      ]
    },
    {
      headline: 'Uppskatta påverkan för verksamheten',
      questions: [
        createQuestion(LiquidAssets, 'liquidAssets', 'headline'),
        createQuestion(CurrentFunds, 'currentFunds', 'Ange aktuell kassa:'),
        createQuestion(CurrentLiabilities, 'currentLiabilities', 'Storlek på kortfristiga skulder:'),
        createQuestion(PerishableInventory, 'perishableInventory', 'headline'),
        createQuestion(PayrollFunds, 'payrollFunds', 'headline')
      ]
    },
    {
      headline: 'Egna åtgärder',
      questions: [
        createQuestion(SuspendedInvoices, 'suspendedInvoices', 'headline'),
        createQuestion(EarlyPayments, 'earlyPayments', 'headline'),
        createQuestion(ShortTermLayoffs, 'shortTermLayoffs', 'headline'),
        createQuestion(IncreaseEquity, 'increaseEquity', 'headline'),
        createQuestion(ShortTermSavings, 'shortTermSavings', 'headline'),
        createQuestion(RightsIssue, 'rightsIssue', 'headline'),
        createQuestion(SuspendedPensionProvisions, 'suspendedPensionProvisions', 'headline'),
        createQuestion(RenegotiateContracts, 'renegotiateContracts', 'headline')
      ]
    },
    {
      headline: 'Har du tagit del av statens åtgärder?',
      questions: [
        createQuestion(SubsidisedShortTermLayoffs, 'subsidisedShortTermLayoffs', 'headline'),
        createQuestion(SubsidisedSickLeave, 'subsidisedSickLeave', 'headline'),
        createQuestion(SuspendedTaxPayments, 'suspendedTaxPayments', 'headline'),
        createQuestion(Almi, 'almi', 'Har du haft kontakt med Almi om din situation?'),
        createQuestion(Quarantine, 'quarantine', 'headline'),
        createQuestion(OtherCostSavings, 'otherCostSavings', 'headline'),
        createQuestion(Reconstruction, 'reconstruction', 'headline')
      ]
    }
  ],
  data: {}
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ANSWER:
      state = {
        ...state,
        data: {
          ...state.data,
          [action.payload.path]: {
            value: action.payload.value,
            isValid: action.payload.isValid
          }
        }
      }
      console.log(state.data)
      break
    case actions.NEXT:
      state = { ...state, currentStepIndex: state.currentStepIndex + 1 }
      break
    case actions.PREVIOUS:
      state = { ...state, currentStepIndex: state.currentStepIndex - 1 }
      break
  }
  return state
}
