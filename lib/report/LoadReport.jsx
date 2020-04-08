import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TextBox } from '@sebgroup/react-components/dist/TextBox/TextBox';
import { Button } from '@sebgroup/react-components/dist/Button/Button';

export default () => {
  const [reportId, setReportId] = useState('');
  const [valid, setValid] = useState(false);
  const history = useHistory();

  const rxReportId = /^[A-NP-Z1-9]{6}$/;
  useEffect(() => {
    setValid(rxReportId.test(reportId.toUpperCase()));
  }, [reportId]);
  return (
    <div>
      <h2>Load report</h2>
      <TextBox
        type="text"
        value={reportId}
        onChange={(event) => setReportId(event.target.value)}
      />
      <Button
        label="Hämta"
        disabled={!valid}
        onClick={() => history.push(`./${reportId.toLowerCase()}`)}
      />
    </div>
  );
};
