import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '@sebgroup/react-components/dist/Button/Button'
import { TextBox } from '@sebgroup/react-components/dist/TextBox/TextBox'

export default () => {
  let history = useHistory()
  const [reportId, setReportId] = useState("")

  const goToReport = () => {
    if(reportId !== "") {
      history.push(`/report/${reportId}`); history.goForward();
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Hur påverkas din verksamhet av coronautbrottet?</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <p>
            I tider av kris är det viktigt att få en överblick över ditt
            företags situation. Med det här självskattningsverktyget vill vi ge
            dig bättre koll på tänkbara åtgärder som du själv kan vidta och
            vilken hjälp du kan få från oss och myndigheter.
          </p>
          <p>
            Frågorna är generella och alla kanske inte gäller din verksamhet. När du har
            svarat på frågorna får du en sammanställning med dina svar och
            förslag på åtgärder.
          </p>
          <p>
            Uppgifterna du fyller i är enbart tillgänglig
            via koden du får när du är färdig, så se till att notera den. Vi
            behandlar dina uppgifter enligt{' '}
            <a
              href='https://seb.se/juridik-och-sakerhet/sebs-integritetspolicy'
              target='blank'
              className='external'
            >
              vår integritetspolicy.
            </a>
          </p>
          <p>Senast uppdaterad 4 april 2020.</p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Link to='/test'>
            <Button theme='primary'>Starta</Button>
          </Link>
        </div>
      </div>
      <div className='row previous-test'>
        <div className='col'>
          <h3>Har du redan gjort testet?</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='row align-items-center'>
            <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
              <TextBox type='text' value={reportId} placeholder='' maxLength='10' onChange={(event) => setReportId(event.target.value)} />
            </div>
            <div className='col'>
              <p>Fyll i din kod för att se din checklista.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Button onClick={() => { goToReport() }}>Hämta checklista</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
