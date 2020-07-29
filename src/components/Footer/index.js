import React from 'react';
import { Link } from 'react-router-dom'
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Link to="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <Link to="https://www.alura.com.br/">
          Imersão React da Alura
        </Link>
      </p>
    </FooterBase>
  );
}

export default Footer;
