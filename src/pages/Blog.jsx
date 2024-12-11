
const Blog = () => {
  return (
    <div className=" mb-[10rem]">
      <div className="h-[30rem]">

        <div className="text-white top-0 left-0 bg-black/80 absolute mt-32  z-100 w-[100%] p-10">
        <h1 className="text-center text-2xl lg:text-3xl heading">Blog</h1>
        <p className="text-center text-[1.1rem] lg:text-[1.6rem] mt-10">  Insights and Innovations:</p>
        <p className="text-center text-[1rem] lg:text-[1.3rem] mt-10">Stay updated with the latest trends in technology, tips on digital transformation, and behind-the-scenes looks at our project processes.</p>
        </div>


        <div className="z-[-1]">
          <img className="object-cover w-[90rem] h-[30rem]" src="https://images.pexels.com/photos/16846525/pexels-photo-16846525/free-photo-of-low-angle-shot-of-modern-buildings-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
      </div>

      <div className="mt-20">
        <h1 className="heading">Recent Posts</h1>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 p-5 text-white mt-20">
          <div className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700">
            <div className="absolute h-[20rem]">
              <h1 className="text-xl text-center font-bold mt-20 p-10 mx-auto">The Future of Mobile Commerce: Trends to Watch in 2024</h1>
            </div>
            <div><img className="h-[20rem] w-full object-cover rounded-md" src="https://images.pexels.com/photos/5076525/pexels-photo-5076525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
          </div>
          <div className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700">
            <div className="absolute">
              <h1 className="text-xl text-center font-bold mt-20 p-10 mx-auto">User-Centric Design: Why It Matters More Than Ever</h1>
            </div>
            <div><img className="h-[20rem] w-full object-cover rounded-md" src="https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
          </div>
          <div className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700">
            <div className="absolute">
              <h1 className="text-xl text-center font-bold mt-20 p-10 mx-auto">Developing for Scalability: Best Practices in Software Engineering</h1>
            </div>
            <div><img className="h-[20rem] w-full object-cover rounded-md" src="https://images.pexels.com/photos/8127695/pexels-photo-8127695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
