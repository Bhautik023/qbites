import React from "react";

const Product = () => {
    const products = [
        // Existing 3 products
        {
            id: 1,
            title: "Single Phase Grid Tie Inverter",
            powerRange: "1KW to 4KW - 1 MPPT",
            image: "/images/products/p-1.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Remote & App Monitoring",
                "Flexible Panel Compatibility",
                "Smart Overload Handling",
                "Lightweight & Easy to Install",
            ],
        },
        {
            id: 2,
            title: "Single Phase Grid Tie Inverter",
            powerRange: "5KW to 6KW - 2 MPPT",
            image: "/images/products/p-2.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Remote & App Monitoring",
                "Flexible Panel Compatibility",
                "Smart Overload Handling",
                "Lightweight & Easy to Install",
            ],
        },
        {
            id: 3,
            title: "Three Phase Grid Tie Inverter",
            powerRange: "6KW to 30KW - 2 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Remote & App Monitoring",
                "Flexible Panel Compatibility",
                "Smart Overload Handling",
                "Lightweight & Easy to Install",
            ],
        },

        // 11 New Products from PDF (IDs 4 - 14)
        {
            id: 4,
            title: "QB-1KTLD-S Single Phase Inverter",
            powerRange: "1KW - 1 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
        {
            id: 5,
            title: "QB-1.5KTLD-S Single Phase Inverter",
            powerRange: "1.5KW - 1 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
        {
            id: 6,
            title: "QB-2KTLD-S Single Phase Inverter",
            powerRange: "2KW - 1 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
        {
            id: 7,
            title: "QB-3KTLD-S Single Phase Inverter",
            powerRange: "3KW - 1 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
        {
            id: 8,
            title: "QB-3.6KTLD-S Single Phase Inverter",
            powerRange: "3.6KW - 1 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
        {
            id: 9,
            title: "QB-4KTLD-S Single Phase Inverter",
            powerRange: "4KW - 1 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
        {
            id: 10,
            title: "QB-4.6KTLD-S Single Phase Inverter",
            powerRange: "4.6KW - 2 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
        {
            id: 11,
            title: "QB-5KTLD-S Single Phase Inverter",
            powerRange: "5KW - 2 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
        {
            id: 12,
            title: "QB-6KTLD-S Single Phase Inverter",
            powerRange: "6KW - 2 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
        {
            id: 13,
            title: "QB-8KTLD-T Three Phase Inverter",
            powerRange: "8KW - 2 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
        {
            id: 14,
            title: "QB-10KTLD-T Three Phase Inverter",
            powerRange: "10KW - 2 MPPT",
            image: "/images/products/p-3.png",
            icon1: "/images/products/chip-icon.svg",
            icon2: "/images/products/ip-icon.svg",
            icon3: "/images/products/design-icon.svg",
            features: [
                "Real Time WhatsApp Alert",
                "High Conversion Efficiency",
                "All-in-One Mobile App",
                "Expandable Warranty",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <img
                src="/images/products/hero-image.png"
                alt="Products Hero Banner"
                className="w-full"
            />

            {/* Product Cards */}
            <div className="max-w-6xl mx-auto px-6 space-y-12 pb-20 pt-20">
                {products.map((product) => (
                    <div key={product.id} className="relative rounded-2xl">
                        <img
                            src="/images/products/product-fram.png"
                            alt="frame"
                            className="absolute inset-0 pointer-events-none hidden md:block"
                        />
                        <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 bg-transparent rounded-2xl">
                            {/* Left: Product Image */}
                            <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-64 h-auto"
                                />
                            </div>

                            {/* Right: Text Content */}
                            <div className="w-full md:w-1/2 space-y-6">
                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-[#16A16C] text-center md:text-left">
                                    {product.title}
                                </h3>

                                {/* Power Range */}
                                <p className="text-lg font-semibold text-[#F69133] text-center md:text-left">
                                    {product.powerRange}
                                </p>

                                {/* Icon Section */}
                                <div className="flex gap-10 justify-center md:justify-start">
                                    <div className="text-center">
                                        <div className="flex justify-center">
                                            <img
                                                src={product.icon1}
                                                alt="chip mx-auto"
                                            />
                                        </div>
                                        <p className="text-xs text-[#16A16C] font-semibold leading-tight">
                                            AI-Powered
                                            <br />
                                            Monitoring
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="flex justify-center">
                                            <img
                                                src={product.icon2}
                                                alt="ip-rating"
                                            />
                                        </div>
                                        <p className="text-xs text-[#16A16C] font-semibold leading-tight">
                                            Built to Endure
                                            <br />
                                            IP65 Rated
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="flex justify-center">
                                            <img
                                                src={product.icon3}
                                                alt="design"
                                            />
                                        </div>
                                        <p className="text-xs text-[#16A16C] font-semibold leading-tight">
                                            Compact by
                                            <br />
                                            Design
                                        </p>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-3">
                                    {product.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-center md:justify-start"
                                        >
                                            <div className="w-6 h-6 bg-[#F69133] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                                                ✓
                                            </div>
                                            <span className="text-sm text-gray-700">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
