import React from "react";
import { SearchBar } from "../components/Searchbar";
import useReactRouter from "use-react-router";
import Fade from "react-reveal/Fade";
import "./Home.css";
import { Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

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
    <div>
      <center>
        <Fade bottom>
          <div className="header">Discover Instagram-Worthy Restaurants</div>
          <Carousel className="carousel">
            <Carousel.Item>
              <Image
                className="images"
                src="https://www.nyfa.edu/student-resources/wp-content/uploads/2019/08/rachel-park-hrlvr2ZlUNk-unsplash.jpg"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="images"
                src="https://prods3.imgix.net/images/articles/2016_08/Non-Feature-Photo-Editing-Apps-Iphone-Instagram-Snapseed-Facetune-vsco-Photoshop-Fix-Lightroom-Mobile-Photo-Justin-Schuble-_dcfoodporn.jpg"
              ></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="images"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfniHQ0ZoAFcdRqkcJAeJDxD4zIChmo6ZUEjwuH1U8QGblq-kNaPNUQKc2fQ63O3CdUA&usqp=CAU"
              ></Image>
            </Carousel.Item>
          </Carousel>
          <div className="Home__SearchBar">
            <SearchBar search={search} />
          </div>
        </Fade>
      </center>
    </div>
  );
}
