'use client'
import React, { useState } from "react";

const DownloadButton = () => {
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
