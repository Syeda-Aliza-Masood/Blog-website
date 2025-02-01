export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-[#d7ab7e] via-white to-[#d7ab7e] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-gray-800 text-lg md:text-xl">
            We are here to answer your questions 24/7
          </p>
          <h2 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold">
            Need any help?
          </h2>
          <div className="pt-4">
            <a
              href="comments"
              className="inline-block px-8 py-3 bg-[#b36d34] text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Comment us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
