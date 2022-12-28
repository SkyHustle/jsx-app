import React from 'react';

function ApprovalCard(props) {
  return (
    <div className="card">
      <div className="card-content">{props.children}</div>
        <div className="buttons">
          <div className="button">Approve</div>
          <div className="button">Decline</div>
        </div>
    </div>
  );
}

export default ApprovalCard;
