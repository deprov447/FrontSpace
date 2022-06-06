import CategoryCard from './CategoryCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Categories = () => {
  const [categoriesArray, setCategoriesArray] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/categories`)
      .then(({ data }) => {
        setCategoriesArray(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {categoriesArray.map(({ name, img, desc }) => (
        <CategoryCard name={name} img={img} desc={desc} key={name} />
      ))}
    </>
  );
};

export default Categories;
