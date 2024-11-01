import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import Banner from "../../public/assets/images/banner-img-1.png";
export default function Hero() {
  return (
    <section className="hero bg-hero to-white bg-opacity-25 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div>
          <div className="mb-10">
            <h1 className="lg:text-3xl xl:text-4xl font-bold mb-5 text-heading">
              There Are <span className="text-purple-700">93,178</span> Posting
              Here For you!
            </h1>
            <p className="text-gray-400 text-base">
              Find jobs, Employment & Career Opportunities
            </p>
          </div>
          <div className="flex items-center bg-white p-5 mb-6 rounded shadow-md">
            <div className="flex items-center px-3">
              <IoIosSearch className="text-gray-400 font-bold text-2xl" />
              <input
                type="text"
                placeholder="job title,keywords,or company"
                className="py-4 pe-10 w-full ms-2 focus:outline-none"
              />
            </div>
            <div className="flex items-center px-3">
              <IoLocationOutline className="text-gray-400 font-bold text-2xl" />
              <input
                type="text"
                placeholder="City or postalcode"
                className="py-4 pe-10 w-full ms-2 focus:outline-none"
              />
            </div>
            <div className="flex items-center px-3">
              <button
                type="button"
                className="bg-purple-500 px-6 py-3 rounded text-white hover:bg-purple-900 duration-300 "
              >
                Find jobs
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-heading font-bold">Popular Searches : </p>
            <ul className="flex items-center gap-2">
              <li className="text-text font-medium text-sm">Designer,</li>
              <li className="text-text font-medium text-sm">Developer,</li>
              <li className="text-text font-medium text-sm">Web,</li>
              <li className="text-text font-medium text-sm">IOS,</li>
              <li className="text-text font-medium text-sm">PHP,</li>
              <li className="text-text font-medium text-sm">Senior,</li>
              <li className="text-text font-medium text-sm">Enginner,</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="img_container">
            <Image src={Banner} alt="banner image" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
