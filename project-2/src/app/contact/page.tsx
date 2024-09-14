import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '@/components/Header';

export default function AboutHeader() {
  return (
    <>
    
       <Header/>
      <div className="px-6 py-16 bg-[url('/12.jpg')] bg-cover bg-center bg-no-repeat  mx-auto  ">
        <h1 className="text-5xl font-bold mb-6  text-center bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="mb-10 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent font-bold text-center text-xl">
          Below are the details to reach out to me!
        </p>

        <div className="max-w-[800px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 lg:gap-16 md:gap-10 gap-6  ">
          <div className="bg-black p-6 rounded-lg  hover:shadow-md  transition-shadow hover:transform hover:scale-105 hover:bg-gray-900">
            <h3 className="text-xl font-semibold text-white flex items-center ">
              <span className="w-6 h-6 mr-3"><i className="fas fa-house"></i></span>Address
            </h3>
            <p className="text-white mt-2 ">Mehran Town Karachi</p>
          </div>

          <div className="bg-black p-6 rounded-lg  hover:shadow-md  transition-shadow hover:transform hover:scale-105 hover:bg-gray-900">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <span className="w-6 h-6 mr-3"><i className="fas fa-envelope"></i></span>Email
            </h3>
            <p className="text-white mt-2">ahed880011@gmail.com</p>
          </div>

          <div className="bg-black p-6 rounded-lg  hover:shadow-md  transition-shadow hover:transform hover:scale-105 hover:bg-gray-900">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <span className="w-6 h-6 mr-3"><i className="fab fa-linkedin"></i></span>LinkedIn
            </h3>
            <Link href="https://www.linkedin.com/in/sidra-raza-9442132b9" className="text-white mt-2 block hover:underline">
              View Profile
            </Link>
          </div>

          <div className="bg-black p-6 rounded-lg  hover:shadow-md  transition-shadow hover:transform hover:scale-105 hover:bg-gray-900">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <span className="w-6 h-6 mr-3"><i className="fab fa-github"></i></span>Github
            </h3>
            <Link href="https://github.com/SidraRaza" className="text-white mt-2 block hover:underline">
              View Profile
            </Link>
          </div>
        </div>

        <div className="pt-20 flex justify-center ">
          <form className="max-w-[400px] bg-black p-8 rounded-lg border border-white shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-white text-center">
              Send Message
            </h2>
            <div className="mb-6">
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-white rounded bg-gray-900"
                required
              />
              <label htmlFor="name" className="block text-white mt-2">
                Full Name
              </label>
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-400 bg-gray-900 rounded"
                required
              />
              <label htmlFor="email" className="block text-white mt-2">
                Email
              </label>
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                className="w-full px-4 py-3 border border-gray-400 rounded bg-gray-900"
                required
              ></textarea>
              <label htmlFor="message" className="block text-white mt-2">
                Type Your Message...
              </label>
            </div>
            <div className="text-center">
              <input
                type="submit"
                id="submit"
                value="Send"
                className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-700 text-white rounded-lg cursor-pointer hover:bg-green-600 transition-colors duration-300"
              />
            </div>
          </form>
        </div>
      </div>

      <Link
        href="#"
        id="backToTopBtn "
        className="fixed bottom-5 right-5 p-1  bg-yellow-500 text-white rounded-full hover:bg-orange-600 shadow-lg transition-colors duration-300"
      >
        <i className="fas fa-arrow-up "></i>
      </Link>
    </>
  );
}
