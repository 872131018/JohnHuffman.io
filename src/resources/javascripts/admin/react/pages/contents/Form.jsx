import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Cancel from './Cancel';

const props = (store) => {
    return {
        contentKey: store.FormStore.key,
        header: store.FormStore.header,
        content: store.FormStore.content
    };
};

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit() {
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.post(window.location, store.getState().FormStore).then(response => {
            store.dispatch({ type: 'NEW_CONTENT', data: response.data[0] });
            store.dispatch({ type: 'SERVICE_FINISHED' });
            this.props.history.push('/admin/contents');
        });
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            const contents = store.getState().ContentStore.contents;
            for(let content of contents) {
                if(content.id == this.props.match.params.id) {
                    store.dispatch({
                        type: 'SET_KEY',
                        data: content.key
                    });
                    store.dispatch({
                        type: 'SET_HEADER',
                        data: content.header
                    });
                    store.dispatch({
                        type: 'SET_CONTENT',
                        data: content.content
                    });
                }
            }
        }
    }

    render() {
        return (
            <div>
                <div className="w3-section">
                    <h3>Create Content</h3>
                    <Cancel route={ `${ window.baseUrl }/admin/contents` }/>
                </div>
                <Input label="Key"
                    value={ this.props.contentKey }/>
                <Input label="Header"
                    value={ this.props.header }/>
                <Input label="Content"
                    value={ this.props.content }/>
                <button className="w3-button w3-green"
                    onClick={ this.submit }>
                    <i className="fa fa-paper-plane w3-margin-right"></i>Submit
                </button>
            </div>
        );
    }
}
export default connect(props)(Form);
