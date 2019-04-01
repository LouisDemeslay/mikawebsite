import React from 'react';
import './NavigationSide.css';
import instagram from '../../../assets/logo/instagram.png';
import facebook from '../../../assets/logo/facebook.png';


const navigationSide = () => {
  return (
    <div className='SideBar'>
      <a href='https://www.instagram.com/cedrickone/'> <img className='Images' src={instagram}/> </a>
      <a href='https://www.facebook.com/michael.kone'> <img className='Images' src={facebook}/> </a>
    </div>
  )
};

export default navigationSide;
