import { getList } from './linesOfBusiness'

export const questionTypes = {
  BUTTON_GROUP: 'buttongroup',
  DROP_DOWN: 'dropdown',
  YES_NO: 'yesno',
  YES_NO_NA: 'yesnona',
  INPUT: 'input'
}

export const validations = {
  required: (val) => (val !== null && val !== undefined && val !== '' && val !== []),
  none: () => (true)
}

export const form = {
  steps: [
    {
      headline: 'Företagets veksamhet',
      title: 'Step title',
      questions: [
        {
          path: "lineOfBusiness",
          question: 'Vilken bransch jobbar du inom?',
          type: questionTypes.DROP_DOWN,
          seed: () => getList(),
          validate: validations.required
        },
        {
          path: "turnover",
          question: 'Hur stor omsättning har du?',
          type: questionTypes.BUTTON_GROUP,
          seed: () => ([
            { label: 'Mindre än 100 000 kronor', value: '< 100 000' },
            { label: '100 000 - 1 000 000 kronor', value: '100 000 - 1 000 000' },
            { label: 'Mer än 1 000 000 kronor', value: '> 1 000 000' }
          ]),
          validate: validations.required
        },
        {
          path: "noEmployees",
          question: 'Hur många anställda har du?',
          type: questionTypes.BUTTON_GROUP,
          seed: () => ([
            { label: 'Färre än 5', value: '< 5' },
            { label: '5–25', value: '5 – 25' },
            { label: 'Fler än 25', value: '> 25' }
          ]),
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Påverkan på verksamheten',
      title: 'Step title',
      questions: [
        {
          path: "demand",
          question: 'Har efterfrågan på dina produkter eller tjänster gått ner?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "sickleave",
          question: 'Har du eller dina anställda en hög sjukfrånvaro?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "lackOfMaterial",
          question: 'Saknar du material för att kunna producera din produkt?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "governmentDecision",
          question: 'Har myndighetsbeslut stoppat eller hindrat din verksamhet?',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Påverkan på ekonomin',
      title: 'Step title',
      questions: [
        {
          path: "availableAssets",
          question: 'Företagets tillgängliga tillgångar?',
          type: questionTypes.INPUT,
          inputType: 'number',
          validate: validations.required
        },
        {
          path: "shortDebt",
          question: 'Kortfristiga skulder?',
          type: questionTypes.INPUT,
          inputType: 'number',
          validate: validations.required
        },
        {
          path: "lastingAssets",
          question: 'Hur länge räcker företagets likvida tillgångar?',
          type: questionTypes.BUTTON_GROUP,
          seed: () => ([
            { label: 'Några dagar', value: 'Några dagar' },
            { label: 'Några veckor', value: 'Några veckor' },
            { label: 'Några månader', value: 'Några månader' },
            { label: 'Längre än ett år', value: 'Längre än ett år' }
          ]),
          validate: validations.required
        },
        {
          path: "stockValue",
          question: 'Om du har ett lager som snabbt tappar värde eller förstörs, hur stort är värdet just nu?',
          type: questionTypes.INPUT,
          inputType: 'number',
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Egna åtgärder',
      title: 'Step title',
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
          path: "shortTermWork",
          question: 'Har du fattat beslut om korttidsarbete?',
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
          path: "newShares",
          question: 'Har företaget möjlighet att göra en nyemission?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "pausePension",
          question: 'Har du pausat pensionsavsättningar till personalen?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "employeeContracts",
          question: 'Har du omförhandlat dina anställdas kontrakt?',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Stöd från staten',
      title: 'Step title',
      questions: [
        {
          path: "governmentSupport",
          question: 'Har du ansökt om statligt stöd för korttidsarbete?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "sickleavePay",
          question: 'Har du ansökt om sjuklön från Försäkringskassan för anställda som är sjuka?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "deferralTaxes",
          question: 'Har du ansökt om anstånd med att betala arbetsgivaravgifter, preliminärskatt påå lön och mervärdesskatt?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "contactedAlmi",
          question: 'Har du kontaktat Almi om din situation?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "inQuarantine",
          question: 'Är du eller någon anställd i karantän beordrad av läkare?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          path: "appliedContagious",
          question: 'Har du ansökt om smittbärarpenning hos Försäkringskassan?',
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
    }
  ]
}
