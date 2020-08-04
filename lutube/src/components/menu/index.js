import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/lutubeLogo.png';
import './Menu.css';
import Button from '../Button';

// troca tag  Por Link, e troca href por to
function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="lutube logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="cadastro/video">
        Novo video
      </Button>
    </nav>

  );
}

export default Menu; // export menu
