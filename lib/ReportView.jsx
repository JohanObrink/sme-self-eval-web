import React from 'react';
import { useParams } from 'react-router-dom';
import LoadReport from './report/LoadReport';
import Report from './report/Report';

export default () => {
  const { reportId } = useParams();
  return (
    <div className="container">
      <h1>Checklista – förslag på åtgärder</h1>
      <p>
        Här ser du våra förslag på åtgärder och vart du kan vända dig för att få
        hjälp. Vi har bockat för de saker som du har svarat att du redan har
        gjort och satt ett kryss bredvid dem som inte är relevanta för dig.
        Förslagen är generella och du kan behöva vidta fler åtgärder.
      </p>
      <p>
        Prata med din rådgivare om vilka åtgärder som kan vara aktuella och
        relevanta för dig. Har du ingen företagsrådgivare är du välkommen att{' '}
        <a
          href="https://seb.se/var-kundservice/contact/c1119-kundservice-foeretag"
          target="blank"
          className="external"
        >
          kontakta oss
        </a>
        . Vi har ovanligt hög belastning just men gör allt för att hjälpa dig
        snarast möjligt.
      </p>
      <p>
        Bokmärk den här sidan eller kom tillbaka till den med hjälp av din kod:{' '}
        <span class="h3">ABC123</span>.
      </p>
      <p>
        <a href="" target="blank" class="external">
          Mer om coronautbrottet på seb.se
        </a>
        .
      </p>
      {reportId && <Report reportId={reportId} />}
      {!reportId && <LoadReport />}
    </div>
  );
};
