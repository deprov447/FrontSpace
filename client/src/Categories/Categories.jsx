import CategoryCard from './CategoryCard';

const categoriesArray = [
  {
    name: 'DemoCategory1',
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80',
    desc: 'This is just a demo category, no real importance',
  },
  {
    name: 'DemoCategory2',
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80',
    desc: 'This is just a demo category, no real importance',
  },
  {
    name: 'DemoCategory3',
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80',
    desc: 'This is just a demo category, no real importance',
  },
];

const Categories = () => {
  return (
    <>
      {categoriesArray.map(({ name, img, desc }) => (
        <CategoryCard name={name} img={img} desc={desc} />
      ))}
    </>
  );
};

export default Categories;
