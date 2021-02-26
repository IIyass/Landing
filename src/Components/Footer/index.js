import React from 'react';
import * as Style from './style';
import FooterLogo from '../../Illustration/Poweredbydevshubha.svg';
import EnjoeeMsg from '../../Illustration/Enjoee-msg.svg';
import Fb from '../../Illustration/facebook.svg'
import Tw from '../../Illustration/twitter.svg'
import In from '../../Illustration/linkdin.svg'
import Youtube from '../../Illustration/youtube.svg'


const Footer = () => (
  <Style.Wrapper>
    <img src={FooterLogo} alt="footer"/>
    <Style.Details>
      <ul>
        <li>About Us</li>
        <li>Support</li>
        <li>Api</li>
        <li>Privacy</li>
        <li>Terms</li>
      </ul>
      <img src={EnjoeeMsg} alt="logo"/>
    </Style.Details>
    <Style.Icons>
      <img src={Fb} alt="facebook"/>
      <img src={Tw} alt="facebook"/>
      <img src={Youtube} alt="facebook"/>
      <img src={In} alt="facebook"/>
    </Style.Icons>
  </Style.Wrapper>

);

export default Footer;
