import React from 'react'
import faker from 'faker';

const CommentDetail = ({ author, time, comment}) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{time}</span>
          </div>
          <div className="text">{comment}</div>
        </div>
      </div>
    </div>
  )
};

export default CommentDetail;
