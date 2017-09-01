import React from 'react';
import { connect } from 'react-redux';
import Headers from '../../global/Headers';
import Content from './Content';

const props = (store) => {
    return {
        headers: store.ContentStore.properties,
        contents: store.ContentStore.contents
    };
};

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headers = this.props.headers;
        const contents = this.props.contents.map((content) => {
            return (
                <Content
                    headers={ headers }
                    content={ content }
                    key={ content.id.toString() }/>
            );
        });

        return (
            <div>
                <h3>Contents:</h3>
                <div className="table hundred">
                    <Headers headers={ headers }></Headers>
                    { contents }
                </div>
            </div>
        );
    }
}

export default connect(props)(Page);
