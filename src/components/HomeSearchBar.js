import React, {useState} from "react";
import SearchResultCard from "../components/SearchResultCard";
import ResultPage from "../pages/ResultPage";
import { Link, Redirect } from "react-router-dom";

export default function HomeSearchBar(){
//   const {
//     query,
//     setQuery,
//     location,
//     setLocation,
//     results,
//     loading,
//     message
//   } = props
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');
  

//   function fetchSearchResults() {
//     const { query, location } = this.state;
//     const searchURL = `https://serpapi.com/search.json?q=${query}}&location=${location}%2C+United+States&hl=en&gl=us&google_domain=google.com&api_key=7f5fdb7051b775754629d9822e9ea2727188e579b9db3616054fce9188b23298`;
//     const data = await fetch(searchURL);
//     const cleanData = await data.json();
//     this.setState({
//       results: cleanData.local_results,
//       loading: false,
//     });
//     console.log(this.state.results);
//   }

//   function handleChange(event) {
//     this.setState({ query: event.target.value, loading: true }, () => {
//       this.fetchSearchResults();
//     });
//   }

  function handleSubmit(event){
    // ResultPage(query,location);
    // console.log(query);
    <div>
        <div>query</div>
        <div>location</div>
    </div>
  }

//   render() {
//     const { results, loading } = this.state;
//     if (loading) {
//       return <div>Loading...</div>;
//     } else {
      return (
        <div>
          <div className="has-background-primary-light">
            <header class="hero-body">
              <div class="container has-text-centered">
                <div class="field has-addons">
                  <p class="control">
                    <input
                      className="input is-medium"
                      type="text"
                    //   value={this.state.value}
                      onChange={(event) => setQuery(event.target.value)}
                      id="food-input"
                      placeholder="restaurants, cuisine"
                    />
                  </p>
                  <p class="control">
                    <button className="button is-static is-medium">NEAR</button>
                  </p>
                  <p class="control">
                    <input
                      className="input is-medium"
                      type="text"
                      onChange={(event) => setLocation(event.target.value)}
                      id="location-input"
                      placeholder="city"
                    />
                  </p>
                  <div class="control ">
                    {/* <a href="/results"> */}
                    <button className="button is-medium" onClick={handleSubmit}>Search Now</button>
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </header>
          </div>
          {/* <div className="results-container">
            <SearchResultCard
              name={this.state.results.title}
              address={results.address}
              description={results.description}
            ></SearchResultCard>
          </div> */}
        </div>
      );
//     }
//   }
}
