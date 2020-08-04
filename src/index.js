import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <CommentDetail
      author={'Chuck Norris'}
      time={'Today at 4:00PM'}
      comment={'Cool ass comment'}
    />
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))
