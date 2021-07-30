import React from 'react'

export default function Home() {
    return (
        <div className="has-background-primary-light">
            <header class="hero-body">
                <div class="container has-text-centered">
                    <div class="field has-addons">
                    <p class="control">
                        <input className="input is-medium" type="text" placeholder="restaurants, cuisine"/>
                    </p>
                    <p class="control">
                        <button className="button is-static is-medium">NEAR</button>
                    </p>
                    <p class="control">
                        <input className="input is-medium" type="text" placeholder="city"/>
                    </p>
                    <div class="control ">
                        <a href ="/results">
                            <button className="button is-medium">Search Now</button>
                        </a>
                    </div>
                </div>
                </div>
            </header>
        </div>
    )
}
