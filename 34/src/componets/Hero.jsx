import React from 'react'

const Hero = () => {
  return (
    <section className='mx-16'>
       <div className='flex justify-start items-center bg-pitch-blk'>
            <h1 className='text-white text-8xl font-semibold max-md:text-4xl'>MAKE FOLLOWER</h1>
        </div>
        <div className='flex max-md:flex-col gap-10 mt-4'>
            <p className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold text-3xl px-24 py-2 rounded-full flex justify-center items-center max-sm:px-8 max-md:py-4 max-md:mt-8'>ENGAGEMENT</p>
            <p className='text-white text-4xl'>WITH SOCAIL MEDIA</p>
        </div>
        <div className='mt-16 flex gap-10 max-md:flex-col'>
            <img src="../../src/assets/images/Mask group.png" alt="group" className='h-96' />
            <div className='flex gap-12 flex-col justify-end items-center'>
                <p className='text-white px-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae aperiam corporis repellendus dicta ut ea, placeat minima neque magnam consequuntur deleniti fugit qui possimus saepe consectetur at cumque eaque optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem aperiam aspernatur fuga necessitatibus eum dolorem, accusantium illo nesciunt laudantium repudiandae veritatis rem ut! Deleniti, maiores! Illum nesciunt facere quidem accusamus?</p>
                <img src="../../src/assets/images/Group 4.png" alt="" width={254} height={254}/>
            </div>

        </div>
    </section>
  )
}

export default Hero