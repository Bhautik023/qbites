"use client";
import React, { useState } from "react";

const ProductSlider = () => {
    const [activeTab, setActiveTab] = useState("single");

    const products = {
        single: {
            title: "Single Phase Grid Tie Inverter",
            highlightTitle: "Single Phase Grid Tie Inverter",
            subtitle: "Efficient, Reliable, Easy to Install.",
            capacity: ["1KW to 4KW - 1 MPPT", "5KW to 6KW - 2 MPPT"],
            features: [
                "Optimized DC/AC Ratio for Maximum Power Yields",
                "Wide Input Voltage Range with Low Start-Up at Just 80V",
                "Advanced Surge Protection on Both AC & DC Sides",
            ],
        },
        three: {
            title: "Three Phase Grid Tie Inverter",
            highlightTitle: "Three Phase Grid Tie Inverter",
            subtitle: "Efficient, Reliable, Easy to Install.",
            capacity: ["8KW to 30KW - 2 MPPT"],
            features: [
                "Type II DC/AC SPD for Advanced Surge Protection",
                "Engineered for large-scale solar installations",
                "Max. DC Input Current Per String",
            ],
        },
    };

    const currentProduct = products[activeTab];

    return (
        <section className="w-full bg-[#2BA968] relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-8 py-16">
                {/* Header */}
                <h2 className="text-5xl font-bold text-white text-center mb-16">
                    Our Products
                </h2>

                {/* Content Container with rounded border */}
                <div className="bg-transparent border border-white/30 rounded-[40px] p-5 md:p-12 relative">
                    <div className="flex items-center justify-evenly">
                        <div
                            className="mb-8 cursor-pointer"
                            onClick={() => setActiveTab("single")}
                        >
                            <h3
                                className={`text-2xl font-semibold mb-2 text-center ${
                                    activeTab === "single"
                                        ? "text-[#F69133]"
                                        : "text-white"
                                }`}
                            >
                                Single Phase Grid Tie Inverter
                            </h3>
                            {activeTab === "single" && (
                                <div className="w-16 h-0.5 bg-[#F69133] mx-auto"></div>
                            )}
                        </div>
                        <div
                            className="mb-8 cursor-pointer"
                            onClick={() => setActiveTab("three")}
                        >
                            <h3
                                className={`text-2xl font-semibold mb-2 text-center ${
                                    activeTab === "three"
                                        ? "text-[#F69133]"
                                        : "text-white"
                                }`}
                            >
                                Three Phase Grid Tie Inverter
                            </h3>
                            {activeTab === "three" && (
                                <div className="w-16 h-0.5 bg-[#F69133] mx-auto"></div>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[500px]">
                        {/* Left Side - Product Image */}
                        <div className="flex flex-col items-center justify-center">
                            {/* Tab Headers */}
                            {/* <div className="mb-8">
                                    <h3
                                        className={`text-2xl font-semibold mb-2 text-center ${
                                            activeTab === "single"
                                                ? "text-orange-400"
                                                : "text-white"
                                        }`}
                                    >
                                        Single Phase Grid Tie Inverter
                                    </h3>
                                    {activeTab === "single" && (
                                        <div className="w-16 h-0.5 bg-orange-400 mx-auto"></div>
                                    )}
                                </div> */}

                            {/* Product Image Container */}
                            <div className="relative">
                                {activeTab === "single" ? (
                                    // Single Phase Inverter Design
                                    <img
                                        src="/images/home/single-phase.png"
                                        alt="single-phase"
                                    />
                                ) : (
                                    // Three Phase Inverter Design
                                    <img
                                        src="/images/home/three-phase.png"
                                        alt="three-phase"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Right Side - Product Details */}
                        <div className="text-white">
                            {/* Tab Headers */}
                            {/* <div className="mb-8">
                                    <h3
                                        className={`text-2xl font-semibold mb-2 ${
                                            activeTab === "three"
                                                ? "text-orange-400"
                                                : "text-white"
                                        }`}
                                    >
                                        Three Phase Grid Tie Inverter
                                    </h3>
                                    {activeTab === "three" && (
                                        <div className="w-16 h-0.5 bg-orange-400"></div>
                                    )}
                                </div> */}

                            <p className="text-lg mb-8 text-white/90">
                                {currentProduct.subtitle}
                            </p>

                            {/* Capacity/Power ratings */}
                            <div className="mb-8">
                                {currentProduct.capacity.map((cap, index) => (
                                    <h4
                                        key={index}
                                        className="text-2xl font-bold text-white mb-2"
                                    >
                                        {cap}
                                    </h4>
                                ))}
                            </div>

                            {/* Features list */}
                            <div className="space-y-4 mb-10">
                                {currentProduct.features.map(
                                    (feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-3"
                                        >
                                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-white/90 leading-relaxed text-base">
                                                {feature}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>

                            {/* Know More Button */}
                            <button className="bg-[#F69133] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                                Know More &gt;&gt;
                            </button>
                        </div>
                    </div>

                    {/* Tab switching - invisible buttons over the tab titles */}
                    <button
                        onClick={() => setActiveTab("single")}
                        className="absolute top-12 left-12 w-64 h-20 bg-transparent z-10"
                    ></button>
                    <button
                        onClick={() => setActiveTab("three")}
                        className="absolute top-12 right-12 w-64 h-20 bg-transparent z-10"
                    ></button>
                </div>
            </div>
        </section>
    );
};

export default ProductSlider;
