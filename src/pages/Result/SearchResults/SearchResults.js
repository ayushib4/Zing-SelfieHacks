import React from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import { Spinner } from '../../../Spinner/Spinner';

export function SearchResults(props) {
    let searchResults = <Spinner />;
    if (props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b} />);
    }

    return (
        <div class="container center">
            {searchResults}
        </div>
    );
}
