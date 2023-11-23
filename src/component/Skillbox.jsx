import React from 'react'

const Skillbox = () => {
  return (
    <>
    <div className='bg-slate-100/10 w-100 grid grid-cols-5 p-2'>
        <div className="bg-slate-50/10 p-2 text-xs col-span-1 mr-1 text-center font-poppins">
            INFO
        </div>
        <div className="bg-slate-50/10 p-2 text-xs col-span-1 mx-1 text-center font-poppins">
            C
        </div>
        <div className="bg-slate-50/10 p-2 text-xs col-span-1 mx-1 text-center font-poppins">
            Q
        </div>
        <div className="bg-slate-50/10 p-2 text-xs col-span-1 mx-1 text-center font-poppins">
            E
        </div>
        <div className="bg-slate-50/10 p-2 text-xs col-span-1 ml-1 text-center font-poppins">
            X
        </div>

        <hr className='col-span-5 border-slate-500/50 my-2' />

        <div className="border-r border-slate-500/50 p-2 text-xs col-span-1 mr-1 text-center font-poppins">
            <div className="py-5 bg-no-repeat bg-contain bg-center bg-[url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png')]"></div>
        </div>
        <div className="border-r border-slate-500/50 p-2 text-xs col-span-1 mx-1 text-center font-poppins">
            <div className="py-5 bg-no-repeat bg-contain bg-center bg-[url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb04bcc15680583e4/640273e5aa6c3f7f594bd1cf/Gekko_icon_mosh.png')]"></div>
        </div>
        <div className="border-r border-slate-500/50 p-2 text-xs col-span-1 mx-1 text-center font-poppins">
            <div className="py-5 bg-no-repeat bg-contain bg-center bg-[url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt84c8955357322ecd/64027318ec12cd34d0060449/Gekko_ability_Icon_Wingman_.png')]"></div>
        </div>
        <div className="border-r border-slate-500/50 p-2 text-xs col-span-1 mx-1 text-center font-poppins">
            <div className="py-5 bg-no-repeat bg-contain bg-center bg-[url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt09558f0cb6be03a3/6402737a27ccd11087ac6a70/Gekko_ability_Icon_3.png')]"></div>
        </div>
        <div className="p-2 text-xs col-span-1 ml-1 text-center font-poppins">
            <div className="py-5 bg-no-repeat bg-contain bg-center bg-[url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb24321feccb0cb69/6402740fba95fe6a2554b0b5/Gekko_ability_icon_4.png')]"></div>
        </div>
    </div>
    <div className="pt-4">
            <p className="text-yellow-200 text-sm">
                Hi! I am Aaron Zayke Lecourt, a 22-year old Computer Science student at the University of Baguio. I love playing Valorant during my spare time and love watching movies too! I like it when it rains, but don't like it when it rains too much!
            </p>
<br />
            <h1 className='text-slate-100 uppercase font-bold text-md'>CS Student</h1>
            <p className="text-slate-100 text-sm">    
                CS students focus more on understanding algorithms behind all things computer, its sometimes enjoyable but most of the time its stress inducing and makes you rethink your life decisions.
            </p>
        </div>
    </>
  )
}

export default Skillbox