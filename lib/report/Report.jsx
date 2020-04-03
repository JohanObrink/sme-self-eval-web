import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faMinus } from '@fortawesome/free-solid-svg-icons'
import { get } from '../api'
import { form } from '../form/data'

export default ({ reportId }) => {
  const [loading, setLoading] = useState()
  const [report, setReport] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    setReport()
    setError()
    setLoading(true)

    get(reportId)
      .then(report => setReport(report))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [reportId])

  const rows = []

  const iconRender = (value) => {
    switch(value) {
      case "ja":
        return <FontAwesomeIcon icon={faCheck} />
        break;
      case "nej":
        return <FontAwesomeIcon icon={faTimes} />
        break;
      case "ignore":
        return <FontAwesomeIcon icon={faMinus} />
        break;
      default:
        return <FontAwesomeIcon icon={faMinus} />
        break;

    }
  }

  for (let i = 0; i < form.steps.length; i++) {
    var step = form.steps[i]
    rows.push(
      <tr key={i}>
        <th colSpan='2' key={step.headline}>{step.headline}</th>
      </tr>
    )
    let children = []
    for (let x = 0; x < step.questions.length; x++) {
      var q = step.questions[x]
      if (report && report[q.path]) {
        rows.push(
          <tr key={q.suggestion}>
            <td>{iconRender(report[q.path])}</td>
            <td>{q.suggestion}</td>
          </tr>
        )
      }
    }
  }

  return (
    <>
      <div className='row'>
        <div className='col'>
          {loading && <div>Läser in...</div>}

          {error && (
            <>
              <h4>Ett fel inträffade</h4>
              <pre>{error.toString()}</pre>
            </>
          )}
        </div>
      </div>
      {report && (
        <>
          <div className='row report-explanation'>
            <div className='col'>
              <div className='row'>
                <div className='col-4'>
                  <div>Teckenförklaring</div>
                </div>
              </div>
              <div className='row justify-content-start'>
                <div className='col-2 col-sm-2 col-md-2'>
                  <div>
                    <FontAwesomeIcon icon={faCheck} /> Ja
                  </div>
                </div>
                <div className='col-2 col-sm-2 col-md-2'>
                  <div>
                    <FontAwesomeIcon icon={faTimes} /> Nej
                  </div>
                </div>
                <div className='col-8 col-sm-8 col-md-8'>
                  <FontAwesomeIcon icon={faMinus} /> Inte aktuellt / Inget svar
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col report-table'>
              <table className='table'>
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  )
}
