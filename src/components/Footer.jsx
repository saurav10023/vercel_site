import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import logo from "../files/logo.jpg";

export default function Footer() {
  return (
    <>
      {/* mobile */}
      <div className="lg:hidden bg-linear-to-r from-fuchsia-700 to-fuchsia-800 text-white">
        <div className="px-6 py-8 space-y-6 text-center">

          {/* logo */}
          <img
            src={logo}
            alt="School Logo"
            className="h-14 mx-auto bg-white rounded-md"
          />

          {/* address */}
          <div className="text-sm text-gray-200 space-y-1">
            <p>Lohardaga Road, Behind State Bus Depot</p>
            <p>Gumla - 835207, Jharkhand</p>
            <p>Email: bachpangumla@gmail.com</p>
            <p>www.bachpangumla.com</p>
          </div>

          {/* links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-200">
              <Link to="/admission/process">Admission</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/gallery">Gallery</Link>
            </div>
          </div>

          {/* icons */}
          <div className="flex justify-center gap-4">
            <SocialIcon Icon={FaFacebookF} />
            <SocialIcon Icon={FaInstagram} />
            <SocialIcon Icon={FaYoutube} />
          </div>

          <div className="border-t border-white/20 pt-4 text-xs text-gray-200 space-y-1">
            <p>© {new Date().getFullYear()} Bachpan The Little Kingdom</p>
            <p>Designed by Kumar Saurav</p>
          </div>
        </div>
      </div>

      {/* desktop footer */}
      <div className="hidden lg:block">
        <footer className="bg-linear-to-r from-fuchsia-700 to-fuchsia-800 text-white">

          {/* top footer */}
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Bachpan The Little Kingdom
              </h3>
              <ul className="space-y-2 text-md text-gray-200">
                <li>Lohardaga Road,Behind State Bus Depot,</li>
                <li>Gumla -835207, Jharkhand</li>
                <li>E-Mail Address: bachpangumla@gmail.com</li>
                <li>Website: www.bachpangumla.com</li>
              </ul>
            </div>

            {/* QUICK LINKS*/}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-md text-gray-200">
                <li>
                  <Link to="/admission/process" className="hover:underline">
                    Admission
                  </Link>
                </li>
                <li>
                  <Link to="https://btlk.scientificstudy.in/payment?key=btlk" className="hover:underline">
                    Online Fee Payment
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:underline">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="flex flex-col items-end">
              <div className="flex gap-4">
                <SocialIcon Icon={FaFacebookF} dest = {"https://www.facebook.com/@bachpangumla/?hr=1&wtsid=rdr_0METeFFJ1Q4QWwAKI"}/>
                <SocialIcon Icon={FaInstagram} dest={"https://www.instagram.com/bachpanthelittlekingdom?igsh=c2RnbTJudW51dWQx"} />
                <SocialIcon Icon={FaYoutube} dest={""}/>
              </div>
            </div>
          </div>

          {/*BOTTOM*/}
          <div className="border-t border-white/20">
            <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm text-gray-200">
              <img
                src={logo}
                alt="School Logo"
                className="h-12 bg-white rounded-md"
              />
              <p>
                © {new Date().getFullYear()} Your School Name. All rights reserved.
              </p>
              <p>Designed By Kumar Saurav</p>
            </div>
          </div>

        </footer>
      </div>
    </>
  );
}
function SocialIcon({ Icon , dest}) {
  return (
    <Link to={dest}>
    <div className="w-11 h-11 rounded-full bg-white text-[#4b2a7a] flex items-center justify-center cursor-pointer
      transition transform hover:scale-110 hover:bg-indigo-100 hover:shadow-lg">
      <Icon />
    </div>
    </Link>
  );
}
