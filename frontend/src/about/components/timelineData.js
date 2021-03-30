const [chs1, chs2, chs3, chs4]  = [
    "My SPM (Final Exam) results were 8A & 2B. Subjects included were Biology, Physics, Chemistry, Additional Mathematics, Mathematics, History, Moral, Chinese, English, and Malay.",
    "For extracurricular activies, I was active in Wushu Club, Badminton Club, Red House and Anti-drug Society throughout the years. I was very active in the participation of activities for red house and Anti-drug society during the final two years.", 
    "In 2018, I participated in the red house marching team during the annual sports day. Our house won the first place among other houses.", 
    'In my final year (2019), We had a theme of Mario for our decorations. Me and my red house friends were responsible to build a fully playable pinball machine from recyclable items. We won first in decoration for the annual sports day. I also helped with the lava wall made out of egg cartons, a "Mario Cart" made out of pipes and bottles, and many other props! I was the Head of Discipline for the Badminton Club and the Head of Cleanliness in class too.', 
] 

const [apu1, apu2, apu3, apu4] = [
    "During the first year, I joined the Developer Student Club of APU (DSC) and two fundraising events that succesfully raised over RM10 000.",
    "Modules in the first semester includes English For Academic Purposes, Fundementals Of Entrepreneurship, Malaysian Studies, Managing Business, Practical IT Skills, and Academic Research Skills. I had a 3.83 GPA", 
    "Modules in the second semester includes CoCurricular Module, Discrete Maths, Information System, Academic Research Skills, and Professional Communications. I had a 4.0 GPA",
    "I am currently in the third semester with modules including Computer System Architecture, Database System, Environmental Issues in Malaysia, Operating System, and Programming with Python."
]

const items = [
  {
    title: "May 2020 to Now",
    cardTitle: "Asia Pacific University of Technology & Innovation",
    cardSubtitle:
      "Diploma in Information Technology With A Specialism in Software Engineering",
    cardDetailedText: [apu1, apu2, apu3, apu4],
  },
  {
    title: "2015 to 2019",
    cardTitle: "Catholic High School",
    cardSubtitle: `Science Stream`,
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
