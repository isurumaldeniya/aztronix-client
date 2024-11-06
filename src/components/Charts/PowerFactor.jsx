import { Select } from '@chakra-ui/react';

const PowerFactor = () => {
  return (
    <main className="w-full h-full">
      <h1 className='text-xl ml-3 mt-2 font-mono capitalize font-bold'>Power Factor</h1>
      <div className='flex m-2 justify-between'>
        <Select placeholder="Select option" w='45%' borderColor='gray'>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Select option" w='45%' borderColor='gray'>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div className='flex flex-col justify-center items-center mt-12 gap-4 '>
        <h1 className='text-4xl font-mono font-bold'>Today</h1>
        <h1 className='text-7xl font-mono font-bold'>0,98</h1>
        <p className="text-4xl font-mono font-bold ">Power Factor</p>
      </div>
    </main>
  );
};
export default PowerFactor;
