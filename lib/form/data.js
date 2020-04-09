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
      headline: 'Egna åtgärder – verksamheten 1 av 2',
      reportHeadline: 'Saker du kan göra',
      questions: [
        {
          path: "invoices",
          question: 'Har du ansökt om att få betala fakturor till dina leverantörer längre fram?',
          suggestion: 'Ansök om att få betala fakturor till dina leverantörer längre fram',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "payEarlier",
          question: 'Har du bett dina kunder att betala tidigare?',
          suggestion: 'Be dina kunder att betala tidigare',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "rentDiscount",
          question: 'Har du ansökt om tillfällig hyresrabatt?',
          suggestion: 'Ansök om tillfällig hyresrabatt',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "ownerCapital",
          question: 'Kan ägaren skjuta till delar av det kapital som behövs?',
          suggestion: 'Be ägaren skjuta till delar av det kapital som behövs',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "newShares",
          question: 'Har företaget möjlighet att göra en nyemission?',
          suggestion: 'Gör en nyemission',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Egna åtgärder – verksamheten 2 av 2',
      reportHeadline: null,
      questions: [
        {
          path: "setOffTheProfit",
          question: 'Har du kvittat vinsten från 2019 mot framtida underskott?',
          suggestion: 'Kvitta vinsten från 2019 mot framtida underskott',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "dormant",
          question: 'Har du undersökt möjligheten att lägga företaget som vilande?',
          suggestion: 'Lägg företaget som vilande',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "taxReturn",
          question: 'Har du sett över din preliminärdeklaration för 2020?',
          suggestion: 'Se över din preliminärdeklaration för 2020',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "cutCosts",
          question: 'Har du gått igenom vilka andra kostnadsbesparingar du skulle kunna göra på kort sikt?',
          suggestion: 'Gå igenom andra kostnadsbesparingar du skulle kunna göra på kort sikt',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Egna åtgärder – personalen',
      reportHeadline: null,
      questions: [
        {
          path: "shortTermWork",
          question: 'Har du fattat beslut om korttidspermittering?',
          suggestion: 'Fatta beslut om korttidspermittering',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "pausePension",
          question: 'Har du pausat inbetalningarna till dina anställdas tjänstepensionsplan?',
          suggestion: 'Pausa inbetalningarna till dina anställdas tjänstepensionsplan',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "employeeContracts",
          question: 'Har du omförhandlat dina anställdas kontrakt?',
          suggestion: 'Omförhandla dina anställdas kontrakt',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Stödåtgärder från staten',
      reportHeadline: 'Stödåtgärder från staten',
      questions: [
        {
          path: "governmentSupport",
          question: 'Har du ansökt om statligt stöd för korttidspermittering?',
          suggestion: 'Ansök om korttidspermittering',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "postponeTax",
          question: 'Har du ansökt om att skjuta upp företagets skatteinbetalningar?',
          suggestion: 'Skjut upp företagets skatteinbetalningar',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "contactedAlmi",
          question: 'Har du ansökt om stöd och rådgivning från Almi?',
          suggestion: 'Ansök om stöd och rådgivning från Almi',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Stöd och rådgivning från SEB',
      reportHeadline: 'Stöd och rådgivning från SEB',
      questions: [
        {
          path: "accountCredit",
          question: 'Har du höjt företagets kontokredit?',
          suggestion: 'Höj företagets kontokredit tillfälligt',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "businessLoan",
          question: 'Har du ansökt om att ta eller utöka ett företagslån?',
          suggestion: 'Utöka ditt företagslån',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "amortizationFree",
          question: 'Har du ansökt om amorteringsfrihet för ditt företagslån?',
          suggestion: 'Ansök om amorteringsfrihet för ditt företagslån',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "hedged",
          question: 'Har du valutasäkrat dina affärer?',
          suggestion: 'Få hjälp att valutasäkra dina affärer',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    }
  ]
}
