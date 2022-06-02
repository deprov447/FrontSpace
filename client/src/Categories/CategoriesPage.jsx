import { Center, Flex, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Templates from './Templates/Templates';

const dummyTemplatesList = [
  {
    templateId: 1,
    templateName: 'Class',
    templateThumb:
      'https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    templatePreviewURL: '#',
    templateFormElements: [
      {
        field: 'Full Name',
        type: 'text',
      },
      {
        field: 'Welcome Text',
        type: 'text',
      },
      {
        field: 'About',
        type: 'largeText',
      },
      {
        field: 'LinkedIn URL',
        type: 'text',
      },
      {
        field: 'Github URL',
        type: 'text',
      },
      {
        field: 'Website URL',
        type: 'text',
      },
      {
        field: 'Profile Pic',
        type: 'image',
      },
    ],
  },
  {
    templateId: 2,
    templateName: 'Magenta',
    templateThumb:
      'https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    templatePreviewURL: '#',
    templateFormElements: {
      name: '',
      urls: {
        linkedin: '',
        github: '',
        twitter: '',
        others: [],
      },
      imgs: [],
      tagline: '',
    },
  },
];

const CategoriesPage = () => {
  const { category_name } = useParams();
  return (
    <>
      <Center>
        <Heading as={'h1'} m={10}>
          {category_name}
        </Heading>
      </Center>
      {
        // Fetch the list of templates available in this specific categories
      }
      <Flex>
        {dummyTemplatesList.map(
          ({ templateName, templateThumb, templatePreviewURL, templateId }) => (
            <Templates
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
