import React, { useEffect, useState } from 'react'
import { get } from '../api'

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
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [reportId])

  return (
    <div>
      {loading &&
        <div>Loading...</div>}
      {error &&
        <>
          <h4>Error</h4>
          <pre>{error.toString()}</pre>
        </>}
      {report &&
        <>
          <h4>Report</h4>
          <pre>{JSON.stringify(report)}</pre>
        </>}
    </div>
  )
}
