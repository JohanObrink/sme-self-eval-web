import { getList } from './linesOfBusiness'

export const questionTypes = {
  BUTTON_GROUP: 'buttongroup',
  DROP_DOWN: 'dropdown',
  YES_NO: 'yesno',
  INPUT: 'input'
}

export const validations = {
  required: (val) => (val !== null && val !== undefined && val !== '' && val !== []),
  none: () => (true)
}

export const form = {
  steps: [
    {
      headline: 'Egna åtgärder',
      questions: [
        {
          path: "invoices",
          question: 'Har du ansökt om att få betala fakturor till dina leverantörer längre fram?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "payEarlier",
          question: 'Har du bett dina kunder att betala tidigare?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "rentDiscount",
          question: 'Har du ansökt om tillfällig hyresrabatt?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "shortTermWork",
          question: 'Har du fattat beslut om korttidspermittering?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "ownerCapital",
          question: 'Kan ägaren skjuta till delar av det kapital som behövs?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "cutCosts",
          question: 'Har du gått igenom vilka andra kostnadsbesparingar du skulle kunna göra på kort sikt?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "newShares",
          question: 'Har företaget möjlighet att göra en nyemission?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "pausePension",
          question: 'Har du pausat inbetalningarna till dina anställdas tjänstepensionsplan?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "employeeContracts",
          question: 'Har du omförhandlat dina anställdas kontrakt?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "setOffTheProfit",
          question: 'Har du kvittat vinsten från 2019 mot framtida underskott?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "dormant",
          question: 'Har du undersökt möjligheten att lägga företaget som vilande?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "taxReturn",
          question: 'Har du sett över din preliminärdeklaration för 2020?',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Stöd från staten',
      questions: [
        {
          path: "governmentSupport",
          question: 'Har du ansökt om statligt stöd för korttidspermittering?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "postponeTax",
          question: 'Har du ansökt om att skuta upp företagets skatteinbetalningar?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "contactedAlmi",
          question: 'Har du ansökt om stöd och rådgivning från Almi?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "reconstruction",
          question: 'Har du sett över vilka möjligheter du har till rekonstruktion?',
          type: questionTypes.YES_NO,
          validate: validations.required
        }

      ]
    },
    {
      headline: 'Stöd och rådgivning från SEB',
      questions: [
        {
          path: "accountCredit",
          question: 'Har du höjt företagets kontokredit?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "businessLoan",
          question: 'Har du ansökt om att ta eller utöka ett företagslån?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "amortizationFree",
          question: 'Har du ansökt om amorteringsfrihet för ditt företagslån?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "hedged",
          question: 'Har du valutasäkrat dina affärer?',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    }
  ]
}
