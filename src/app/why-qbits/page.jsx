import React from "react";

export const metadata = {
  title: 'Why Choose Qbits Solar Inverters | Smart Features & Benefits',
  description: 'Discover why Qbits solar inverters are the smart choice - 98% conversion efficiency, Qbits App monitoring, future-ready technology, and trusted by 10,000+ Heaven Solar installations.',
  keywords: 'why choose Qbits, solar inverter benefits, 98% efficiency, Qbits app, smart solar inverters, Heaven Solar, solar inverter features',
  openGraph: {
    title: 'Why Choose Qbits Solar Inverters',
    description: 'Smart solar inverters with 98% efficiency, app monitoring, and future-ready technology.',
    type: 'website'
  }
}


const WhyQbits = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Green Background */}
            <div className="bg-[#16A16C] bg-[url('/images/why-qbites/background.png')] bg-cover bg-center bg-no-repeat px-6 pt-24 md:pt-[175px] pb-26">
                <div className="mx-auto">
                    {/* Main Title */}
                    <h1 className="text-white text-4xl lg:text-5xl font-bold text-center mb-16">
                        Why Qbits?
                    </h1>

                    {/* Feature Cards */}
                    <div className="space-y-6 md:px-5 hidden md:block">
                        <div className="bg-white rounded-full p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl mr-auto">
                            <div className="flex-shrink-0  bg-orange-100 rounded-full flex items-center justify-center">
                                <img src="/images/why-qbites/img-1.svg" />
                            </div>
                            <div>
                                <h3 className="text-green-600 text-md md:text-xl lg:text-2xl font-bold mb-3">
                                    Backed by Legacy, Built for the Future.
                                </h3>
                                <p className="text-gray-700 text-sm md:text-md lg:text-lg leading-relaxed">
                                    From the makers of{" "}
                                    <span className="text-orange-500 text-sm md:text-md lg:text-lg font-semibold">
                                        Heaven Solar
                                    </span>
                                    —a trusted name with{" "}
                                    <span className="text-orange-500 text-sm md:text-md lg:text-lg font-semibold">
                                        10,000+
                                    </span>{" "}
                                    installations –{" "}
                                    <span className="text-orange-500 text-sm md:text-md lg:text-lg font-semibold">
                                        Qbits
                                    </span>{" "}
                                    is born to deliver innovation, reliability,
                                    and performance in every watt.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-full p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl ml-auto">
                            <div className="flex-shrink-0 bg-orange-100 rounded-full flex items-center justify-center">
                                <img src="/images/why-qbites/img-2.svg" />
                            </div>
                            <div>
                                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                                    Smart Inverter. Smarter Control.
                                </h3>
                                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                                    Track, analyze, and manage your power with
                                    the{" "}
                                    <span className="text-orange-500 font-semibold">
                                        Qbits App
                                    </span>
                                    . Real-time insights, remote monitoring, and
                                    smart alerts – all in your pocket.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-full p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl mr-auto">
                            <div className="flex-shrink-0 bg-orange-100 rounded-full flex items-center justify-center">
                                <img src="/images/why-qbites/img-3.svg" />
                            </div>
                            <div>
                                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                                    High Efficiency. Low Hassle.
                                </h3>
                                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                                    With up to{" "}
                                    <span className="text-orange-500 font-semibold">
                                        98%
                                    </span>{" "}
                                    conversion efficiency,{" "}
                                    <span className="text-orange-500 font-semibold">
                                        Qbits
                                    </span>{" "}
                                    optimizes every ray of sunlight. Engineered
                                    to perform under India's toughest grid
                                    conditions.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-full ml-auto p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl">
                            <div className="flex-shrink-0  bg-orange-100 rounded-full flex items-center justify-center">
                                <img src="/images/why-qbites/img-4.svg" />
                            </div>
                            <div>
                                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                                    Easy to Install. Easier to Maintain.
                                </h3>
                                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                                    Compact design, simplified wiring, and
                                    plug-and-play tech make Qbits effortless for
                                    installers – and seamless for homeowners.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-full p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl mr-auto">
                            <div className="flex-shrink-0  bg-orange-100 rounded-full flex items-center justify-center">
                                <img src="/images/why-qbites/img-5.svg" />
                            </div>
                            <div>
                                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                                    Future-Ready Technology
                                </h3>
                                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                                    Designed for tomorrow's smart homes and
                                    solar grids. Qbits supports zero export,
                                    remote diagnostics, and adaptive performance
                                    tuning.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-full p-3 lg:p-4 flex items-start gap-4 lg:gap-6 max-w-4xl ml-auto">
                            <div className="flex-shrink-0  bg-orange-100 rounded-full flex items-center justify-center">
                                <img src="/images/why-qbites/img-6.svg" />
                            </div>
                            <div>
                                <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-3">
                                    Clean Energy. Clear Choice.
                                </h3>
                                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                                    Built with sustainability at its core, Qbits
                                    makes clean energy accessible without
                                    compromising on quality or intelligence.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 md:px-5 md:hidden">
                        <img src="/images/why-qbites/steps/r-1.png" />
                        <img src="/images/why-qbites/steps/r-2.png" />
                        <img src="/images/why-qbites/steps/r-3.png" />
                        <img src="/images/why-qbites/steps/r-4.png" />
                        <img src="/images/why-qbites/steps/r-5.png" />
                        <img src="/images/why-qbites/steps/r-6.png" />
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
                            At its core, Qbits is designed to convert solar
                            energy into smart, usable power for your home or
                            business.
                        </p>
                    </div>

                    <div className="hidden md:block relative">
                        <div className="grid grid-cols-2 gap-10">
                            {/* Step 1 */}
                            <div className="relative" id="step-1">
                                <img
                                    src="/images/why-qbites/steps/step-1.png"
                                    alt="How Qbits Works - Step 1"
                                    className="mx-auto mt-12"
                                />
                            </div>

                            {/* Step 2 */}
                            <div className="relative" id="step-2">
                                <img
                                    src="/images/why-qbites/steps/step-2.png"
                                    alt="How Qbits Works - Step 2"
                                    className="mx-auto mt-12"
                                />
                            </div>

                            {/* Step 4 (positioned in row 2, col 1) */}
                            <div className="relative" id="step-4">
                                <img
                                    src="/images/why-qbites/steps/step-4.png"
                                    alt="How Qbits Works - Step 4"
                                    className="mx-auto mt-12"
                                />
                            </div>

                            {/* Step 3 (positioned in row 2, col 2) */}
                            <div className="relative" id="step-3">
                                <img
                                    src="/images/why-qbites/steps/step-3.png"
                                    alt="How Qbits Works - Step 3"
                                    className="mx-auto mt-12"
                                />
                            </div>

                            {/* Step 5 */}
                            <div className="relative" id="step-5">
                                <img
                                    src="/images/why-qbites/steps/step-5.png"
                                    alt="How Qbits Works - Step 5"
                                    className="mx-auto mt-12"
                                />
                            </div>

                            {/* Why It Matters section */}
                            <div
                                className="flex items-center h-full px-12"
                                id="why-it-matters"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-orange-500 text-2xl font-bold mt-1">
                                        ▶
                                    </div>
                                    <div>
                                        <h3 className="text-orange-500 text-2xl font-bold mb-4">
                                            Why It Matters
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Qbits bridges innovation with
                                            simplicity. It helps you harness
                                            solar power without hassle, while
                                            reducing your carbon footprint — and
                                            your energy bill.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Arrow SVG Definitions */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none z-10"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <marker
                                    id="arrowhead-green"
                                    markerWidth="6"
                                    markerHeight="4"
                                    refX="5"
                                    refY="2"
                                    orient="auto"
                                >
                                    <path d="M0,0 L0,4 L6,2 z" fill="#10B981" />
                                </marker>
                                <marker
                                    id="arrowhead-orange"
                                    markerWidth="6"
                                    markerHeight="4"
                                    refX="5"
                                    refY="2"
                                    orient="auto"
                                >
                                    <path d="M0,0 L0,4 L6,2 z" fill="#F97316" />
                                </marker>
                            </defs>

                            <line
                                x1="45.5"
                                y1="20"
                                x2="54"
                                y2="20"
                                stroke="#10B981"
                                strokeWidth="1.3"
                                fill="none"
                                strokeDasharray="10,2"
                                markerEnd="url(#arrowhead-green)"
                                vectorEffect="non-scaling-stroke"
                            />

                            <line
                                x1="75.5"
                                y1="31"
                                x2="75.5"
                                y2="38"
                                stroke="#10B981"
                                strokeWidth="1.3"
                                fill="none"
                                strokeDasharray="10,2"
                                markerEnd="url(#arrowhead-green)"
                                vectorEffect="non-scaling-stroke"
                            ></line>

                            <line
                                x1="54.3"
                                y1="52"
                                x2="45.4"
                                y2="52"
                                stroke="#10B981"
                                strokeWidth="1.3"
                                fill="none"
                                strokeDasharray="10,2"
                                markerEnd="url(#arrowhead-green)"
                                vectorEffect="non-scaling-stroke"
                            />

                            <line
                                x1="24"
                                y1="65"
                                x2="24"
                                y2="72"
                                stroke="#10B981"
                                strokeWidth="1.3"
                                fill="none"
                                strokeDasharray="10,2"
                                markerEnd="url(#arrowhead-green)"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:hidden">
                        <img
                            src="/images/why-qbites/steps/step-1.png"
                            alt="How Qbits Works"
                            className="mx-auto mt-12"
                        />
                        <img
                            src="/images/why-qbites/steps/step-2.png"
                            alt="How Qbits Works"
                            className="mx-auto mt-12"
                        />
                        <img
                            src="/images/why-qbites/steps/step-3.png"
                            alt="How Qbits Works"
                            className="mx-auto mt-12"
                        />
                        <img
                            src="/images/why-qbites/steps/step-4.png"
                            alt="How Qbits Works"
                            className="mx-auto mt-12"
                        />

                        <img
                            src="/images/why-qbites/steps/step-5.png"
                            alt="How Qbits Works"
                            className="mx-auto mt-12"
                        />
                        <div className="flex items-center h-full px-12">
                            <div className="flex items-start gap-4">
                                <div className="text-orange-500 text-xl font-bold">
                                    ▶
                                </div>
                                <div>
                                    <h3 className="text-orange-500 text-xl font-bold mb-4">
                                        Why It Matters
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Qbits bridges innovation with
                                        simplicity. It helps you harness solar
                                        power without hassle, while reducing
                                        your carbon footprint — and your energy
                                        bill.
                                    </p>
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
