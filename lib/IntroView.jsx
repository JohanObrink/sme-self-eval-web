import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@sebgroup/react-components/dist/Button/Button'
import { TextBox } from '@sebgroup/react-components/dist/TextBox/TextBox'
import faArrowRight from './assets/arrow-right.svg'

export default () => {
  const [reportId, setReportId] = useState('')

  return (
    <div className="container intro-page">
      <div className="row">
        <div className="col-12">
          <p>Senast uppdaterad 4 april 2020.</p>
        </div>
        <div className="col-12">
          <h1>Hur påverkas din verksamhet av coronautbrottet?</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 order-first order-sm-first">
          <h3>
            I tider av kris är det viktigt att få en överblick över ditt företags situation. Med det
            här självskattningsverktyget vill vi ge dig bättre koll på tänkbara åtgärder som du
            själv kan vidta och vilken hjälp du kan få från oss och myndigheter.
          </h3>
        </div>
        <div className="col-md-6 order-second order-sm-second">
          <p>
            Frågorna är generella och alla kanske inte gäller din verksamhet. När du har svarat på
            frågorna får du en sammanställning med dina svar och förslag på åtgärder.
          </p>
          <p>
            Uppgifterna du fyller i är enbart tillgänglig via koden du får när du är färdig, så se
            till att notera den. Vi behandlar dina uppgifter enligt{' '}
            <a
              href="https://seb.se/juridik-och-sakerhet/sebs-integritetspolicy"
              target="blank"
              className="external"
            >
              vår integritetspolicy.
            </a>
          </p>
        </div>
        <div className="col-md-6 order-4 order-md-3 previous-test">
          <div className="row">
            <div className="col-12 align-self-start">
              <h4>Har du redan gjort testet?</h4>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12 strong align-self-start">
                  <p>Fyll i din kod.</p>
                </div>
                <div className="col">
                  <TextBox
                    type="text"
                    value={reportId}
                    placeholder=""
                    maxLength="10"
                    onChange={(event) => setReportId(event.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col strong align-self-start strong">
                  <Link to={{ pathname: `/report/${reportId}` }}>
                    Hämta <img className="icon" src={faArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 order-3 order-md-4">
          <Link to="/test">
            <Button theme="primary" className="btn-block">
              Starta verktyget
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
