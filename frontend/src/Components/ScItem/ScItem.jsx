import React from 'react';
import './Scitem.css'

export const ScItem = ({ sch, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content">
        <button onClick={onClose} className="close-button">Close</button>
        <h2>{sch.title}</h2>
        <p>Due Date: {sch.due}</p>
        <p>Amount: {sch.amount}</p>
        <p>Details: {sch.description}</p>
        <a href={sch.apply}><button className="apply-button">Apply</button></a>
      </div>
    </div>
  );
};

export default ScItem;