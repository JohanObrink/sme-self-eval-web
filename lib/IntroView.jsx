import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@sebgroup/react-components/dist/Button/Button'

export default () => {
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
            vilken hjälp du kan få från oss och myndigheter. Frågorna är
            generella och alla kanske inte gäller din verksamhet. När du har
            svarat på frågorna får du en sammanställning med dina svar och
            förslag på åtgärder. Uppgifterna du fyller i är enbart tillgänglig
            via koden du får när du är färdig, så se till att notera den. Vi
            behandlar dina uppgifter enligt{' '}
            <a
              href='https://seb.se/juridik-och-sakerhet/sebs-integritetspolicy'
              target='blank'
            >
              vår integritetspolicy
            </a>
            .
          </p>
          <p>Senast uppdaterad 27 mars 2020.</p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Link to='/test'>
            <Button theme='primary'>Starta</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
