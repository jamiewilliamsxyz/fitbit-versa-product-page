'use client';
import Button from '../ui/Button';

const Benefits = () => {
  return (
    <div className='bg-slate-50 w-full h-full flex flex-col gap-16 py-24 justify-center items-center'>
      <h3 className='text-6xl font-semibold text-center'>Why Choose the Fitbit Versa?</h3>
      <div className='flex flex-col justify-center items-center mb-10 mt-10'>
        <ul className='list-disc w-72 flex flex-col gap-10'>
          <li className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
          <div className="h-1 bg-green-300 rounded-lg w-full"/>
          <li className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
          <div className="h-1 bg-green-300 rounded-lg w-full"/>
          <li className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
          <div className="h-1 bg-green-300 rounded-lg w-full"/>
          <li className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
        </ul>
      </div>
      <Button text="Shop Now" />
    </div>
  );
};

export default Benefits;