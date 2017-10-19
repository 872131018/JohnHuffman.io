import React from 'react';
import { connect } from 'react-redux';
import Create from './Create';
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
        const contents = this.props.contents.map((content) => {
            return (
                <Content
                    headers={ this.props.headers }
                    content={ content }
                    key={ content.id.toString() }/>
            );
        });

        return (
            <div>
                <h3>Contents:</h3>
                <Create route={ `${ window.baseUrl }/admin/content/create` }/>
                <div className="table hundred">
                    <Headers headers={ this.props.headers }/>
                    { contents }
                </div>
            </div>
        );
    }
}

export default connect(props)(Page);
