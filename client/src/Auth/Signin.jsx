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
} from '@chakra-ui/react';
// import axios from 'axios';
import { useState } from 'react';
import ThirdPartyLogin from './ThirdPartyLogin';

export default function Signin({
  openForgotPassword,
  closeSignin,
  openSignup,
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    try {
      fetch(`${process.env.REACT_APP_SERVER_URL}/signin/password`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
        .then(async res => {
          if (!res.ok) {
            if (res.status === 400) {
              console.log('Please fill all the fields correctly!');
            } else if (res.status === 401) {
              console.log('Invalid email and password combination.');
            } else {
              console.log('genericErrorMessage');
            }
          } else {
            const data = await res.json();
            // setUserContext(oldValues => {
            //   return { ...oldValues, token: data.token }
            // })
            console.log(data);
          }
        })
        .catch(err => {
          console.log(err);
        });
      //   axios
      //     .post(
      //       `${process.env.REACT_APP_SERVER_URL}/signin/password`,
      //       {
      //         username,
      //         password,
      //       },
      //       {
      //         withCredentials: true,
      //         headers: {
      //           Accept: 'application/json',
      //           'Content-Type': 'application/json',
      //           'Access-Control-Allow-Credentials': true,
      //         },
      //       }
      //     )
      //     .then(res => {
      //       console.log(res);
      //       if (res.status === 202) {
      //         closeSignin();
      //       }
      //     });
    } catch (err) {
      //   console.error(err);
    }
  };

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
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                onChange={e => {
                  setUsername(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={e => {
                  setPassword(e.target.value);
                }}
              />
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
                <Spacer />
                <Button onClick={openForgotPassword} flexGrow={1}>
                  Forget Password ?
                </Button>
              </Flex>
            </Stack>
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
            <Stack>
              <ThirdPartyLogin />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
