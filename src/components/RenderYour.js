import React, { Component } from 'react';

import ArticleBlock from './ArticleBlock';

class RenderYour extends Component {
    render() {
      let yourArticles=[];
      for (let i = 0; i < 4; i++) {
        let yourArt = this.props.yourArticles[i];
        yourArticles.push(
          <ArticleBlock
          memberPreview={yourArt.memberPreview}
            img={yourArt.image}
            title={yourArt.title}
            text={yourArt.description}
            author={yourArt.author}
            postedDate={yourArt.postedDate}
            minutesToRead={yourArt.minutesToRead}/>
        );
      }

      return (
          <div className="cols two">
              {yourArticles}
          </div>
      );
    }
}

export default RenderYour