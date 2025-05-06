import React from 'react';
import { NavLink } from 'react-router';

const Category = ({category}) => {
  const {id, name} = category;
  return (
    <div className='max-w-full py-4 px-10'>
      <NavLink className={"btn border-0 bg-none w-full text-blk-lt cursor-pointer hover:bg-light-gray"} to={`/category/${id}`}>{name}</NavLink>
    </div>
  );
};

export default Category;