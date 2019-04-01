import React, {Component} from 'react';
import './Pictures.css';
import profil from '../../assets/pictures/profil.jpg';
import kid from '../../assets/pictures/kid.jpg';
import landscape from '../../assets/pictures/landscape.jpg'

const image = [profil,kid, landscape];

const pictures =(props)=>{
    return(
      <div className='FullPage'>
        <div className='DivCenter'>
        {image.map((img)=>{
          return <img src={img}/>
        })}
        </div>
      </div>
    )
}

export default pictures;
