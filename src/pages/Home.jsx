import { FaReact } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { LuFileJson } from "react-icons/lu";


const Home = () => {
  return (
    <div>
      <div>Building Digital Experiences That Drive Success</div>
      <div>We craft custom web and mobile applications that help you connect with your audience, streamline operations, and scale with confidence.</div>
      <p>At Techistlab, we blend strategic thinking, meticulous design, and cutting-edge technology to develop solutions that empower businesses of all sizes. From user-friendly mobile apps to robust web platforms, our team delivers products that not only look great but perform flawlessly. Let us help you transform your vision into a digital reality.</p>
    
      <div>
        <h1>Our Services</h1>
        <div>What We’re Offering?</div>

        <div>
            <div>
                <p><FaReact/></p>
                <h1>Custom Web Development</h1>
                <p>Create scalable, secure, and high-performing websites tailored to your unique needs.</p>
            </div>

            <div>
                <p><SiAndroidstudio/></p>
                <h1>Mobile App Development</h1>
                <p>Build engaging, intuitive, and future-ready applications for iOS and Android.</p>
            </div>
                
            <div>
                <p><FaFigma /></p>
                <h1>UI/UX Design</h1>
                <p>Design interfaces that captivate your audience and keep them coming back for more.</p>
            </div>

            <div>
                <p><GiShoppingCart/></p>
                <h1>E-commerce Solutions</h1>
                <p>Launch or enhance your online store with seamless checkout and integrated payment systems.</p>
            </div>

            <div>
             <p><LuFileJson/></p>
             <h1>API & Integration Services</h1>
             <p>Connect with third-party tools and platforms to enhance your product’s capabilities.</p>
            </div>

            </div>
        
      </div>

      <div>
        <p>Ready to get started</p>
        <div><button>Join Now</button></div>
      </div>
    </div>
  )
}

export default Home
