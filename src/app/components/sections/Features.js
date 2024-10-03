'use client';
import Button from '../ui/Button'
import Card from '../ui/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMap, faBed, faMobile } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div className='bg-white w-full h-full flex flex-col gap-16 py-24 justify-center items-center'>
      <h3 className='text-6xl font-semibold text-center'>Smart Features to Elevate<br/>Your Fitness Journey</h3>
      <div className='container mx-auto px-4 py-8 max-w-md"'>
        <div className='grid grid-cols-2 gap-6'>
          <Card icon={<FontAwesomeIcon icon={faHeart} size="2x" className="text-red-500 mb-2" />} title='24/7 Heart Rate Monitoring' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
          <Card icon={<FontAwesomeIcon icon={faMap} size="2x" className="text-orange-200 mb-2" />} title='Built-in GPS' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
          <Card icon={<FontAwesomeIcon icon={faBed} size="2x" className="text-sky-300 mb-2" />} title='Sleep & Stress Tracking' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
          <Card icon={<FontAwesomeIcon icon={faMobile} size="2x" className="text-violet-300 mb-2" />} title='Sync with Your Smartphone' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
        </div>
      </div>
      <Button text='Purchase' />
    </div>
  );
};

export default Features;