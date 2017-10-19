import React from 'react';
import Form from './form/Form';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Form/>
            </div>
        );
    }
}

export default Page;
