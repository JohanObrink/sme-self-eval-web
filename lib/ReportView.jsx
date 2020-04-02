import React from 'react'
import { useParams } from 'react-router-dom'
import LoadReport from './report/LoadReport'
import Report from './report/Report'

export default () => {
  const { reportId } = useParams()
  return (
    <div>
      <h1>Report</h1>
      {reportId && <Report reportId={reportId} />}
      {!reportId && <LoadReport />}
    </div>
  )
}
