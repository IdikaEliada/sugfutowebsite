
const allPROs = [
  {
    number: 1,
    name: "Comr Ibiam Idika",
    department: "Software Engineering",
    position: "PRO of Software Engineering",
    status: "Currently planning an election",
    handoverTime: "At least till the 100 levels matriculate"
  },
  {
    number: 2,
    name: "Comr. Enwere Esther Chinazaekpere",
    department: "Science Laboratory Technology",
    position: "PRO of SLT",
    status: "Current PRO",
    handoverTime: "End of next semester"
  },
  {
    number: 3,
    name: "Comr. Confidence Michael",
    department: "Project Management Technology",
    position: "PRO of SLIT",
    status: "Current PRO",
    handoverTime: "End of next session"
  },
  {
    number: 4,
    name: "Comr. Chukwuemeka Chigozirim Charles",
    department: "Electrical Engineering",
    position: "PRO of EPE",
    status: "Current PRO",
    handoverTime: "This semester"
  },
  {
    number: 5,
    name: "Comr. Iroham Excel",
    department: "Logistics and Transport Technology",
    position: "Current PRO",
    status: "Current PRO",
    handoverTime: "End of next session"
  },
  {
    number: 6,
    name: "Comr. Tochukwu Divine-favour Uchechi",
    department: "Mechatronics Engineering",
    position: "PRO of NUESA-SESET",
    status: "Current PRO",
    handoverTime: "End of this semester"
  },
  {
    number: 7,
    name: "Comr. Marvelous Chigozirim Obinwanne",
    department: "Civil Engineering",
    position: "Current PRO",
    status: "Current PRO",
    handoverTime: "End of 2nd semester next session"
  },
  {
    number: 8,
    name: "Comr. Owolarafe Ayomide Precious",
    department: "Dental Technology",
    school: "School of Health Technology",
    position: "P.R.O elect",
    status: "PRO elect",
    handoverTime: null
  },
  {
    number: 9,
    name: "Journ. Comr. Okoye Obinna Josemaria",
    department: "Computer Engineering",
    position: "PRO",
    status: "Current PRO",
    handoverTime: "End of the semester"
  },
  {
    number: 10,
    name: "Comr. Nwaogbe Henry Chibinyerem",
    department: "Mechatronics Engineering",
    position: "PRO-elect",
    status: "PRO elect",
    handoverTime: null
  },
  {
    number: 11,
    name: "Comr. Onyeukwu Obinna .N.",
    department: "Civil Engineering",
    position: "P.R.O NDDC HOSTEL",
    status: "Current PRO",
    handoverTime: "End of semester"
  },
  {
    number: 12,
    name: "CHUKWUGOZIE WISDOM C (WILSON)",
    department: "Telecommunication Engineering",
    position: "PRO-ELECT",
    status: "PRO elect",
    handoverTime: null
  },
  {
    number: 13,
    name: "Comr. Onyemuwa C. Clement",
    department: "Radiography",
    school: "School of Health Technology (SOHT)",
    position: "PRO elect",
    status: "PRO elect",
    handoverTime: null
  },
  {
    number: 14,
    name: "JC. Barr. Comr. Iwuchukwu Victory Chiekwugo (NIMechE Aproko)",
    department: "Mechanical Engineering",
    position: "Public Relations Officer (P.R.O.)",
    status: "Current PRO",
    handoverTime: "End of 2025/2026 session"
  },
  {
    number: 15,
    name: "Agam-David Hossana",
    department: "Electrical Engineering (EPE)",
    position: "PRO-elect",
    status: "PRO elect",
    handoverTime: null
  },
  {
    number: 16,
    name: "Kalagbor David .C.",
    department: "Petroleum Engineering",
    position: "PRO/DOI",
    status: "Current PRO",
    handoverTime: null
  },
  {
    number: 17,
    name: "Comr. Ibe Christabel.C",
    department: "Physics",
    position: "PRO of Physics Department",
    status: "Current PRO",
    handoverTime: "End of the session"
  },
  {
    number: 18,
    name: "Comr. Eddyson Nmesoma C. (Mr Telecom)",
    department: "TCE/FSSJ/FOMS",
    position: "Outgoing PRO of TCE, Current PRO of FSSJ and FOMS",
    status: "Current PRO (FSSJ/FOMS), Outgoing PRO (TCE)",
    handoverTime: "TCE: Not less than 3 weeks after resumption, FSSJ/FOMS: Next session"
  },
  {
    number: 19,
    name: "Comr. Ahiakwo John",
    department: "Software Engineering",
    position: "Current Director of ICT/Research, ASICTS",
    status: "Current Director",
    handoverTime: null
  },
  {
    number: 20,
    name: "Comr. Chukwuemeka Amarachi Precious",
    department: null,
    position: "Current PRO of Tetfund Hall A",
    status: "Current PRO",
    handoverTime: "End of this semester"
  },
  {
    number: 21,
    name: "Comr. Ibeakanma Uzodinma A. (Dema)",
    department: "Medicine and Surgery",
    position: "Public Relations Officer (PRO), FUTO Bar Association",
    status: "Current PRO",
    handoverTime: "Next semester ending"
  },
  {
    number: 22,
    name: "Comr. Wisdom Chizaram Okoronkwo",
    department: "Chemical Engineering",
    position: "Public Relations Officer (PRO)",
    status: "Elected PRO",
    handoverTime: null
  },
  {
    number: 23,
    name: "Comr. Nwobodo Favour Ngozi",
    department: "Environmental Health Science",
    position: "Public Relation Officer (PRO)",
    status: "Elected PRO",
    handoverTime: "Next semester ending"
  },
  {
    number: 24,
    name: "Comr. Chibueze Somtochukwu Stephen (CSS)",
    department: "Information Technology (IFT)",
    position: "PUBLIC RELATIONS OFFICER (PRO)",
    status: "Current PRO",
    handoverTime: null
  },
  {
    number: 25,
    name: "Comr. Nwosu Chidinma Lorrita",
    department: "Science And Laboratory Technology (SLT)",
    position: "APSS PRO Elect",
    status: "PRO Elect",
    handoverTime: null
  },
  {
    number: 26,
    name: "Comr. Onuegbu Ugochukwu Evans",
    department: "Mechatronics Engineering",
    position: "PRO of MCE",
    status: "Current PRO",
    handoverTime: "Beginning of next semester"
  },
  {
    number: 27,
    name: "Comr. Emelle Chibuikem Jed",
    department: "Software Engineering",
    position: "Current PRO/DOI of SICT Faculty",
    status: "Current PRO/DOI",
    handoverTime: null
  },
  {
    number: 28,
    name: "Barr Comr. Ogbonna Success",
    department: "Petroleum Engineering",
    position: "PRO/DOI ELECT NUESA/SEET",
    status: "PRO/DOI Elect",
    handoverTime: null
  },
  {
    number: 29,
    name: "Comr. Alexander Ifeanyi",
    department: "Supply Chain Management",
    position: "Current P.R.O of S.C.M",
    status: "Current PRO",
    handoverTime: null
  }
];
