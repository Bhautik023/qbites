import ContactForm from "@/component/forms/ContactForm";
import React from "react";

export const metadata = {
  title: 'Contact Qbits Inverters | Solar EPC Services in Gujarat',
  description: 'Contact Qbits Inverters Limited for solar EPC services. Located in Surat, Gujarat with offices in Ahmedabad and Junagadh. Call +91 98765 43210 for solar solutions.',
  keywords: 'contact Qbits Inverters, solar EPC contact, Surat solar company, Gujarat solar services, solar installation contact',
  openGraph: {
    title: 'Contact Qbits Inverters - Solar EPC Services',
    description: 'Get in touch for solar EPC services across Gujarat. Offices in Surat, Ahmedabad, and Junagadh.',
    type: 'website'
  }
}


const Contact = () => {


  return (
    <div>
      <img
        src="/images/contact-us/hero-image.png"
        alt="main-image"
        className="w-full"
      />

      {/* Contact Form Section */}
      <div className=" py-16 px-4">
        <div className="max-w-6xl mx-auto border-2 border-[#16A16C] rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-4 justify-between relative px-3">

            {/* Left Side - Green Contact Card */}
            <div className="bg-[#16A16C] rounded-2xl py-4 px-6 my-2 text-white relative">
              <div className="absolute inset-0 z-0"> 
                <img src="/images/contact-us/get-in-touch.png" alt="frame" className="w-full h-full" />
              </div>

              {/* Let's Talk */}
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 text-white rounded-full flex items-center justify-center mr-3">
                    <img src="/images/contact/call.svg" alt="call-icon" />
                  </div>
                  <h3 className="font-semibold">Let's Talk</h3>
                </div>
                <p className="text-sm opacity-90 ml-9">+91 98765 43210 1</p>
              </div>

              {/* General Support */}
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <img src="/images/contact/email.svg" alt="email-icon" />
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
                  <div className="w-6 h-6rounded-full flex items-center justify-center mr-3">
                    <img src="/images/contact/location.svg" alt="location-icon" />
                  </div>
                  <h3 className="font-semibold">Address</h3>
                </div>
                <p className="text-sm opacity-90 ml-9">
                  201, Anupam square, SAT Swaminarayana
                  <br />
                  Temple Rd,  Mota Varachha, Surat,
                  <br />
                  Gujarat 394101
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl py-8 px-4 flex-1 max-w-2xl">
              <h2 className="text-2xl font-bold text-[#F69133] mb-6">
                Get in Touch
              </h2>

              <ContactForm />
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
