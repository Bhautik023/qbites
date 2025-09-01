"use client";
import { downloadCompanyBrochure } from "@/utils/downloadBrochure";
import React, { useState } from "react";

const DownloadButton = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            await downloadCompanyBrochure();
        } catch (e) {
            console.error(e);
            alert("Download failed. Please try again.");
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <section className="py-16 px-3">
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
            </div>
        </section>
    );
};

export default DownloadButton;
