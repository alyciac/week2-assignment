import React, {
    Component
} from 'react';


class Author extends Component {
    render() {
      return (
          <div className="author">
              <img src={this.props.authorImg}></img>
              <div className="author-text">
                  <p><strong>{this.props.authorName}</strong></p>
                  <p>{formatDate(this.props.postedDate)}&#183; {this.props.minutesToRead} min read</p>
              </div>
              <i class="fas fa-bookmark"></i>
          </div>
      );
    }
  }

  export default Author;