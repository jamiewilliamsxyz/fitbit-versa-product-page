'use client';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url('/images/backgroundv2.jpg')`}} className="text-slate-50 text-shadow-xl bg-xl w-full h-[80vh] bg-center bg-no-repeat bg-cover object-cover text-center flex flex-col justify-center">
      <h1 className='text-8xl font-semibold m-10 mb-20'>Fitbit<br/>Versa 4</h1>
      <h2 className='font-semibold text-xl mb-60'>Track Your Fitness, Elevate Your Life</h2>
      <Button text='Buy Now' />
    </div>
  );
};

export default Hero;