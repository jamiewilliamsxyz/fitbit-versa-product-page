'use client';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <div className='bg-white w-full h-full flex flex-col py-24 justify-center items-center'>
      <h3 id='CTA' className='text-6xl font-semibold text-center'>Versa 4: Your Fitness Partner</h3>
      <div className='flex flex-col p-20 gap-20 max-w-7xl'>
        <div className='flex justify-center'>
          <img src='/images/fitbit.png' alt='product' className='max-w-96 max-h-96'/>
        </div>
        <div className='flex flex-col align-center justify-center'>
          <p className='text-lg max-w-xl text-left'>
            <b>Don't wait!</b> The Fitbit Versa 4 is flying off the shelves, and it won't last long! With its sleek design, advanced health tracking features, and impressive battery life, this smartwatch is your ideal companion for achieving your fitness goals. Whether you're tracking workouts, monitoring your heart rate, or staying connected on the go, the Versa 4 has everything you need to stay motivated. Act fast and grab yours now before they're gone! Experience the difference that the Fitbit Versa 4 can make in your fitness journey!
          </p>
          <p className='text-4xl text-green-300 text-shadow-sm font-semibold self-center mt-20'>Only<br/>£164</p>
        </div>
      </div>
      <p className='text-sm mb-6'>⚠️ This is a front-end project for my portfolio. Purchasing is not available ⚠️</p>
      <Button text='Purchase'/>
      <a href='https://amzn.to/4dyt1eQ' className='text-slate-400 mt-5'>Or Buy on Amazon</a>
    </div>
  );
};

export default CTA;