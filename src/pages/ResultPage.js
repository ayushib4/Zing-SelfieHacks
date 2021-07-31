import React from "react";
import SearchResultCard from "../components/SearchResultCard";

export default function ResultPage() {
  return (
    <div>
      <section class="section py-5 has-background-light">
        <h1 class="title ">
          <strong>Search Result for ...</strong>
        </h1>
      </section>
      <section class="section is-fullheight">
        <SearchResultCard />
        <SearchResultCard />
      </section>
    </div>
  );
}
