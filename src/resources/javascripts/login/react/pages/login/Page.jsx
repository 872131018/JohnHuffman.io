import React from 'react';
import Hero from './hero/Hero';
import Form from './form/Form';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Hero/>
                <Form/>
            </div>
        );
    }
}

export default Page;
