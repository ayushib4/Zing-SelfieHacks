import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

export default function SearchResultCard(props) {
  return (
    <div class="card mx-6 my-4">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img
                src="https://www.awilsonsocialwork.net/wp-content/uploads/2017/01/placeholder.jpg"
                alt=""
              ></img>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{props.name}</p>
            <StarRatingComponent editing={false} starCount={5} value={3} />
            <p class="subtitle is-6">{props.description}</p>
          </div>
          <div class="media-right mr-4">
            <p class="title is-4 pr-4">{props.address}}</p>
            <p class="subtitle is-6 pr-4">{props.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
