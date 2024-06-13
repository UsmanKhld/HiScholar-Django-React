import React from 'react';
import './Scitem.css'

export const ScItem = ({ sch, onClose }) => {
  return (
    <div className="modal-backdrop" >
      <div className="modal-content">
        <p className='modal-title text-2xl font-bold'>{sch.title}</p>
        <button onClick={onClose} className="close-button">X</button>
        <p className='modal-amount'><b className='text-xl'>Amount:</b> {sch.amount}</p>
        
        <p className='text-xl font-semibold modal-details'>Details:</p>
        <p className='text-lg modal-description'>{sch.description}</p>
        <a href={sch.apply} className='modal-apply'><button className="apply-button">Apply</button></a>
      </div>
    </div>
  );
};

export default ScItem;