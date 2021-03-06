import React from 'react';
import NavBar from './NavBar';
import Footer from '../Footer';
import { LandingLayoutWrapper } from '../Common/Layout';

const Layout = ({ children }) => (
  <LandingLayoutWrapper>
    <NavBar />
    {children}
    <Footer />
  </LandingLayoutWrapper>
);

export default Layout;
