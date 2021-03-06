import React from "react";

export function SearchResultsSummary(props) {
  let resultStats = null;
  if (props.amountResults && props.shownResults) {
    resultStats = (
      <p>
        Showing 1-{props.shownResults} out of {props.amountResults} results
      </p>
    );
  }
  return (
    <section>
      <div class="level mx-6 my-4">
        <div class="level-left title pl-4">
          <strong> {props.term} </strong>, {props.location}
        </div>
        <div class="level-right pr-4">{resultStats}</div>
      </div>
    </section>
  );
}
