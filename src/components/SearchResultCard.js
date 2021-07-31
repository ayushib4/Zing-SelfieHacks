import React, { Component } from "react";
import StarRatingComponent from 'react-star-rating-component';

export default function SearchResultCard() {
    return (
        <div class="card mx-6 my-4">
            <div class="card-content">
                <div class="media">
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
