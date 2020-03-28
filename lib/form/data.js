export const questionTypes = {
  BUTTON_GROUP: 'buttongroup',
  DROP_DOWN: 'dropdown',
  YES_NO: 'yesno'
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
          question: 'Vilken bransch jobbar du inom?',
          type: questionTypes.DROPDOWN,
          seed: () => ([{label: 'Foo', value: '10'}]),
          validate: validations.required
        },
        {
          question: 'Hur stor omsättning har du?',
          type: questionTypes.BUTTON_GROUP,
          seed: () => ([{label: 'Bar', value: '20'}]),
          validate: validations.required
        },
        {
          question: 'Hur många anställda har du?',
          type: questionTypes.BUTTON_GROUP,
          seed: () => ([{label: 'Bar', value: '20'}]),
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Coronaepidemins påverkan på företagets veksamhet',
      title: 'Step title',
      questions: [
        {
          question: 'Har efterfrågan på dina produkter eller tjänster gått ner?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          question: 'Har du eller dina anställda en hög sjukfrånvaro?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          question: 'Saknar du material för att kunna producera din produkt?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          question: 'Saknar du material för att kunna producera din produktHar myndighetsbeslut stoppat eller hindrat din verksamhet?',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    },
    {
      headline: 'Coronaepidemins påverkan på företagets veksamhet',
      title: 'Step title',
      questions: [
        {
          question: 'Har efterfrågan på dina produkter eller tjänster gått ner?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          question: 'Har du eller dina anställda en hög sjukfrånvaro?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          question: 'Saknar du material för att kunna producera din produkt?',
          type: questionTypes.YES_NO,
          validate: validations.required
        },
        {
          question: 'Saknar du material för att kunna producera din produktHar myndighetsbeslut stoppat eller hindrat din verksamhet?',
          type: questionTypes.YES_NO,
          validate: validations.required
        }
      ]
    }
  ]
}
