import CategoryCard from './CategoryCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { ThreeDots } from 'react-loader-spinner';

const Categories = () => {
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/categories`)
      .then(({ data }) => {
        setCategoriesArray(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <Flex wrap={'wrap'} justify={'space-around'}>
      {isLoading && <ThreeDots ariaLabel="loading-indicator" color="gray" />}
      {categoriesArray.map(({ name, img, desc }) => (
        <CategoryCard name={name} img={img} desc={desc} key={name} />
      ))}
    </Flex>
  );
};

export default Categories;
