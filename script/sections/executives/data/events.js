const allSUGEvents = [
  {
    name: "Instant Cash Access for Students",
    date: new Date(2025, 3, 21),
    location: "SUG Resource Center POS Stand",
    description: "Withdraw as low as 40 NAIRA per thousand at Our SUG Resource Center POS Stand",
    reviews: "Convenient cash withdrawal service for students",
    host: {
      aluta: 26,
      family: "Aluta Wallet",
      position: "SUG Treasurer",
      name: "Charles Princess"
    },
    images: ["instant-cash-flyer.jpg"]
  },
  {
    name: "Career Fair 1.0 & Werden Conference",
    date: new Date(2025, 3, 21, 9, 0),
    location: "SOPS Theater",
    description: "Career development and networking event with industry speakers",
    reviews: "Featured speakers and panelists from various industries",
    host: {
      aluta: 26,
      family: "Aluta Wallet",
      position: "SUG Treasurer",
      name: "Charles Princess"
    },
    images: ["career-fair-flyer.jpg"]
  },
  {
    name: "Beyond the Books Podcast",
    date: new Date(2025, 0, 15),
    location: "Online/Virtual",
    description: "Harmattan Semester Achievement - Educational podcast series",
    reviews: "Part of SUG communication initiatives",
    host: {
      aluta: 26,
      family: "Aluta Pundit",
      position: "SUG PRO/DOI",
      name: "Alajemba Paul Uzochukwu"
    },
    images: ["beyond-books-podcast.jpg"]
  },
  {
    name: "FUTO Night Study Marathon",
    date: new Date(2025, 0, 15),
    location: "Various Campus Locations",
    description: "Organized night study sessions for students",
    reviews: "Successful study support initiative",
    host: {
      aluta: 26,
      family: "Aluta Pundit",
      position: "SUG PRO/DOI",
      name: "Alajemba Paul Uzochukwu"
    },
    images: ["night-study-marathon.jpg"]
  },
  {
    name: "SUG Act of Love 2.0",
    date: new Date(2025, 0, 15),
    location: "Campus Wide",
    description: "Student welfare and support initiative",
    reviews: "Community service and student support program",
    host: {
      aluta: 26,
      family: "Aluta Pundit",
      position: "SUG PRO/DOI",
      name: "Alajemba Paul Uzochukwu"
    },
    images: ["act-of-love.jpg"]
  },
  {
    name: "First Ever Women Volleyball Competition",
    date: new Date(2025, 0, 15),
    location: "FUTO Sports Facilities",
    description: "Inaugural women's volleyball tournament",
    reviews: "Historic sports event for female athletes",
    host: {
      aluta: 26,
      family: "Paulpular Sports",
      position: "SUG Director of Sports",
      name: "Paul Ndukwu"
    },
    images: ["volleyball-competition.jpg"]
  },
  {
    name: "FUTO Female Champions Cup",
    date: new Date(2025, 3, 10, 14, 0),
    location: "FUTO Main Pitch",
    description: "Women's football championship",
    reviews: "Promoting female sports participation",
    host: {
      aluta: 26,
      family: "Paulpular Sports",
      position: "SUG Director of Sports",
      name: "Paul Ndukwu"
    },
    images: ["female-champions-cup.jpg"]
  },
  {
    name: "FUTO Keep Fit Workout Program",
    date: new Date(2025, 0, 15),
    location: "Campus Facilities",
    description: "Keeping the body healthy - fitness program with Roland Paul",
    reviews: "Student wellness and fitness initiative",
    host: {
      aluta: 26,
      family: "Paulpular Sports",
      position: "SUG Director of Sports",
      name: "Paul Ndukwu"
    },
    images: ["keep-fit-program.jpg"]
  },
  {
    name: "NANS Female Frendlies",
    date: new Date(2025, 3, 9),
    location: "FUTO Main Pitch",
    description: "National Association of Nigerian Students friendly matches",
    reviews: "Inter-campus sports collaboration",
    host: {
      aluta: 26,
      family: "Paulpular Sports",
      position: "SUG Director of Sports",
      name: "Paul Ndukwu"
    },
    images: ["nans-frendlies.jpg"]
  },
  {
    name: "SUG Verified Stand",
    date: new Date(2025, 0, 15),
    location: "Hostel C and D",
    description: "All-round intervention for freshmen",
    reviews: "Support system for new students",
    host: {
      aluta: 26,
      family: "Aluta Thunderman",
      position: "SUG Director of Welfare",
      name: "Thunderly Ebubechukwu"
    },
    images: ["verified-stand.jpg"]
  },
  {
    name: "Feed 100 Students Initiative",
    date: new Date(2025, 0, 15),
    location: "Emmaabaka Ajolinke",
    description: "Student feeding program",
    reviews: "Welfare support for students in need",
    host: {
      aluta: 26,
      family: "Aluta Thunderman",
      position: "SUG Director of Welfare",
      name: "Thunderly Ebubechukwu"
    },
    images: ["feed-100.jpg"]
  },
  {
    name: "ENGAGE 5.0 Skill Acquisition",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Skills development program",
    reviews: "Empowering students with practical skills",
    host: {
      aluta: 26,
      family: "Aluta Thunderman",
      position: "SUG Director of Welfare",
      name: "Thunderly Ebubechukwu"
    },
    images: ["engage-5.jpg"]
  },
  {
    name: "Matriculation Promo - Phones and Laptops Accessories",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Sales promotion for new students",
    reviews: "Student-friendly technology deals",
    host: {
      aluta: 26,
      family: "Aluta Thunderman",
      position: "SUG Director of Welfare",
      name: "Thunderly Ebubechukwu"
    },
    images: ["matric-promo.jpg"]
  },
  {
    name: "Travel Back Safe Initiative",
    date: new Date(2025, 0, 15),
    location: "Transport Routes",
    description: "Official hotline for transport-related issues (0813 564 3030, 0818 887 0737)",
    reviews: "30% discount available",
    host: {
      aluta: 26,
      family: "Kanu Dangote",
      position: "SUG Director of Transport",
      name: "Kanu Ifeanyi Dangote"
    },
    images: ["travel-back-safe.jpg"]
  },
  {
    name: "FUTO First Tricycle Project (Keke)",
    date: new Date(2025, 0, 15),
    location: "Campus Transport",
    description: "Launch of campus tricycle transportation",
    reviews: "Improved campus mobility",
    host: {
      aluta: 26,
      family: "Kanu Dangote",
      position: "SUG Director of Transport",
      name: "Kanu Ifeanyi Dangote"
    },
    images: ["tricycle-project.jpg"]
  },
  {
    name: "FUTO Driving School 2.0",
    date: new Date(2025, 0, 15),
    location: "Campus (Contact: 0904-555-4226)",
    description: "Driving lessons and tutorials",
    reviews: "Affordable driving education for students",
    host: {
      aluta: 26,
      family: "Kanu Dangote",
      position: "SUG Director of Transport",
      name: "Kanu Ifeanyi Dangote"
    },
    images: ["driving-school.jpg"]
  },
  {
    name: "Subsided Travel Back with Ease Transportation Scheme",
    date: new Date(2025, 0, 15),
    location: "Transport Routes",
    description: "Affordable travel options for students",
    reviews: "Reduced transportation costs",
    host: {
      aluta: 26,
      family: "Kanu Dangote",
      position: "SUG Director of Transport",
      name: "Kanu Ifeanyi Dangote"
    },
    images: ["subsidized-travel.jpg"]
  },
  {
    name: "Financial Fitness Clinic",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Financial literacy program",
    reviews: "Building sustainable wealth systems",
    host: {
      aluta: 26,
      family: "Aluta CBN",
      position: "Financial Secretary, SUG",
      name: "Aguocha Samuel Aguwhite"
    },
    images: ["financial-fitness.jpg"]
  },
  {
    name: "Konoha Financial Conference",
    date: new Date(2025, 0, 15),
    location: "Campus Venue",
    description: "Financial education and awareness conference",
    reviews: "Expert speakers on financial management",
    host: {
      aluta: 26,
      family: "Aluta CBN",
      position: "Financial Secretary, SUG",
      name: "Aguocha Samuel Aguwhite"
    },
    images: ["konoha-conference.jpg"]
  },
  {
    name: "Trade Forex Like a Video Game",
    date: new Date(2025, 0, 15),
    location: "Online/Campus",
    description: "Interactive forex trading education",
    reviews: "Simplified forex learning approach",
    host: {
      aluta: 26,
      family: "Aluta CBN",
      position: "Financial Secretary, SUG",
      name: "Aguocha Samuel Aguwhite"
    },
    images: ["trade-forex.jpg"]
  },
  {
    name: "The Financial Freedom Blueprint",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Comprehensive financial planning seminar",
    reviews: "Roadmap to financial independence",
    host: {
      aluta: 26,
      family: "Aluta CBN",
      position: "Financial Secretary, SUG",
      name: "Aguocha Samuel Aguwhite"
    },
    images: ["financial-blueprint.jpg"]
  },
  {
    name: "Sustainable Wealth Systems",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Long-term wealth building strategies",
    reviews: "Financial planning for students",
    host: {
      aluta: 26,
      family: "Aluta CBN",
      position: "Financial Secretary, SUG",
      name: "Aguocha Samuel Aguwhite"
    },
    images: ["sustainable-wealth.jpg"]
  },
  {
    name: "Hosted Inclusive Student Union Activities",
    date: new Date(2025, 0, 15),
    location: "Campus Wide",
    description: "Various inclusive student activities",
    reviews: "Fostering unity and participation",
    host: {
      aluta: 26,
      family: "Aluta Active Mama",
      position: "SUG Vice President",
      name: "Adaugo Priscilla"
    },
    images: ["inclusive-activities.jpg"]
  },
  {
    name: "Record-Breaking Fresher's Night",
    date: new Date(2025, 0, 15),
    location: "Campus Venue",
    description: "Fresher's night with 5,000+ attendees",
    reviews: "Largest fresher's event in FUTO history",
    host: {
      aluta: 26,
      family: "Aluta Active Mama",
      position: "SUG Vice President",
      name: "Adaugo Priscilla"
    },
    images: ["freshers-night.jpg"]
  },
  {
    name: "Skill Acquisition Program for All FUTO Students",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Comprehensive skills training",
    reviews: "Practical skills for all students",
    host: {
      aluta: 26,
      family: "Aluta Active Mama",
      position: "SUG Vice President",
      name: "Adaugo Priscilla"
    },
    images: ["skill-acquisition.jpg"]
  },
  {
    name: "StudyFlex Payment Reduction for 500 Freshmen",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Negotiated fee reduction initiative",
    reviews: "Financial relief for new students",
    host: {
      aluta: 26,
      family: "Aluta Active Mama",
      position: "SUG Vice President",
      name: "Adaugo Priscilla"
    },
    images: ["studyflex-reduction.jpg"]
  },
  {
    name: "Career Development Sessions with Coca-Cola and PWAN Max",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Corporate partnership career sessions",
    reviews: "Industry exposure for students",
    host: {
      aluta: 26,
      family: "Aluta Active Mama",
      position: "SUG Vice President",
      name: "Adaugo Priscilla"
    },
    images: ["career-sessions.jpg"]
  },
  {
    name: "FUTO Welcome Back Party",
    date: new Date(2025, 0, 15),
    location: "Campus Venue",
    description: "The Amapirian Invasion - Welcome back celebration",
    reviews: "Exciting return to campus event",
    host: {
      aluta: 26,
      family: "Anita Steeze",
      position: "SUG Director of Socials",
      name: "Nduka Anita Chinemerem"
    },
    images: ["welcome-back-party.jpg"]
  },
  {
    name: "Mr and Miss GTCrea8",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Beauty pageant competition",
    reviews: "Showcasing student talent and personality",
    host: {
      aluta: 26,
      family: "Anita Steeze",
      position: "SUG Director of Socials",
      name: "Nduka Anita Chinemerem"
    },
    images: ["mr-miss-gtcrea8.jpg"]
  },
  {
    name: "FUTO Bonfire Night",
    date: new Date(2025, 0, 15),
    location: "Campus Open Area",
    description: "Bonfire celebration with giveaways",
    reviews: "Community building and entertainment",
    host: {
      aluta: 26,
      family: "Anita Steeze",
      position: "SUG Director of Socials",
      name: "Nduka Anita Chinemerem"
    },
    images: ["bonfire-night.jpg"]
  },
  {
    name: "FUTO Matric Laundry Promo",
    date: new Date(2025, 0, 15),
    location: "Lami Laundry & Services",
    description: "Refer or bring promotion for laundry services",
    reviews: "Student-friendly laundry deals",
    host: {
      aluta: 26,
      family: "Anita Steeze",
      position: "SUG Director of Socials",
      name: "Nduka Anita Chinemerem"
    },
    images: ["matric-laundry.jpg"]
  },
  {
    name: "Mr and Miss FUTO",
    date: new Date(2025, 3, 25, 20, 0),
    location: "SOPS Theatre",
    description: "The genesis of the rise of royalties - pageant competition",
    reviews: "Premier beauty and talent showcase",
    host: {
      aluta: 26,
      family: "Anita Steeze",
      position: "SUG Director of Socials",
      name: "Nduka Anita Chinemerem"
    },
    images: ["mr-miss-futo.jpg"]
  },
  {
    name: "Orezi Live in Concert",
    date: new Date(2025, 0, 15),
    location: "Campus Venue",
    description: "Musical concert with Orezi and Sparkle Tee",
    reviews: "High-energy musical performance",
    host: {
      aluta: 26,
      family: "Anita Steeze",
      position: "SUG Director of Socials",
      name: "Nduka Anita Chinemerem"
    },
    images: ["orezi-concert.jpg"]
  },
  {
    name: "Pen-Up FUTO 2.0",
    date: new Date(2025, 2, 19),
    location: "SEET AUD",
    description: "A 3-day intensive physical tutorial to unravel academic excellence",
    reviews: "Comprehensive academic support program",
    host: {
      aluta: 26,
      family: "Aluta Custodian 24/25",
      position: "Secretary General",
      name: "Okwuemeka"
    },
    images: ["pen-up-futo.jpg"]
  },
  {
    name: "Light Up Asiabaka Square",
    date: new Date(2025, 0, 15),
    location: "Asiabaka Square",
    description: "Infrastructure lighting project",
    reviews: "Improved campus lighting and safety",
    host: {
      aluta: 26,
      family: "Aluta Custodian 24/25",
      position: "Secretary General",
      name: "Okwuemeka"
    },
    images: ["light-up-asiabaka.jpg"]
  },
  {
    name: "AMA (Ask Me Anything) - Internship Session",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Interactive internship Q&A session",
    reviews: "Career guidance and internship opportunities",
    host: {
      aluta: 26,
      family: "Aluta Custodian 24/25",
      position: "Secretary General",
      name: "Okwuemeka"
    },
    images: ["ama-internship.jpg"]
  },
  {
    name: "FUTO Scholarships & Travel Abroad Forum 2.0",
    date: new Date(2025, 0, 15),
    location: "Campus",
    description: "Information about scholarships, internships, travel abroad and life/job opportunities",
    reviews: "Gateway to international opportunities",
    host: {
      aluta: 26,
      family: "Aluta Custodian 24/25",
      position: "Secretary General",
      name: "Okwuemeka"
    },
    images: ["scholarships-forum.jpg"]
  },
  {
    name: "Acapreneur 7.0",
    date: new Date(2025, 3, 2, 10, 0),
    location: "FUTO Guest House",
    description: "An illuminating road - entrepreneurship program (Entry is FREE)",
    reviews: "Inspiring the next generation of student entrepreneurs",
    host: {
      aluta: 26,
      family: "Aluta Trace-It",
      position: "Assistant Secretary General, SUG",
      name: "Madugba Tracy Chioma"
    },
    images: ["acapreneur.jpg"]
  }
];
