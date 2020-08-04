import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Chuck Norris"
        time="Today at 4:00PM"
        comment="Cool ass comment"
      />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))
