import React from 'react'

const Download = () => {
  return (
    <div>
      <img src='/images/download/hero-image.png' alt='main-image' className='w-full' />
      
      {/* Second Section - Download Brochure */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            
            {/* Left Side - Green Card */}
            <div className="bg-[#16A16C] rounded-2xl p-12 pt-14">
              <img src="/images/download/broucher-img.png" alt="green-card" className=" object-cover rounded-lg" />
            </div>

            {/* Right Side - Download Brochure Text */}
            <div className="flex-1 max-w-md">
              <h2 className="text-4xl font-bold text-green-600 mb-6">
                Download Brochure
              </h2>
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Download Now →
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
