import { useParams } from 'react-router-dom';
import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  Container,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import TextInput from './TextInput';
import LargeText from './LargeText';
import ImageInput from './ImageInput';
import FormParsed from './FormParsed';

const templateFormElements = [
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
    field: 'Website',
    type: 'text',
  },
  {
    field: 'Profile Pic',
    type: 'image',
  },
];

export default function Component() {
  return (
    <Container maxW="80vw">
      <Box bg={useColorModeValue('gray.50', 'inherit')} p={10}>
        <Box>
          <SimpleGrid
            display={{ base: 'initial', md: 'grid' }}
            columns={{ md: 3 }}
            spacing={{ md: 6 }}
          >
            <GridItem colSpan={{ md: 1 }}>
              <Box px={[4, 0]}>
                <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                  Profile
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color={useColorModeValue('gray.600', 'gray.400')}
                >
                  This information will be displayed publicly so be careful what
                  you share.
                </Text>
              </Box>
            </GridItem>
            <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, 'md']}
                overflow={{ sm: 'hidden' }}
              >
                <Stack
                  px={4}
                  py={5}
                  bg={useColorModeValue('white', 'gray.700')}
                  spacing={6}
                  p={{ sm: 6 }}
                >
                  <FormParsed templateFormElements={templateFormElements} />
                </Stack>
                <Box
                  px={{ base: 4, sm: 6 }}
                  py={3}
                  bg={useColorModeValue('gray.50', 'gray.900')}
                  textAlign="right"
                >
                  <Button type="submit" _focus={{ shadow: '' }} fontWeight="md">
                    Save
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
}
