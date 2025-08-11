const metas = [
    {
        title: "Heaven Green Energy - Leading Solar EPC Company in Gujarat | Qbits Inverters",
        description:
            "Heaven Green Energy Limited - Gujarat's top 3 EPC firm with 10,000+ solar installations. Makers of Qbits intelligent on-grid solar inverters. ISO 9001 certified, official Adani Solar distributor.",
        keywords:
            "solar energy, EPC company Gujarat, solar installation, Qbits inverters, Heaven Green Energy, solar panels, renewable energy, Surat solar company",
        author: "Heaven Green Energy Limited",
        robots: "index, follow",
        viewport: "width=device-width, initial-scale=1",
        openGraph: {
            title: "Heaven Green Energy - Leading Solar EPC Company in Gujarat",
            description:
                "Gujarat's trusted solar EPC company with 10,000+ installations. Makers of Qbits intelligent solar inverters.",
            type: "website",
            locale: "en_IN",
            siteName: "Heaven Green Energy",
        },
        twitter: {
            card: "summary_large_image",
            title: "Heaven Green Energy - Leading Solar EPC Company",
            description:
                "Gujarat's trusted solar EPC company with 10,000+ installations.",
        },
    },
    {
        title: "About Us - Heaven Green Energy | Solar EPC Company Since 2017",
        description:
            "Established in 2017, Heaven Green Energy Limited is one of Gujarat's most trusted solar EPC companies with 10,000+ installations. ISO 9001 certified, official Adani Solar distributor.",
        keywords:
            "about Heaven Green Energy, solar EPC company, Gujarat solar, DISCOM partner, GEDA, SLDC, GUVNL, ISO 9001, Adani Solar distributor",
        openGraph: {
            title: "About Heaven Green Energy - Trusted Solar EPC Company",
            description:
                "Established in 2017 with 10,000+ solar installations across Gujarat. ISO 9001 certified and official Adani Solar distributor.",
            type: "website",
        },
    },
    {
        title: "Contact Heaven Green Energy | Solar EPC Services in Gujarat",
        description:
            "Contact Heaven Green Energy Limited for solar EPC services. Located in Surat, Gujarat with offices in Ahmedabad and Junagadh. Call +91 98765 43210 for solar solutions.",
        keywords:
            "contact Heaven Green Energy, solar EPC contact, Surat solar company, Gujarat solar services, solar installation contact",
        openGraph: {
            title: "Contact Heaven Green Energy - Solar EPC Services",
            description:
                "Get in touch for solar EPC services across Gujarat. Offices in Surat, Ahmedabad, and Junagadh.",
            type: "website",
        },
    },
    {
        title: "Qbits Solar Inverters - Single & Three Phase Grid Tie Inverters | Heaven Green Energy",
        description:
            "Qbits intelligent on-grid solar inverters from 1KW to 30KW. Single phase and three phase grid tie inverters with AI-powered monitoring, IP65 rating, and 98% conversion efficiency.",
        keywords:
            "Qbits inverters, solar inverters, grid tie inverters, single phase inverters, three phase inverters, on-grid solar inverter, solar power inverter",
        openGraph: {
            title: "Qbits Solar Inverters - Intelligent Grid Tie Inverters",
            description:
                "Advanced solar inverters from 1KW to 30KW with AI-powered monitoring and 98% efficiency.",
            type: "website",
        },
    },
    {
        title: "Downloads - Qbits Solar Inverter Resources | Heaven Green Energy",
        description:
            "Download Qbits solar inverter brochures, technical specifications, installation guides, and product catalogs. Get all resources for Heaven Green Energy solar products.",
        keywords:
            "Qbits downloads, solar inverter brochures, technical specifications, installation guides, product catalogs, Heaven Green Energy resources",
        openGraph: {
            title: "Downloads - Qbits Solar Inverter Resources",
            description:
                "Download brochures, specifications, and guides for Qbits solar inverters.",
            type: "website",
        },
    },
    {
        title: "Events & Gallery - Heaven Green Energy | Company Culture & Activities",
        description:
            "Explore Heaven Green Energy's company culture through our festivals, team trips, and office events. See how we celebrate success and build team spirit.",
        keywords:
            "Heaven Green Energy events, company culture, team activities, festivals, office events, company gallery",
        openGraph: {
            title: "Events & Gallery - Heaven Green Energy",
            description:
                "Company culture, festivals, trips, and office events at Heaven Green Energy.",
            type: "website",
        },
    },
    {
        title: "Why Choose Qbits Solar Inverters | Smart Features & Benefits",
        description:
            "Discover why Qbits solar inverters are the smart choice - 98% conversion efficiency, Qbits App monitoring, future-ready technology, and trusted by 10,000+ Heaven Solar installations.",
        keywords:
            "why choose Qbits, solar inverter benefits, 98% efficiency, Qbits app, smart solar inverters, Heaven Solar, solar inverter features",
        openGraph: {
            title: "Why Choose Qbits Solar Inverters",
            description:
                "Smart solar inverters with 98% efficiency, app monitoring, and future-ready technology.",
            type: "website",
        },
    },
];

getMetaData = (page) => {
    return metas[page];
};
