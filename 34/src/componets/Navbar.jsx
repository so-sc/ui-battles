import React from 'react'

const Navbar = () => {
  return (
    <section className='flex justify-between py-10 px-14 '>
        <div className="flex gap-4">
            <img src='../../src/assets/images/g20.png' alt="" width={64} height={64}/>
            <p className='text-white text-[1.5rem] font-bold'>LACY</p>
        </div>
        <div>
            <ul className='flex gap-10 max-md:hidden'>
                <li className='text-slate-400 hover:text-white cursor-pointer'>Home</li>
                <li className='text-slate-400 hover:text-white cursor-pointer'>About us</li>
                <li className='text-slate-400 hover:text-white cursor-pointer'>Page</li>
                <li className='text-slate-400 hover:text-white cursor-pointer'>Contact us</li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar