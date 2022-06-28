import React, { useContext } from 'react';
import {
  chakra,
  HStack,
  Link,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import { Link as ReactRouterLink } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';
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

  const logoSrc = useColorModeValue(
    'https://raw.githubusercontent.com/deprov447/first-page/1d72955f03ddece33ecbe751723200fcd223ec1b/assets/logos/logo-text%201/vector/default-monochrome.svg',
    'https://raw.githubusercontent.com/deprov447/frontspace/master/assets/logos/logo-text%201/vector/default-monochrome-white.svg'
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
                  <Image src={logoSrc} height={'30px'} />
                </HStack>
              </Flex>
            </Link>
            <Flex>
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
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
