import React from 'react';
import { SearchResultsSummary } from './Result/SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './Result/SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import { useBusinessSearch } from '../hooks/useBusinessSearch';
import { SearchBar } from "../components/Searchbar"
import Fade from "react-reveal/Fade"

export function ResultPage() {
    const { location, history } = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);

    if (!term || !locationParam) {
        history.push('/');
    }

    function search(term, location) {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
        performSearch({ term, location });
    }

    return (
        <div>

            <Fade top>
                <div className="Home__SearchBar">
                    <SearchBar term={term} location={locationParam} search={search} />
                </div>
            </Fade>

            <Fade bottom>
                <SearchResultsSummary term={searchParams.term}
                    location={searchParams.location}
                    amountResults={amountResults}
                    shownResults={businesses ? businesses.length : 0}
                />
            </Fade>

            <Fade left cascade>
                <SearchResults businesses={businesses} />
            </Fade>
        </div>
    );
}
