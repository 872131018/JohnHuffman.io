import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';

const props = (store) => {
    return {
        email: store.FormStore.email,
        password: store.FormStore.password
    };
};

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-content" style={{maxWidth: '500px'}}>
                <div className="w3-panel">
                    <Input label="Email"
                        type='text'
                        value={ this.props.email }/>
                </div>
                <div className="w3-panel">
                    <Input label="Password"
                        type='password'
                        value={ this.props.password }/>
                </div>
                <button className="w3-button w3-right w3-black">Login</button>
            </div>
        );
    }
}

export default connect(props)(Form);
