import {
  Avatar,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

const TextInput = ({ field }) => {
  return (
    <>
      <FormControl>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          {field}
        </FormLabel>
        <InputGroup size="sm">
          <Input focusBorderColor="brand.400" rounded="md" />
        </InputGroup>
      </FormControl>
    </>
  );
};

export default TextInput;
