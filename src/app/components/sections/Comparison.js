'use client';
import Button from '../ui/Button';
import Table from '../ui/Table'

const Comparison = () => {
  return (
    <div className='bg-slate-50 w-full h-full flex flex-col gap-16 py-24 justify-center items-center'>
      <h3 className='text-6xl font-semibold text-center'>Fitbit Versa 4 Comparison</h3>
      <div className='mt-10 mb-8'>
        <Table />
      </div>
      <Button text="Buy Now" />
    </div>
  );
};

export default Comparison;