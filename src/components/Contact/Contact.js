import React from 'react';
import './Contact.css';

const contact = () => {
  return(
    <div className='FullScreenMap'>
      <iframe src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Paris+(Mickael%20Kone)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0">
      </iframe>
      <p> Mickael Kone </p>
      <p> Paris </p>
      <p> mickaelkonepro@gmail.com </p>
      <p> Demande de devis, renseignements, partenariat et formations </p>
    </div>
  )
};

export default contact;
