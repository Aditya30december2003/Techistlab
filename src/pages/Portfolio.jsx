import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'
const Portfolio = () => {
  return (
    <div className="mt-[10rem]">
      <h1 className="text-center font-bold text-[1.5rem] lg:text-[1.8rem]">Portfolio</h1>

      <h1 className="text-center font-bold mt-10 text-[2.3rem] lg:text-[3rem] w-full lg:w-[70%] mx-auto">Discover solutions, spark creativity, and boost your productivity.</h1>

      <p className="text-center text-[1.2rem] w-full lg:w-[60%] mx-auto mt-10">Explore our diverse portfolio to see how we've transformed ideas into digital solutions that deliver real impact. From startup innovations to enterprise-level systems, our projects demonstrate our commitment to excellence and client success.</p>
      
      <div>

      <div className='flex flex-col lg:flex-row gap-5 p-10 mt-20 items-center w-[100%]'>

       <div className='w-full lg:w-[55%] '>
        <img className='object-cover w-full lg:w-[75%]' src="https://media.sproutsocial.com/uploads/2022/09/instagram-shopping-app-screenshots-scaled.jpg" alt="" />
       </div>
       
       <div className='w-full lg:w-[45%] flex flex-col gap-5'>
        <h1 className='text-center font-bold text-[2.5rem]'>Retail Revolution</h1>
        <p className='text-[1.2rem] text-center'>See how we developed a mobile shopping app that increased a retail client's sales by 30% within six months. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis nemo ab, sit cupiditate explicabo nihil facere expedita neque, nobis, atque tenetur cum? Quae, accusamus quo! Accusamus rem nam aperiam illo! Corporis necessitatibus beatae amet repudiandae unde, ratione voluptatem.</p>
        </div>

      </div>


      <div className='flex flex-col lg:flex-row gap-5 p-10 mt-20 items-center w-[100%]'>
        <div className='w-full lg:w-[45%] lg:hidden'>
          <img className='object-cover' src="https://s3-alpha.figma.com/hub/file/4153417031/7808a72d-2fea-4257-86c6-b40c2029bd28-cover.png" alt="" />
        </div>
        <div className='w-full lg:w-[55%] flex flex-col gap-5'>
          <h1 className='text-center font-bold text-[2.5rem]'>Healthcare on Hand</h1>
          <p className='text-[1.2rem] text-center'>Learn about our work with a healthcare provider to create a patient management system that improved patient outcomes and staff efficiency.</p>
        </div>
        <div className='w-full lg:w-[45%] hidden lg:block'>
          <img className='object-cover' src="https://s3-alpha.figma.com/hub/file/4153417031/7808a72d-2fea-4257-86c6-b40c2029bd28-cover.png" alt="" />
        </div>
        </div>
        
        <div className='flex flex-col lg:flex-row gap-5 p-10 mt-20 items-center w-[100%]'>
          <div className='w-full lg:w-[55%] '>
             <img className='object-cover w-full lg:w-[75%]' src="https://psu-gatsby-files-prod.s3.amazonaws.com/s3fs-public/2023/09/engagement-app-news-header_1200x900-a.png" alt="" />
          </div>
          <div className='w-full lg:w-[45%] flex flex-col gap-5'>
          <h1 className='text-center font-bold text-[2.5rem]'>Educational Engagement</h1>
          <p className='text-[1.2rem] text-center'>Discover how we designed an interactive learning platform that has been adopted by over 200 schools nationwide.</p>
        </div>
        </div>
      </div>

      <div className='mt-16'>
        <h1 className="text-center font-bold text-[1.8rem]">Testimonials</h1>
        <p className='text-center font-bold py-10'>Hear directly from our clients about how our solutions have helped them achieve their business goals.</p>


      <div className='flex flex-col md:flex-row lg:flex-col md:w-[100%] gap-10'>
        <div className="flex flex-col lg:flex-row items-center p-2 md:w-[100%]">
          <div className='w-[30%]'>
          <img className="w-[30rem] lg:w-[12rem] mx-auto object-cover h-[7rem] lg:h-[12rem] rounded-[100%]" src={test1} alt="" />
          </div>
          <div className='w-full lg:w-[60%] flex flex-col gap-7'>
          <p className='text-[1rem] lg:text-[1.5rem] text-center lg:text-left'>The team at Techistlab exceeded our expectations with their attention to detail and dedication. Our new app has not only enhanced customer engagement but also streamlined our internal processes.</p>
          <p className='text-[1.1rem] text-center lg:text-left font-bold'>Jane Doe, CEO of RetailCo</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center p-2 md:w-[100%]">
          <div className='w-[30%]'>
          <img className="w-[30rem] lg:w-[12rem] mx-auto object-cover h-[7rem] lg:h-[12rem] rounded-[100%]" src={test2} alt="" />
          </div>
          <div className='w-full lg:w-[60%] flex flex-col gap-7'>
          <p className='text-[1rem] lg:text-[1.5rem] text-center lg:text-left'>Thanks to Techistlab, we were able to bring a critical tool to our patients and medical staff, improving our service quality tremendously.</p>
          <p className='text-[1.1rem] text-center lg:text-left font-bold'>John Smith, Director at HealthPlus</p>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Portfolio