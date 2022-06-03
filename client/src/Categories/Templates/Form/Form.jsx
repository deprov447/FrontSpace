import React from 'react';
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
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import FormParsed from './FormParsed';
import {
  FaFacebook,
  FaLinkedin,
  FaReddit,
  FaShare,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                  <Button
                    // type="submit"
                    _focus={{ shadow: '' }}
                    fontWeight="md"
                    onClick={onOpen}
                  >
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
                          <Box w="full" px={[10, , 4]} mx="auto">
                            <Text
                              mb={2}
                              fontSize="xl"
                              fontWeight="bold"
                              lineHeight="tight"
                              bgGradient="linear(to-r, brand.300, brand.600)"
                            >
                              Share to your socials !!!
                            </Text>
                            <chakra.p
                              mb={6}
                              fontSize={['lg', , 'xl']}
                              color={useColorModeValue('gray.600', 'gray.400')}
                            >
                              Tell everyone about your new FirstPage
                            </chakra.p>

                            <InputGroup size="md">
                              <Input
                                mb={6}
                                value={'hello'}
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

                            <HStack justify={'center'}>
                              <IconButton
                                colorScheme="facebook"
                                icon={<FaFacebook />}
                                fontSize={25}
                              />
                              <IconButton
                                colorScheme="twitter"
                                icon={<FaTwitter />}
                                fontSize={25}
                              />
                              <IconButton
                                colorScheme="whatsapp"
                                icon={<FaWhatsapp />}
                                fontSize={25}
                              />
                              <IconButton
                                colorScheme="red"
                                icon={<FaReddit />}
                                fontSize={25}
                              />
                              <IconButton
                                colorScheme="linkedin"
                                icon={<FaLinkedin />}
                                fontSize={25}
                              />
                            </HStack>
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
    </Container>
  );
}
