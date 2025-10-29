export function shortenDepartment(department){
  switch (department) {
    case "Petroleum Engineering":
      return "PET";
    case "Materials & Metallurgical Engineering":
      return "MME";
    case "Mechanical Engineering":
      return "MEE";
    case "Civil Engineering":
      return "CIE";
    case "Chemical Engineering":
      return "CHE";
    case "Food Science & Technology":
      return "FST";
    case "Polymer & Textile Engineering":
      return "PTE";
    case "Biomedical Engineering":
      return "BME";
    case "Agricultural and Bioresources Engineering":
      return "ABE";
    case "Mathematics":
      return "MTH";
    case "Physics":
      return "PHY";
    case "Chemistry":
      return "CHM";
    case "Statistics":
      return "STA";
    case "Science Laboratory Technology":
      return "SLT";
    case "Biochemistry":
      return "BCH";
    case "Microbiology":
      return "MCB";
    case "Biotechnology":
      return "BTC";
    case "Biology":
      return "BIO";
    case "Forensic Science":
      return "FRS";
    case "Agricultural Economics":
      return "AEC";
    case "Agricultural Extension":
      return "AEX";
    case "Animal Science and Technology":
      return "AST";
    case "Crop Science and Technology":
      return "CST";
    case "Fisheries and Aquaculture Technology":
      return "FAT";
    case "Forestry and Wildlife Technology":
      return "FWT";
    case "Soil Science and Technology":
      return "SST";
    case "Computer Science":
      return "CSC";
    case "Software Engineering":
      return "SOE";
    case "Cyber Security":
      return "CYB";
    case "Information Technology":
      return "IFT";
    case "Architecture":
      return "ARC";
    case "Building Technology":
      return "BLD";
    case "Environmental Management":
      return "EVM";
    case "Quantity Surveying":
      return "QST";
    case "Surveying and Geoinformatics":
      return "SVG";
    case "Urban and Regional Planning":
      return "URP";
    case "Estate Management and Evaluation":
      return "ESV";
    case "Logistics & Transport Technology":
      return "LTT";
    case "Entrepreneurship & Innovation Studies":
      return "ENI";
    case "Maritime Technology and Logistics":
      return "MST";
    case "Supply Chain Management":
      return "SCM";
    case "Financial Innovation and Technology":
      return "FIT";
    case "Project Management Technology":
      return "PMT";
    case "Prosthetics and Orthotics":
      return "POT";
    case "Environmental Health Science":
      return "EHS";
    case "Optometry":
      return "OPT";
    case "Public Health Technology":
      return "PUH";
    case "Dental Technology":
      return "DNT";
    case "Radiography":
      return "RAD";
    case "Mechatronics Engineering":
      return "MCE";
    case "Computer Engineering":
      return "CPE";
    case "Electronics Engineering":
      return "ELE";
    case "Telecommunications Engineering":
      return "TCE";
    case "Electrical (Power Systems) Engineering":
      return "EPE";
    case "Human Anatomy":
      return "ANA";
    case "Human Physiology":
      return "PHS";
    case "Medicine and Surgery (MBBS)":
      return "MBBS";
    case "Sustainable Social Development":
      return "SSD";
    case "Sustainable Environmental Studies":
      return "SES";
    case "Procurement Management":
      return "PRM";
    default:
      if (typeof department !== "string" || department.trim() === "") {
        return "";
      }

      let words = department.trim().split(/\s+/);
      let mainWords = words.filter(
        (word) => word.toLowerCase() !== "of" && word.toLowerCase() !== "&"
      );
      let filteredWords;

      if (mainWords.length < 4) {
        filteredWords = words.filter((word) => word.toLowerCase() !== "&");
      } else {
        filteredWords = mainWords;
      }

      let abbreviation;
      if (filteredWords.length === 1) {
        // One word: take first letter
        abbreviation = filteredWords[0].charAt(0).toUpperCase();
      } else if (filteredWords.length === 2) {
        // Two words: take first and second letter of first word, first letter of second word
        const firstWord = filteredWords[0];
        const secondWord = filteredWords[1];
        abbreviation = [
          firstWord.charAt(0).toUpperCase(),
          firstWord.length > 1 ? firstWord.charAt(1).toUpperCase() : "",
          secondWord.charAt(0).toUpperCase(),
        ]
          .filter((char) => char !== "")
          .join(".");
      } else {
        // Three or more words: take first letter of each word
        abbreviation = filteredWords
          .filter((word) => word.length > 0)
          .map((word) => word.charAt(0).toUpperCase())
          .join(".");
      }

      return abbreviation + (abbreviation.length > 0 ? "." : "");
  }
}

export function shortenFaculty(faculty){
  let words = faculty.split(" ");
  let mainWords = words.filter(
    (word) => word.toLowerCase() !== "of" && word !== "&"
  );
  let filteredWords;

  if (mainWords.length < 4) {
    filteredWords = words.filter((word) => word !== "&");
  } else {
    filteredWords = mainWords;
  }

  return (
    filteredWords.map((word) => word.charAt(0).toUpperCase()).join(".") + "."
  );
}
