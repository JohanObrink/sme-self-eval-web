import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@sebgroup/react-components/dist/Button/Button'
import { TextBox } from '@sebgroup/react-components/dist/TextBox/TextBox'
import faArrowRight from './assets/arrow-right.svg'
import { getText } from './form/appTexts'

export default () => {
  const [reportId, setReportId] = useState('')

  return (
    <div className="container intro-page">
      <div className="row">
        <div className="col-12">
          <p>{getText("label_last update")}</p>
        </div>
        <div className="col-12">
          <h1>{getText("heading_howaffected")}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 order-first order-sm-first">
          <h3>{getText("text_intro")}</h3>
        </div>
        <div className="col-md-6 order-second order-sm-second" dangerouslySetInnerHTML={{__html: getText("text_description")}} />
        <div className="col-md-6 order-4 order-md-3 previous-test">
          <div className="row">
            <div className="col-12 align-self-start">
              <h4>{getText("label_alreadydone")}</h4>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12 strong align-self-start">
                  <p>{getText("label_fillcode")}</p>
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
                    {getText("link_fetch")} <img className="icon" src={faArrowRight} alt="Pil höger" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 order-3 order-md-4">
          <Link to="/test">
            <Button theme="primary" className="btn-block">
              {getText("button_start")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
