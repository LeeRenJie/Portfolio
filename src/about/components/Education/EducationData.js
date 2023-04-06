const [chs1, chs2, chs3, chs4]  = [
  "My SPM (Final Exam) results were 8A & 2B. Subjects examined included Biology, Physics, Chemistry, Additional Mathematics, Mathematics, History, Moral, Chinese, English, and Malay.",
  "For extracurricular activies, I was active in Wushu Club, Badminton Club, Red House and Anti-drug Society throughout the years. I was very active in the participation of activities for red house and Anti-drug society during the final two years.",
  "In 2018, I participated in the red house marching team during the annual sports day. Our house won the first place among other houses.",
  'In my final year (2019), We had a theme of Mario for our decorations. Me and my red house friends were responsible to build a fully playable pinball machine from recyclable items. We won first in decoration for the annual sports day. I also helped with the lava wall made out of egg cartons, a "Mario Cart" made out of pipes and bottles, and many other props! I was the Head of Discipline for the Badminton Club and the Head of Cleanliness in class too.',
]

const [apu1, apu2, apu3, apu4, apu5, apu6, apu7, apu8] = [
  "Overall CGPA: 3.79.",
  "I joined the Student Developer Society (SDS) of APU in the development team.",
  "Helped APUSDS in their Git and UI/UX workshop.",
  "Pioneer Member of Integrated Sustainability & Urban Creativity Centre (ISUC) Student Chapter of APU.",
  "Helped in Three fundraising events that succesfully raised over RM10 000 with ISUC Student Chapter as the head of sales.",
  "Built projects for assignments such as a pet store website for my web dev module, Python CLI Car Rental System for my python module, and a Judging System Website (HTML, CSS, PHP) for my final Diploma project.",
  "Went to my first internship as a web developer apprentice.",
  "Successfully graduated and continued in a CS degree with APU."
]

const [cs1,cs2,cs3,cs4] = [
  "Current GPA: 3.6",
  "Joined my first hackathon (Varsity Hackathon USM 2023) as the group leader with an idea of a blockchain identity verfication app for Malaysians to have access to government e-services.",
  "Received excellent feedback from judges, including the formulation of the concept, excellent pitching, better than competitors, impressive use of technologies like blockchain, and a user-friendly interface.",
  "Current projects for assignment includes: Inventory management system (Assembly, Computer System Low Level Technique Module). Airport simulation Program (Java, Concurrent Programming Module). Top university recommendation system (C++, Data Structures). Automated Scene Description with Image Processing Program (Python, Imaging and Special Effects)",
  "I am also writing a research paper on \"Blockchain-based voting system for Malaysia.\""
]

const items = [
  {
    title: "2022 to 2024",
    cardTitle: "Asia Pacific University of Technology & Innovation",
    cardSubtitle:
      "2 years in Computer Science Degree",
    cardDetailedText: [cs1,cs2,cs3,cs4],
  },
  {
    title: "2020 to 2022",
    cardTitle: "Asia Pacific University of Technology & Innovation",
    cardSubtitle:
      "2 years in Diploma in ICT With A Specialism in Software Engineering",
    cardDetailedText: [apu1, apu2, apu3, apu4, apu5, apu6, apu7, apu8],
  },
  {
    title: "2015 to 2019",
    cardTitle: "Catholic High School",
    cardSubtitle: `5 years of Science Stream Education`,
    cardDetailedText: [chs1, chs2, chs3, chs4],
  },
  {
    title: "2009 to 2014",
    cardTitle: "SJKC Puay Chai",
    cardSubtitle: `6 years of primary education`,
    cardDetailedText: `I was very active in the badminton club throughout all 6 years. I was also in the band playing the percussion instruments during the first two years. I then switched to become a scout`,
  },
];

export default items;
