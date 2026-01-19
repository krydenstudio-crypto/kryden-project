import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <section className='lg:py-24 flex justify-center items-center px-2 py-18'>
      <div className='relative lg:w-[50%] w-full'>
        <div className='flex justify-between items-center absolute w-full'>
          <img src="/Group 2.png" alt="group" className='w-10 md:w-auto'/>
          <img src="/Group 1.png" alt="group" className='w-6 md:w-auto'/>
        </div>

        {/**Banner text***/}
        <div className='lg:pt-10 pt-5'>
          <h1 className='lg:text-5xl text-3xl font-bold text-textFocus text-center lg:mx-14 lg:leading-18 leading-10'>
            BEST <span className='text-secondary'>DIGITAL PRODUCT</span> DESIGN AGENCY
          </h1>
          <p className='p text-center my-4'>
            We work closely with you to understand your vision and develop creative solution that leave a lasting impression on your audience
          </p>
        </div>

        {/***Contact button***/}
        <div className="flex justify-center items-center">
          <button className="text-textFocus bg-secondary text-center rounded-full px-6 py-2">
            <Link to="/" className="flex items-center font-medium lg:text-[16px] gap-2">Contact Us <span><FaArrowRight/></span></Link>
          </button>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default HomeBanner