import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../files/logo.jpg";
import {
  List,
  ChevronUp,
  HouseIcon,
  HandshakeIcon,
  Backpack,
  FileUserIcon,
  ImagesIcon,
  CreditCardIcon,
  HeadsetIcon,
  UserPlusIcon,
  Baby,
  BookOpen,
  School,
  ClipboardList,
  FileQuestion,
  UserCheck,
  AlignVerticalJustifyEnd,
} from "lucide-react";

export default function Header() {
  /* ================= MOBILE STATES ================= */
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setCourseOpen(false);
    setAdmissionOpen(false);
  };

  const clickcourse = () => {
    setCourseOpen(!courseOpen);
    setAdmissionOpen(false);
  };

  const clickadmission = () => {
    setAdmissionOpen(!admissionOpen);
    setCourseOpen(false);
  };

  /* ================= DESKTOP STATES ================= */
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);

  const togglecourse = () => {
    setDisplay1(!display1);
    setDisplay2(false);
  };

  const toggleadd = () => {
    setDisplay2(!display2);
    setDisplay1(false);
  };

  const off = () => {
    setDisplay1(false);
    setDisplay2(false);
  };

  return (
    <>
      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden sticky top-0 z-50 bg-fuchsia-800 shadow-md">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-1">
              <img src={logo} alt="Logo" className="h-10" />
            </div>
            <span className="text-white font-bold text-sm">
              Bachpan – The Little Kingdom
            </span>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <ChevronUp size={26} /> : <List size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="bg-white px-4 py-5 space-y-4 text-gray-800">

            <Link to="/" onClick={closeAll} className="flex items-center gap-3 font-semibold py-2">
              <HouseIcon size={20} /> Home
            </Link>

            <Link to="/about" onClick={closeAll} className="flex items-center gap-3 font-semibold py-2">
              <HandshakeIcon size={20} /> About Us
            </Link>

            {/* COURSES */}
            <button onClick={clickcourse} className="flex justify-between w-full font-semibold py-2">
              <span className="flex items-center gap-3">
                <Backpack size={20} /> Our Courses
              </span>
              {courseOpen ? "▲" : "▼"}
            </button>

            {courseOpen && (
              <div className="ml-6 border-l-2 border-fuchsia-300 pl-4 flex flex-col gap-2 text-sm">
                <Link to="/courses/playgroup" onClick={closeAll} className="flex items-center gap-2 bg-fuchsia-50 rounded-lg px-3 py-2">
                  <Baby size={16} className="text-fuchsia-700" /> Play Group
                </Link>
                <Link to="/courses/nursery" onClick={closeAll} className="flex items-center gap-2 bg-fuchsia-50 rounded-lg px-3 py-2">
                  <BookOpen size={16} className="text-fuchsia-700" /> Kindergarten
                </Link>
                <Link to="/courses/primary" onClick={closeAll} className="flex items-center gap-2 bg-fuchsia-50 rounded-lg px-3 py-2">
                  <School size={16} className="text-fuchsia-700" /> Primary
                </Link>
              </div>
            )}

            {/* ADMISSION */}
            <button onClick={clickadmission} className="flex justify-between w-full font-semibold py-2">
              <span className="flex items-center gap-3">
                <FileUserIcon size={20} /> Admission
              </span>
              {admissionOpen ? "▲" : "▼"}
            </button>

            {admissionOpen && (
              <div className="ml-6 border-l-2 border-fuchsia-300 pl-4 flex flex-col gap-2 text-sm">
                <Link to="/admission/process" onClick={closeAll} className="flex items-center gap-2 bg-fuchsia-50 rounded-lg px-3 py-2">
                  <ClipboardList size={16} className="text-fuchsia-700" /> Admission Process
                </Link>
                <Link to="https://btlk.scientificstudy.in/online/admissionenquiry?key=btlk&tab=admissionenquiry" onClick={closeAll} className="flex items-center gap-2 bg-fuchsia-50 rounded-lg px-3 py-2">
                  <FileQuestion size={16} className="text-fuchsia-700" /> Admission Enquiry
                </Link>
                <Link to="https://btlk.scientificstudy.in/online/registration?key=btlk&tab=registration" onClick={closeAll} className="flex items-center gap-2 bg-fuchsia-50 rounded-lg px-3 py-2">
                  <UserCheck size={16} className="text-fuchsia-700" /> Register Online
                </Link>
              </div>
            )}

            <Link to="/feestructure" onClick={closeAll} className="flex items-center gap-3 font-semibold py-2">
              <AlignVerticalJustifyEnd size={20} /> Fee Structure
            </Link>

            <Link to="https://btlk.scientificstudy.in/payment?key=btlk" onClick={closeAll} className="flex items-center gap-3 font-semibold py-2">
              <CreditCardIcon size={20} /> Online Fee Payment
            </Link>
            <Link to="/gallery" onClick={closeAll} className="flex items-center gap-3 font-semibold py-2">
              <ImagesIcon size={20} /> Gallery
            </Link>

            <Link to="/contact" onClick={closeAll} className="flex items-center gap-3 font-semibold py-2">
              <HeadsetIcon size={20} /> Contact Us
            </Link>

            <Link to="https://jobs.scientificstudy.in/career?schoolcode=btlk" onClick={closeAll} className="flex items-center gap-3 font-semibold py-2">
              <UserPlusIcon size={20} /> Career
            </Link>

          </div>
        )}
      </div>

      {/* ================= DESKTOP HEADER (UNCHANGED) ================= */}
      <div className="hidden lg:block sticky top-0 z-50">

        <header className="w-full shadow-2xl">
          <div className="bg-white text-fuchsia-800 p-1.5">
            <div className="max-w-7xl mx-auto flex justify-between text-sm">
              <p>
                E-mail Id – <span className="font-semibold">bachpangumla@gmail.com</span>
              </p>
              <p>
                Phone No. <span className="font-semibold">+91-9608881888</span>
              </p>
            </div>
          </div>
        </header>

        <div className="bg-fuchsia-800 flex justify-between px-4 py-2 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-xl">
              <img src={logo} alt="Logo" className="h-20" />
            </div>
            <h1 className="text-xl font-bold text-white">
              Bachpan, The Little Kingdom
            </h1>
          </div>

          <nav className="mt-6">
            <ul className="flex gap-8 text-white font-semibold">

              <li><Link to="/" onClick={off}>Home</Link></li>
              <li><Link to="/about" onClick={off}>About Us</Link></li>

              <li className="relative">
                <button onClick={togglecourse}>Our Courses ▾</button>
                {display1 && (
                  <ul className="absolute bg-white text-gray-700 rounded-lg shadow-lg w-48 mt-2">
                    <li><Link to="/courses/playgroup" onClick={togglecourse} className="block px-4 py-2 hover:bg-pink-100">Play Group</Link></li>
                    <li><Link to="/courses/nursery" onClick={togglecourse} className="block px-4 py-2 hover:bg-pink-100">Kindergarten</Link></li>
                    <li><Link to="/courses/primary" onClick={togglecourse} className="block px-4 py-2 hover:bg-pink-100">Primary School</Link></li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <button onClick={toggleadd}>Admission ▾</button>
                {display2 && (
                  <ul className="absolute bg-white text-gray-700 rounded-lg shadow-lg w-48 mt-2">
                    <li><Link to="/admission/process" onClick={toggleadd} className="block px-4 py-2 hover:bg-indigo-100">Admission Process</Link></li>
                    <li><Link to="https://btlk.scientificstudy.in/online/admissionenquiry?key=btlk&tab=admissionenquiry" onClick={off} className="block px-4 py-2 hover:bg-indigo-100">Admission Enquiry</Link></li>
                    <li><Link to="https://btlk.scientificstudy.in/online/registration?key=btlk&tab=registration" onClick={off} className="block px-4 py-2 hover:bg-indigo-100">Register Online</Link></li>
                  </ul>
                )}
              </li>

              <li><Link to="/gallery" onClick={off}>Gallery</Link></li>
              <li><Link to="/contact" onClick={off}>Contact Us</Link></li>
              <li><Link to="https://jobs.scientificstudy.in/career?schoolcode=btlk" onClick={off}>Career</Link></li>

            </ul>
          </nav>
        </div>
      </div>


      <div className=" text-fuchsia-800 font-semibold align-bottom text-md gap-10 justify-center mt-1 mb-2 , hidden , lg:flex"> 
        <Link to="/feestructure"> <button className="relative z-0 rounded transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-blue-200 after:transition-[all_0.5s_ease] hover:after:w-full ">🧾 FEE STRUCTURE </button> </Link>
        <Link to="https://btlk.scientificstudy.in/payment?key=btlk"> <button className="relative z-0 rounded transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:text-white after:bg-blue-200 after:transition-[all_0.5s_ease] hover:after:w-full ">💳 ONLINE FEE </button> </Link> <Link to="https://btlk.scientificstudy.in/login"> <button className="relative z-0 rounded transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-blue-200 after:transition-[all_0.5s_ease] hover:after:w-full ">🎧 SCHOOL PORTAL LOGIN </button> </Link> <Link to="https://btlk.scientificstudy.in/admissionregistration?key=btlk"> <button className="relative z-0 rounded transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-blue-200 after:transition-[all_0.5s_ease] hover:after:w-full ">🧾 ONLINE REGISTRATION </button> </Link> 
       </div>
    </>
  );
}
