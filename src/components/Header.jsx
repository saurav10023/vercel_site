import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../files/logo.jpg";
import {
  List,
  X,
  ChevronDown,
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const desktopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target)) {
        setDisplay1(false);
        setDisplay2(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const off = () => {
    setDisplay1(false);
    setDisplay2(false);
  };

  const togglecourse = () => {
    setDisplay1(!display1);
    setDisplay2(false);
  };

  const toggleadd = () => {
    setDisplay2(!display2);
    setDisplay1(false);
  };

  const FUCHSIA = "#86198f";
  const FUCHSIA_DARK = "#4a044e";
  const FUCHSIA_MID = "#a21caf";
  const FUCHSIA_LIGHT = "#fdf4ff";
  const FUCHSIA_BORDER = "#e879f9";

  const navLinkStyle = {
    fontFamily: "sans-serif",
    fontSize: "13.5px",
    fontWeight: 500,
    letterSpacing: "0.04em",
    color: "#ffffff",
    textDecoration: "none",
    padding: "6px 2px",
    borderBottom: "2px solid transparent",
    transition: "border-color 0.2s ease",
    whiteSpace: "nowrap",
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    cursor: "pointer",
  };

  const dropdownItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 16px",
    fontFamily: "sans-serif",
    fontSize: "13px",
    color: FUCHSIA_DARK,
    textDecoration: "none",
    transition: "background 0.15s ease",
    borderRadius: "8px",
    margin: "2px 4px",
  };

  return (
    <>
      {/* ── MOBILE ── */}
      <div
        className="lg:hidden"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: `linear-gradient(135deg, ${FUCHSIA_DARK} 0%, ${FUCHSIA} 100%)`,
          boxShadow: scrolled ? "0 4px 24px rgba(134,25,143,0.35)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "3px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              <img src={logo} alt="Logo" style={{ height: "40px", display: "block" }} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "13px",
                  color: "#ffffff",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Bachpan
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                The Little Kingdom
              </p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "8px",
              padding: "6px",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div
            style={{
              background: "#ffffff",
              padding: "8px 16px 20px",
              borderTop: "1px solid #f5d0fe",
            }}
          >
            {[
              { to: "/", icon: <HouseIcon size={18} />, label: "Home" },
              { to: "/about", icon: <HandshakeIcon size={18} />, label: "About Us" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeAll}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 4px",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: FUCHSIA_DARK,
                  textDecoration: "none",
                  borderBottom: "1px solid #fae8ff",
                }}
              >
                <span style={{ color: FUCHSIA }}>{item.icon}</span>
                {item.label}
              </Link>
            ))}

            {/* Courses */}
            <button
              onClick={clickcourse}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "12px 4px",
                fontFamily: "sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: FUCHSIA_DARK,
                background: "none",
                border: "none",
                borderBottom: "1px solid #fae8ff",
                cursor: "pointer",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: FUCHSIA }}><Backpack size={18} /></span>
                Our Courses
              </span>
              {courseOpen
                ? <ChevronUp size={16} color={FUCHSIA} />
                : <ChevronDown size={16} color={FUCHSIA} />}
            </button>
            {courseOpen && (
              <div style={{ marginLeft: "16px", borderLeft: `2px solid ${FUCHSIA_BORDER}`, paddingLeft: "12px", paddingTop: "6px", paddingBottom: "6px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  { to: "/courses/playgroup", icon: <Baby size={15} />, label: "Play Group" },
                  { to: "/courses/nursery", icon: <BookOpen size={15} />, label: "Kindergarten" },
                  { to: "/courses/primary", icon: <School size={15} />, label: "Primary School" },
                ].map((item) => (
                  <Link key={item.label} to={item.to} onClick={closeAll}
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "8px", background: FUCHSIA_LIGHT, fontFamily: "sans-serif", fontSize: "13px", color: FUCHSIA, textDecoration: "none" }}>
                    {item.icon} {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Admission */}
            <button
              onClick={clickadmission}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "12px 4px",
                fontFamily: "sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: FUCHSIA_DARK,
                background: "none",
                border: "none",
                borderBottom: "1px solid #fae8ff",
                cursor: "pointer",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: FUCHSIA }}><FileUserIcon size={18} /></span>
                Admission
              </span>
              {admissionOpen
                ? <ChevronUp size={16} color={FUCHSIA} />
                : <ChevronDown size={16} color={FUCHSIA} />}
            </button>
            {admissionOpen && (
              <div style={{ marginLeft: "16px", borderLeft: `2px solid ${FUCHSIA_BORDER}`, paddingLeft: "12px", paddingTop: "6px", paddingBottom: "6px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  { to: "/admission/process", icon: <ClipboardList size={15} />, label: "Admission Process" },
                  { to: "https://btlk.scientificstudy.in/online/admissionenquiry?key=btlk&tab=admissionenquiry", icon: <FileQuestion size={15} />, label: "Admission Enquiry" },
                  { to: "https://btlk.scientificstudy.in/online/registration?key=btlk&tab=registration", icon: <UserCheck size={15} />, label: "Register Online" },
                ].map((item) => (
                  <Link key={item.label} to={item.to} onClick={closeAll}
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "8px", background: FUCHSIA_LIGHT, fontFamily: "sans-serif", fontSize: "13px", color: FUCHSIA, textDecoration: "none" }}>
                    {item.icon} {item.label}
                  </Link>
                ))}
              </div>
            )}

            {[
              { to: "/feestructure", icon: <AlignVerticalJustifyEnd size={18} />, label: "Fee Structure" },
              { to: "https://btlk.scientificstudy.in/payment?key=btlk", icon: <CreditCardIcon size={18} />, label: "Online Fee Payment" },
              { to: "/gallery", icon: <ImagesIcon size={18} />, label: "Gallery" },
              { to: "/contact", icon: <HeadsetIcon size={18} />, label: "Contact Us" },
              { to: "https://jobs.scientificstudy.in/career?schoolcode=btlk", icon: <UserPlusIcon size={18} />, label: "Career" },
            ].map((item) => (
              <Link key={item.label} to={item.to} onClick={closeAll}
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 4px", fontFamily: "sans-serif", fontSize: "14px", fontWeight: 600, color: FUCHSIA_DARK, textDecoration: "none", borderBottom: "1px solid #fae8ff" }}>
                <span style={{ color: FUCHSIA }}>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ── DESKTOP ── */}
      <div
        ref={desktopRef}
        className="hidden lg:block"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: scrolled
            ? "0 4px 32px rgba(134,25,143,0.22)"
            : "0 2px 12px rgba(134,25,143,0.1)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Top info bar */}
        <div style={{ background: "#fdf4ff", borderBottom: "1px solid #f5d0fe", padding: "5px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "sans-serif", fontSize: "12px", color: "#86198f", margin: 0 }}>
              &#9993;&nbsp;
              <a href="mailto:bachpangumla@gmail.com" style={{ color: FUCHSIA_DARK, fontWeight: 600, textDecoration: "none" }}>
                bachpangumla@gmail.com
              </a>
            </p>
            <p style={{ fontFamily: "sans-serif", fontSize: "12px", color: "#86198f", margin: 0 }}>
              &#128222;&nbsp;
              <a href="tel:+919608881888" style={{ color: FUCHSIA_DARK, fontWeight: 600, textDecoration: "none" }}>
                +91-9608881888
              </a>
            </p>
          </div>
        </div>

        {/* Main nav */}
        <div style={{ background: `linear-gradient(135deg, ${FUCHSIA_DARK} 0%, ${FUCHSIA_MID} 60%, ${FUCHSIA} 100%)`, padding: "0 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "72px" }}>

            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ background: "#ffffff", borderRadius: "12px", padding: "4px", boxShadow: "0 2px 16px rgba(0,0,0,0.18)" }}>
                <img src={logo} alt="Logo" style={{ height: "56px", display: "block" }} />
              </div>
              <div>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: "normal", color: "#ffffff", margin: 0, lineHeight: 1.2 }}>
                  Bachpan
                </p>
                <p style={{ fontFamily: "sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.65)", letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>
                  The Little Kingdom &middot; Gumla
                </p>
              </div>
            </div>

            {/* Nav links */}
            <nav>
              <ul style={{ display: "flex", alignItems: "center", gap: "4px", listStyle: "none", margin: 0, padding: 0 }}>

                {[{ to: "/", label: "Home" }, { to: "/about", label: "About Us" }].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={off}
                      style={{ ...navLinkStyle, display: "inline-block" }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.75)")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                {/* Courses dropdown */}
                <li style={{ position: "relative" }}>
                  <button
                    onClick={togglecourse}
                    style={{
                      ...navLinkStyle,
                      borderBottom: display1 ? "2px solid rgba(255,255,255,0.75)" : "2px solid transparent",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Our Courses
                    <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: display1 ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </button>
                  {display1 && (
                    <ul style={{ position: "absolute", top: "calc(100% + 10px)", left: "50%", transform: "translateX(-50%)", background: "#ffffff", borderRadius: "12px", boxShadow: "0 8px 40px rgba(134,25,143,0.18)", minWidth: "200px", padding: "6px 0", listStyle: "none", margin: 0, border: "1px solid #f5d0fe" }}>
                      {[
                        { to: "/courses/playgroup", icon: <Baby size={15} />, label: "Play Group" },
                        { to: "/courses/nursery", icon: <BookOpen size={15} />, label: "Kindergarten" },
                        { to: "/courses/primary", icon: <School size={15} />, label: "Primary School" },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.to}
                            onClick={togglecourse}
                            style={dropdownItemStyle}
                            onMouseEnter={(e) => (e.currentTarget.style.background = FUCHSIA_LIGHT)}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          >
                            <span style={{ color: FUCHSIA }}>{item.icon}</span>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Admission dropdown */}
                <li style={{ position: "relative" }}>
                  <button
                    onClick={toggleadd}
                    style={{
                      ...navLinkStyle,
                      borderBottom: display2 ? "2px solid rgba(255,255,255,0.75)" : "2px solid transparent",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Admission
                    <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: display2 ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </button>
                  {display2 && (
                    <ul style={{ position: "absolute", top: "calc(100% + 10px)", left: "50%", transform: "translateX(-50%)", background: "#ffffff", borderRadius: "12px", boxShadow: "0 8px 40px rgba(134,25,143,0.18)", minWidth: "210px", padding: "6px 0", listStyle: "none", margin: 0, border: "1px solid #f5d0fe" }}>
                      {[
                        { to: "/admission/process", icon: <ClipboardList size={15} />, label: "Admission Process" },
                        { to: "https://btlk.scientificstudy.in/online/admissionenquiry?key=btlk&tab=admissionenquiry", icon: <FileQuestion size={15} />, label: "Admission Enquiry" },
                        { to: "https://btlk.scientificstudy.in/online/registration?key=btlk&tab=registration", icon: <UserCheck size={15} />, label: "Register Online" },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.to}
                            onClick={toggleadd}
                            style={dropdownItemStyle}
                            onMouseEnter={(e) => (e.currentTarget.style.background = FUCHSIA_LIGHT)}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          >
                            <span style={{ color: FUCHSIA }}>{item.icon}</span>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {[
                  { to: "/gallery", label: "Gallery" },
                  { to: "/contact", label: "Contact Us" },
                  { to: "https://jobs.scientificstudy.in/career?schoolcode=btlk", label: "Career" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={off}
                      style={{ ...navLinkStyle, display: "inline-block" }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.75)")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Quick links bar */}
        <div style={{ background: "#ffffff", borderBottom: "1px solid #fae8ff", padding: "7px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            {[
              { to: "/feestructure", label: "&#129534; Fee Structure" },
              { to: "https://btlk.scientificstudy.in/payment?key=btlk", label: "&#128179; Online Fee Payment" },
              { to: "https://btlk.scientificstudy.in/login", label: "&#127909; School Portal Login" },
              { to: "https://btlk.scientificstudy.in/admissionregistration?key=btlk", label: "&#129534; Online Registration" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "11.5px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: FUCHSIA,
                  textDecoration: "none",
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: `1.5px solid #f0abfc`,
                  background: "transparent",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = FUCHSIA;
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = FUCHSIA;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = FUCHSIA;
                  e.currentTarget.style.borderColor = "#f0abfc";
                }}
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}