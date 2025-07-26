'use client';
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Optional, if you want pagination
import { Pagination, Autoplay } from "swiper/modules";

const Home = () => {
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
        <div className="mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <!-- Left Column --> */}
            <div>
              <img src="images/story-image.png" />
            </div>

            {/* <!-- Right Column --> */}
            <div>
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
                began as a humble venture with freelance design projects and
                small solar installations, driven by a bold vision to lead
                India’s renewable energy revolution. With no external funding
                and a passion to make clean energy accessible and affordable,
                the trio laid the foundation for what would become one of
                Gujarat’s top{" "}
                <span className="text-[#F69133]">3 EPC firms by 2024.</span>{" "}
                Headquartered in Surat with offices in Ahmedabad and Junagadh,
                the company has successfully completed 10,000+ solar
                installations across <span className="text-[#F69133]">20+</span>{" "}
                cities, built a team of{" "}
                <span className="text-[#F69133]">70+</span> experts, and
                established trusted partnerships with DISCOM, GEDA, SLDC, and
                GUVNL.
              </p>
              <br />
              <p className="text-[#606062] font-medium">
                Alongside its core EPC services, Heaven Green Energy expanded
                its portfolio by launching Qbits — an advanced range of on-grid
                solar inverters, ACDB/DCDB panels, LT/HT panels, and smart BOS
                components — designed, manufactured, and engineered in-house to
                ensure top-tier performance and reliability. From a turnover of
                ₹0 to crossing <span className="text-[#F69133]">₹100+ Cr</span>{" "}
                in <span className="text-[#F69133]">2024</span>, the Heaven
                Green Energy journey is a story of innovation, resilience, and a
                relentless commitment to building a cleaner, greener India.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="flex items-center justify-center">
                  <img src="images/story1.png" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="images/story2.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <h2 className="text-4xl font-bold mb-4 text-[#F69133]">
                Why Qbits?
              </h2>
              <div className="mt-10">
                <img src="images/wq1.png" className="mb-5" />
                <img src="images/wq2.png" className="mb-5" />
                <img src="images/wq3.png" className="mb-5" />
                <img src="images/wq4.png" className="mb-5" />
                <img src="images/wq5.png" className="mb-5" />
                <img src="images/wq6.png" className="mb-5" />
              </div>
            </div>

            <div className="md:col-span-5 relative">
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
                    <img src="images/warranty.png" className="mx-auto mb-2" />
                    <p>
                      Reliable & durable with
                      <br />
                      assured warranty
                    </p>
                  </div>
                  <div className="mb-10 text-center">
                    <img src="images/monitor.png" className="mx-auto mb-2" />
                    <p>
                      Monitor and control your
                      <br />
                      system anytime
                    </p>
                  </div>
                  <div className="mb-10 text-center">
                    <img src="images/remote.png" className="mx-auto mb-2" />
                    <p>
                      24×7 remote support for
                      <br />
                      zero downtime
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col items-center justify-start">
                  <div className="mb-10 text-center">
                    <img src="images/power.png" className="mx-auto mb-2" />
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

              <img
                src="/images/wqcorner.png"
                className="md:absolute bottom-0 right-0 z-0"
                alt="Corner Decoration"
              />
            </div>
          </div>
        </div>
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
          <h1 className="text-4xl font-bold text-center">
            Want to Know More About Us?
          </h1>
          <h3 className="text-2xl text-center mt-4 text-[#F69133]">
            Download Company Brochure
          </h3>
          <button className="mt-4 mx-auto block">
            <img src="/images/downloadbtn.png" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
