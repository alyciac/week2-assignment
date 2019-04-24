import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import missedArticles from './_data/missed-articles.json';
import yourArticles from'./_data/your-articles.json';

ReactDOM.render(<App missedArticles={missedArticles} yourArticles={yourArticles}/>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
