import React from 'react';

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-half">
                 <div id="googleMap" className="w3-round-large w3-greyscale" style={{ width: '100%', height:'400px' }}></div>
            </div>
        );
    }
}

export default GoogleMap;
