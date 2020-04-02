import React, { useEffect, useState } from "react";
import { get } from "../api";
import { form } from "../form/data";

export default ({ reportId }) => {
  const [loading, setLoading] = useState();
  const [report, setReport] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    setReport();
    setError();
    setLoading(true);

    get(reportId)
      .then(report => setReport(report))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [reportId]);

  const rows = [];

  for (let i = 0; i < form.steps.length; i++) {
    var step = form.steps[i];
    rows.push(
      <tr key={i}>
        <td colSpan="2" key={step.headline}>
          <b>{step.headline}</b>
        </td>
      </tr>
    );
    let children = [];
    for (let x = 0; x < step.questions.length; x++) {
      var q = step.questions[x];
      if (report && report[q.path]) {
        rows.push(
          <tr key={q.suggestion}>
            <td>{report[q.path]}</td>
            <td>{q.suggestion}</td>
          </tr>
        );
      }
    }
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.toString()}</pre>
        </>
      )}
      {report && (
        <>
          <h4>Report</h4>
          <pre>{JSON.stringify(report)}</pre>
          <table>
            <tbody>{rows}</tbody>
          </table>
        </>
      )}
    </div>
  );
};
