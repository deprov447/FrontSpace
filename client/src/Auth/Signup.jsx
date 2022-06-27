import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import ThirdPartyLogin from './ThirdPartyLogin';
import axios from 'axios';
import { UserContext } from '../Contexts/UserContext';
import { emailValidation, passwordValidation } from '../regexs';

export default function Signup({ closeSignup, openSignin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExist, setUserExist] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setUserContext = useContext(UserContext)[1];

  let sendAfterTwoSec = null;
  const usernameCheck = e => {
    if (e.target.value === '') return;
    clearTimeout(sendAfterTwoSec);
    sendAfterTwoSec = setTimeout(function () {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/doesUserExist`, {
          username: e.target.value,
        })
        .then(res => {
          if (res.data.doesUserExist === false) {
            setUserExist(false);
            setUsername(e.target.value);
          } else setUserExist(true);
        })
        .catch(err => console.error(err));
    }, 2000);
  };
  const handleSubmit = () => {
    setIsSubmitting(true);
    if (userExist || !passwordValidation(password) || !emailValidation(email))
      return;
    console.log('handleSubmit called');
    try {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/signup/password`,
          {
            firstname,
            lastname,
            username,
            email,
            password,
          },
          {
            withCredentials: true,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': true,
            },
            credentials: 'include',
          }
        )
        .then(res => {
          if (res.status === 200) {
            setUserContext(prev => {
              return { ...prev, token: res.data.token };
            });
            closeSignup();
          }
        });
    } catch (err) {
      console.error(err);
    }
    setIsSubmitting(false);
  };

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        handleSubmit();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    onChange={e => {
                      setFirstname(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    onChange={e => {
                      setLastname(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="usernmae" isRequired isInvalid={userExist}>
              <FormLabel>Username</FormLabel>
              <Input type="text" onChange={usernameCheck} />
              <FormErrorMessage>Username already taken</FormErrorMessage>
            </FormControl>
            <FormControl
              id="email"
              isRequired
              isInvalid={!emailValidation(email) && email.length > 0}
            >
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
              <FormErrorMessage>Looks like an invalid email</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password"
              isRequired
              isInvalid={!passwordValidation(password) && password.length > 0}
            >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <FormErrorMessage>
                <ul>
                  <li>Your password should be 8 charactor long</li>
                  <li>Have one upper case letter</li>
                  <li>Have one lower case letter</li>
                  <li>Have one numeric digit</li>
                  <li>Have one special charactor</li>
                </ul>
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                isDisabled={
                  userExist ||
                  !passwordValidation(password) ||
                  !emailValidation(email)
                }
                isLoading={isSubmitting}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Button
                  variant="solid"
                  onClick={() => {
                    closeSignup();
                    openSignin();
                  }}
                  size="sm"
                >
                  Sign In
                </Button>
              </Text>
            </Stack>
            <Divider orientation="horizontal" />
            <Stack>
              <ThirdPartyLogin />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
