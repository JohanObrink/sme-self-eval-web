import React from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import LoadReport from './report/LoadReport'
import Report from './report/Report'

export default () => {
  const { reportId } = useParams()
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Checklista – förslag på åtgärder</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h3>
            Här ser du våra förslag på åtgärder och vart du kan vända dig för
            att få hjälp.
          </h3>
        </div>
      </div>
      <div className='row report-header'>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          <p>
            Förslagen är generella och du kan behöva vidta fler åtgärder. Prata
            med din rådgivare om vilka åtgärder som kan vara aktuella och
            relevanta för dig. Har du ingen företagsrådgivare är du välkommen
            att{' '}
            <a
              href='https://seb.se/var-kundservice/contact/c1119-kundservice-foeretag'
              target='blank'
              className='external'
            >
              kontakta oss
            </a>
            .
          </p>
          <p>
            <strong>
              Vi har ovanligt hög belastning just men gör allt för att hjälpa
              dig snarast möjligt.
            </strong>
          </p>
          <p>
            <a href='' target='blank' className='external'>
              Mer om coronautbrottet på seb.se
            </a>
            .
          </p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <div className='row'>
            <div className='col'>
              <p>Din personliga kod</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <h1>{reportId}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p>
                Bokmärk den här sidan eller kom tillbaka till den med hjälp av
                din kod:{' '}
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              Spara som bokmärke <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
        </div>
      </div>

      {reportId && <Report reportId={reportId} />}
      {!reportId && <LoadReport />}
    </div>
  )
}
