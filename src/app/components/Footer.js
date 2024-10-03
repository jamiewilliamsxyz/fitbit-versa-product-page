'use client';

const Footer = () => {
  return (
    <div className='bg-slate-50 w-full h-auto p-10 mb-0 shadow-inner flex flex-row justify-evenly items-start'>
      <div className='flex flex-col text-left gap-2'>
        <h4 className='text-lg'><b>Socials</b></h4>
        <a href='https://www.youtube.com/@fitbit/featured'>YouTube</a>
        <a href='https://www.instagram.com/fitbit/'>Instagram</a>
        <a href='https://amzn.to/47WgqkK'>Amazon</a>
      </div>
      <div className='flex flex-col text-left gap-2'>
        <h4 className='text-lg'><b>Legal</b></h4>
        <a href=''>Terms</a>
        <a href=''>Privacy</a>
      </div>
      <div className='flex flex-col text-left gap-2'>
        <h4 className='text-lg'><b>Email Us</b></h4>
        <a href='mailto:johnjoe@fitbit.com'>Email</a>
      </div>
    </div>
  );
};

export default Footer;