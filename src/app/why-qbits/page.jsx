import React from "react";

const WhyQbits = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Green Background */}
      <div className="bg-[#16A16C] bg-[url('/images/why-qbites/background.png')] bg-cover bg-center bg-no-repeat px-6 py-16 lg:py-24">
        <div className="mx-auto">
          {/* Main Title */}
          <h1 className="text-white text-4xl lg:text-5xl font-bold text-center mb-16">
            Why Qbits?
          </h1>

          {/* Feature Cards */}
          <div className="space-y-6 px-5">
            {/* Legacy Card */}
            <div className="bg-white rounded-full p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl mr-auto">
              <div className="flex-shrink-0  bg-orange-100 rounded-full flex items-center justify-center">
                {/* Handshake Icon Placeholder */}
                <img src="/images/why-qbites/img-1.svg" />
              </div>
              <div>
                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                  Backed by Legacy, Built for the Future.
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  From the makers of{" "}
                  <span className="text-orange-500 font-semibold">
                    Heaven Solar
                  </span>
                  —a trusted name with{" "}
                  <span className="text-orange-500 font-semibold">10,000+</span>{" "}
                  installations –{" "}
                  <span className="text-orange-500 font-semibold">Qbits</span>{" "}
                  is born to deliver innovation, reliability, and performance in
                  every watt.
                </p>
              </div>
            </div>

            {/* Smart Inverter Card - Right Aligned */}
            <div className="bg-white rounded-full p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl ml-auto">
              <div className="flex-shrink-0 bg-orange-100 rounded-full flex items-center justify-center">
                {/* Smart Device Icon Placeholder */}
                <img src="/images/why-qbites/img-2.svg" />
              </div>
              <div>
                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                  Smart Inverter. Smarter Control.
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Track, analyze, and manage your power with the{" "}
                  <span className="text-orange-500 font-semibold">
                    Qbits App
                  </span>
                  . Real-time insights, remote monitoring, and smart alerts –
                  all in your pocket.
                </p>
              </div>
            </div>

            {/* High Efficiency Card */}
            <div className="bg-white rounded-full p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl mr-auto">
              <div className="flex-shrink-0 bg-orange-100 rounded-full flex items-center justify-center">
                {/* Efficiency Icon Placeholder */}
                <img src="/images/why-qbites/img-3.svg" />
              </div>
              <div>
                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                  High Efficiency. Low Hassle.
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  With up to{" "}
                  <span className="text-orange-500 font-semibold">98%</span>{" "}
                  conversion efficiency,{" "}
                  <span className="text-orange-500 font-semibold">Qbits</span>{" "}
                  optimizes every ray of sunlight. Engineered to perform under
                  India's toughest grid conditions.
                </p>
              </div>
            </div>

            {/* Easy Installation Card - Right Aligned */}
            <div className="bg-white rounded-full ml-auto p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl">
              <div className="flex-shrink-0  bg-orange-100 rounded-full flex items-center justify-center">
                {/* Installation Icon Placeholder */}
                <img src="/images/why-qbites/img-4.svg" />
              </div>
              <div>
                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                  Easy to Install. Easier to Maintain.
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Compact design, simplified wiring, and plug-and-play tech make
                  Qbits effortless for installers – and seamless for homeowners.
                </p>
              </div>
            </div>

            {/* Future Technology Card */}
            <div className="bg-white rounded-full p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl mr-auto">
              <div className="flex-shrink-0  bg-orange-100 rounded-full flex items-center justify-center">
                {/* Future Tech Icon Placeholder */}
                <img src="/images/why-qbites/img-5.svg" />
              </div>
              <div>
                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                  Future-Ready Technology
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Designed for tomorrow's smart homes and solar grids. Qbits
                  supports zero export, remote diagnostics, and adaptive
                  performance tuning.
                </p>
              </div>
            </div>

            {/* Clean Energy Card - Right Aligned */}
            <div className="bg-white rounded-full p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl ml-auto">
              <div className="flex-shrink-0  bg-orange-100 rounded-full flex items-center justify-center">
                {/* Clean Energy Icon Placeholder */}
                <img src="/images/why-qbites/img-6.svg" />
              </div>
              <div>
                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                  Clean Energy. Clear Choice.
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Built with sustainability at its core, Qbits makes clean
                  energy accessible without compromising on quality or
                  intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How Qbits Works Section */}
      <div className="px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-orange-500 text-4xl lg:text-5xl font-bold text-center mb-4">
            How Qbits Works
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-12"></div>

          {/* Subtitle */}
          <div className="text-center mb-16">
            <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-2">
              Powering Your Life Seamlessly:
            </h3>
            <p className="text-gray-700 text-lg">
              At its core, Qbits is designed to convert solar energy into smart,
              usable power for your home or business.
            </p>
          </div>

          {/* Process Flow with Custom Layout */}
          <div className="relative">
            {/* Row 1: Steps 1 and 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
              {/* Step 1 */}
              <div className="relative">
                {/* Protruding Circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="p-3 bg-white rounded-full">
                    <div className="bg-[url('/images/why-qbites/circle-bg.png')] bg-center bg-no-repeat rounded-full w-[122px] h-[122px] flex justify-center items-center">
                      <img src="/images/why-qbites/sun-icon.svg" alt="Sun" />
                    </div>
                  </div>
                </div>
                {/* Card Container */}
                <div className="rounded-t-3xl rounded-b-2xl text-center shadow-md bg-[#16A16C14] bg-no-repeat bg-center w-[490px] h-[284px] mx-auto relative flex items-center">
                  <div className="px-8">
                    <h4 className="text-orange-500 text-xl font-bold mb-4">
                      1. It Starts with the Sun
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Solar panels on your rooftop absorb sunlight and generate
                      DC (Direct Current) electricity.
                    </p>
                  </div>
                </div>

                {/* Horizontal Dashed Line to Step 2 - Fixed positioning */}
                <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 z-20" style={{left: '490px'}}>
                  <svg width="48" height="2" className="text-green-500">
                    <line
                      x1="0"
                      y1="1"
                      x2="40"
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                  </svg>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <svg width="8" height="8" className="text-green-500">
                      <polygon points="0,0 8,4 0,8" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                {/* Protruding Circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="p-3 bg-white rounded-full">
                    <div className="bg-[url('/images/why-qbites/circle-bg.png')] bg-center bg-no-repeat rounded-full w-[122px] h-[122px] flex justify-center items-center">
                      <img
                        src="/images/why-qbites/light-icon.svg"
                        alt="Lightning"
                      />
                    </div>
                  </div>
                </div>
                {/* Card Container */}
                <div className="rounded-t-3xl rounded-b-2xl shadow-md bg-[#16A16C14] bg-no-repeat bg-center w-[490px] h-[284px] mx-auto relative pt-[85px]">
                  <div className="px-8">
                    <h4 className="text-orange-500 text-xl font-bold mb-4 text-center">
                      2. Qbits Converts DC to AC
                    </h4>
                    <p className="text-gray-700 mb-3 font-medium">
                      Qbits — the brain of your solar system — transforms DC
                      into AC (Alternating Current), the type of electricity
                      your appliances actually use.
                    </p>
                    <p className="text-gray-700 font-medium">
                      From fans to fridges, lights to laptops — Qbits powers
                      everything, cleanly and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Dashed Line from Step 2 to Step 3 - Fixed positioning */}
            <div className="hidden lg:block absolute transform -translate-x-1/2 z-20" style={{left: '75%', top: '300px'}}>
              <svg height="48" width="2" className="text-green-500">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
              </svg>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <svg width="8" height="8" className="text-green-500">
                  <polygon points="0,0 4,8 8,0" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Row 2: Steps 4 and 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 mt-40">
              {/* Step 4 (positioned under Step 1) */}
              <div className="relative">
                {/* Protruding Circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="p-3 bg-white rounded-full">
                    <div className="bg-[url('/images/why-qbites/circle-bg.png')] bg-center bg-no-repeat rounded-full w-[122px] h-[122px] flex justify-center items-center">
                      <img
                        src="/images/why-qbites/control-icon.svg"
                        alt="Grid"
                      />
                    </div>
                  </div>
                </div>
                {/* Card Container */}
                <div className="rounded-t-3xl rounded-b-2xl text-center shadow-md bg-[#16A16C14] bg-no-repeat bg-center w-[490px] h-[284px] mx-auto pt-[85px]">
                  <div className="px-8">
                    <h4 className="text-orange-500 text-xl font-bold mb-4">
                      4. Smart Sync with the Grid
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      As an on-grid inverter, Qbits syncs your solar system with
                      the utility grid, enabling:
                    </p>
                    <ul className="text-gray-700 text-left">
                      <li>• Net metering compatibility</li>
                      <li>• Reduced electricity bills</li>
                      <li>• Zero backup complexity (no battery needed)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 (positioned under Step 2) */}
              <div className="relative">
                {/* Protruding Circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="p-3 bg-white rounded-full">
                    <div className="bg-[url('/images/why-qbites/circle-bg.png')] bg-center bg-no-repeat rounded-full w-[122px] h-[122px] flex justify-center items-center">
                      <img src="/images/why-qbites/sync-icon.svg" alt="App" />
                    </div>
                  </div>
                </div>
                {/* Card Container */}
                <div className="rounded-t-3xl rounded-b-2xl text-center shadow-md bg-[#16A16C14] bg-no-repeat bg-center w-[490px] h-[284px] mx-auto pt-[85px]">
                  <div className="px-8">
                    <h4 className="text-orange-500 text-xl font-bold mb-4">
                      3. Live Monitoring with the Qbits App
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Track every unit generated, exported or used in real-time.
                      Stay in control with remote monitoring, smart alerts, and
                      performance analytics, all from your smartphone.
                    </p>
                  </div>
                </div>

                {/* Horizontal Dashed Line from Step 3 to Step 4 - Fixed positioning */}
                <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 z-20" style={{right: '490px'}}>
                  <svg width="48" height="2" className="text-green-500">
                    <line
                      x1="8"
                      y1="1"
                      x2="48"
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                  </svg>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <svg width="8" height="8" className="text-green-500">
                      <polygon points="8,0 0,4 8,8" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Dashed Line from Step 4 to Step 5 - Fixed positioning */}
            <div className="hidden lg:block absolute transform -translate-x-1/2 z-20" style={{left: '25%', top: '700px'}}>
              <svg height="48" width="2" className="text-green-500">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
              </svg>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <svg width="8" height="8" className="text-green-500">
                  <polygon points="0,0 4,8 8,0" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Row 3: Step 5 and Why It Matters */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-40 items-start">
              {/* Step 5 - Proper Card Design (Same as other 4 steps) */}
              <div className="relative">
                {/* Protruding Circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="p-3 bg-white rounded-full">
                    <div className="bg-[url('/images/why-qbites/circle-bg.png')] bg-center bg-no-repeat rounded-full w-[122px] h-[122px] flex justify-center items-center">
                      <img
                        src="/images/why-qbites/secure-icon.svg"
                        alt="Reliability"
                      />
                    </div>
                  </div>
                </div>
                {/* Card Container - Same design as other cards */}
                <div className="rounded-t-3xl rounded-b-2xl text-center shadow-md bg-[#16A16C14] bg-no-repeat bg-center w-[490px] h-[284px] mx-auto pt-[85px]">
                  <div className="px-8">
                    <h4 className="text-orange-500 text-xl font-bold mb-4">
                      5. Reliable. Sustainable. Effortless.
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Designed for India's climate, grid conditions, and load
                      variations — Qbits ensures stable performance, minimal
                      losses, and long-term reliability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why It Matters Section - Different Design (No Card) */}
              <div className="flex items-center h-full">
                <div className="flex items-start gap-4">
                  <div className="text-orange-500 text-2xl font-bold mt-1">
                    ▶
                  </div>
                  <div>
                    <h3 className="text-orange-500 text-2xl font-bold mb-4">
                      Why It Matters
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Qbits bridges innovation with simplicity. It helps you
                      harness solar power without hassle, while reducing your
                      carbon footprint — and your energy bill.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyQbits;
