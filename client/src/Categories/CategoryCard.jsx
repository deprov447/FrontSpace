import React from 'react';
import { chakra, Box, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ name, desc, img }) => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Link to={name}>
        <Box
          w="md"
          mx="auto"
          py={4}
          px={8}
          bg={useColorModeValue('white', 'gray.800')}
          shadow="lg"
          rounded="lg"
        >
          <Flex justifyContent={{ base: 'center', md: 'end' }} mt={-16}>
            <Image
              w={20}
              h={20}
              fit="cover"
              rounded="full"
              borderStyle="solid"
              borderWidth={2}
              borderColor={useColorModeValue('brand.500', 'brand.400')}
              alt="Testimonial avatar"
              src={img}
            />
          </Flex>

          <chakra.h2
            color={useColorModeValue('gray.800', 'white')}
            fontSize={{ base: '2xl', md: '3xl' }}
            mt={{ base: 2, md: 0 }}
            fontWeight="bold"
          >
            {name}
          </chakra.h2>

          <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.200')}>
            {desc}
          </chakra.p>
        </Box>
      </Link>
    </Flex>
  );
};

export default CategoryCard;
