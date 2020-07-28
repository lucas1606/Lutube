import React from 'react';
import Logo from '../../assets/img/lutubeLogo.png';
import './Menu.css';

function Menu(){
return (
<nav className='Menu'>
    <a href='/'>
    <img className='Logo' src={Logo} alt='lutube logo' />
    </a>
</nav>

);
};

export default Menu; // export menu
