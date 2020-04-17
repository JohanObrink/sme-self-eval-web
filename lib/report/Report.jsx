import React, { useEffect, useState } from 'react'
import { get } from '../api'
import { form } from '../form/data'
import faCheckSquare from '../assets/check-square.svg'
import faMinus from '../assets/minus.svg'
import faPrint from '../assets/print.svg'
import faSquare from '../assets/square.svg'

export default ({ reportId }) => {
  const [loading, setLoading] = useState()
  const [report, setReport] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    setReport()
    setError()
    setLoading(true)

    get(reportId)
      .then((report) => setReport(report))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [reportId])

  const iconRender = (value) => {
    switch (value) {
      case 'ja':
        return <img className="icon" alt="Klar" src={faCheckSquare} />
        break
      case 'nej':
        return <img className="icon" alt="Att göra" src={faSquare} />
        break
      case 'ignorera':
        return <img className="icon" alt="N/A" src={faMinus} />
        break
      default:
        return <img className="icon" alt="" src={faMinus} />
        break
    }
  }

  const print = () => {
    window.print()
  }

  const rows = []

  for (let i = 0; i < form.steps.length; i++) {
    const step = form.steps[i]
    if (step.reportHeadline) {
      rows.push(
        <tr key={i}>
          <th colSpan="2" key={step.reportHeadline}>
            {step.reportHeadline}
          </th>
        </tr>,
      )
    }
    for (let x = 0; x < step.questions.length; x++) {
      const q = step.questions[x]
      if (report && report.data && report.data[q.path]) {
        rows.push(
          <tr key={q.suggestion}>
            <td>{iconRender(report.data[q.path])}</td>
            <td>{q.suggestion}</td>
          </tr>,
        )
      } else if (report && report.data && !report.data[q.path]) {
        rows.push(
          <tr key={q.suggestion}>
            <td>{iconRender()}</td>
            <td>{q.suggestion}</td>
          </tr>,
        )
      }
    }
  }

  return (
    <>
      <div className="row">
        <div className="col">
          {loading && <div>Läser in...</div>}

          {error && (
            <>
              <h4>Ett fel inträffade</h4>
              <pre>{error.toString()}</pre>
            </>
          )}
        </div>
      </div>
      {report && report.data && (
        <>
          <div className="row report-explanation">
            <div className="col">
              <div className="row">
                <div className="col-4">
                  <h3>Teckenförklaring</h3>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col-12 col-sm-auto">
                  <div>
                    <p>
                      <img className="icon" alt="Klar" src={faCheckSquare} /> Åtgärd klar
                    </p>
                  </div>
                </div>
                <div className="col-sm-auto">
                  <div>
                    <p>
                      <img className="icon" alt="Att göra" src={faSquare} /> Kvar att göra
                    </p>
                  </div>
                </div>
                <div className="col-8 col-sm-auto col-lg-8">
                  <p>
                    <img className="icon" alt="Inte aktuellt" src={faMinus} /> Inte aktuellt / Inget
                    svar
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col report-table">
              <table className="table">
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-auto print">
              <div role="button" tabIndex={0} onKeyDown={this.handleClick} onClick={() => print()}>
                <p>
                  Skriv ut <img className="icon print" alt="Skriv ut" src={faPrint} />
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
