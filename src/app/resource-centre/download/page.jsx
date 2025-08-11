import React from "react";
import DownloadProducts from "@/component/downloadButton/DownloadProducts";

export const metadata = {
    title: "Downloads - Qbits Solar Inverter Resources | Qbits Inverters",
    description:
        "Download Qbits solar inverter brochures, technical specifications, installation guides, and product catalogs. Get all resources for Qbits Inverters solar products.",
    keywords:
        "Qbits downloads, solar inverter brochures, technical specifications, installation guides, product catalogs, Qbits Inverters resources",
    openGraph: {
        title: "Downloads - Qbits Solar Inverter Resources",
        description:
            "Download brochures, specifications, and guides for Qbits solar inverters.",
        type: "website",
    },
};

const Download = () => {
    return (
        <div>
            <img
                src="/images/download/hero-image.png"
                alt="main-image"
                className="w-full"
            />

            {/* Second Section - Download Brochure */}
            <div className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                        {/* Left Side - Green Card */}
                        <div className="bg-[#16A16C] rounded-2xl p-12 pt-14">
                            <img
                                src="/images/download/broucher-img.png"
                                alt="green-card"
                                className=" object-cover rounded-lg"
                            />
                        </div>

                        {/* Right Side - Download Brochure Text */}
                        <div className="flex-1 max-w-md">
                            <h2 className="text-4xl font-bold text-green-600 mb-6">
                                Download Brochure
                            </h2>
                            <DownloadProducts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;
