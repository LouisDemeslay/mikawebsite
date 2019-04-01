import React from 'react';
import './Logo.css';

const logo = () => {
  return (
    <div className='Logo'>
      <div className='MickDiv'>
        <p className='Mick'> M </p>
        <p className='Mick'> I </p>
        <p className='Mick'> C </p>
        <p className='Mick'>  K </p>
      </div>
      <div className='AelDiv'>
        <p className='Ael'> A </p>
        <p className='Ael'> E </p>
        <p className='Ael'> L </p>
      </div>
      <div className='KonDiv'>
        <p className='Kon'> K </p>
        <p className='Kon'> O </p>
        <p className='Kon'> N </p>
      </div>
      <div className='EDiv'>
        <p className='E'> E </p>
      </div>
    </div>
  )
};

export default logo;
