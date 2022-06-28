import { FormControl, Textarea } from '@chakra-ui/react';

const LargeText = ({ field, changeFormState }) => {
  const handleChange = e => {
    changeFormState(field, e.target.value);
  };

  return (
    <FormControl id="email" mt={1}>
      <Textarea
        mt={1}
        rows={3}
        shadow="sm"
        focusBorderColor="brand.400"
        fontSize={{ sm: 'sm' }}
        onChange={handleChange}
        placeholder={field}
      />
    </FormControl>
  );
};

export default LargeText;
