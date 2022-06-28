import React from 'react';
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: 'left', md: 'center' }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: 'normal', md: 'tight' }}
          color={useColorModeValue('gray.900', 'gray.100')}
        >
          Let the world{' '}
          <Text
            display={{ base: 'block', lg: 'inline' }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            know
          </Text>{' '}
          you a bit better.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: 'lg', md: 'xl' }}
          color={useColorModeValue('gray.600', 'gray.300')}
        >
          Front Space lets you create single webpages and lets the world know
          about you, or your company, or your dog. Possibilities are endless.
        </chakra.p>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: 'left', md: 'center' }}
        >
          <Link to="categories">
            <Button
              as="a"
              colorScheme="gray"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: 'full', sm: 'auto' }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
            >
              Get Started
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Link>
        </Stack>
      </Box>
      <Box
        w={{ base: 'full', md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            borderRadius: 0,
            boxShadow: '0 15px 40px rgba(63,58,79,.3)',
            overflow: 'hidden',
            minWidth: '320px',
          }}
        >
          <iframe
            title="Demo video"
            src="https://frontspace.trainn.co/share/tedHABAeMJh8g2blpGLbxA/embed?autoplay=false"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            allow="autoplay; fullscreen"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </div>
      </Box>
    </Box>
  );
}

export default Hero;
