import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="bgimg-1 w3-display-container w3-opacity-min">
                <div className="w3-display-middle" style={{whiteSpace:'nowrap'}}>
                    <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
                        MY<span className="w3-hide-small"> WEBSITE </span>LOGO
                    </span>
                </div>
            </div>
        );
    }
}
