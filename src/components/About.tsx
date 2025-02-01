import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side with image */}
        <div className="relative">
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-[#b36d34] rounded-full transform translate-x-4 translate-y-4"></div>
            <Image
              src="/about-us.png"
              alt="BlogScope"
              className="relative z-10 w-full h-full object-cover rounded-full"
              width={500} // specify width
              height={500} // specify height
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-[#b36d34] text-xl font-semibold">About BlogScope</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800">
              Where Knowledge Meets Innovation
            </h3>
          </div>

          <div className="space-y-4 text-gray-600">
            <p>
              Welcome to <strong>BlogScope</strong>, your go-to platform for insightful, thought-provoking, and inspiring content. Our mission is to provide a hub where curiosity and creativity thrive.
            </p>
            <p>
              At BlogScope, we believe in delivering quality content that educates, entertains, and sparks new ideas. From deep dives into technology and science to engaging stories on lifestyle and culture, we strive to cover a wide array of topics with a fresh perspective.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#b36d34]">50+</p>
              <p className="text-sm md:text-base text-gray-600">
                Topics<br />Covered
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#b36d34]">10K+</p>
              <p className="text-sm md:text-base text-gray-600">
                Readers<br />Worldwide
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#b36d34]">1M+</p>
              <p className="text-sm md:text-base text-gray-600">
                Words<br />Written
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
