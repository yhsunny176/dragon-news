import React from 'react';
import { Outlet } from 'react-router';

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