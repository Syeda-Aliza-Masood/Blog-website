export default function ReviewSection() {
    return (
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Readers Say</h2>
          <p className="text-lg text-gray-600 mb-12">
            Hear from our readers about their experiences with BlogScope. We’re proud to inspire and inform curious minds worldwide!
          </p>
  
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gradient-to-br from-[#d7ab7e] via-white to-[#d7ab7e] rounded-lg shadow-md p-6">
              <p className="text-gray-700 text-lg italic mb-4">
                "BlogScope is my go-to platform for fresh perspectives. Their content is always insightful and well-written."
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="/alex.jpg"
                  alt="Reviewer 1"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-800">Alex Johnson</p>
                  <p className="text-sm text-gray-600">Tech Enthusiast</p>
                </div>
              </div>
            </div>
  
            {/* Review 2 */}
            <div className="bg-gradient-to-br from-[#d7ab7e] via-white to-[#d7ab7e] rounded-lg shadow-md p-6">
              <p className="text-gray-700 text-lg italic mb-4">
                "I love how BlogScope covers such a diverse range of topics. There's always something new to learn!"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="/emilyy.jpg"
                  alt="Reviewer 2"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-800">Emily Carter</p>
                  <p className="text-sm text-gray-600">Content Creator</p>
                </div>
              </div>
            </div>
  
            {/* Review 3 */}
            <div className="bg-gradient-to-br from-[#d7ab7e] via-white to-[#d7ab7e] rounded-lg shadow-md p-6">
              <p className="text-gray-700 text-lg italic mb-4">
                "The quality of articles on BlogScope is unmatched. It’s my favorite blog to stay informed and inspired."
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="/michal.jpg"
                  alt="Reviewer 3"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-800">Michael Brown</p>
                  <p className="text-sm text-gray-600">Lifestyle Blogger</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Call-to-Action */}
          <div className="mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Love BlogScope? Share your feedback and let us know how we’re doing!
            </p>
            
          </div>
        </div>
      </section>
    );
  }
  