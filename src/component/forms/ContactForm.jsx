"use client";
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email.";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^[0-9]{7,15}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone number.";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ type: "", message: "" });

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setStatus({ type: "error", message: "Please fix the errors above." });
            return;
        }

        // API integration will go here later
        console.log("Form submitted:", formData);

        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Status message */}
            {status.message && status.type === "success" && (
                <div
                    className={`p-3 rounded-lg text-sm ${
                        status.type === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {status.message}
                </div>
            )}

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${
                            errors.name
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-green-500"
                        }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${
                            errors.email
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-green-500"
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
            </div>

            {/* Phone & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <input
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${
                            errors.phone
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-green-500"
                        }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${
                            errors.subject
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-green-500"
                        }`}
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
            </div>

            {/* Message */}
            <div>
                <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
                        errors.message
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-green-500"
                    }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
                Send Message →
            </button>
        </form>
    );
};

export default ContactForm;
