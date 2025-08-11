import React from "react";

export const metadata = {
    title: "Events & Gallery - Qbits Inverters | Company Culture & Activities",
    description:
        "Explore Qbits Inverters's company culture through our festivals, team trips, and office events. See how we celebrate success and build team spirit.",
    keywords:
        "Qbits Inverters events, company culture, team activities, festivals, office events, company gallery",
    openGraph: {
        title: "Events & Gallery - Qbits Inverters",
        description:
            "Company culture, festivals, trips, and office events at Qbits Inverters.",
        type: "website",
    },
};

const Events = () => {
    // Sample data for festivals
    const festivals = [
        { id: 1, image: "/images/events/event-image.png", title: "Festival 1" },
        { id: 2, image: "/images/events/event-image.png", title: "Festival 2" },
        { id: 3, image: "/images/events/event-image.png", title: "Festival 3" },
        { id: 4, image: "/images/events/event-image.png", title: "Festival 4" },
        { id: 5, image: "/images/events/event-image.png", title: "Festival 5" },
        { id: 6, image: "/images/events/event-image.png", title: "Festival 6" },
        { id: 7, image: "/images/events/event-image.png", title: "Festival 7" },
        { id: 8, image: "/images/events/event-image.png", title: "Festival 8" },
    ];

    // Sample data for trips
    const trips = [
        { id: 1, image: "/images/events/event-image.png", title: "Trip 1" },
        { id: 2, image: "/images/events/event-image.png", title: "Trip 2" },
        { id: 3, image: "/images/events/event-image.png", title: "Trip 3" },
        { id: 4, image: "/images/events/event-image.png", title: "Trip 4" },
        { id: 5, image: "/images/events/event-image.png", title: "Trip 5" },
        { id: 6, image: "/images/events/event-image.png", title: "Trip 6" },
        { id: 7, image: "/images/events/event-image.png", title: "Trip 7" },
        { id: 8, image: "/images/events/event-image.png", title: "Trip 8" },
    ];

    // Sample data for offices
    const offices = [
        { id: 1, image: "/images/events/event-image.png", title: "Office 1" },
        { id: 2, image: "/images/events/event-image.png", title: "Office 2" },
        { id: 3, image: "/images/events/event-image.png", title: "Office 3" },
        { id: 4, image: "/images/events/event-image.png", title: "Office 4" },
        { id: 5, image: "/images/events/event-image.png", title: "Office 5" },
        { id: 6, image: "/images/events/event-image.png", title: "Office 6" },
        { id: 7, image: "/images/events/event-image.png", title: "Office 7" },
        { id: 8, image: "/images/events/event-image.png", title: "Office 8" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Image */}
            <div className="w-full">
                <img
                    src="/images/events/hero-image.png"
                    alt="main-image"
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
            </div>

            {/* Events Section */}
            <div className="w-full px-4 py-12">
                {/* Festivals Section */}
                <section className="mb-16 container mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-8">
                            Festivals
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {festivals.map((festival) => (
                            <div
                                key={festival.id}
                                className="bg-white rounded-xl border-2 border-[#16A16C] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                                    <img
                                        src={festival.image}
                                        alt={festival.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="hidden w-full h-full bg-gray-200 items-center justify-center">
                                        <svg
                                            className="w-12 h-12 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-gray-900 text-center">
                                        {festival.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Trips Section */}
                <section className="mb-16 bg-[#16A16C] -mx-4 px-4 py-12 md:py-16">
                    <div className="container mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                                Our Trips
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {trips.map((trip) => (
                                <div
                                    key={trip.id}
                                    className="bg-white rounded-xl border-2 border-[#F69133] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                                        <img
                                            src={trip.image}
                                            alt={trip.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="hidden w-full h-full bg-gray-200 items-center justify-center">
                                            <svg
                                                className="w-12 h-12 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-sm font-medium text-gray-900 text-center">
                                            {trip.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Offices Section */}
                <section className="mb-16 container mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                            Our Offices
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {offices.map((office) => (
                            <div
                                key={office.id}
                                className="bg-white rounded-xl border-2 border-[#16A16C] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                                    <img
                                        src={office.image}
                                        alt={office.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="hidden w-full h-full bg-gray-200 items-center justify-center">
                                        <svg
                                            className="w-12 h-12 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-gray-900 text-center">
                                        {office.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Events;
