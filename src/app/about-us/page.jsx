import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-white">
            {/* Top banner image */}
            <img
                src="/images/about-us.png"
                alt="About Us Banner"
                className="w-full"
            />

            {/* Section 1: From Trusted Legacy */}
            <section className="flex flex-col md:flex-row items-center gap-10 md:gap-0 px-5 md:px-20 py-16">
                {/* Left image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/images/about-us/about-qbits.png"
                        alt="About Qbits"
                        className="rounded-[30px] object-cover shadow-lg"
                    />
                </div>

                {/* Right content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-500 leading-tight">
                        From Trusted Legacy to
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
                        Smart Energy Innovation
                    </h3>
                    <p className="text-gray-600 mt-6">
                        Established in{" "}
                        <span className="font-semibold text-[#FD6A33]">
                            2017, Heaven Green Energy Limited
                        </span>{" "}
                        has emerged as one of Gujarat’s most trusted solar EPC
                        companies — delivering over{" "}
                        <span className="text-[#FD6A33] font-bold">10,000</span>{" "}
                        successful solar installations across residential,
                        commercial, industrial, and utility-scale projects.
                        Headquartered in Surat, with branch offices in Ahmedabad
                        and Junagadh, our strength lies in delivering end-to-end
                        EPC services backed by technical precision, customer
                        trust, and regulatory excellence.
                    </p>
                    <p className="text-gray-600 mt-4">
                        We’re proud partners of government agencies like{" "}
                        <span className="font-semibold text-[#FD6A33]">
                            DISCOM, GEDA, SLDC
                        </span>
                        , and{" "}
                        <span className="font-semibold text-[#FD6A33]">
                            GUVNL
                        </span>
                        , and we’ve built a powerful network of{" "}
                        <span className="text-[#FD6A33] font-bold">22+</span>{" "}
                        channel partners, serving over{" "}
                        <span className="text-[#FD6A33] font-bold">20</span>{" "}
                        cities with the mission to accelerate India’s green
                        transition.
                    </p>
                    <p className="text-gray-600 mt-4">
                        As a certified{" "}
                        <span className="font-semibold text-[#FD6A33]">
                            ISO 9001
                        </span>{" "}
                        organization and an official{" "}
                        <span className="font-semibold text-[#FD6A33]">
                            Adani Solar distributor
                        </span>
                        , we don’t just install solar — we build India’s energy
                        confidence.
                    </p>
                </div>
            </section>

            {/* Section 2: Introducing Qbits */}
            <section className="bg-[#16A16C] text-white">
                <div className="flex flex-col md:flex-row items-center gap-10 md:hidden">
                    {/* Left Text */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            Introducing Qbits:
                        </h2>
                        <h3 className="text-xl md:text-2xl font-semibold mb-6">
                            Power That Thinks Smart Energy
                        </h3>
                        <p className="text-white mb-4">
                            <span className="font-bold">Qbits</span> is the next
                            chapter in our journey – an intelligent on-grid
                            solar inverter designed to revolutionize how homes
                            and businesses use solar power.
                        </p>
                        <p className="text-white mb-4">
                            With cutting-edge engineering, robust performance,
                            and seamless grid integration, Qbits delivers
                            reliable power conversion, long-term durability, and
                            intelligent monitoring — all packed into one sleek
                            system.
                        </p>
                        <p className="text-white">
                            Whether you're scaling rooftop systems or managing
                            solar parks, Qbits ensures maximum efficiency, zero
                            compromise.
                        </p>
                    </div>
                </div>
                <div className="">
                    {/* Right Image */}
                    <div className="w-full">
                        <img
                            src="/images/about-us/qbites-introduction.png"
                            alt="Qbits Product"
                            className="w-full object-contain hidden md:block"
                        />
                    </div>
                </div>
            </section>

            {/* Section 3: Our Vision */}
            <section className="text-center px-5 md:px-20 py-20 bg-white">
                <h2 className="text-3xl font-bold text-[#FD6A33] mb-2">
                    Our Vision
                </h2>
                <p className="text-gray-700 mx-auto leading-relaxed">
                    To build a smarter, greener India where clean energy is
                    accessible, intelligent, and affordable. We aim to grow
                    beyond being just an EPC brand — and become a national solar
                    powerhouse through innovation and impact.
                    <br />
                    <br />
                    <span className="text-left w-full">
                        Our target:{" "}
                        <span className="text-[#FD6A33] font-bold">
                            IPO by 2030
                        </span>
                        , backed by our belief — "Let’s Grow Together."
                    </span>
                </p>
            </section>

            {/* Section 4: Key Highlights */}
            <section className="px-5 md:px-20 pb-20">
                <h2 className="text-center text-2xl font-bold text-[#FD6A33] mb-6">
                    Key Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center md:mx-10">
                    {[
                        {
                            icon: "/images/about-us/installation.svg",
                            label: "10,000+ Installations",
                        },
                        {
                            icon: "/images/about-us/channel-partner.svg",
                            label: "22+ Channel Partners",
                        },
                        {
                            icon: "/images/about-us/manufacture.svg",
                            label: "Smart Inverter Manufacturer",
                        },
                        {
                            icon: "/images/about-us/iso.svg",
                            label: "ISO Certified | Adani Solar Distributor",
                        },
                        // {
                        //     icon: "/images/about-us/installation.svg",
                        //     label: "EPC + Product Innovation + Solar Park Expertise",
                        // },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#E6F7F0] p-2 rounded-full flex items-center justify-start space-x-3"
                        >
                            <img src={item.icon} alt="" className="w-10 h-10" />
                            <p className="text-[#009A55] font-semibold text-lg">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="w-full">
                    <div className="bg-[#E6F7F0] p-2 rounded-full flex items-center justify-start space-x-3 mt-10 mx-auto pr-6 w-fit">
                        <img
                            src={"/images/about-us/installation.svg"}
                            alt=""
                            className="w-10 h-10"
                        />
                        <p className="text-[#009A55] font-semibold text-lg">
                            EPC + Product Innovation + Solar Park Expertise
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 5: Leadership Team */}
            <section className="bg-[#009A55] px-5 md:px-20 py-20 text-center text-white">
                <h2 className="text-3xl font-bold mb-10">
                    Our Leadership Team
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    {[
                        {
                            name: "KEYUR RAKHOLIYA",
                            role: "Founder",
                            img: "/images/about-us/keyur.png",
                        },
                        {
                            name: "NIRAV DHANANI",
                            role: "Founder",
                            img: "/images/about-us/nirav.png",
                        },
                        {
                            name: "AKASH HIRPARA",
                            role: "Founder",
                            img: "/images/about-us/akash.png",
                        },
                    ].map((member, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-md overflow-hidden w-full md:w-64"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-auto"
                            />
                            <div className="py-4 text-center">
                                <h3 className="text-[#009A55] font-bold">
                                    {member.name}
                                </h3>
                                <p className="text-[#FD6A33] font-semibold text-sm">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
