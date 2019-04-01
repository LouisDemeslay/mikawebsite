import React, {Component} from 'react';
import NavigationBar from '../Navigation/NavigationBar/NavigationBar';
import NavigationSide from '../Navigation/NavigationSide/NavigationSide';
import Pictures from '../Pictures/Pictures';
import Contact from '../Contact/Contact';
import Videos from '../Videos/Videos';
import {Route,component} from 'react-router-dom';
import profil from '../../assets/pictures/profil.jpg';
import kid from '../../assets/pictures/kid.jpg';
import './Layout.css';


const layout = () => {

    return (
      <div className='Layout'>
        <NavigationBar className='NavBar'/>
        <NavigationSide/>
        <Route exact path='/pictures' component={Pictures}/>
        <Route exact path='/videos' component={Videos}/>
        <Route exact path='/contact' component={Contact}/>
      </div>
    )
};

export default layout;
