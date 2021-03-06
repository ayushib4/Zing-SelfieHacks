import React from "react";
import styles from "./SearchResult.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BusinessRating } from "../../BusinessRating/BusinessRating";

export function SearchResult(props) {
  const b = props.business;
  if (!b) {
    return <div />;
  }

  const tags = b.categories.map((category) => (
    <span
      className={`tag ${styles["business-tag"]}`}
      key={b.id + category.title}
    >
      {category.title}
    </span>
  ));
  const addressLines = b.location.display_address.map((addressLine) => (
    <p key={b.id + addressLine}>{addressLine}</p>
  ));

  return (
    <div class="card mx-6 my-4 is-max-desktop">
      <div class="card-content">
        <div class="columns">
          <div class="column is-narrow ">
            <figure class="image is-square is-128x128">
              <img src={b.image_url} alt="business"/>
            </figure>
          </div>
          <div class="column is-auto">
            <p class="title is-4 m-0">{b.name}</p>
            <BusinessRating reviewCount={b.review_count} rating={b.rating} />
            <p class="mb-3"><a href={b.url} target="blank">
              Know more
            </a></p>
            <Link to="/insta">
              <Button variant="info" size="lg">
                Zing It!
              </Button>
            </Link>
            <footer class="card-footer mb-0 pb-0 ">
              <p>
                {b.price} {tags}
              </p>
            </footer>
          </div>

          <div class="column is-3">
            <p class="subtitle is-6 pr-4">{addressLines}</p>
            <p class="subtitle is-6 pr-4">{b.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
