import ImageInput from './ImageInput';
import LargeText from './LargeText';
import TextInput from './TextInput';

const FormParsed = ({ templateFormElements, changeFormState }) => {
  return (
    <>
      <TextInput field={'Subdomain'} changeFormState={changeFormState} />
      {templateFormElements.map(({ field, type }) => {
        let ret;
        if (type === 'text')
          ret = <TextInput field={field} changeFormState={changeFormState} />;
        else if (type === 'largeText')
          ret = <LargeText field={field} changeFormState={changeFormState} />;
        else if (type === 'image')
          ret = <ImageInput field={field} changeFormState={changeFormState} />;
        return ret;
      })}
    </>
  );
};

export default FormParsed;
