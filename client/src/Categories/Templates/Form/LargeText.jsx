import {
  FormControl,
  FormLabel,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';

const LargeText = ({ field, changeFormState }) => {
  const handleChange = e => {
    changeFormState(field, e.target.value);
  };

  return (
    <FormControl id="email" mt={1}>
      <FormLabel
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue('gray.700', 'gray.50')}
      >
        {field}
      </FormLabel>
      <Textarea
        mt={1}
        rows={3}
        shadow="sm"
        focusBorderColor="brand.400"
        fontSize={{ sm: 'sm' }}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default LargeText;
