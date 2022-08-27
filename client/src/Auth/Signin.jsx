import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Spacer,
  FormErrorMessage,
} from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Contexts/UserContext';
import ThirdPartyLogin from './ThirdPartyLogin';

export default function Signin({
  openForgotPassword,
  closeSignin,
  openSignup,
  showExtraOps = true,
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPassWrong, setIsPassWrong] = useState(false);
  const [userContext, setUserContext] = useContext(UserContext);

  const handleSubmit = () => {
    try {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/signin/password`,
          {
            username,
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
          console.log(res);
          if (res.status === 200) {
            setUserContext(prev => {
              return { ...prev, token: res.data.token };
            });
            closeSignin();
          }
        })
        .catch(err => {
          console.log(err);
          if (err.response.status === 401) {
            setIsPassWrong(true);
            console.log('wrong pass');
          } else {
            alert('server error');
          }
        });
    } catch (err) {
      console.log('eror');
      console.error(err);
    }
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
      minW
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box p={8}>
          <Stack spacing={4}>
            <FormControl id="username" isInvalid={isPassWrong}>
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                errorBorderColor="red.500"
                onChange={e => {
                  setUsername(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password" isInvalid={isPassWrong}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                errorBorderColor="red.500"
                onChange={e => {
                  setPassword(e.target.value);
                }}
              />
              <FormErrorMessage>
                Password incorrect or user doesn't exist
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Flex justifyContent={'space-between'}>
                <Button
                  flexGrow={1}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
                {showExtraOps && (
                  <>
                    <Spacer />
                    <Button
                      onClick={() => {
                        openForgotPassword();
                        console.log(userContext);
                      }}
                      flexGrow={1}
                    >
                      Forget Password ?
                    </Button>
                  </>
                )}
              </Flex>
            </Stack>
            {showExtraOps && (
              <>
                <Stack pt={6}>
                  <Text align={'center'}>
                    New here?{'  '}
                    <Button
                      variant="solid"
                      onClick={() => {
                        closeSignin();
                        openSignup();
                      }}
                      size="sm"
                    >
                      Sign Up
                    </Button>
                  </Text>
                </Stack>
                <Divider orientation="horizontal" />
                {/* <Stack>
                  <ThirdPartyLogin />
                </Stack> */}
              </>
            )}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
