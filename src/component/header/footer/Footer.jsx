import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => (
    <footer className="bg-white border-t border-gray-200">
        <div className="md:mx-8 px-4 py-10 md:flex md:justify-between md:items-start">
            {/* Left: Branding & About */}
            <div className="w-full md:w-[50%] mb-8 md:mb-0">
                <div className="flex items-center mb-4 w-[200px] h-[60px]">
                    <img src="/images/footer-logo.png" alt="Qbits Logo" className="mr-2 w-full h-full" />
                </div>
                <div className="md:w-[75%]">
                <p className="text-[#16A16C] font-medium text-lg">
                    At Qbits, we believe in empowering homes and businesses with
                    intelligent, efficient, and safe solar energy solutions. Our
                    TLS Grid Tie Solar Inverters are crafted with cutting-edge
                    technology and AI integration to maximize performance,
                    minimize energy costs, and contribute to a sustainable
                    future.
                </p>
                </div>
            </div>

            {/* Middle: Quick Links */}
            <div className="md:w-[25%] mb-8 md:mb-0 flex flex-col md:items-center">
                <span className="font-bold text-lg mb-2 text-green-600">
                    Quick Links
                </span>
                <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center gap-2">
                        <img src="/images/bullet-icon.svg" alt="Bullet" />
                        <Link href="#" className="hover:text-green-600 text-[#16A16C]">
                            Home
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <img src="/images/bullet-icon.svg" alt="Bullet" />
                        <Link href="#" className="hover:text-green-600 text-[#16A16C]">
                            About us
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <img src="/images/bullet-icon.svg" alt="Bullet" />
                        <Link href="#" className="hover:text-green-600 text-[#16A16C]">
                            Services
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <img src="/images/bullet-icon.svg" alt="Bullet" />
                        <Link href="#" className="hover:text-green-600 text-[#16A16C]">
                            Help
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <img src="/images/bullet-icon.svg" alt="Bullet" />
                        <Link href="#" className="hover:text-green-600 text-[#16A16C]">
                            Product
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <img src="/images/bullet-icon.svg" alt="Bullet" />
                        <Link href="#" className="hover:text-green-600 text-[#16A16C]">
                            Our network
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <img src="/images/bullet-icon.svg" alt="Bullet" />
                        <Link href="#" className="hover:text-green-600 text-[#16A16C]">
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Right: Contact Info */}
            <div className="md:w-[25%] flex flex-col items-start">
                <span className="font-bold text-lg mb-2 text-green-600">
                    Get In Touch
                </span>
                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                    <li className="flex items-center text-[#16A16C]">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                            {/* Phone Icon Placeholder */}
                            <img src="/images/contact/call.svg" alt="Phone" />
                        </div>
                        +91 99791 92935
                    </li>
                    <li className="flex items-center text-[#16A16C]">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                            {/* Email Icon Placeholder */}
                           <img src="/images/contact/email.svg" alt="Email" />
                        </div>
                        info@qbits.com
                    </li>
                    <li className="flex items-center text-[#16A16C]">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                            {/* Location Icon Placeholder */}
                            <img src="/images/contact/location.svg" alt="Location" />
                        </div>
                        201, Anupam Square Mahadev Chowk
                        <br />
                        Mota Varachha, Surat, Gujarat - 394101
                    </li>
                </ul>
                
            </div>
        </div>
        <div className="border-t border-gray-200 py-4">
            <div className="mx-8 px-4 flex flex-col md:flex-row md:justify-between items-center text-lg text-[#16A16C]">
                <span>
                    Copyrights © 2025 Qbits. All Rights Reserved. | Designs by @
                    The Designs Live.
                </span>
                {/* Social Icons */}
                <div className="flex space-x-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        {/* IG Placeholder */}
                        <img src="/images/social-media/instagram.svg" alt="Instagram" />
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        {/* FB Placeholder */}
                       <img src="/images/social-media/facebook.svg" alt="Facebook" />
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        {/* LinkedIn Placeholder */}
                        <img src="/images/social-media/linkedin.svg" alt="LinkedIn" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
