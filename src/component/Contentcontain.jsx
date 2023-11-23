import React from 'react';

const Contentcontain = (props) => {
  const { title, content } = props;

  return (
    <>
    <div className="relative md:w-[500px] mt-5">
        <div className='absolute text-rose-500 font-tungsten text-2xl uppercase z-10 ml-3 shadow-sm'>{title}</div>
        <div className='relative top-4 bg-slate-50/10 pt-5 pb-4 px-6 border border-white/50 text-white text-xs font-poppins'>
            {content}
        </div>
    </div>
    </>
  );
};

export default Contentcontain;
