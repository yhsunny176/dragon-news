import React from 'react';
import { Navigate } from 'react-router';

const HomeNews = () => {
  return <Navigate to={"/category/0"}></Navigate>;
};

export default HomeNews;