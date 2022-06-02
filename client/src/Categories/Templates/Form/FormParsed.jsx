import ImageInput from './ImageInput';
import LargeText from './LargeText';
import TextInput from './TextInput';

const FormParsed = ({ templateFormElements }) => {
  return (
    <>
      {templateFormElements.map(({ field, type }) => {
        if (type === 'text') return <TextInput field={field} />;
        if (type === 'largeText') return <LargeText field={field} />;
        if (type === 'image') return <ImageInput field={field} />;
      })}
    </>
  );
};

export default FormParsed;
