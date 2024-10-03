'use client';
import Carousel from '../ui/Carousel';
import Button from '../ui/Button';

const Reviews = () => {
  return (
    <div className='bg-white w-full h-auto flex flex-col gap-16 py-24 justify-center items-center'>
      <h3 className='text-6xl font-semibold text-center mb-9'>What Our Users Are Saying</h3>
      <Carousel />
      <div className='mb-40'/>
      <Button text='Get It'/>
    </div>
  );
};

export default Reviews;