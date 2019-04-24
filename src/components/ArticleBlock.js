import React, {
    Component
} from 'react';

import Author from "./ArticleInfo";
import MemberPreview from "./MemberPreview";

class ArticleBlock extends Component {
  render() {
    let memberPreview;
    if(this.props.memberPreview) {
      memberPreview = <MemberPreview/>;
    }

    return (
        <div className="SampleComp">
            <img src={this.props.img}></img>
            <div className="content">
              <div>
                {memberPreview}
                <h2><a href="this.props.link">{this.props.title}</a></h2>
                <p>{this.props.text}</p>
              </div>
              <Author
                authorImg={this.props.author.image}
                authorName={this.props.author.name}
                postedDate={this.props.postedDate} minutesToRead={this.props.minutesToRead}/>
            </div>
        </div>

    );
  }
}

export default ArticleBlock;