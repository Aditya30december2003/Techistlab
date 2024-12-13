import { Link } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-gray-300 text-black p-4 lg:p-5">
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
          className="mx-auto text-center w-[100%] lg:w-[45%] mt-18 lg:mt-10 flex items-center border p-2 rounded-[5rem] "
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
  <div className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[6rem] items-center">
  <div className="flex justify-center items-center p-14">
  <div className="bg-gray-400 rounded-full w-[15rem] h-[15rem] lg:w-[12rem] lg:h-[12rem] flex-col text-center justify-center items-center">
    <img 
      src="https://techistlab.co.uk/assets/logo-D8JJhk6e.png" 
      alt="Logo" 
      className="w-48 h-48 object-contain mx-auto"
    />
  </div>
</div>

        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[1.3rem]">Legal Terms</h1>
          <p to="/about"  className="text-[1rem] font-light">Terms of use</p>
          <p to="/blog"  className="text-[1rem] font-light">Terms & Conditions</p>
          <p to="/careers"  className="text-[1rem] font-light">Privacy policy</p>
          <p to="/contact"  className="text-[1rem] font-light">Contact</p>
          <p to="/portfolio"  className="text-[1rem] font-light">Cookie policy</p>
        </div>
        <div className='flex gap-2 flex-col'>
        <div className="flex flex-col gap-1 text-[2.3rem]">
          <h1 className="font-bold text-[1.3rem]">Careers</h1>
          <Link className="text-[1rem] font-light">Job Search</Link>
        </div>
        <div>
        <h1 className="font-bold text-[1.3rem]">Where to find us?</h1>
        <Link className="text-[1rem] font-light">Floor, London, England, W1W 5PF</Link>
        </div>
        <div>
        <h1 className="font-bold text-[1.3rem]">Phone no.</h1>
        <Link className="text-[1rem] font-light">+44(0)20 3723 6703</Link>
        </div>
        <div>
        <h1 className="font-bold text-[1.3rem]">Email</h1>
        <Link className="text-[1rem] font-light">email@gmail.com</Link>
        </div>
        </div>
        <div className='flex flex-col gap-10'>
        <h1 className="font-bold text-[1.3rem]">Get in touch</h1>
        <Link className="text-[1rem] font-light">
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
        </Link>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-10 bg-black h-[0.03rem]"></div>
      <div className="flex flex-col lg:flex-row items-center gap-7 text-[0.85rem] mt-5 justify-between">
        <div className="flex items-center gap-3 text-[1.5rem] mx-auto">
          <p>© 2024 Techistlab</p>
          <p>.</p>
          <p>Privacy</p>
          <p>.</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

