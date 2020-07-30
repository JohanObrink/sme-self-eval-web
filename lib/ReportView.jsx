import React from 'react'
import { useParams } from 'react-router-dom'
import LoadReport from './report/LoadReport'
import Report from './report/Report'
import { getText } from './appTexts'

export default () => {
  const { reportId } = useParams()
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{getText('heading_report')}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>{getText('heading_suggestions')}</h3>
        </div>
      </div>
      <div className="row report-header">
        <div
          className="col-sm-12 col-md-6 col-lg-6"
          dangerouslySetInnerHTML={{ __html: getText('text_disclaimer') }}
        />
        <div className="col-sm-12 col-md-6 order-last order-sm-second personal-code">
          <div className="row">
            <div className="col">
              <p>{getText('label_personalcode')}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>{reportId}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col align-self-end">
              <p>{getText('label_bookmark')}</p>
            </div>
          </div>
        </div>
        <div className="col-12 order-second order-md-last">
          {reportId && <Report reportId={reportId} />}
          {!reportId && <LoadReport />}
        </div>
      </div>
    </div>
  )
}
