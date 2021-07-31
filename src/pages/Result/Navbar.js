import React from 'react';
import { SearchBar } from '../../components/Searchbar';

export function NavBar(props) {
    return (
        <div className="">
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
        </div>
    );
}
