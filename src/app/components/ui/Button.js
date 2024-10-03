'use client';

const Button = ({ text }) => {
  return (
    <div className='flex justify-center'>
      <a href='#CTA'>
      <button
        className="bg-green-300 shadow-lg text-slate-900 w-32 h-10 text-[1.3rem] rounded-md border-none p-4 cursor-pointer transition-all duration-300 ease-in-out select-none hover:bg-green-400 hover:shadow-xl hover:-translate-y-0.5 active:shadow-none active:bg-green-500 active:translate-y-0 flex justify-center items-center"
        style={{ userSelect: 'none', touchAction: 'manipulation', willChange: 'transform' }}>
        {text}
      </button>
      </a>
    </div>
  );
};

export default Button;