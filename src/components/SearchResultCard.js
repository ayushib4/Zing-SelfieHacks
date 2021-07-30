import React, { Component } from "react";
import StarRatingComponent from 'react-star-rating-component';

export default function SearchResultCard() {
    return (
        <div class="card mx-6 my-4">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">Restaurant Name</p>
                        <StarRatingComponent editing={false} starCount={5} value={3}/>
                        <p class="subtitle is-6">Description</p>
                    </div>
                    <div class="media-right mr-4">
                        <p class="title is-4 pr-4">Address</p>
                        <p class="subtitle is-6 pr-4">Street, City</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
