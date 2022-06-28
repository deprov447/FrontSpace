import {
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';

const TextInput = ({ field, changeFormState }) => {
  const handleChange = e => {
    changeFormState(field, e.target.value);
  };

  return (
    <>
      <FormControl>
        <InputGroup size="sm">
          <InputLeftAddon
            hidden={!(field === 'Subdomain')}
            children="https://"
          />
          <Input
            focusBorderColor="brand.400"
            rounded="md"
            onChange={handleChange}
            placeholder={field}
          />
          <InputRightAddon
            hidden={!(field === 'Subdomain')}
            children=".getfront.space"
          />
        </InputGroup>
      </FormControl>
    </>
  );
};

export default TextInput;
