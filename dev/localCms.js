const { createServer } = require('http')

const contentType = 'application/json; charset=utf-8'
const content = {
  "metadata": { "language": "sv", "application_key": "sme_self_eval_v1", "context": "Default" },
  "result": {
    "content": {
      "heading_selfeval": "Självtest",
      "label_navprimary": "Självtest",
      "label_navsecondary": "Testa din verksamhet",
      "list_formgroup": [
        {
          "custom_identifier": "primary_business_actions",
          "heading_title": "Egna åtgärder – verksamheten 1 av 2",
          "list_formelement": [
            {
              "heading_identifier": "invoices",
              "label_question": "Har du ansökt om att få betala fakturor till dina leverantörer längre fram?",
              "text_suggestion": "Ansök om att få betala fakturor till dina leverantörer längre fram",
              "custom_type": "yes_no_notrelevant",
              "custom_active": "true"
            },
            {
              "heading_identifier": "payEarlier",
              "label_question": "Har du bett dina kunder att betala tidigare?",
              "text_suggestion": "Be dina kunder att betala tidigare",
              "custom_type": "yes_no_notrelevant",
              "custom_active": "true"
            },
            {
              "heading_identifier": "rentDiscount",
              "label_question": "Har du ansökt om tillfällig hyresrabatt? (inte längre möjligt)",
              "text_suggestion": "Ansök om tillfällig hyresrabatt (inte längre möjligt)",
              "custom_type": "yes_no_notrelevant",
              "custom_active": "false"
            },
            {
              "heading_identifier": "ownerCapital",
              "label_question": "Kan ägaren skjuta till delar av det kapital som behövs?",
              "text_suggestion": "Be ägaren skjuta till delar av det kapital som behövs",
              "custom_type": "yes_no_notrelevant",
              "custom_active": "true"
            },
            {
              "heading_identifier": "newShares",
              "label_question": "Har företaget möjlighet att göra en nyemission?",
              "text_suggestion": "Gör en nyemission",
              "custom_type": "yes_no_notrelevant",
              "custom_active": "true"
            }
          ]
        },
        { "custom_identifier": null, "heading_title": null, "list_formelement": [] },
        { "custom_identifier": null, "heading_title": null, "list_formelement": [] },
        { "custom_identifier": null, "heading_title": null, "list_formelement": [] },
        { "custom_identifier": null, "heading_title": null, "list_formelement": [] }
      ],
      "button_back": "Tillbaka",
      "button_next": "Nästa",
      "button_finish": "Slutför",
      "label_lastupdate": "-",
      "heading_howaffected": "Självtest – vad kan du göra och vad kan du få hjälp med?",
      "text_intro": "I tider av kris är det viktigt att få en överblick över ditt företags situation. Med det här självskattningsverktyget vill vi ge dig bättre koll på tänkbara åtgärder som du själv kan vidta och vilken hjälp du kan få från oss och myndigheter.",
      "text_description": "<p>\nFrågorna är generella och alla kanske inte gäller din verksamhet. När du har svarat på frågorna får du en sammanställning med dina svar och förslag på åtgärder.</p>\n<p>\nUppgifterna du fyller i är enbart tillgänglig via koden du får när du är färdig, så se till att notera den. Vi behandlar dina uppgifter enligt <a href=\"https://seb.se/juridik-och-sakerhet/sebs-integritetspolicy\" target=\"blank\" class=\"external\"> vår integritetspolicy.</a></p>",
      "label_alreadydone": "Har du redan gjort testet?",
      "label_fillcode": "Fyll i din kod.",
      "link_fetch": "Hämta",
      "button_start": "Starta verktyget",
      "heading_report": "Starta verktyget",
      "text_suggestions": "Här ser du våra förslag på åtgärder och vart du kan vända dig för att få hjälp.",
      "text_report": "<p>\nFörslagen är generella och du kan behöva vidta fler åtgärder. Prata med din rådgivare om vilka åtgärder som kan vara aktuella och relevanta för dig. Har du ingen företagsrådgivare är du välkommen att <a href=\"https://seb.se/var-kundservice/contact/c1119-kundservice-foeretag\" target=\"blank\" class=\"external\">kontakta oss.</a>\n</p>\n<p>\n<strong>Vi har ovanligt hög belastning just nu men gör allt för att hjälpa dig snarast möjligt.</strong></p>\n<p><a href=\"https://seb.se/om-seb/coronautbrottet-tips-och-rad-till-dig-som-foretagare\" target=\"blank\" class=\"external\"> Mer om coronautbrottet på seb.se</a></p>",
      "text_disclaimer": "<p>\nFörslagen är generella och du kan behöva vidta fler åtgärder. Prata med din rådgivare om vilka åtgärder som kan vara aktuella och relevanta för dig. Har du ingen företagsrådgivare är du välkommen att <a href=\"https://seb.se/var-kundservice/contact/c1119-kundservice-foeretag\" target=\"blank\" class=\"external\">kontakta oss.</a>\n</p>",
      "label_load": "Vi har ovanligt hög belastning just nu men gör allt för att hjälpa dig snarast möjligt.",
      "href_corona": "<a href=\"https://seb.se/om-seb/coronautbrottet-tips-och-rad-till-dig-som-foretagare\" target=\"blank\" classname=\"external\">Mer om coronautbrottet på seb.se</a>",
      "label_personalcode": "Din personliga kod",
      "label_bookmark": "Bokmärk den här sidan eller kom tillbaka till den med hjälp av din kod.",
      "label_testbuisiness": "Testa din verksamhet"
    }
  }
}

const server = createServer((req, res) => {
  console.log(req.url)
  res.writeHead(200, { 'Content-Type': contentType })
  res.write(JSON.stringify(content))
  res.end()
})
server.listen(5000, () => {
  console.log('CMS Operational')
})
