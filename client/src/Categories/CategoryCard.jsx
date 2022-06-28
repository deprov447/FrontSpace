import React from 'react';
import { chakra, Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ name, desc, img }) => {
  return (
    <Link to={name}>
      <Flex p={50} alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="sm"
          mx="auto"
        >
          <Box
            bg="gray.300"
            h={64}
            w="full"
            rounded="lg"
            shadow="md"
            bgSize="cover"
            bgPos="center"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></Box>

          <Box
            w={{
              base: 56,
              md: 64,
            }}
            bg="white"
            _dark={{
              bg: 'gray.800',
            }}
            mt={-10}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <chakra.h3
              py={2}
              textAlign="center"
              fontWeight="bold"
              textTransform="uppercase"
              color="gray.800"
              _dark={{
                color: 'white',
              }}
              letterSpacing={1}
            >
              {name}
            </chakra.h3>

            <Flex
              alignItems="center"
              justifyContent="center"
              py={2}
              px={3}
              bg="gray.200"
              _dark={{
                bg: 'gray.700',
              }}
            >
              <chakra.button
                bg="gray.800"
                fontSize="xs"
                fontWeight="bold"
                color="white"
                px={2}
                py={1}
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: 'gray.700',
                  _dark: {
                    bg: 'gray.600',
                  },
                }}
                _focus={{
                  bg: 'gray.700',
                  _dark: {
                    bg: 'gray.600',
                  },
                  outline: 'none',
                }}
              >
                Go
              </chakra.button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
};

export default CategoryCard;
