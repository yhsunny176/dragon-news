import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';

const Root = () => {
  return (
    <div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Root;