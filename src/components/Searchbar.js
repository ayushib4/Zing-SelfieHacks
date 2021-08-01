import React, { useState } from "react";

export function SearchBar(props) {
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  function submit(e) {
    if (typeof props.search === "function") {
      props.search(term, location);
    }
    console.log(term, location);
    e.preventDefault();
  }

  const sizeClass = props.small ? "" : "is-medium";
  return (
    <form onSubmit={submit}>
      <div className="field has-addons">
        <p className="control">
          <input
            className={`input ${sizeClass} input is-medium`}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            value={term}
            placeholder="restaurants, cuisine"
          />
        </p>
        <div className="control">
          <div className={`button is-static ${sizeClass}`}>near</div>
        </div>
        <p className="control">
          <input
            className={`input ${sizeClass} input is-medium`}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            value={location}
            placeholder="city"
          />
        </p>

        <div cclassName={`button ${sizeClass} `} onClick={submit}>
          <button className="button is-medium">search now</button>
        </div>
      </div>
    </form>
  );
}
