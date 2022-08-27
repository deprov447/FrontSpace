import {
  Box,
  chakra,
  Container,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { Link as ReactRouterLink } from 'react-router-dom';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const logoSrc = useColorModeValue(
    'https://raw.githubusercontent.com/deprov447/first-page/1d72955f03ddece33ecbe751723200fcd223ec1b/assets/logos/logo-text%201/vector/default-monochrome.svg',
    'https://raw.githubusercontent.com/deprov447/frontspace/master/assets/logos/logo-text%201/vector/default-monochrome-white.svg'
  );

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={10}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Stack direction={'row'} spacing={20}>
          {/* <Image
            src="https://www.linode.com/wp-content/uploads/2021/01/Linode-Logo-Black.svg"
            height={'30px'}
          /> */}
          <Image src={logoSrc} height={'30px'} />
          {/* <Image src="https://imgur.com/vxCYtqp.png" height={'30px'} /> */}
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <Link as={ReactRouterLink} to="/">
            Home
          </Link>
          <Link href={'https://github.com/deprov447/frontspace'}>
            Source Code
          </Link>
          <Link href={'mailto:deprov447+frontspace@protonmail.com'}>
            Contact
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 deprov447. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton
              label={'Twitter'}
              href={'https://twitter.com/@sigpiped'}
            >
              <FaTwitter />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
