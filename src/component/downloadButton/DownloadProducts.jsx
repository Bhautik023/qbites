'use client'
import React from "react";

const DownloadProducts = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/download.zip"; // file inside public folder
        link.download = "download.zip"; // suggested file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button
            onClick={handleDownload}
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-medium transition-colors"
        >
            Download Now →
        </button>
    );
};

export default DownloadProducts;
