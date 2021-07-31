import React from 'react';
import { SearchBar } from '../components/Searchbar';
import useReactRouter from 'use-react-router';

export function Home() {
  const { history } = useReactRouter();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }

  return (
    <div className="">
      <div className="">
        <SearchBar search={search} />
      </div>
    </div>
  );
}