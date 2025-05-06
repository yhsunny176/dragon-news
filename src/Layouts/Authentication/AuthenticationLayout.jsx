import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthenticationLayout = () => {
  return (
    <div>
    <header>
      <Navbar></Navbar>
    </header>

    <section className='py-6 flex items-center justify-center'>
      <Outlet></Outlet>
    </section>
    </div>
  );
};

export default AuthenticationLayout;