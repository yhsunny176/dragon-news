import React from 'react';
import Categories from '../../Components/Categories/Categories';

const LeftAside = () => {
  return (
    <div className='py-3 px-4'>
      <h1 className='text-blk-txt-primary font-bold text-lg'>All Category</h1>
      <Categories></Categories>
    </div>
  );
};

export default LeftAside;