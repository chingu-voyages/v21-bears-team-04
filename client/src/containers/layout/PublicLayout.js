import React from 'react';
import { Footer } from './Footer';
import Nav from './Nav/Nav';

export const PublicLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
