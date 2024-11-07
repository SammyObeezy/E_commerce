import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Innovation in e-commerce is transforming the way businesses connect with customers, offering personalized experiences, and driving seamless transactions through cutting-edge technology. From AI-driven product recommendations to augmented reality for virtual try-ons, e-commerce platforms are continuously adapting to meet the evolving expectations of digital shoppers. Innovations such as blockchain for secure transactions, voice-activated shopping, and same-day delivery are also reshaping customer convenience. As a result, the e-commerce landscape is not only expanding access but also building a more intuitive, efficient, and immersive online shopping experience.
          </p>
          <p>
            Innovation in e-commerce is transforming business-customer connections, offering personalized experiences, and driving seamless transactions through cutting-edge technology. From AI-driven recommendations to virtual try-ons, e-commerce platforms adapt to evolving digital shopper expectations. Blockchain for secure transactions, voice-activated shopping, and same-day delivery further enhance convenience, building a more intuitive, efficient, and immersive online shopping experience.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to revolutionize online shopping by offering seamless, personalized experiences, secure transactions, and exceptional convenience through innovative technology, meeting customers' evolving needs every day.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            We meticulously select our products to ensure top quality, durability, and satisfaction for every customer.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className='text-gray-600' >
            We prioritize convenience, making shopping effortless and enjoyable from start to finish.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our team of professionals is dedicated to providing exceptional customer service, ensuring your needs are met with care and prompt assistance.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About