import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styling/App.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="navbar">
      <img 
        src={require('../../assets/images/house.png')}
        alt="Home"
        className="icon"
        onClick={handleClick}
      />
    </div>
  );
};

export default Navbar;