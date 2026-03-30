import img1 from "./galleryfiles/pool.jpg"
import img2 from "./galleryfiles/flaggirl.jpg"
import img3 from "./galleryfiles/sarhul.jpg"
import img4 from "./galleryfiles/fancydress.jpg"
import img5 from "./galleryfiles/sports-1.jpg"
import img6 from "./galleryfiles/playgroup.jpg"
import img7 from "./galleryfiles/eid.jpg"
import img8 from "./galleryfiles/sports-2.jpg"

import g1 from "./galleryfiles/group1.png"
import g2 from "./galleryfiles/group2.jpg"
import g3 from "./galleryfiles/group3.jpg"
import g4 from "./galleryfiles/group4.jpg"
import g5 from "./galleryfiles/group5.jpg"
import g6 from "./galleryfiles/group6.jpg"

import { useState } from "react"

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [lightbox, setLightbox] = useState(null)

  const images = [
    { src: img1, label: "Pool Activity", tag: "Activity" },
    { src: img2, label: "Independence Day", tag: "Celebration" },
    { src: img3, label: "Karma Celebration", tag: "Celebration" },
    { src: img4, label: "Fancy Dress", tag: "Activity" },
    { src: img5, label: "Sports Day", tag: "Sports" },
    { src: img6, label: "Yoga Day", tag: "Activity" },
    { src: img7, label: "Eid Celebration", tag: "Celebration" },
    { src: img8, label: "Sports Day", tag: "Sports" },
  ]

  const groups = [
    { src: g1, label: "Independence Day" },
    { src: g2, label: "Deepawali Celebration" },
    { src: g3, label: "Christmas Celebration" },
    { src: g4, label: "Lunch Time!" },
    { src: g5, label: "Class Work" },
    { src: g6, label: "Class Work" },
  ]

  const filters = ["All", "Activity", "Celebration", "Sports"]

  const filtered =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.tag === activeFilter)

  const allLightbox = [
    ...filtered.map((i) => ({ src: i.src, label: i.label })),
    ...groups.map((g) => ({ src: g.src, label: g.label })),
  ]

  return (
    <section
      className="min-h-screen py-20 px-4 sm:px-8 lg:px-16"
      style={{
        background:
          "linear-gradient(160deg, #f0faf8 0%, #ffffff 50%, #e8f6f4 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white text-3xl font-light z-10"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <button
            className="absolute left-4 sm:left-8 text-white text-4xl font-thin z-10 select-none"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((lightbox - 1 + allLightbox.length) % allLightbox.length)
            }}
          >
            ‹
          </button>
          <div
            className="flex flex-col items-center px-4 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allLightbox[lightbox].src}
              alt={allLightbox[lightbox].label}
              className="max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain"
            />
            <p
              className="mt-5 text-white text-lg tracking-widest uppercase"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.2em", opacity: 0.85 }}
            >
              {allLightbox[lightbox].label}
            </p>
          </div>
          <button
            className="absolute right-4 sm:right-8 text-white text-4xl font-thin z-10 select-none"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((lightbox + 1) % allLightbox.length)
            }}
          >
            ›
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{ color: "#2b7a78", letterSpacing: "0.35em" }}
          >
            Bachpan · The Little Kingdom · Gumla
          </p>
          <h1
            className="text-5xl sm:text-6xl font-normal mb-5"
            style={{
              fontFamily: "'Georgia', serif",
              color: "#1a3c3b",
              lineHeight: 1.1,
            }}
          >
            School Gallery
          </h1>
          <div className="flex justify-center mb-5">
            <div className="w-16 h-px" style={{ background: "#2b7a78" }} />
            <div className="w-2 h-2 rounded-full mx-2 -mt-0.5" style={{ background: "#2b7a78" }} />
            <div className="w-16 h-px" style={{ background: "#2b7a78" }} />
          </div>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed" style={{ fontFamily: "sans-serif" }}>
            Moments of learning, joy, and celebration — captured through the year.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-1.5 rounded-full text-sm transition-all duration-300"
              style={{
                fontFamily: "sans-serif",
                border: activeFilter === f ? "1.5px solid #2b7a78" : "1.5px solid #c5dedd",
                background: activeFilter === f ? "#2b7a78" : "transparent",
                color: activeFilter === f ? "#fff" : "#2b7a78",
                letterSpacing: "0.05em",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((img, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "4/3" }}
              onClick={() => setLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                style={{ transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
              />
              {/* Dark overlay on hover */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "linear-gradient(to top, rgba(10,40,38,0.75) 0%, transparent 60%)" }}
              >
                <span
                  className="text-xs uppercase tracking-wider text-white/70 mb-0.5"
                  style={{ fontFamily: "sans-serif", letterSpacing: "0.15em" }}
                >
                  {img.tag}
                </span>
                <span
                  className="text-sm text-white font-medium"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {img.label}
                </span>
              </div>
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-0 h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  borderTop: "32px solid #2b7a78",
                  borderLeft: "32px solid transparent",
                }}
              />
            </div>
          ))}
        </div>

        {/* Count badge */}
        <p
          className="text-center mt-5 text-sm"
          style={{ fontFamily: "sans-serif", color: "#8aaeac" }}
        >
          {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          {activeFilter !== "All" ? ` in ${activeFilter}` : ""}
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px" style={{ background: "#d0e8e6" }} />
          <span
            className="text-xs uppercase tracking-widest px-3"
            style={{ fontFamily: "sans-serif", color: "#2b7a78", letterSpacing: "0.3em" }}
          >
            Group Moments
          </span>
          <div className="flex-1 h-px" style={{ background: "#d0e8e6" }} />
        </div>

        {/* Group Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {groups.map((img, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "16/10" }}
              onClick={() => setLightbox(filtered.length + index)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
                style={{ transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              {/* Permanent label bar at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between"
                style={{
                  background: "linear-gradient(to top, rgba(10,40,38,0.82) 0%, transparent 100%)",
                }}
              >
                <span
                  className="text-white text-sm font-medium tracking-wide"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {img.label}
                </span>
                <span
                  className="text-white/60 text-xs"
                  style={{ fontFamily: "sans-serif" }}
                >
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center mt-16 text-xs uppercase tracking-widest"
          style={{ fontFamily: "sans-serif", color: "#a0c4c2", letterSpacing: "0.25em" }}
        >
          © Bachpan · The Little Kingdom · Gumla
        </p>
      </div>
    </section>
  )
}

export default Gallery