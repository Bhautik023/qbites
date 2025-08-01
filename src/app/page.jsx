"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Optional, if you want pagination
import { Pagination, Autoplay } from "swiper/modules";

const whyQbites = [
    {
        icon: "/images/home/ai-chip.png",
        title: "AI-Powered Monitoring",
        description:
            "Smarter insights. Smarter decisions. Total control at your fingertips.",
    },
    {
        icon: "/images/home/ip-66.png",
        title: "Built to Endure – IP66 Rated",
        description:
            "Dustproof, waterproof, and ready for India’s toughest weather.",
    },
    {
        icon: "/images/home/power.png",
        title: "High Performance, High Current (20A Max)",
        description: "Handles more, performs better – without the overload.",
    },
    {
        icon: "/images/home/design.png",
        title: "Compact by Design",
        description:
            "Space-saving form factor that fits seamlessly into modern setups.",
    },
    {
        icon: "/images/home/india.png",
        title: "Proudly Made in India",
        description: "An Indian application for Indian homes and businesses.",
    },
    {
        icon: "/images/home/battery.png",
        title: "Future-Ready Storage Compatibility",
        description:
            "Smarter insights. Smarter decisions. Total control at your fingertips.",
    },
];

const Home = () => {
    const [activeTab, setActiveTab] = useState("single");
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);

        try {
            const response = await fetch("/broucher.pdf");
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "Company-Brochure.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up the URL object
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
            alert("Download failed. Please try again.");
        } finally {
            setIsDownloading(false);
        }
    };

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
        <>
            <header className="relative w-full overflow-hidden">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full"
                >
                    <SwiperSlide>
                        <img
                            src="/images/home/slider-1.png"
                            alt="Slide 1"
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/images/home/slider-2.png"
                            alt="Slide 2"
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                </Swiper>
            </header>

            <section className="py-16 bg-white">
                <div className="w-full px-4 md:px-32">
                    <div className="flex flex-col md:flex-row gap-8 md:gap- w-full">
                        {/* Left Column (Image - 40%) */}
                        <div className="md:w-fit w-full flex justify-center items-center">
                            <img
                                src="images/story-image.png"
                                alt="Our Story"
                                className=""
                            />
                        </div>

                        {/* Right Column (Text - 60%) */}
                        <div className="md:w-full w-full px-8 md:px-0">
                            <h2 className="text-4xl font-bold mb-4 text-[#F69133]">
                                Our Story
                            </h2>
                            <p className="text-[#606062] font-medium">
                                Founded in 2017 by three college friends —{" "}
                                <span className="text-[#F69133]">
                                    Keyur Rakholiya, Nirav Dhanani,
                                </span>{" "}
                                and{" "}
                                <span className="text-[#F69133]">
                                    Akash Hirpara — Heaven Green Energy Ltd.
                                </span>{" "}
                                began as a humble venture with freelance design
                                projects and small solar installations, driven
                                by a bold vision to lead India’s renewable
                                energy revolution. With no external funding and
                                a passion to make clean energy accessible and
                                affordable, the trio laid the foundation for
                                what would become one of Gujarat’s top 3 EPC
                                firms by 2024. Headquartered in Surat with
                                offices in Ahmedabad and Junagadh, the company
                                has successfully completed 10,000+ solar
                                installations across 20+ cities, built a team of
                                70+ experts, and established trusted
                                partnerships with DISCOM, GEDA, SLDC, and GUVNL.
                            </p>
                            <br />
                            <p className="text-[#606062] font-medium">
                                Alongside its core EPC services, Heaven Green
                                Energy expanded its portfolio by launching Qbits
                                — an advanced range of on-grid solar inverters,
                                ACDB/DCDB panels, LT/HT panels, and smart BOS
                                components — designed, manufactured, and
                                engineered in-house to ensure top-tier
                                performance and reliability. From a turnover of
                                ₹0 to crossing ₹100+ Cr in 2024, the Heaven
                                Green Energy journey is a story of innovation,
                                resilience, and a relentless commitment to
                                building a cleaner, greener India.
                            </p>

                            {/* Bottom Images */}
                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="images/story1.png"
                                        alt="Story 1"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src="images/story2.png"
                                        alt="Story 2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                    {currentProduct.capacity.map(
                                        (cap, index) => (
                                            <h4
                                                key={index}
                                                className="text-2xl font-bold text-white mb-2"
                                            >
                                                {cap}
                                            </h4>
                                        )
                                    )}
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

            <section className="py-16 bg-white relative">
                <div className="mx-auto sm:px-10 md:px-28">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
                        <div className="md:col-span-7">
                            <h2 className="text-4xl font-bold mb-4 text-[#F69133]">
                                Why Qbits?
                            </h2>
                            <div className="mt-10 space-y-5">
                                {whyQbites.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex gap-4 items-center p-2 bg-[#189F6C]/10 rounded-full"
                                        >
                                            <div>
                                                <img
                                                    src={item.icon}
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#16A16C] text-sm md:text-xl font-bold">
                                                    {item.title}
                                                </span>
                                                <span className="text-[#606062] text-xs md:text-base">
                                                    {item.description}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="md:col-span-5">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#F69133] flex items-center justify-center gap-2">
                                <img
                                    src="images/qbikspolygon.png"
                                    alt="Qbits Icon"
                                    className="w-8 h-8"
                                />
                                Qbits Stands Apart
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                                <div className="p-4 flex flex-col items-center justify-center">
                                    <div className="mb-10 text-center">
                                        <img
                                            src="images/warranty.png"
                                            className="mx-auto mb-2"
                                        />
                                        <p>
                                            Reliable & durable with
                                            <br />
                                            assured warranty
                                        </p>
                                    </div>
                                    <div className="mb-10 text-center">
                                        <img
                                            src="images/monitor.png"
                                            className="mx-auto mb-2"
                                        />
                                        <p>
                                            Monitor and control your
                                            <br />
                                            system anytime
                                        </p>
                                    </div>
                                    <div className="mb-10 text-center">
                                        <img
                                            src="images/remote.png"
                                            className="mx-auto mb-2"
                                        />
                                        <p>
                                            24×7 remote support for
                                            <br />
                                            zero downtime
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 flex flex-col items-center justify-start">
                                    <div className="mb-10 text-center">
                                        <img
                                            src="images/power.png"
                                            className="mx-auto mb-2"
                                        />
                                        <p>
                                            Real-time built-in
                                            <br />
                                            power optimization
                                        </p>
                                    </div>
                                    <div className="mb-10 text-center">
                                        <img
                                            src="images/smartenergy.png"
                                            className="mx-auto mb-2"
                                        />
                                        <p>
                                            Adaptive control for smart
                                            <br />
                                            energy flow
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="/images/home/wqcorner.png"
                    className="md:absolute bottom-0 right-0 z-0 sm:w-[500px] sm:h-[250px]"
                    alt="Corner Decoration"
                />
            </section>
            <section className="py-16 bg-[url('/images/how_works_bg.png')] bg-cover bg-center">
                <div className="mx-auto px-6 max-w-7xl text-white">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-5">
                            <img src="/images/how_card_left.png" />
                        </div>

                        <div className="md:col-span-7">
                            <img src="/images/how_card.png" alt="Qbits Card" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-cover bg-center">
                <div className="mx-auto">
                    <h2 className="text-4xl font-bold mb-4 text-[#F69133] text-center">
                        Qbits System Highlights
                    </h2>
                    <div className="text-center pt-2">
                        <img
                            src="images/underline.png"
                            className="mx-auto"
                            alt="Underline"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 mt-10">
                        <div className="p-4 text-center flex items-center justify-center">
                            <img src="images/highlight1.png" />
                        </div>
                        <div className="p-4 text-center flex items-center justify-center">
                            {" "}
                            <img src="/images/highlight2.png" />
                        </div>
                        <div className="p-4 text-center flex items-center justify-center">
                            {" "}
                            <img src="/images/highlight3.png" />
                        </div>
                        <div className="p-4 text-center flex items-center justify-center">
                            {" "}
                            <img src="/images/highlight4.png" />
                        </div>
                        <div className="p-4 text-center flex items-center justify-center">
                            <img src="/images/highlight5.png" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="mx-auto">
                    <img
                        src="/images/intelligent_invertor.png"
                        className="w-full h-auto block"
                        alt="How Qbits Works"
                    />
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto">
                    <h1 className="text-4xl font-bold text-center text-[#16A16C]">
                        Want to Know More About Us?
                    </h1>
                    <h3 className="text-2xl text-center mt-4 text-[#F69133]">
                        Download Company Brochure
                    </h3>
                    {/* {!isDownloading ? ( */}
                        <button
                            className="mt-4 mx-auto block cursor-pointer disabled:opacity-50"
                            onClick={handleDownload}
                            disabled={isDownloading}
                        >
                            <img
                                src="/images/downloadbtn.png"
                                alt="Download Brochure"
                            />
                        </button>
                    {/* ) : (
                        <div className="flex justify-center items-center">
                            <span className="rounded-full mt-4 mx-auto block text-white font-bold text-xl cursor-pointer text-center p-4 bg-[#16A16C]">
                                Downloading Brochure {">>"}
                            </span>
                        </div>
                    )} */}
                </div>
            </section>
        </>
    );
};

export default Home;
