import React, { use } from 'react';
import Category from '../Category/Category';

const categoryPromise = fetch('/categories.json').then((res)=>res.json());


const Categories = () => {
  const catData = use(categoryPromise);
  return (
    <div className='py-4'>
      {
        catData.map(category => <Category key={category.id} category={category}></Category>)
      }
    </div>
  );
};

export default Categories;