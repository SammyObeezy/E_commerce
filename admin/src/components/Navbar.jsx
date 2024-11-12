import React from 'react';
import { assets } from '../assets/assets';  // Import named export

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="Logo" />
      <button className="">Logout</button>
    </div>
  );
};

export default Navbar;
