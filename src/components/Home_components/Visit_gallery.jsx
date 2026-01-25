import React from "react";
import { Link } from "react-router-dom";
import img1 from "./files/sarhul.jpg";
import img2 from "./files/playgroup.jpg";
import img3 from "./files/flaggirl.jpg";
import img4 from "./files/eating.jpg";

export default function VisitGallery() {
  return (
    <section className="relative overflow-hidden bg-[#f6f4ff] py-14 sm:py-20">
      
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Let your <span className="text-indigo-600">children</span><br />
            learn from the best.
          </h2>

          <p className="text-gray-600 mt-5 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            Discover a joyful learning environment where children grow academically,
            socially, and emotionally through creativity and care.
          </p>

          <p className="text-gray-700 mt-4 font-medium text-sm sm:text-base">
            👉 Take a look, relive the moments, and see what makes our school so unique.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/gallery"
              className="px-7 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
            >
              Visit Gallery
            </Link>

            <a
              href="tel:+919608881888"
              className="px-7 py-3 rounded-xl border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
            >
              📞 Contact Us
            </a>
          </div>
        </div>

        {/*right image */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <img
            src={img1}
            alt="Student activity"
            className="rounded-2xl object-cover h-40 sm:h-48 lg:h-56 shadow-lg hover:scale-105 transition"
          />

          <img
            src={img2}
            alt="Happy child"
            className="rounded-2xl object-cover h-44 sm:h-56 lg:h-64 shadow-lg self-end hover:scale-105 transition"
          />

          <img
            src={img3}
            alt="Learning activity"
            className="rounded-2xl object-cover h-36 sm:h-44 lg:h-52 shadow-lg hover:scale-105 transition"
          />

          <img
            src={img4}
            alt="Creative class"
            className="rounded-2xl object-cover h-40 sm:h-48 lg:h-52 shadow-lg self-start hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
}
