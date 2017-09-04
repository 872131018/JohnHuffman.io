import React from 'react';
import Edit from './Edit';
import Destroy from './Destroy';

class Content extends React.Component {
    constructor(props) {
        super(props);
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
                    <Destroy route={ `${ window.baseUrl }/admin/content/${ this.props.content.id.toString() }/destroy` }/>
                </div>    
            </div>
        );
    }
}

export default Content;
