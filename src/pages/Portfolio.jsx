import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'
const Portfolio = () => {
  return (
    <div className="mt-[10rem] overflow-hidden md:mt-[5rem] lg:mt-[10rem]">
      <h1 className="text-center font-bold text-[1.5rem] lg:text-[1.8rem] heading" data-aos="fade-up"
        data-aos-duration="2000">Portfolio</h1>
      <div className="w-[6rem] my-10 bg-black h-[0.2rem] text-center mx-auto" data-aos="fade-up"
        data-aos-duration="2000"></div>

      <h1 className="text-center font-bold mt-10 text-[2.1rem] lg:text-[3rem] w-full lg:w-[70%] mx-auto" data-aos="fade-up"
        data-aos-duration="2000">Discover solutions, spark creativity, and boost your productivity.</h1>

      <p className="text-center text-[1.2rem] w-full lg:w-[60%] mx-auto mt-10"  data-aos="fade-up"
        data-aos-duration="2000">
        Explore our diverse portfolio to see how we've transformed ideas into digital solutions that deliver real impact. From startup innovations to enterprise-level systems, our projects demonstrate our commitment to excellence and client success.</p>
      
      <div>

      <div className='about flex flex-col lg:flex-row gap-5 p-10 mt-20 items-center w-[90%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] duration-700 lg:hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mx-auto'>

       <div className='w-full lg:w-[55%] '  data-aos="fade-up"
        data-aos-duration="2000">
        <img className='cursor-pointer object-cover w-full lg:w-[75%]' src="https://media.sproutsocial.com/uploads/2022/09/instagram-shopping-app-screenshots-scaled.jpg" alt="" />
       </div>
       
       <div className='w-full lg:w-[45%] flex flex-col gap-5'  data-aos="fade-down"
        data-aos-duration="2000">
        <h1 className='text-center font-bold text-[2.5rem]'>Retail Revolution</h1>
        <p className='text-[0.9rem] lg:text-[1.2rem] text-center'>See how we developed a mobile shopping app that increased a retail client's sales by 30% within six months. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis nemo ab, sit cupiditate explicabo nihil facere expedita neque, nobis, atque tenetur cum? Quae, accusamus quo! Accusamus rem nam aperiam illo! Corporis necessitatibus beatae amet repudiandae unde, ratione voluptatem.</p>
        </div>

      </div>


      <div className='about flex flex-col lg:flex-row gap-5 p-10 mt-20 items-center w-[90%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]   duration-700 lg:hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mx-auto cursor-pointer'>
        <div className='w-full lg:w-[45%] lg:hidden' data-aos="fade-up"
        data-aos-duration="2000">
          <img className='object-cover' src="https://s3-alpha.figma.com/hub/file/4153417031/7808a72d-2fea-4257-86c6-b40c2029bd28-cover.png" alt="" />
        </div>
        <div className='w-full lg:w-[55%] flex flex-col gap-5' data-aos="fade-down"
        data-aos-duration="2000">
          <h1 className='text-center font-bold text-[2.5rem]'>Healthcare on Hand</h1>
          <p className='text-[1.2rem] text-center'>Learn about our work with a healthcare provider to create a patient management system that improved patient outcomes and staff efficiency.</p>
        </div>
        <div className='w-full lg:w-[45%] hidden lg:block' data-aos="fade-up"
        data-aos-duration="2000">
          <img className='object-cover' src="https://s3-alpha.figma.com/hub/file/4153417031/7808a72d-2fea-4257-86c6-b40c2029bd28-cover.png" alt="" />
        </div>
        </div>
        
        <div className='about flex flex-col lg:flex-row gap-5 p-10 mt-20 items-center w-[90%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] duration-700 lg:hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mx-auto cursor-pointer'>
          <div className='w-full lg:w-[55%] ' data-aos="fade-down"
        data-aos-duration="2000">
             <img className='object-cover w-full lg:w-[75%]' src="https://psu-gatsby-files-prod.s3.amazonaws.com/s3fs-public/2023/09/engagement-app-news-header_1200x900-a.png" alt="" />
          </div>
          <div className='w-full lg:w-[45%] flex flex-col gap-5' data-aos="fade-up"
        data-aos-duration="2000">
          <h1 className='text-center font-bold text-[2.5rem]'>Educational Engagement</h1>
          <p className='text-[1.2rem] text-center'>Discover how we designed an interactive learning platform that has been adopted by over 200 schools nationwide.</p>
        </div>
        </div>
      </div>

      <div className='mt-32'>
        <h1 className="text-center font-bold text-[1.8rem] heading" data-aos="fade-down"
        data-aos-duration="2000">Testimonials</h1>
        <p className='text-center font-bold py-10 text-[1.2rem]' data-aos="fade-down"
        data-aos-duration="2000">Hear directly from our clients about how our solutions have helped them achieve their business goals.</p>


      <div className='flex flex-col md:flex-row lg:flex-col md:w-[100%] gap-20 mb-20 mt-20'>
        <div className="flex flex-col lg:flex-row items-center p-2 md:w-[100%] bg-gray-200 testimonials">
          <div className='w-[30%]' data-aos="fade-right"
        data-aos-duration="2000">
          <img className="w-[20rem] lg:w-[12rem] mx-auto object-cover h-[7rem] lg:h-[12rem] rounded-[100%]" src={test1} alt="" />
          </div>
          <div className='w-full lg:w-[60%] flex flex-col gap-7' data-aos="fade-left"
        data-aos-duration="2000">
          
          <p className='text-[1rem] lg:text-[1.5rem] text-center lg:text-left'><super><span className='text-[2.3rem] font-bold'>66</span></super> The team at Techistlab exceeded our expectations with their attention to detail and dedication. Our new app has not only enhanced customer engagement but also streamlined our internal processes. <span className='text-[2.5rem] font-bold'>99</span></p>
          <p className='text-[1.4rem] text-center lg:text-left font-bold text-purple-400/90'>Jane Doe, CEO of RetailCo</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center p-2 md:w-[100%] bg-gray-200 testimonials">
          <div className='w-[30%]' data-aos="fade-right"
        data-aos-duration="2000">
          <img className="w-[30rem] lg:w-[12rem] mx-auto object-cover h-[7rem] lg:h-[12rem] rounded-[100%]" src={test2} alt="" />
          </div>
          <div className='w-full lg:w-[60%] flex flex-col gap-7' data-aos="fade-left"
        data-aos-duration="2000">
          <p className='text-[1rem] lg:text-[1.5rem] text-center lg:text-left'><super><span className='text-[2.3rem] font-bold'>66</span></super>Thanks to Techistlab, we were able to bring a critical tool to our patients and medical staff, improving our service quality tremendously. <span className='text-[2.5rem] font-bold'>99</span></p>
          <p className='text-[1.4rem] text-center lg:text-left font-bold text-purple-400/90'>John Smith, Director at HealthPlus</p>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Portfolio