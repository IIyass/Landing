import React from 'react';
import { Link } from 'react-router-dom';
import * as Style from './styles';
import Logo from '../../../Illustration/hichatylogo.svg'

const Header = () => (
  <Style.Wrapper>
    <Style.Logo>
      <Link to="/"><img src={Logo} alt="logo"/></Link>
    </Style.Logo>
    <ul>
      <Link to="#"><li> Login</li></Link>
      <Link to="#"><li>Register</li></Link>
    </ul>
  </Style.Wrapper>
);

export default Header;
