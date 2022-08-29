import React from "react";
import Collapsible from "../components/CollapsibleBox/CollapsibleBox";

export default function CollapsibleBox() {
  return (
    <div className="collapsible-box-landing">
      <h1>Collapsible Box</h1>
      <p>Click on the blue boxes to collapse the content:</p>

      <Collapsible headerText="Budgies" bodyText="They chirp and talk a lot" />
      <Collapsible headerText="Cats" bodyText="They purr when they love their owner and their pats" />
      <Collapsible headerText="Dogs" bodyText="Your best friend" />
      <Collapsible headerText="Fish" bodyText="May be boring, but they are very beautiful and calming" />
    </div>
  );
}
