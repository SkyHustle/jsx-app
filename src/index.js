import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Chuck Norris"
        time="Today at 4:00PM"
        comment="Cool ass comment"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Michael Jackson"
        time="Yesterday at 1:00PM"
        comment="bomb ass comment"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Yo Mama"
        time="last year at 11:00AM"
        comment="yo mama comment"
        image={faker.image.avatar()}
      />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))
