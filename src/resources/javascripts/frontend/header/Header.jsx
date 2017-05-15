import React from 'react';
import Navigation from './navigation';

export default class Header extends React.Component {
    render() {
        return (
            <section class="hero is-primary is-large header-image">
                <div class="hero-head">
                    <Navigation></Navigation>
                </div>
            <div class="hero-body">
            <div class="container has-text-centered">
            <h1 class="title is-2">
            Hero Heading
            </h1>
            <h2 class="subtitle is-5">
            A hero description could go here.
            </h2>
            <p>
            <a class="button is-outlined">
            <span class="icon">
            <i class="fa fa-download"></i>
            </span>
            <span>
            Download
            </span>
            </a>
            </p>
            </div>
            </div>
            </section>
        );
    }
}
