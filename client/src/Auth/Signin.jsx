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
import ThirdPartyLogin from './ThirdPartyLogin';

export default function Signin({
  openForgotPassword,
  closeSignin,
  openSignup,
}) {
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
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
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
