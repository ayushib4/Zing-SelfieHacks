import React from 'react';
import { SearchBar } from '../components/Searchbar';
import useReactRouter from 'use-react-router';
import Fade from 'react-reveal/Fade';

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
    <div className="hero has-background-primary-light">
      some content
      <Fade bottom>
        <div className="Home__SearchBar" >
          <SearchBar search={search} />
        </div>
      </Fade>
    </div>
  );
}