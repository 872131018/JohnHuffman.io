import React from 'react';
import Edit from './Edit';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
    }

    delete() {
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.delete(`${ window.baseUrl }/admin/content/${ this.props.content.id.toString() }`).then(response => {
            store.dispatch({ type: 'REMOVE_CONTENT', data: this.props.content.id.toString() });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });
    }

    render() {
        const cells = this.props.headers.map((property, index) => {
            return (
                <div className="cell v-align w3-padding-16 w3-center"
                    key={ property + index.toString() }>{ this.props.content[property] }
                </div>
            )
        });

        return (
            <div className="row w3-hover-black">
                { cells }
                <div className="cell v-align w3-padding-16 w3-center">
                    <Edit route={ `${ window.baseUrl }/admin/content/${ this.props.content.id.toString() }/edit` }/>
                </div>
                <div className="cell v-align w3-padding-16 w3-center">
                    <button className="w3-button w3-red w3-margin-left"
                        onClick={ this.delete }>
                        <i className="fa fa-exclamation-triangle w3-margin-right"></i>DESTROY
                    </button>
                </div>
            </div>
        );
    }
}

export default Content;
