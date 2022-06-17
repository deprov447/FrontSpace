import { Center, Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Templates from './Templates/Templates';
import axios from 'axios';

const CategoriesPage = () => {
  const { category_name } = useParams();
  const [templatesList, setTemplatesList] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/categories/${category_name}`)
      .then(res => {
        setTemplatesList(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  });
  return (
    <>
      <Center>
        <Heading as={'h1'} m={10}>
          {category_name}
        </Heading>
      </Center>
      <Flex>
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
