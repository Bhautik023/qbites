"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { NavLink, Link } from 'react-router-dom';

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Why Qbits?", path: "/why-qbits" },
  { label: "Product", path: "/product" },
  // { label: "Support", path: "/support" },
];

const resourceCentreDropdown = [
  { label: "Events", path: "/resource-centre/events" },
  { label: "Blog", path: "/resource-centre/blog" },
  { label: "Download", path: "/resource-centre/download" },
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname;
    setIsActive(currentPath);
  }, []);

  // Handles closing dropdown when clicking elsewhere
  React.useEffect(() => {
    if (pathname) {
      const handleClick = (event) => {
        if (!event.target.closest(".dropdown-parent")) {
          setDropdownOpen(false);
        }
      };
      if (dropdownOpen) {
        if (typeof window !== "undefined") {
          window.addEventListener("mousedown", handleClick);
        }
      }
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("mousedown", handleClick);
        }
      };
    }
  }, [dropdownOpen, pathname]);

  // Responsive state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 h-16 flex items-center px-4 md:px-8">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2 mr-4 md:mr-8">
          <Link href="/" className="flex items-center">
            <img
              src="/images/primary-logo.png"
              alt="Qbits Inverter Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-auto text-white focus:outline-none"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
        {/* Navigation */}
        <nav className="hidden md:flex flex-1">
          <ul className="flex items-center justify-end gap-7 w-full">
            {menuItems.map(({ label, path }) => {
              const isExactMatch = pathname === path;
              const isSubPathMatch = pathname.startsWith(path + "/");
              const isResourceCentre = pathname.startsWith("/resource-centre");
              const isHome = path === "/" && pathname === "/";

              const isActiveMainMenu =
                (isExactMatch || isSubPathMatch) &&
                (!isResourceCentre || path === "/resource-centre") &&
                (path !== "/" || isHome);

              return (
                <li key={label}>
                  <Link
                    href={path}
                    onClick={() => setIsActive(path)}
                    className={`text-white font-medium transition hover:text-green-200 px-1 pb-1 ${
                      isActiveMainMenu
                        ? "border-b-2 border-yellow-300 font-bold"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href="https://erp.heavengreenenergy.com/helpdesk/qbits-service-620"
                target="_blank"
                className="text-white font-medium transition hover:text-green-200 px-1 pb-1"
              >
                Support
              </a>
            </li>
            {/* Resource Centre Dropdown */}
            <li className="relative dropdown-parent">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className={`text-white font-medium transition px-1 pb-1 flex items-center hover:text-green-200 cursor-pointer ${
                  pathname.startsWith("/resource-centre")
                    ? "border-b-2 border-yellow-300 font-bold"
                    : ""
                }`}
                type="button"
              >
                Resource Centre
                <svg
                  className="inline ml-1 w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white shadow-lg rounded-md flex flex-col border z-50">
                  {resourceCentreDropdown.map(({ label, path }, index) => (
                    <Link
                      key={label}
                      href={path}
                      className={`block px-4 py-2 hover:bg-green-100 font-medium text-gray-800 ${
                        pathname === path
                          ? `text-green-700 font-bold ${
                              index === 0
                                ? "rounded-t-md hover:rounded-t-md"
                                : index === resourceCentreDropdown.length - 1
                                ? "rounded-b-md hover:rounded-b-md"
                                : ""
                            } `
                          : ""
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>
        {/* Contact Us button */}
        <div className="ml-4 md:ml-8 hidden md:block">
          <a
            href="https://erp.heavengreenenergy.com/contact-us"
            target="_blank"
            className="text-white font-medium transition hover:text-green-200 px-1 pb-1"
          >
            <button className="bg-transparent border border-white rounded-full px-6 py-2 text-white font-semibold transition cursor-pointer">
              Contact Us
            </button>
          </a>
        </div>
      </header>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 bg-opacity-60 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-16 left-0 w-full bg-[#16A16C] shadow-lg rounded-b-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-3">
              {menuItems.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    href={path}
                    onClick={() => {
                      setIsActive(path);
                      setMobileMenuOpen(false);
                    }}
                    className={`block text-white font-medium transition hover:text-green-700 px-1 pb-1 ${
                      isActive === path
                        ? "border-b-2 border-yellow-300 font-bold"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
              <a
                href="https://erp.heavengreenenergy.com/helpdesk/qbits-service-620"
                target="_blank"
                className="text-white font-medium transition hover:text-green-200 px-1 pb-1"
              >
                Support
              </a>
            </li>
              {/* Resource Centre Dropdown (mobile) */}
              <li>
                <details>
                  <summary
                    className={`cursor-pointer text-white font-medium flex items-center ${
                      pathname.startsWith("/resource-centre")
                        ? "border-b-2 border-yellow-300 font-bold"
                        : ""
                    }`}
                  >
                    Resource Centre
                    <svg
                      className="inline ml-1 w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="flex flex-col mt-2 ml-2">
                    {resourceCentreDropdown.map(({ label, path }) => (
                      <Link
                        key={label}
                        href={path}
                        className={`block px-2 py-2 hover:bg-green-100 font-medium text-white ${
                          pathname === path ? "text-green-700 font-bold" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
              {/* Contact Us button (mobile) */}
              <li>
                <a
                  href="https://erp.heavengreenenergy.com/contact-us"
                  target="_blank"
                  className="block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <button className="w-full border bg-white border-green-700 rounded-full px-6 py-2 text-green-700 font-semibold transition">
                    Contact Us
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
