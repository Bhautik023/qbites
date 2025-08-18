import React from "react";


import Background from "../assets/icons/bg.svg";
import AiChat from "../assets/images/ai-chat.svg";
import CheckBox from "../assets/icons/check-box.svg";
import background from "../assets/images/backgroundDesign.png";
import FinalBg from "../assets/images/FinalBackground.svg";
import ProductSlider from "@/component/productSlider/ProductSlider";
import DownloadButton from "@/component/downloadButton/DownloadButton";
import SwiperSlider from "@/component/swiper/SwiperSlider";

export const metadata = {
  title: 'Qbits Inverters - Leading Solar EPC Company in Gujarat | Qbits Inverters',
  description: 'Qbits Inverters Limited - Gujarat\'s top 3 EPC firm with 10,000+ solar installations. Makers of Qbits intelligent on-grid solar inverters. ISO 9001 certified, official Adani Solar distributor.',
  keywords: 'solar energy, EPC company Gujarat, solar installation, Qbits inverters, Qbits Inverters, solar panels, renewable energy, Surat solar company',
  author: 'Qbits Inverters Limited',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Qbits Inverters - Leading Solar EPC Company in Gujarat',
    description: 'Gujarat\'s trusted solar EPC company with 10,000+ installations. Makers of Qbits intelligent solar inverters.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Qbits Inverters'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qbits Inverters - Leading Solar EPC Company',
    description: 'Gujarat\'s trusted solar EPC company with 10,000+ installations.'
  }
}

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
    return (
        <>
            <SwiperSlider />

            <section className="py-16 bg-white">
                <div className="w-full px-4 md:px-32">
                    <div className="flex md:flex-row flex-col-reverse gap-8 md:gap- w-full">
                        {/* Left Column (Image - 40%) */}
                        <div className="md:w-fit w-full flex justify-center items-center">
                            <img
                                src="images/story-image.png"
                                alt="Our Story"
                                className="h-[400px] md:h-full"
                            />
                        </div>

                        {/* Right Column (Text - 60%) */}
                        <div className="md:w-full w-full ">
                            <h2 className="text-4xl font-bold mb-4 text-[#F69133] text-center md:text-start">
                                Our Story
                            </h2>
                            <p className="text-[#606062] font-medium">
                                Founded in 2017 by three college friends —{" "}
                                <span className="text-[#F69133]">
                                    Keyur Rakholiya, Nirav Dhanani,
                                </span>{" "}
                                and{" "}
                                <span className="text-[#F69133]">
                                    Akash Hirpara — Qbits Inverters Ltd.
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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

            <ProductSlider />

            <section className="py-16 bg-white relative px-3 md:px-0">
                <div className="mx-auto sm:px-10 md:px-28">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
                        <div className="md:col-span-7">
                            <h2 className="text-4xl text-center md:text-start font-bold mb-4 text-[#F69133]">
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
            <section className=" lg:h-[781px] w-full bg-[#16A16C] relative md:py-[50px]">
                <div className="absolute inset-0 hidden lg:block">
                    <FinalBg />
                </div>
                <div className="relative z-10 flex flex-col-reverse lg:flex-row gap-10 md:gap-32">
                    <div className="lg:w-[40%] w-full">
                        {/* <AiChat /> */}
                        <img src="/images/home/whatsapp.png" alt="whatsapp" />
                    </div>
                    <div className="lg:w-[60%] w-full py-5 px-3">
                        <div className="space-y-16">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 text-center md:text-start">
                                India’s First Intelligent Inverter
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-start">
                                with Built-In Memory for Uninterrupted
                                Monitoring.
                            </h2>
                            <p className="text-white text-lg md:text-xl text-center md:text-start">
                                Shaping the Future of Solar with Intelligent &
                                Reliable Inverters / Transforming Energy with{" "}
                                <br /> Intelligent, Real-Time Solar Solutions
                            </p>
                            <div className="text-[14px] md:text-lg">
                                <span className="flex items-center gap-2 mt-6 text-white">
                                    <CheckBox />{" "}
                                    <p className="">
                                        India’s first inverter with local
                                        storage backup
                                    </p>
                                </span>
                                <span className="flex items-center gap-2 mt-6 text-white">
                                    <CheckBox />{" "}
                                    <p>
                                        No data loss during power or internet
                                        failure
                                    </p>
                                </span>
                                <span className="flex items-center gap-2 mt-6 text-white">
                                    <CheckBox />{" "}
                                    <p>
                                        Chip-based memory for <br className="block md:hidden" />{" "}
                                        uninterrupted performance tracking
                                    </p>
                                </span>
                                <span className="flex items-center gap-2 mt-6 text-white">
                                    <CheckBox />{" "}
                                    <p>
                                        24×7 remote support + real-time AI
                                        monitoring
                                    </p>
                                </span>
                                <span className="flex items-center gap-2 mt-6 text-white">
                                    <CheckBox />{" "}
                                    <p>
                                        Built-in for EPCs, businesses, and smart
                                        homes
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DownloadButton />
        </>
    );
};

export default Home;
