import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  return (
    <div className="mt-[10rem] md:mt-[5rem] lg:mt-[10rem] overflow-x-hidden"> {/* Added overflow-x-hidden */}
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-center font-bold text-[1.5rem] lg:text-[1.8rem] heading"
      >
        Contact
      </h1>
      <div
        className="w-[6rem] my-10 bg-black h-[0.2rem] text-center mx-auto"
        data-aos="fade-up"
        data-aos-duration="2000"
      ></div>
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-center font-bold mt-10 text-[2.3rem] lg:text-[3rem] w-full lg:w-[70%] mx-auto"
      >
        We’re Here to Help You Succeed
      </h1>

      <p className="text-center text-[1.2rem] w-full lg:w-[60%] mx-auto mt-10">
        <TypeAnimation
          sequence={[
            "Whether you have a clear project in mind or need guidance exploring digital opportunities, we’re ready to collaborate.",
            1000,
          ]}
          wrapper="span"
          speed={20}
          className="text-6x1 font-bold"
          repeat={Infinity}
        />
      </p>

      <div className="mt-[4rem] p-10">
        <h1
          className="text-[2.3rem] font-bold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Contact Form
        </h1>

        {/* Contact Form */}
        <div className="contact-form mb-6 p-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              const mailtoLink = `mailto:ask@techistlab.co.uk?subject=Contact%20from%20${encodeURIComponent(
                name
              )}&body=From:%20${encodeURIComponent(
                email
              )}%0A%0A${encodeURIComponent(message)}`;
              window.location.href = mailtoLink;
            }}
            className="space-y-4"
          >
            <div className="flex flex-col">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="p-2 outline-none border-b-2 mt-5 bg-transparent"
                placeholder="Your Name"
                data-aos="fade-right"
                data-aos-duration="2000"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-2 outline-none border-b-2 mt-5 bg-transparent"
                placeholder="Your Email"
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </div>

            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                className="p-2 border outline-none rounded bg-transparent"
                rows="4"
                placeholder="Your Message"
                data-aos="fade-right"
                data-aos-duration="2000"
              ></textarea>
            </div>

            <button
              type="submit"
              className="subcolor1 text-white p-2 w-full rounded mx-auto"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Info and Google Map */}
        <div className="google-maps flex flex-col lg:flex-row mt-12 w-full">
          <div
            className="contact-info mb-6 w-full lg:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h3 className="text-2xl font-semibold mb-2">Address</h3>
            <p>
              Springdale Public School, 123 Education Lane, Cityville, State,
              ZIP Code
            </p>

            <h3 className="text-2xl font-semibold mt-4 mb-2">Phone</h3>
            <p>+1 (123) 456-7890</p>

            <h3 className="text-2xl font-semibold mt-4 mb-2">Email</h3>
            <p>
              <a href="mailto:ask@techistlab.co.uk" className="text-blue-500">
              ask@techistlab.co.uk
              </a>
            </p>
          </div>

          <div
            className="w-full lg:w-[50%]"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h3 className="text-2xl font-semibold mb-4">Find Us on Google Maps</h3>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.8621622416514!2d-121.98908608469046!3d37.3590869798428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcaf3fdf6c2df%3A0x540044f538b264f2!2s123%20Education%20Lane%2C%20Cityville%2C%20State%2C%20ZIP%20Code!5e0!3m2!1sen!2sus!4v1625845697987!5m2!1sen!2sus"
              className="w-full h-64 border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
