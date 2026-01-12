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

const Gallery = () => {
  const images = [[img1,"Pool-Activity"], [img2 , "Indepndence-Day"], [img3 , "Sarhul"], [img4, "Fancy-Dress"], [img5,"Sports-Day"] ,[img6 , "Yoga-Day"],[ img7 , "EID-Celebration"], [img8 , "Sports-Day"]]
  const groups = [[g1 , "Independence-Day"], [g2 , "Deepawali-Celebration"], [g3 ,"Chistmas-Celebration" ], [g4 , "Lunch-Time!!"], [g5 , "ClassWork"], [g6 , "ClassWork"]]

  return (
    <section className="bg-linear-to-b from-[#f6faf9] to-white min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-24 h-1 bg-[#2b7a78] rounded-full"></div>

          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#2b7a78] to-[#3aafa9] mb-4">
            School Gallery
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Explore the beautiful moments of learning, creativity, and joy at
            Bachpan, The Little Kingdom, Gumla.
          </p>
        </div>

        {/* MAIN IMAGE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

          {images.map((img, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group bg-white"
            >
              <img
                src={img[0]}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-40 sm:h-52 md:h-56 lg:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                <p className="text-white text-sm">
                  {img[1]}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* GROUP PHOTOS */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-[#2b7a78] text-center mb-10">
            Group Activities & Celebrations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">

            {groups.map((img, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group bg-white"
              >
                <img
                  src={img[0]}
                  alt={`Group Photo ${index + 1}`}
                  className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    {img[1]}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Gallery
