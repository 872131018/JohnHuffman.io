import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="section w3-light-grey">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <div className="panel">
                                <div className="panel-block section">
                                    <p className="has-text-centered">
                                        <i className="fa fa-camera-retro icon-block"></i>
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                                    <p className="has-text-centered">
                                        <a className="button is-info is-outlined">Action</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="panel">
                                <div className="panel-block section">
                                    <p className="has-text-centered">
                                        <i className="fa fa-bar-chart icon-block"></i>
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                                    <p className="has-text-centered">
                                        <a className="button is-info is-outlined">Action</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="panel">
                                <div className="panel-block section">
                                    <p className="has-text-centered">
                                        <i className="fa fa-cloud icon-block"></i>
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                                    <p className="has-text-centered"><a className="button is-info is-outlined">Action</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
