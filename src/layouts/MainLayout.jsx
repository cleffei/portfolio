import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
