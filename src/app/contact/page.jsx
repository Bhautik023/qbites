"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <img
        src="/images/contact-us/hero-image.png"
        alt="main-image"
        className="w-full"
      />

      {/* Contact Form Section */}
      <div className=" py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 justify-between relative px-3">
            <img
              src="/images/products/product-fram.png"
              alt="frame"
              className="absolute left-0 right-0 pointer-events-none hidden md:block"
            />

            {/* Left Side - Green Contact Card */}
            <div className="bg-[#16A16C] rounded-2xl py-4 px-6 my-2 text-white">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

              {/* Let's Talk */}
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-500 text-sm">📞</span>
                  </div>
                  <h3 className="font-semibold">Let's Talk</h3>
                </div>
                <p className="text-sm opacity-90 ml-9">+91 98765 43210 1</p>
              </div>

              {/* General Support */}
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-500 text-sm">💬</span>
                  </div>
                  <h3 className="font-semibold">General Support</h3>
                </div>
                <p className="text-sm opacity-90 ml-9">
                  support@solarsreenergy.com
                </p>
                <p className="text-sm opacity-90 ml-9">
                  info@solarsreenergy.com
                </p>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-500 text-sm">📍</span>
                  </div>
                  <h3 className="font-semibold">Address</h3>
                </div>
                <p className="text-sm opacity-90 ml-9">
                  201, Aksquisition Square, Plot 5and 6 Kuppuswamy Street,
                  <br />
                  Thousand Lit., Adyar Chennai, Tamil
                  <br />
                  Nadu 600020
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl py-8 px-4 flex-1 max-w-2xl">
              <h2 className="text-2xl font-bold text-[#F69133] mb-6">
                Get in Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-80 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59535.89493350186!2d72.86849629999999!3d21.221489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0454639c9ace3%3A0xfe3b167d3bd9fb2f!2sGreen%20Earth%20Energy!5e0!3m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Green Earth Energy Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
