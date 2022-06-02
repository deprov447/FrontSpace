import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { Button, Center, Stack, Text } from '@chakra-ui/react';

export default function ThirdPartyLogin() {
  return (
    <Center pt={6}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Facebook */}
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
          <Center>
            <Text>Sign in with Linkedin</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
}
