import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Checkbox from './Checkbox';

const props = (store) => {
    return {
        name: store.FormStore.name,
        email: store.FormStore.email,
        message: store.FormStore.message,
        likes: store.FormStore.likes
    };
};

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit() {
        axios.post(`${ window.baseUrl }/inquiry`, store.getState().FormStore).then(response => {
            //@TODO: something here, idk what
        });
    }

    render() {
        return (
            <div className="w3-half">
                <div className="w3-panel">
                    <Input label="Name"
                        value={ this.props.name }/>
                </div>
                <div className="w3-panel">
                    <Input label="Email"
                        value={ this.props.email }/>
                </div>
                <div className="w3-panel">
                    <Input label="Message"
                        value={ this.props.message }/>
                </div>
                <div className="w3-panel">
                    <Checkbox
                        checked={ this.props.likes }/>
                </div>
                <button className="w3-button w3-right w3-black"
                    onClick={ this.submit }>Submit
                </button>
            </div>
        );
    }
}

export default connect(props)(Form);
