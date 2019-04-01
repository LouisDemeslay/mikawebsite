import React from 'react';
import './Videos.css'

const videos = () => {
  return (
    <div className='FullScreen'>
      <iframe className='Videos'
      src="https://www.youtube.com/embed/3egagRvougI">
      </iframe>
      <iframe className='Videos'
      src="https://www.youtube.com/embed/BtyHYIpykN0">
      </iframe>
    </div>

  )
}

export default videos;
