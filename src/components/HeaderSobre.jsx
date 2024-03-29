import React, { useState } from 'react';
import MenuLateral from './MenuLateral';
import LogoIFPB from '../images/iconeifpb.png';

const HeaderSobre = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div>
      <header className="header">
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className="header-title">Sobre</div>
        <img src={LogoIFPB} alt="Logo IFPB" width="100" height="50" />      
      </header>
      <MenuLateral menuAberto={menuAberto} />
    </div>
  );
};

export default HeaderSobre;