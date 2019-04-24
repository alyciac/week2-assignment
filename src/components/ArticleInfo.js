import PropTypes from 'prop-types';

import React, {
    Component
} from 'react';

import FormatedDate from "./FormatedDate";

class ArticleInfo extends Component {
    render() {
        return (
            <div className="author">
                <img src={this.props.authorImg}></img>
                <div className="author-text">
                    <p><strong>{this.props.authorName}</strong></p>
                    <FormatedDate dateString={this.props.postedDate}/>
                    <span> &#183; {this.props.minutesToRead} min read</span>
                </div>
                <i class="fas fa-bookmark"></i>
            </div>
        );
    }
}

ArticleInfo.protoTypes ={
    authorImg: PropTypes.string,
    authorName: PropTypes.string,
    minutesToRead: PropTypes.number
}

export default ArticleInfo;