import React from 'react';
import Img from '../assets/footerlogo.png';
import Twitter from '../assets/twitter.svg';
import Telegram from '../assets/telegram.svg';

const Footer = () => {
  return (
    <div className="footer flex-col " id="footer">
      <footer className="bg-[#1D1D1B] rounded-lg shadow  ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0">
              <img src={Img} className="footerimg" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Start betting
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Faq
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          <div className="flex items-center justify-center gap-6 ">
            <img src={Twitter} className="w-[50px]" />
            <img src={Telegram} />
          </div>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            BlockBet © 2023
          </span>
        </div>
      </footer>

      {/* <div classNameName="flex flex-wrap items-center justify-between mx-auto p-2 ">
        <div classNameName="footerimg pl-8">
          <img src={Img} />
        </div>
        <div classNameName="footerl items-center justify-between">
          <ul>
            <li classNameName="flex justify-between">
              <a href="#">Home</a>
            </li>
            <li classNameName="flex justify-between">
              <a href="#">Start betting</a>
            </li>
            <li classNameName="flex justify-between">
              <a href="#">Faq</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div classNameName="flex items-center justify-center gap-6 ">
          <img src={Twitter} classNameName="w-[50px]" />
          <img src={Telegram} />
        </div>
        <div classNameName="flex items-center justify-center pt-4">
          BlockBet © 2023
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
