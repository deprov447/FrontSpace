import CategoryCard from './CategoryCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';

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
    <Flex wrap={'wrap'} justify={'space-around'}>
      {categoriesArray.map(({ name, img, desc }) => (
        <CategoryCard name={name} img={img} desc={desc} key={name} />
      ))}
    </Flex>
  );
};

export default Categories;
