import React from 'react';

const Message = ({ message: { title, importance, body } }) => {

  return (
    <li className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{importance}</small>
      </div>
      <p className="mb-1">{body}</p>
    </li>
  );
};

export default Message;
