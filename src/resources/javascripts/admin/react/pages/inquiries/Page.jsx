import React from 'react';
import { connect } from 'react-redux';
import Headers from '../../global/Headers';
import Inquiry from './Inquiry';

const props = (store) => {
    return {
        headers: store.InquiryStore.properties,
        inquiries: store.InquiryStore.inquiries
    };
};

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headers = this.props.headers;
        const inquiries = this.props.inquiries.map((inquiry) => {
            return (
                <Inquiry inquiry={ inquiry }
                    key={ inquiry.id.toString() }/>
            );
        });

        return (
            <div>
                <h3>Inquiries:</h3>
                <div className="table hundred">
                    <Headers headers={ headers }></Headers>
                    { inquiries }
                </div>
            </div>
        );
    }
}

/*
<Inquiry
    v-bind:properties="properties"
    v-for="inquiry in inquiries"
    v-bind:key="inquiry.id"
    v-bind:inquiry="inquiry">
</Inquiry>
*/
export default connect(props)(Page);
