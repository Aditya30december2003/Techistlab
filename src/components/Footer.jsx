import { Link } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-gray-300 text-black p-4 lg:p-20">
      <div className='mb-0'>
      <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const name = "TechistLab Inquiry";
            const message = "I am interested in hiring your services.";
            const mailtoLink = `mailto:ask@techistlab.co.uk?subject=Contact%20from%20${encodeURIComponent(
              name
            )}&body=From:%20${encodeURIComponent(email)}%0A%0A${encodeURIComponent(
              message
            )}`;
            window.location.href = mailtoLink;
          }}
          className="mx-auto text-center w-[100%] lg:w-[45%] mt-28 lg:mt-20 flex items-center border p-2 rounded-[5rem]"
        >
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            className="border-none outline-none p-2 bg-transparent w-[70%]"
          />
          <button
            type="submit"
            className="text-center mx-auto subcolor1 text-white p-3 w-[30%] rounded-[5rem] text-[1rem] font-bold"
          >
            Let's talk tech
          </button>
        </form>
      </div>
      <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[14rem] items-center">
  <div className="flex justify-center items-center h-screen">
  <div className="bg-gray-400 rounded-full w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem] flex-col text-center justify-center items-center">
    <img 
      src="https://techistlab.co.uk/assets/logo-D8JJhk6e.png" 
      alt="Logo" 
      className="w-48 h-48 object-contain mx-auto"
    />
    <div className='font-bold text-[1rem] lg:text-[1.2rem]'>
  167-169 Great Portland Street, 5th Floor, London, England, W1W 5PF
  +44(0)20 3723 6703
  </div>
  </div>
</div>

        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[2.3rem]">Techistlab</h1>
          <Link to="/about"  className="text-[1.45rem] font-light">About</Link>
          <Link to="/blog"  className="text-[1.45rem] font-light">Blog</Link>
          <Link to="/careers"  className="text-[1.45rem] font-light">Careers</Link>
          <Link to="/contact"  className="text-[1.45rem] font-light">Contact</Link>
          <Link to="/portfolio"  className="text-[1.45rem] font-light">Portfolio</Link>
          <Link to='services' className="text-[1.45rem] font-light">Services</Link>
          <Link to='teams' className="text-[1.45rem] font-light">Teams</Link>
          <Link className="text-[1.45rem] font-light">Legal</Link>
        </div>
        <div className="flex flex-col gap-3 text-[2.3rem]">
          <h1 className="font-bold text-[2.3rem]">Careers</h1>
          <Link className="text-[1.5rem] font-light">Job Search</Link>
        </div>
      </div>
      <div className="w-[80%] mt-10 bg-black h-[0.03rem]"></div>
      <div className="flex flex-col lg:flex-row items-center gap-7 text-[0.85rem] mt-5 justify-between">
        <div className="flex items-center gap-3 text-[1.5rem]">
          <p>© 2024 Techistlab</p>
          <p>.</p>
          <p>Privacy</p>
          <p>.</p>
          <p>Terms</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <p>
            <FaGlobe size={40} />
          </p>
          <p>
            <FaFacebookSquare size={40} />
          </p>
          <p>
            <FaSquareXTwitter size={40} />
          </p>
          <p>
            <FaInstagramSquare size={40} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

