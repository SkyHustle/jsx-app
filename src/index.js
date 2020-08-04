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
      <CommentDetail
        author="Michael Jackson"
        time="Yesterday at 1:00PM"
        comment="bomb ass comment"
      />
      <CommentDetail
        author="Yo Mama"
        time="last year at 11:00AM"
        comment="yo mama comment"
      />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))
