import React from "react";
import SearchResultCard from "../components/SearchResultCard";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      location: "Austin%2C+Texas",
      results: {},
      loading: false,
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async fetchSearchResults() {
    const { query, location } = this.state;
    const searchURL = `https://serpapi.com/search.json?q=${query}}&location=${location}%2C+United+States&hl=en&gl=us&google_domain=google.com&api_key=7f5fdb7051b775754629d9822e9ea2727188e579b9db3616054fce9188b23298`;
    const data = await fetch(searchURL);
    const cleanData = await data.json();
    this.setState({
      results: cleanData.local_results,
      loading: false,
    });
    console.log(this.state.results);
  }

  handleChange(event) {
    this.setState({ query: event.target.value, loading: true }, () => {
      this.fetchSearchResults();
    });
  }

  render() {
    const { results, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    } else {
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
                      value={this.state.value}
                      onChange={this.handleChange}
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
                      //   onChange={this.handleOnInputChange}
                      id="location-input"
                      placeholder="city"
                    />
                  </p>
                  <div class="control ">
                    {/* <a href="/results"> */}
                    <button className="button is-medium">Search Now</button>
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="results-container">
            <SearchResultCard
              name={this.state.results.title}
              address={results.address}
              description={results.description}
            ></SearchResultCard>
          </div>
        </div>
      );
    }
  }
}
