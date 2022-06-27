import React, { useContext } from 'react';
import {
  chakra,
  HStack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  SimpleGrid,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  Avatar,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import { Link as ReactRouterLink } from 'react-router-dom';

import { IoIosArrowDown } from 'react-icons/io';
import {
  AiFillHome,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlinePlayCircle,
} from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import ForgotPassword from './Auth/ForgetPassword';
import signoutHandler from './Auth/signout';
import { UserContext } from './Contexts/UserContext';

export default function Header() {
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();
  const {
    isOpen: isSigninOpen,
    onOpen: onSigninOpen,
    onClose: onSigninClose,
  } = useDisclosure();
  const {
    isOpen: isForgotPasswordOpen,
    onOpen: onForgotPasswordOpen,
    onClose: onForgotPasswordClose,
  } = useDisclosure();

  const [userContext, setUserContext] = useContext(UserContext);

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue('white', 'gray.800');
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue('gray.800', 'white');
  const mobileNav = useDisclosure();

  const Section = props => {
    const ic = useColorModeValue('brand.600', 'brand.50');
    const hbg = useColorModeValue('gray.50', 'brand.400');
    const tcl = useColorModeValue('gray.900', 'gray.50');
    const dcl = useColorModeValue('gray.500', 'gray.50');
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const Features = props => {
    const hbg = useColorModeValue('gray.50', 'brand.400');
    const hbgh = useColorModeValue('gray.100', 'brand.500');
    const tcl = useColorModeValue('gray.900', 'gray.50');
    return (
      <React.Fragment>
        <SimpleGrid
          columns={props.h ? { base: 1, md: 3, lg: 5 } : 1}
          pos="relative"
          gap={{ base: 6, sm: 8 }}
          px={5}
          py={6}
          p={{ sm: 8 }}
        >
          <Section
            title="Analytics"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            }
          >
            Copy this some times
          </Section>
        </SimpleGrid>
        <Box px={{ base: 5, sm: 8 }} py={5} bg={hbg} display={{ sm: 'flex' }}>
          <Stack direction={{ base: 'row' }} spacing={{ base: 6, sm: 10 }}>
            <Box display="flow-root">
              <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="center"
                rounded="md"
                fontSize="md"
                color={tcl}
                _hover={{ bg: hbgh }}
              >
                <AiOutlinePlayCircle />
                <chakra.span ml={3}>Watch Demo</chakra.span>
              </Link>
            </Box>

            <Box display="flow-root">
              <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="center"
                rounded="md"
                fontSize="md"
                color={tcl}
                _hover={{ bg: hbgh }}
              >
                <AiOutlineMail />
                <a href="mailto:deprov447+frontspace.protonmail.com">
                  <chakra.span ml={3}>Mail Us</chakra.span>
                </a>
              </Link>
            </Box>
          </Stack>
        </Box>
      </React.Fragment>
    );
  };

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      {/* Showcase, src code, signin signup */}

      <Button
        bg={bg}
        color="gray.500"
        display="inline-flex"
        alignItems="center"
        fontSize="md"
        _hover={{ color: cl }}
        _focus={{ boxShadow: 'none' }}
      >
        Showcase
      </Button>
      <a href="https://github.com/deprov447/frontspace">
        <Button
          bg={bg}
          color="gray.500"
          display="inline-flex"
          alignItems="center"
          fontSize="md"
          _hover={{ color: cl }}
          _focus={{ boxShadow: 'none' }}
        >
          Source Code
        </Button>
      </a>

      <Flex
        justify="space-evenly"
        align="center"
        color="gray.400"
        width={'100%'}
      >
        {userContext.token && (
          <Button
            variant="solid"
            onClick={() => {
              signoutHandler(userContext, setUserContext);
            }}
            size="sm"
          >
            Sign Out
          </Button>
        )}
        {!userContext.token && (
          <>
            <Button variant="solid" onClick={onSignupOpen} size="sm">
              Sign up
            </Button>
            <Button variant="solid" onClick={onSigninOpen} size="sm">
              Sign in
            </Button>
          </>
        )}
      </Flex>
    </VStack>
  );
  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link as={ReactRouterLink} to="/">
              <Flex align="flex-start">
                <HStack>
                  <AiFillHome />
                </HStack>
              </Flex>
            </Link>
            <Flex>
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      bg={bg}
                      color="gray.500"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: 'none' }}
                      rightIcon={<IoIosArrowDown />}
                    >
                      Get Started
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    w="100vw"
                    maxW="md"
                    _focus={{ boxShadow: 'md' }}
                  >
                    <Features />
                  </PopoverContent>
                </Popover>
                <Button
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: 'none' }}
                >
                  Showcase
                </Button>
                <a href="https://github.com/deprov447/frontspace">
                  <Button
                    bg={bg}
                    color="gray.500"
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: cl }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    Source Code
                  </Button>
                </a>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
                {userContext.token && (
                  <Button
                    variant="solid"
                    onClick={() => {
                      signoutHandler(userContext, setUserContext);
                    }}
                    size="sm"
                  >
                    Sign Out
                  </Button>
                )}

                {!userContext.token && (
                  <>
                    <Button variant="solid" onClick={onSignupOpen} size="sm">
                      Sign up
                    </Button>
                    <Button variant="solid" onClick={onSigninOpen} size="sm">
                      Sign in
                    </Button>
                  </>
                )}
                <Modal
                  isOpen={isSignupOpen}
                  onClose={onSignupClose}
                  blockScrollOnMount={false}
                  isCentered
                  size="lg"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <Signup
                      closeSignup={onSignupClose}
                      openSignin={onSigninOpen}
                    />
                  </ModalContent>
                </Modal>
                <Modal
                  isOpen={isSigninOpen}
                  onClose={onSigninClose}
                  blockScrollOnMount={false}
                  isCentered
                  size="lg"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <Signin
                      openForgotPassword={onForgotPasswordOpen}
                      closeSignin={onSigninClose}
                      openSignup={onSignupOpen}
                    />
                  </ModalContent>
                </Modal>
                <Modal
                  isOpen={isForgotPasswordOpen}
                  onClose={onForgotPasswordClose}
                  blockScrollOnMount={false}
                  isCentered
                  size="lg"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ForgotPassword />
                  </ModalContent>
                </Modal>
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}
