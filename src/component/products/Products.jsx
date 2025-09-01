"use client";
import { useViewProductsQuery } from "@/redux/services/heroApi";
import React from "react";

// Convert API "features" string into an array for bullets
const parseFeatures = (value) =>
    value
        ? value
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
        : [];

export default function ProductList() {
    const { data, isLoading, isError } = useViewProductsQuery();
    const products = data?.data || [];

    if (isLoading) {
        return (
            <div className="max-w-6xl mx-auto px-6 space-y-12 pb-20 pt-20">
                <div className="w-full h-[60vh] bg-green-50 relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-green-100 to-green-50 animate-[pulse_1.8s_ease-in-out_infinite]" />
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(34,197,94,0.08)_25%,transparent_25%,transparent_50%,rgba(34,197,94,0.08)_50%,rgba(34,197,94,0.08)_75%,transparent_75%,transparent)] bg-[length:2rem_100%]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center gap-3">
                            <span className="h-4 w-4 rounded-full bg-green-300 animate-bounce" />
                            <span className="h-4 w-4 rounded-full bg-green-400 animate-bounce [animation-delay:0.15s]" />
                            <span className="h-4 w-4 rounded-full bg-green-500 animate-bounce [animation-delay:0.3s]" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="max-w-6xl mx-auto px-6 pb-20 pt-20">
                <div className="w-full bg-green-50 text-green-700 px-4 py-3 rounded-md">
                    Failed to load products. Please try again later.
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 space-y-12 pb-20 pt-20">
            {products.map((product) => {
                // Map API -> UI fields
                const image = product.file ?? "/images/products/p-1.png";
                const title = product.title;
                const powerRange =
                    product.mppt_config || product.subtitle || product.type;
                const features = parseFeatures(product.features);

                return (
                    <div
                        key={product.product_id}
                        className="relative rounded-2xl border-2 border-[#16A16C] overflow-hidden"
                    >
                        {/* Decorative frame */}
                        {/* <img
                            src="/images/products/product-fram.png"
                            alt="frame"
                            className="absolute inset-0 pointer-events-none hidden md:block"
                        /> */}

                        <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 bg-transparent rounded-2xl">
                            {/* Left: Product Image */}
                            <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
                                <img
                                    src={image}
                                    alt={product.alt_text ?? title}
                                    title={product.title_attribute ?? title}
                                    className="w-64 h-auto object-contain"
                                />
                            </div>

                            {/* Right: Text Content */}
                            <div className="w-full md:w-1/2 space-y-6">
                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-[#16A16C] text-center md:text-left">
                                    {title}
                                </h3>

                                {/* Power Range / MPPT */}
                                <p className="text-lg font-semibold text-[#F69133] text-center md:text-left">
                                    {powerRange}
                                </p>

                                {/* Icon Section (static assets as in your design) */}
                                <div className="flex gap-10 justify-center md:justify-start">
                                    <div className="text-center">
                                        <div className="flex justify-center">
                                            <img
                                                src="/images/products/chip-icon.svg"
                                                alt="chip"
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
                                                src="/images/products/ip-icon.svg"
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
                                                src="/images/products/design-icon.svg"
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
                                    {(features.length
                                        ? features
                                        : [
                                              product.surge_protection === "Yes"
                                                  ? "Surge protection available"
                                                  : "Quality inverter",
                                          ]
                                    ).map((feature, index) => (
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
                );
            })}
        </div>
    );
}
