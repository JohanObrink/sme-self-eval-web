import React from "react";
import { YesNoQuestion } from "../../components";

export default () => {
  return (
    <div>
      <div className="row">
        <YesNoQuestion
          className="col"
          headline="Är du eller anställd i läkarbeordad karantän?"
        />
      </div>
      <div className="row">
        <YesNoQuestion
          className="col"
          headline="Har du ansökt om smittbärarpenning hos försäkringskassan?"
        />
      </div>
    </div>
  );
};
