export interface SiteContent {
    brandName: string;
    tagline: string;
    logo?: string;
    hero: {
        headline: string;
        subheadline: string;
        cta: string;
        ctaLink: string;
        secondaryCta: string;
        secondaryCtaLink: string;
        stats: { label: string; value: string }[];
    };
    about: {
        title: string;
        description: string;
        mission: string;
        vision: string;
        highlights: { icon: string; title: string; description: string }[];
    };
    services: {
        id: string;
        title: string;
        description: string;
        icon: string;
        features: string[];
    }[];
    countries: {
        id: string;
        name: string;
        code: string;
        flag: string;
        description: string;
        universities: string[];
        visaRequirements: string[];
        costEstimation: string;
        timeline: string;
        image: string;
        popular: boolean;
    }[];
    whyChooseUs: {
        title: string;
        description: string;
        icon: string;
    }[];
    streams: {
        name: string;
        colleges: string;
        description: string;
    }[];
    testimonials: {
        name: string;
        country: string;
        text: string;
        rating: number;
        avatar: string;
    }[];
    contact: {
        phone: string;
        email: string;
        whatsapp: string;
        offices: {
            city: string;
            address: string;
            phone: string;
            mapUrl: string;
        }[];
    };
    sections: { type: string; enabled: boolean }[];
    visaTypes: string[];
    seo: {
        title: string;
        description: string;
        keywords: string[];
    };
    courses?: {
        id: string;
        name: string;
        universityId: string;
        level: string;
        duration: string;
        durationMonths: number;
        intake: string[];
        country: string;
        category: string;
        annualFee: number;
        ieltsRequirement: number;
        type: "Public" | "Private";
    }[];
    universities: {
        id: string;
        name: string;
        logo: string;
        website: string;
        country: string;
    }[];
    blogPosts?: {
        id: string;
        title: string;
        excerpt: string;
        date: string;
        author: string;
        image: string;
        category: string;
    }[];
}

export const defaultContent: SiteContent = {
    brandName: "EDU GLOBAL OVERSEAS",
    tagline: "One Stop Destination For All Your Abroad Visas",
    hero: {
        headline: "Study Abroad: Your Journey, Perfectly Guided",
        subheadline:
            "No more waiting. Fast-track your admission to top global universities with a seamless process. Expert guidance from application to arrival.",
        cta: "Book Free Counselling",
        ctaLink: "/contact",
        secondaryCta: "Explore Countries",
        secondaryCtaLink: "/countries",
        stats: [
            { label: "Students Placed", value: "5000+" },
            { label: "Partner Universities", value: "200+" },
            { label: "Countries", value: "15+" },
            { label: "Success Rate", value: "98%" },
        ],
    },
    about: {
        title: "Who We Are",
        description:
            "Your trusted partner for study abroad—personalized counselling, profile evaluation, and end-to-end support for your university application. We guide your study abroad journey from first choice to first day on campus. Embark on your study abroad journey with confidence. Our dedicated team offers personalized counselling and profile evaluation to navigate the myriad of university and course options, ensuring you find the perfect match for your career aspirations.",
        mission:
            "To empower students worldwide with seamless access to quality international education through expert guidance, transparent processes, and unwavering support at every step of their journey.",
        vision:
            "To be the most trusted global education consultancy, transforming the overseas education landscape by making world-class university admissions accessible, efficient, and life-changing for every student.",
        highlights: [
            {
                icon: "GraduationCap",
                title: "Expert Counsellors",
                description: "Experienced advisors who have guided thousands of students to top universities worldwide.",
            },
            {
                icon: "Globe",
                title: "Global Network",
                description: "Partnerships with 200+ universities across 15+ countries for unmatched placement opportunities.",
            },
            {
                icon: "Award",
                title: "Proven Track Record",
                description: "98% visa success rate with over 5000 students successfully placed globally.",
            },
            {
                icon: "HeartHandshake",
                title: "End-to-End Support",
                description: "From university selection to post-arrival assistance, we're with you at every step.",
            },
        ],
    },
    services: [
        {
            id: "scholarships",
            title: "Scholarships",
            description:
                "Our team guides you through the scholarship application process so you can focus on your goals.",
            icon: "Trophy",
            features: [
                "Financial support for your education",
                "Prestigious recognition",
                "Reduced financial burden",
            ],
        },
        {
            id: "comprehensive-prep",
            title: "Comprehensive Preparation",
            description:
                "Ace your visa and university interviews with our organized mock sessions and constructive feedback.",
            icon: "BookOpen",
            features: [
                "Thorough preparation",
                "Constructive feedback",
                "Confidence for interviews",
            ],
        },
        {
            id: "communication",
            title: "Quick & Efficient Communication",
            description:
                "Experience our commitment to fast and efficient communication so you're never left waiting.",
            icon: "MessageSquare",
            features: [
                "Never left waiting",
                "Priority handling",
                "Clear and timely updates",
            ],
        },
        {
            id: "pre-departure",
            title: "Pre-Departure Support",
            description:
                "Everything you need for a hassle-free journey—from application tips to cultural insights.",
            icon: "Plane",
            features: [
                "Application tips",
                "Cultural insights",
                "Smooth transition",
            ],
        },
        {
            id: "application",
            title: "Tailored Application Assistance",
            description:
                "Clear advice and personalized support for compelling applications that stand out.",
            icon: "FileText",
            features: [
                "Demystified process",
                "Applications that stand out",
                "One-on-one guidance",
            ],
        },
        {
            id: "course-selection",
            title: "Guidance for Course Selection",
            description:
                "Personalized guidance in selecting the right courses and universities for your ambitions.",
            icon: "Compass",
            features: [
                "Fit for career ambitions",
                "Aligned with academic interests",
                "Informed decisions",
            ],
        },
    ],
    countries: [
        {
            id: "usa",
            name: "United States",
            code: "US",
            flag: "🇺🇸",
            description:
                "Home to the world's top-ranked universities, the USA offers unparalleled academic excellence, cutting-edge research opportunities, and a vibrant campus life. With flexible education systems and post-study work options, the US remains the #1 destination for international students.",
            universities: [
                "MIT",
                "Stanford University",
                "Harvard University",
                "Northeastern University",
                "Illinois Institute of Technology",
                "Washington State University",
                "Colorado State University",
                "State University of New York",
            ],
            visaRequirements: [
                "Valid passport",
                "I-20 form from university",
                "DS-160 application",
                "SEVIS fee payment",
                "Financial proof",
                "English proficiency (TOEFL/IELTS)",
            ],
            costEstimation: "$20,000 - $60,000 per year",
            timeline: "6-12 months before intake",
            image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2070&auto=format&fit=crop",
            popular: true,
        },
        {
            id: "uk",
            name: "United Kingdom",
            code: "GB",
            flag: "🇬🇧",
            description:
                "The UK is home to some of the oldest and most prestigious universities in the world. With shorter course durations, globally recognized degrees, and a rich cultural experience, the UK continues to attract students from around the globe.",
            universities: [
                "University of Oxford",
                "University of Cambridge",
                "University of Edinburgh",
                "University of Manchester",
                "Coventry University",
                "Imperial College London",
            ],
            visaRequirements: [
                "Valid passport",
                "CAS from university",
                "Tier 4 student visa application",
                "Financial proof (28 days)",
                "English proficiency (IELTS/PTE)",
                "TB test certificate",
            ],
            costEstimation: "£12,000 - £38,000 per year",
            timeline: "3-6 months before intake",
            image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2071&auto=format&fit=crop",
            popular: true,
        },
        {
            id: "canada",
            name: "Canada",
            code: "CA",
            flag: "🇨🇦",
            description:
                "Canada offers world-class education at affordable tuition fees, along with generous post-graduation work permits and immigration pathways. With its multicultural society and high quality of life, Canada is ideal for students seeking both education and long-term career opportunities.",
            universities: [
                "University of Toronto",
                "University of British Columbia",
                "McGill University",
                "University of Alberta",
                "University of Waterloo",
            ],
            visaRequirements: [
                "Valid passport",
                "Letter of acceptance",
                "Study permit application",
                "Financial proof",
                "English/French proficiency",
                "Medical examination",
            ],
            costEstimation: "CAD 15,000 - 35,000 per year",
            timeline: "4-8 months before intake",
            image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?q=80&w=1974&auto=format&fit=crop",
            popular: true,
        },
        {
            id: "australia",
            name: "Australia",
            code: "AU",
            flag: "🇦🇺",
            description:
                "Australia boasts world-renowned universities, a vibrant multicultural environment, and excellent post-study work opportunities. With its high-quality education system and welcoming lifestyle, Australia is a top choice for students worldwide.",
            universities: [
                "University of Melbourne",
                "Australian National University",
                "University of Sydney",
                "Macquarie University",
                "Monash University",
            ],
            visaRequirements: [
                "Valid passport",
                "CoE from university",
                "Subclass 500 student visa",
                "OSHC health insurance",
                "Financial proof",
                "English proficiency (IELTS/PTE)",
            ],
            costEstimation: "AUD 20,000 - 45,000 per year",
            timeline: "3-6 months before intake",
            image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
            popular: true,
        },
        {
            id: "germany",
            name: "Germany",
            code: "DE",
            flag: "🇩🇪",
            description:
                "Germany offers tuition-free education at many public universities, making it one of the most affordable destinations for international students. Known for its engineering and technology programs, Germany provides excellent career prospects in Europe's largest economy.",
            universities: [
                "Technical University of Munich",
                "LMU Munich",
                "Heidelberg University",
                "Humboldt University of Berlin",
                "RWTH Aachen University",
            ],
            visaRequirements: [
                "Valid passport",
                "University admission letter",
                "Student visa application",
                "Blocked account (€11,208/year)",
                "Health insurance",
                "Language proficiency",
            ],
            costEstimation: "€250 - €1,500 per semester (public)",
            timeline: "4-8 months before intake",
            image: "https://images.unsplash.com/photo-1599946347341-6cd3f4f783ea?q=80&w=2070&auto=format&fit=crop",
            popular: true,
        },
        {
            id: "ireland",
            name: "Ireland",
            code: "IE",
            flag: "🇮🇪",
            description:
                "Ireland is an emerging education hub with globally recognized universities and strong ties to the tech industry. With its English-speaking environment, work-friendly visa policies, and presence of major tech companies, Ireland offers great career opportunities.",
            universities: [
                "Trinity College Dublin",
                "University College Dublin",
                "National University of Ireland Galway",
                "Dublin City University",
            ],
            visaRequirements: [
                "Valid passport",
                "University acceptance letter",
                "Student visa application",
                "Financial proof (€7,000)",
                "Health insurance",
                "English proficiency",
            ],
            costEstimation: "€10,000 - €25,000 per year",
            timeline: "3-6 months before intake",
            image: "https://images.unsplash.com/photo-1590089413144-a90184a44f5b?q=80&w=2071&auto=format&fit=crop",
            popular: false,
        },
        {
            id: "france",
            name: "France",
            code: "FR",
            flag: "🇫🇷",
            description:
                "France offers excellent education at subsidized tuition rates, world-class art and business schools, and a rich cultural experience. With its central location in Europe, students can easily explore the continent while studying.",
            universities: [
                "Sorbonne University",
                "École Polytechnique",
                "Sciences Po",
                "HEC Paris",
                "University of Paris",
            ],
            visaRequirements: [
                "Valid passport",
                "Campus France registration",
                "Student visa application",
                "Financial proof (€615/month)",
                "Health insurance",
                "French/English proficiency",
            ],
            costEstimation: "€170 - €15,000 per year",
            timeline: "4-8 months before intake",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
            popular: false,
        },
    ],
    whyChooseUs: [
        {
            title: "Step-by-Step Guidance",
            description:
                "Receive straightforward instructions on completing your application flawlessly. We demystify every stage so you know exactly what to do next.",
            icon: "ListChecks",
        },
        {
            title: "Clear Criteria & Requirements",
            description:
                "Understand exactly what's needed for a successful application. No guesswork—we spell out eligibility, documents, and deadlines.",
            icon: "CheckCircle",
        },
        {
            title: "Defined Timelines",
            description:
                "Stay on track with detailed application and selection process timelines. Plan your year with confidence.",
            icon: "Clock",
        },
        {
            title: "Budget-Friendly Options",
            description:
                "Research costs, scholarships, and cost of living so you can plan wisely. We help you maximize value and access financial aid.",
            icon: "Wallet",
        },
        {
            title: "Expert Staff & Mentorship",
            description:
                "Invaluable advice, help solving complex issues, and guidance towards success. Learn from counsellors who've been there.",
            icon: "Users",
        },
        {
            title: "24/7 Emergency Support",
            description:
                "Round-the-clock support to address any emergencies or concerns. We're here when you need us most.",
            icon: "ShieldCheck",
        },
    ],
    streams: [
        { name: "Management", colleges: "460+", description: "Business, MBA, Marketing, Finance" },
        { name: "STEM", colleges: "537+", description: "Science, Technology, Engineering, Mathematics" },
        { name: "Medicine", colleges: "231+", description: "MBBS, Nursing, Pharmacy, Dentistry" },
        { name: "Law", colleges: "706+", description: "LLB, LLM, International Law, Corporate Law" },
    ],
    testimonials: [
        {
            name: "Priya Sharma",
            country: "Studying in UK",
            text: "EDU GLOBAL OVERSEAS made my dream of studying at a top UK university a reality. Their guidance was exceptional from application to visa approval. I couldn't have done it without them!",
            rating: 5,
            avatar: "PS",
        },
        {
            name: "Rahul Patel",
            country: "Studying in Canada",
            text: "The team's expertise in Canadian university admissions is unmatched. They helped me secure admission with a scholarship at the University of Toronto. Highly recommended!",
            rating: 5,
            avatar: "RP",
        },
        {
            name: "Ananya Reddy",
            country: "Studying in Australia",
            text: "From course selection to pre-departure support, every step was handled professionally. I'm now at Macquarie University, and it's all thanks to their meticulous planning.",
            rating: 5,
            avatar: "AR",
        },
        {
            name: "Mohammed Khan",
            country: "Studying in Germany",
            text: "Getting admission in Germany seemed complex, but their step-by-step guidance made it stress-free. The blocked account process and visa were handled seamlessly.",
            rating: 5,
            avatar: "MK",
        },
        {
            name: "Sneha Nair",
            country: "Studying in USA",
            text: "I got into Northeastern University with their help! The mock interview sessions and SOP guidance were game-changers. Best consultancy experience ever!",
            rating: 5,
            avatar: "SN",
        },
        {
            name: "Vikram Singh",
            country: "Studying in Ireland",
            text: "Their 24/7 support during my visa process was incredible. Whenever I had doubts, they were just a call away. Now happily studying in Dublin!",
            rating: 4,
            avatar: "VS",
        },
    ],
    contact: {
        phone: "+91 73826 18262",
        email: "info@eduglobaloverseas.com",
        whatsapp: "917382618262",
        offices: [
            {
                city: "Vijayawada (Head Office)",
                address:
                    "3rd floor, Fun Times Club Navamallika Apartments, besides Funtime Rd, New Postal Colony-2, State Bank Colony, Vijayawada, Andhra Pradesh 520008, India",
                phone: "+91 73826 18262",
                mapUrl: "https://maps.app.goo.gl/ErxJ4ZmkdpKee4rv8",
            },
            {
                city: "Hyderabad (Corporate Office)",
                address:
                    "Flat no 202, 2nd floor, Image Enclave Building, Cyber Hills Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081, India",
                phone: "+91 96762 64487",
                mapUrl: "",
            },
            {
                city: "Chennai",
                address:
                    "First Floor, Flat No 101, 54th Ln, 11th Avenue, Indira Colony, Ashok Nagar, Chennai, Tamil Nadu 600083, India",
                phone: "+91 80988 36057",
                mapUrl: "https://maps.app.goo.gl/ZofQaRuKLQs2Yigj8",
            },
            {
                city: "Nellore",
                address:
                    "1st Floor, Gowd Complex, D.No: 23/985, above HDFC Bank, beside A2B Restaurant, Ramesh Reddy Nagar, Nellore, Andhra Pradesh 524003, India",
                phone: "+91 76718 73363",
                mapUrl: "https://maps.app.goo.gl/pyZqog55Kn2m4fW5A",
            },
        ],
    },
    sections: [
        { type: "hero", enabled: true },
        { type: "streams", enabled: true },
        { type: "countries", enabled: true },
        { type: "about", enabled: true },
        { type: "whyChooseUs", enabled: true },
        { type: "services", enabled: true },
        { type: "testimonials", enabled: true },
        { type: "cta", enabled: true },
        { type: "contact", enabled: true },
    ],
    visaTypes: [
        "Student Visa",
        "Work Visa",
        "Tourist Visa",
        "PR Visa",
        "Dependent Visa",
        "Business Visa",
    ],
    seo: {
        title: "EDU GLOBAL OVERSEAS – One Stop Destination For All Your Abroad Visas",
        description:
            "Leading overseas education consultancy specializing in university admissions, visa assistance, and career guidance for studying abroad in USA, UK, Canada, Australia, Germany, and more.",
        keywords: [
            "study abroad",
            "overseas education",
            "student visa",
            "university admission",
            "education consultancy",
            "IELTS preparation",
            "study in UK",
            "study in USA",
            "study in Canada",
            "study in Australia",
        ],
    },
    universities: [
        { id: "u1", name: "Heriot Watt University", logo: "HW", website: "https://www.hw.ac.uk/", country: "uk" },
        { id: "u2", name: "Northeastern University", logo: "NEU", website: "https://www.northeastern.edu/", country: "usa" },
        { id: "u3", name: "University of Toronto", logo: "UT", website: "https://www.utoronto.ca/", country: "canada" },
        { id: "u4", name: "Technical University of Munich", logo: "TUM", website: "https://www.tum.de/", country: "germany" },
        { id: "u5", name: "Trinity College Dublin", logo: "TCD", website: "https://www.tcd.ie/", country: "ireland" },
        { id: "u6", name: "Sorbonne University", logo: "SU", website: "https://www.sorbonne-universite.fr/", country: "france" },
    ],
    courses: [
        { id: "c1", name: "MA Interior Architecture and Design", universityId: "u1", level: "Masters", duration: "1 Year", durationMonths: 12, intake: ["Jan", "Sep"], country: "uk", category: "Arts", annualFee: 19056, ieltsRequirement: 6.5, type: "Public" },
        { id: "c2", name: "MSc Civil Engineering and Construction management", universityId: "u1", level: "Masters", duration: "1 Year", durationMonths: 12, intake: ["Jan", "Sep"], country: "uk", category: "Stem", annualFee: 19056, ieltsRequirement: 6.5, type: "Public" },
        { id: "c3", name: "Data Science", universityId: "u2", level: "Masters", duration: "2 Years", durationMonths: 24, intake: ["Fall", "Spring"], country: "usa", category: "Stem", annualFee: 35000, ieltsRequirement: 7.0, type: "Private" },
        { id: "c4", name: "MBA", universityId: "u3", level: "Masters", duration: "2 Years", durationMonths: 24, intake: ["Sep"], country: "canada", category: "Management", annualFee: 45000, ieltsRequirement: 7.5, type: "Public" },
    ],
    blogPosts: [
        {
            id: "b1",
            title: "Post-Study Work Permits in UK 2026",
            excerpt: "Everything you need to know about the Graduate Route visa and staying in the UK after graduation.",
            date: "May 10, 2026",
            author: "Admin",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
            category: "Visa Updates"
        },
        {
            id: "b2",
            title: "Top 5 Affordable Universities in Germany",
            excerpt: "Discover public universities in Germany with low or no tuition fees for international students.",
            date: "May 12, 2026",
            author: "Expert",
            image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
            category: "University Guide"
        }
    ]
};
