import React from "react";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Chuck Norris"
          time="Today at 4:00PM"
          content="Cool ass comment"
          avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Michael Jackson"
          time="Yesterday at 1:00PM"
          content="bomb ass comment"
          avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Yo Mama"
          time="last year at 11:00AM"
          content="yo mama comment"
          avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
}

export default App;