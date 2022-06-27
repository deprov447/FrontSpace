import React from 'react';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Stack,
  GridItem,
} from '@chakra-ui/react';
export default function Features() {
  const Feature = props => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue('brand.500', 'brand.300')}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color={useColorModeValue('gray.900')}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue('gray.500', 'gray.400')}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue('white', 'gray.800')}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start">
            <chakra.h2
              color={useColorModeValue('brand.500')}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Easiest way to create webpages
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="extrabold"
              textAlign={{ base: 'center', sm: 'left' }}
              color={useColorModeValue('black')}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              FRONT SPACE
            </chakra.h2>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: 'grid' }}
              gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature title="Fully responsive pages" />
              <Feature title="All your links in a single place" />
              <Feature title="Free .getfront.space domain" />
              <Feature title="Custom domain? [Coming soon]" />
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
