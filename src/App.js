import React, { Component } from 'react';
import './App.css';

import RenderMissed from './components/RenderMissed';
import RenderYour from "./components/RenderYour";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Your Articles</h3>
        <RenderYour yourArticles={this.props.yourArticles}></RenderYour>
        <h3>Missed Articles</h3>
        <RenderMissed missedArticles={this.props.missedArticles}></RenderMissed>
      </div>
    );
  }
}

export default App
