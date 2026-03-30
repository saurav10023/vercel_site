// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaGithub
// } from "react-icons/fa";
// import logo from "../files/logo.jpg";

// export default function Footer() {
//   return (
//     <>
//       {/* mobile */}
//       <div className="lg:hidden bg-linear-to-r from-fuchsia-700 to-fuchsia-800 text-white">
//         <div className="px-6 py-8 space-y-6 text-center">

//           {/* logo */}
//           <img
//             src={logo}
//             alt="School Logo"
//             className="h-14 mx-auto bg-white rounded-md"
//           />

//           {/* address */}
//           <div className="text-sm text-gray-200 space-y-1">
//             <p>Lohardaga Road, Behind State Bus Depot</p>
//             <p>Gumla - 835207, Jharkhand</p>
//             <p>Email: bachpangumla@gmail.com</p>
//             <p>www.bachpangumla.com</p>
//           </div>

//           {/* links */}
//           <div>
//             <h3 className="font-semibold mb-3">Quick Links</h3>
//             <div className="flex flex-col gap-2 text-gray-200">
//               <Link to="/admission/process">Admission</Link>
//               <Link to="/about">About Us</Link>
//               <Link to="/contact">Contact Us</Link>
//               <Link to="/gallery">Gallery</Link>
//             </div>
//           </div>

//           {/* icons */}
//           <div className="flex justify-center gap-4">
//             <SocialIcon Icon={FaFacebookF} dest={"https://www.facebook.com/@bachpangumla/?hr=1&wtsid=rdr_0METeFFJ1Q4QWwAKI"}/>
//             <SocialIcon Icon={FaInstagram}  dest={"https://www.instagram.com/bachpanthelittlekingdom?igsh=c2RnbTJudW51dWQx"}/>
//             <SocialIcon Icon={FaYoutube}  dest={""}/>
//           </div>

//           <div className="border-t border-white/20 pt-4 text-xs text-gray-200 space-y-1">
//             <p>© {new Date().getFullYear()} Bachpan The Little Kingdom</p>
//             <Link to={"https://github.com/saurav10023"} className="underline hover:text-blue-400"><p className="text-center mt-3 ml-2">Designed By Kumar Saurav</p></Link>
//           </div>
//         </div>
//       </div>

//       {/* desktop footer */}
//       <div className="hidden lg:block">
//         <footer className="bg-linear-to-r from-fuchsia-700 to-fuchsia-800 text-white">

//           {/* top footer */}
//           <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-10">

//             {/* info */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">
//                 Bachpan The Little Kingdom
//               </h3>
//               <ul className="space-y-2 text-md text-gray-200">
//                 <li>Lohardaga Road,Behind State Bus Depot,</li>
//                 <li>Gumla -835207, Jharkhand</li>
//                 <li>E-Mail Address: bachpangumla@gmail.com</li>
//                 <li>Website: www.bachpangumla.com</li>
//               </ul>
//             </div>

//             {/* QUICK LINKS*/}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2 text-md text-gray-200">
//                 <li>
//                   <Link to="/admission/process" className="hover:underline">
//                     Admission
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="https://btlk.scientificstudy.in/payment?key=btlk" className="hover:underline">
//                     Online Fee Payment
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className="hover:underline">
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/gallery" className="hover:underline">
//                     Gallery
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* SOCIAL */}
//             <div className="flex flex-col items-end">
//               <div className="flex gap-4">
//                 <SocialIcon Icon={FaFacebookF} dest = {"https://www.facebook.com/@bachpangumla/?hr=1&wtsid=rdr_0METeFFJ1Q4QWwAKI"}/>
//                 <SocialIcon Icon={FaInstagram} dest={"https://www.instagram.com/bachpanthelittlekingdom?igsh=c2RnbTJudW51dWQx"} />
//                 <SocialIcon Icon={FaYoutube} dest={""}/>
//               </div>
//             </div>
//           </div>

//           {/*BOTTOM*/}
//           <div className="border-t border-white/20">
//             <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm text-gray-200">
//               <img
//                 src={logo}
//                 alt="School Logo"
//                 className="h-12 bg-white rounded-md"
//               />
//               <p>
//                 © {new Date().getFullYear()} Your School Name. All rights reserved.
//               </p>
//               <Link to={"https://github.com/saurav10023"} className="underline hover:text-blue-400"><p className="text-center mt-3 ml-2">Designed By Kumar Saurav</p></Link>
//             </div>
//           </div>

//         </footer>
//       </div>
//     </>
//   );
// }
// function SocialIcon({ Icon , dest}) {
//   return (
//     <Link to={dest}>
//     <div className="w-11 h-11 rounded-full bg-white text-[#4b2a7a] flex items-center justify-center cursor-pointer
//       transition transform hover:scale-110 hover:bg-indigo-100 hover:shadow-lg">
//       <Icon />
//     </div>
//     </Link>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../files/logo.jpg";

const FUCHSIA = "#86198f";
const FUCHSIA_DARK = "#4a044e";
const FUCHSIA_MID = "#a21caf";

const links = [
  { to: "/admission/process", label: "Admission" },
  { to: "https://btlk.scientificstudy.in/payment?key=btlk", label: "Online Fee Payment" },
  { to: "/contact", label: "Contact Us" },
  { to: "/gallery", label: "Gallery" },
];

const socials = [
  { Icon: FaFacebookF, dest: "https://www.facebook.com/@bachpangumla/?hr=1&wtsid=rdr_0METeFFJ1Q4QWwAKI" },
  { Icon: FaInstagram, dest: "https://www.instagram.com/bachpanthelittlekingdom?igsh=c2RnbTJudW51dWQx" },
  { Icon: FaYoutube, dest: "" },
];

function SocialIcon({ Icon, dest }) {
  return (
    <Link to={dest}>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.2s ease",
          color: "#ffffff",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#ffffff";
          e.currentTarget.style.color = FUCHSIA;
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.12)";
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <Icon size={16} />
      </div>
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const gradientBg = `linear-gradient(135deg, ${FUCHSIA_DARK} 0%, ${FUCHSIA_MID} 60%, ${FUCHSIA} 100%)`;

  const footerLinkStyle = {
    fontFamily: "sans-serif",
    fontSize: "13px",
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
    transition: "color 0.2s ease",
    display: "inline-block",
  };

  return (
    <>
      {/* ── MOBILE FOOTER ── */}
      <footer
        className="lg:hidden"
        style={{ background: gradientBg, color: "#fff" }}
      >
        <div style={{ padding: "36px 24px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>

          {/* Logo */}
          <div style={{ background: "#fff", borderRadius: "12px", padding: "6px 10px", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            <img src={logo} alt="School Logo" style={{ height: "48px", display: "block" }} />
          </div>

          {/* School name */}
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#fff", margin: "0 0 4px 0" }}>
              Bachpan, The Little Kingdom
            </p>
            <p style={{ fontFamily: "sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: 0 }}>
              Gumla &middot; Jharkhand
            </p>
          </div>

          {/* Divider */}
          <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.3)" }} />

          {/* Address */}
          <div style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
            <p style={{ margin: 0 }}>Lohardaga Road, Behind State Bus Depot</p>
            <p style={{ margin: 0 }}>Gumla - 835207, Jharkhand</p>
            <p style={{ margin: "4px 0 0 0" }}>
              <a href="mailto:bachpangumla@gmail.com" style={{ color: "#f0abfc", textDecoration: "none" }}>
                bachpangumla@gmail.com
              </a>
            </p>
            <p style={{ margin: 0 }}>
              <a href="https://www.bachpangumla.com" style={{ color: "#f0abfc", textDecoration: "none" }}>
                www.bachpangumla.com
              </a>
            </p>
          </div>

          {/* Quick links */}
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "0 0 12px 0" }}>
              Quick Links
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.08)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: "10px" }}>
            {socials.map((s, i) => <SocialIcon key={i} Icon={s.Icon} dest={s.dest} />)}
          </div>

          {/* Bottom */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "16px", textAlign: "center", width: "100%" }}>
            <p style={{ fontFamily: "sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.5)", margin: "0 0 6px 0" }}>
              &copy; {year} Bachpan The Little Kingdom. All rights reserved.
            </p>
            <Link
              to="https://github.com/saurav10023"
              style={{ fontFamily: "sans-serif", fontSize: "11px", color: "#f0abfc", textDecoration: "none" }}
            >
              Designed by Kumar Saurav
            </Link>
          </div>
        </div>
      </footer>

      {/* ── DESKTOP FOOTER ── */}
      <footer
        className="hidden lg:block"
        style={{ background: gradientBg, color: "#fff" }}
      >
        {/* Main content */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "52px 32px 40px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <div style={{ background: "#fff", borderRadius: "12px", padding: "5px 8px", boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>
                <img src={logo} alt="School Logo" style={{ height: "48px", display: "block" }} />
              </div>
              <div>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#fff", margin: 0, lineHeight: 1.2 }}>
                  Bachpan
                </p>
                <p style={{ fontFamily: "sans-serif", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: 0 }}>
                  The Little Kingdom
                </p>
              </div>
            </div>

            <div style={{ fontFamily: "sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 2 }}>
              <p style={{ margin: 0 }}>Lohardaga Road, Behind State Bus Depot</p>
              <p style={{ margin: 0 }}>Gumla - 835207, Jharkhand</p>
              <p style={{ margin: "6px 0 0 0" }}>
                <a href="mailto:bachpangumla@gmail.com" style={{ color: "#f0abfc", textDecoration: "none" }}>
                  bachpangumla@gmail.com
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <a href="https://www.bachpangumla.com" style={{ color: "#f0abfc", textDecoration: "none" }}>
                  www.bachpangumla.com
                </a>
              </p>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "0 0 16px 0" }}>
              Quick Links
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    style={footerLinkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#f0abfc"; e.currentTarget.style.paddingLeft = "6px"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.paddingLeft = "0px"; }}
                  >
                    &#8250;&nbsp; {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Social */}
          <div>
            <p style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "0 0 16px 0" }}>
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((s, i) => <SocialIcon key={i} Icon={s.Icon} dest={s.dest} />)}
            </div>

            <div style={{ marginTop: "24px", padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <p style={{ fontFamily: "sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px 0" }}>
                Reach us directly
              </p>
              
              <a
                href="tel:+919608881888"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "18px",
                  color: "#ffffff",
                  textDecoration: "none",
                  display: "block",
                }}
              >+91-9608881888
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "14px 32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontFamily: "sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.45)", margin: 0 }}>
              &copy; {year} Bachpan The Little Kingdom. All rights reserved.
            </p>
            <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.2)" }} />
            <Link
              to="https://github.com/saurav10023"
              style={{ fontFamily: "sans-serif", fontSize: "12px", color: "#f0abfc", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#f0abfc")}
            >
              Designed by Kumar Saurav
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}