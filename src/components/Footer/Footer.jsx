import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap gap-y-10 max-w-[1400px] mx-auto px-10">
        <div className="flex-1 basis-[300px]">
          <a href="#" className="text-3xl font-bold">
            <span className="text-red-500 uppercase">Q</span>uickCart
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of benificial substances. Our products are a 
          </p>

          <p className="text-zinc-800 mt-6">
            2026 &copy; All Rights Reserved
          </p>
        </div>

        <ul className="flex-1">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
            </li>
            <li className="mt-6">
                <a className="text-zinc-800 hover:text-orange-500" href="#">About</a>
            </li>
            <li className="mt-6">
                <a className="text-zinc-800 hover:text-orange-500" href="#">Faq's</a>
            </li>
        </ul>

         <ul className="flex-1">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
            </li>
            <li className="mt-6">
                <a className="text-zinc-800 hover:text-orange-500" href="#">Support Center</a>
            </li>
            <li className="mt-6">
                <a className="text-zinc-800 hover:text-orange-500" href="#">Feedback</a>
            </li>
            <li className="mt-6">
                <a className="text-zinc-800 hover:text-orange-500" href="#">Contact Us</a>
            </li>
        </ul>

        <div className="flex-1">
            <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
            <p className="mt-6 text-zinc-600">
                Question or Feedback?<br />
                We'd love to hear from you.
            </p>

            <div className="flex bg-white p-1 rounded-lg mt-6">
                <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter Your Email" className="h-[5vh] pl-4 flex-1 focus:outline-none"/>
                <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer">
                    <IoIosArrowForward/>
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
