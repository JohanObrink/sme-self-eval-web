import React from 'react';

export default ({ question, children }) => {
  return (
    <div className="row">
      <div className="col question">
        <h3>{question}</h3>
        {children}
      </div>
    </div>
  );
};
