import React, { useEffect, useState } from 'react';
import {
  chakra,
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  InputRightElement,
  Center,
} from '@chakra-ui/react';
import FormParsed from './FormParsed';
import { FaShare } from 'react-icons/fa';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../Contexts/UserContext';
import SocialButtons from './SocialButtons';
import { ThreeDots } from 'react-loader-spinner';

export default function Component() {
  const { templateId } = useParams();

  const [templateFormElements, setTemplateFormElements] = useState([]);
  const [formState, setFormState] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [userContext, setUserContext] = useContext(UserContext);

  const changeFormState = (field, value) => {
    setFormState(prevFormState => {
      prevFormState[field.replace(/\s/g, '')] = value;
      return prevFormState;
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/template/${templateId}`, {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
          Authorization: `Bearer ${userContext.token}`,
        },
        credentials: 'include',
      })
      .then(res => {
        setTemplateFormElements(() => res.data.templateFormElements);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, [templateId, userContext.token]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/template/${templateId}`,
        formState,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
            Authorization: `Bearer ${userContext.token}`,
          },
          credentials: 'include',
        }
      )
      .then(res => {
        switch (res.status) {
          case 201:
            onOpen();
            break;
          case 409:
            alert('Duplicate entry');
            break;
          case 500:
            alert('Internal server error');
            break;
          default:
            alert('Unknown error');
        }
      })
      .catch(err => {
        console.error(err);
        alert('try again :/');
      });
  };

  return (
    <Container maxW="80vw">
      {isLoading && (
        <Center>
          <ThreeDots ariaLabel="loading-indicator" color="gray" />
        </Center>
      )}
      <Box
        hidden={isLoading}
        bg={useColorModeValue('gray.50', 'inherit')}
        p={10}
      >
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
                onSubmit={submitHandler}
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
                  <FormParsed
                    templateFormElements={templateFormElements}
                    changeFormState={changeFormState}
                  />
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

                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Your Page Is Ready</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Box
                          mx="auto"
                          textAlign={{ base: 'left', md: 'center' }}
                        >
                          <Box w="full" px={[10, 3, 4]} mx="auto">
                            <Text
                              mb={2}
                              fontSize="xl"
                              fontWeight="bold"
                              lineHeight="tight"
                              bgGradient="linear(to-r, brand.300, brand.600)"
                            >
                              Share to your socials
                            </Text>
                            <chakra.p
                              mb={6}
                              fontSize={['lg', 'lg', 'xl']}
                              color={useColorModeValue('gray.600', 'gray.400')}
                            >
                              Tell everyone about your new Front Space
                            </chakra.p>

                            <InputGroup size="md">
                              <Input
                                mb={6}
                                value={`${formState.Subdomain}.${process.env.REACT_APP_CLIENT_URL}`}
                                colorScheme="teal"
                                id="resultLink"
                                variant="outline"
                                leftIcon={<FaShare />}
                                disabled
                              />
                              <InputRightElement width="4.5rem">
                                <Button
                                  h="1.75rem"
                                  size="sm"
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      document.getElementById('resultLink')
                                        .value
                                    );
                                  }}
                                >
                                  Copy Link
                                </Button>
                              </InputRightElement>
                            </InputGroup>
                            <SocialButtons
                              url={() => {
                                return document.getElementById('resultLink')
                                  .value;
                              }}
                            />
                          </Box>
                        </Box>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
      }
    </Container>
  );
}
