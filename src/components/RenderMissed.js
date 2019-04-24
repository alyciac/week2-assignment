import React, { Component } from 'react';

import ArticleBlock from './ArticleBlock';

class RenderMissed extends Component {
    render() {
        let missedArticles=[];
        for (let i = 0; i < 3; i++) {
          let missArt = this.props.missedArticles[i];
          missedArticles.push(
            <ArticleBlock
                memberPreview={missArt.memberPreview}
                img={missArt.image}
                title={missArt.title}
                text={missArt.description}
                author={missArt.author}
                postedDate={missArt.postedDate}
                minutesToRead={missArt.minutesToRead}/>
          );
      }
      return (
          <div className="cols three">
              {missedArticles}
          </div>
      );
    }
}

export default RenderMissed