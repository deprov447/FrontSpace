import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  useColorModeValue,
} from '@chakra-ui/react';

const TextInput = ({ field, changeFormState }) => {
  const handleChange = e => {
    changeFormState(field, e.target.value);
  };

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
          <Input
            focusBorderColor="brand.400"
            rounded="md"
            onChange={handleChange}
          />
        </InputGroup>
      </FormControl>
    </>
  );
};

export default TextInput;
