import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';

const props = (store) => {
    return {
        email: store.FormStore.email,
        password: store.FormStore.password,
        errors: store.ErrorStore.errors
    };
};

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const csrf = document.head.querySelector('meta[name="csrf-token"]').content;
        const errors = this.props.errors;

        return (
            <div className="w3-content" style={{maxWidth: '500px'}}>
                <form action={ window.location } method="POST">
                    { errors &&
                        <div className="w3-panel w3-text-red">{ errors }</div> 
                    }
                    <div className="w3-panel">
                        <Input label="Email" type='text' name='email'
                            value={ this.props.email }/>
                    </div>
                    <div className="w3-panel">
                        <Input label="Password" type='password' name='password'
                            value={ this.props.password }/>
                    </div>
                    <input type='hidden' name="_csrf" value={ csrf }/>
                    <button className="w3-button w3-right w3-black" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default connect(props)(Form);
