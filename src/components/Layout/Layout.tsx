import React from 'react';
import Footer from './Footer';
import Header from './Header';
import * as St from './style';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <St.MainWrapper>{props.children}</St.MainWrapper>
      <Footer />
    </>
  );
};
export default Layout;
