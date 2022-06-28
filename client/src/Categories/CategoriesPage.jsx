import { Center, Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Templates from './Templates/Templates';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

const CategoriesPage = () => {
  const { category_name } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [templatesList, setTemplatesList] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/categories/${category_name}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        setTemplatesList(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, [setTemplatesList, category_name]);
  return (
    <>
      <Center>
        <Heading as={'h1'} m={10}>
          {category_name}
        </Heading>
      </Center>
      {isLoading && (
        <Center>
          <ThreeDots ariaLabel="loading-indicator" color="gray" />
        </Center>
      )}
      <Flex wrap={true}>
        {templatesList.map(
          ({
            templateName,
            templateThumb,
            templatePreviewURL,
            _id: templateId,
          }) => (
            <Templates
              key={templateId}
              templateId={templateId}
              templateName={templateName}
              templateThumb={templateThumb}
              templatePreviewURL={templatePreviewURL}
            />
          )
        )}
      </Flex>
    </>
  );
};

export default CategoriesPage;
