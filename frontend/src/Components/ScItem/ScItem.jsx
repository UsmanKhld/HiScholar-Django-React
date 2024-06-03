import React from 'react';
import './Scitem.css'

export const ScItem = ({ sch, onClose }) => {
  return (
    <div className="modal-backdrop" >
      <div className="modal-content">
        <div className='flex justify-between'>
          <p className='text-2xl mb-7 font-bold'>{sch.title}</p>
          <button onClick={onClose} className="close-button">X</button>
        </div>
        
        <div className='w-full h-3/4 mb-7 '>
          <p className='text-xl font-semibold mb-5'>Details:</p>
          <p className='text-lg'>{sch.description}</p>
        </div>
        <a href={sch.apply}><button className="apply-button">Apply</button></a>
      </div>
    </div>
  );
};

export default ScItem;