export type TeamMember = {
  img: string;
  name: string;
  position: string;
  major?: string;
};

export type RosterMember = [name: string, major: string, img: string];
export type DivisionRoster = [number: string, division: string, focus: string, members: RosterMember[]];

import advisorImage from "../assets/images/teams/advisor/advisor.png";
import leaderImage from "../assets/images/teams/leader/leader.png";
import pmEconnImage from "../assets/images/teams/technical/PM ECONN 2.png";
import hanifImage from "../assets/images/teams/technical/ELEKTRIK MAS HANIP 2.png";
import devanImage from "../assets/images/teams/technical/ELEKTRIK DEVAN 2.png";
import cekingImage from "../assets/images/teams/technical/ELEKTRIK CEKING 2.png";
import andraImage from "../assets/images/teams/technical/ELEKTRIK ANDRA 2.png";
import rizaImage from "../assets/images/teams/technical/MEKANIK RIZA 2.png";
import amirImage from "../assets/images/teams/technical/MEKANIK AMIR 2.png";
import samImage from "../assets/images/teams/technical/MEKANIK SAM 2.png";
import arsoImage from "../assets/images/teams/technical/MEKANIK ARSO 2.png";
import erikImage from "../assets/images/teams/technical/PROGRAM ERIK 2.png";
import vitoImage from "../assets/images/teams/technical/PROGRAM VITO 2.png";
import reginaImage from "../assets/images/teams/nontechnical/PM REGINA 2.png";
import awiImage from "../assets/images/teams/nontechnical/BRANDING AWI 2.png";
import athaImage from "../assets/images/teams/nontechnical/BRANDING ATHA 2.png";
import jasmineImage from "../assets/images/teams/nontechnical/BRANDING JASMINE 2.png";
import arilImage from "../assets/images/teams/nontechnical/BRANDING ARIL 2.png";
import nesaImage from "../assets/images/teams/nontechnical/ADMIN NESA 2.png";
import galangImage from "../assets/images/teams/nontechnical/ADMIN GALANG 2.png";
import inggridImage from "../assets/images/teams/nontechnical/PR INGGRID 2.png";
import fadhilImage from "../assets/images/teams/nontechnical/PR FADHIL 2.png";
import kokoImage from "../assets/images/teams/nontechnical/PR KOKO 2.png";
import leaderGen2Image from "../assets/images/teams/pastmember/LEADER GEN 2.png";
import coleaderGen2Image from "../assets/images/teams/pastmember/COLEADER GEN 2.png";
import billyGen2Image from "../assets/images/teams/pastmember/ELECTRICAL BILLY GEN 2.png";
import chirGen2Image from "../assets/images/teams/pastmember/MECHANICAL CHIR GEN 2.png";
import puntaGen2Image from "../assets/images/teams/pastmember/MECHANICAL PUNTA GEN 2.png";
import marcelGen2Image from "../assets/images/teams/pastmember/VISION MARCEL GEN 2.png";
import madeGen2Image from "../assets/images/teams/pastmember/VISION MADE GEN 2.png";
import wisnuGen2Image from "../assets/images/teams/pastmember/VISION WISNU GEN 2.png";
import ikhwalGen2Image from "../assets/images/teams/pastmember/PM IKHWAL GEN 2.png";
import devianaGen2Image from "../assets/images/teams/pastmember/BRANDING DEVIANA GEN 2.png";
import deswiGen2Image from "../assets/images/teams/pastmember/BRANDING DESWI GEN 2.png";
import naufalGen2Image from "../assets/images/teams/pastmember/BRANDING NAUFAL GEN 2.png";
import rizkaGen2Image from "../assets/images/teams/pastmember/ADMIN RIZKA GEN 2.png";
import nadyaGen2Image from "../assets/images/teams/pastmember/ADMIN NADYA GEN 2.png";
import nisrinaGen2Image from "../assets/images/teams/pastmember/SPONSOR NISRINA GEN 2.png";
import zulfiahGen2Image from "../assets/images/teams/pastmember/SPONSOR ZULFIAH GEN 2.png";
import rakaGen2Image from "../assets/images/teams/pastmember/SPONSOR RAKA GEN 2.png";

export const advisor: TeamMember[] = [
  {
    img: advisorImage,
    name: 'Ir. Mochamad Ari Bagus Nugroho S.ST., M.Tr.T.',
    position: 'Advisor',
    major: 'Lecturer of Industrial Electrical Engineering',
  }
]

export const leader: TeamMember[] = [
  {
    img: leaderImage,
    name: 'Ahmad Maulana Maghrobi',
    position: 'Leader',
    major: 'Computer Engineering',
  }
]

export const technical: TeamMember[] = [
  {
    img: pmEconnImage,
    name: 'Thompson Ray Sihite',
    position: 'Project Manager',
    major: 'Mechatronics Engineering',
  },
  {
    img: hanifImage,
    name: 'Ahmad Hanif A. Md. T.',
    position: 'Electrical',
    major: 'Electronics Engineering',
  },
  {
    img: devanImage,
    name: 'Moch. Devan Putra',
    position: 'Electrical',
    major: 'Telecommunication Engineering',
  },
  {
    img: cekingImage,
    name: 'Rayhan Razka Maulidhani',
    position: 'Electrical',
    major: 'Computer Engineering',
  },
  {
    img: andraImage,
    name: 'Andra Akbar Ardziansyah',
    position: 'Electrical',
    major: 'Internet Engineering Technology',
  },
  {
    img: rizaImage,
    name: 'Riza Zaki Afifudin',
    position: 'Mechanical',
    major: 'Mechatronics Engineering',
  },
  {
    img: amirImage,
    name: 'Amir Fadhilah',
    position: 'Mechanical',
    major: 'Power Plant Engineering',
  },
  {
    img: samImage,
    name: 'Samuel Zoe Elnathan',
    position: 'Mechanical',
    major: 'Mechatronics Engineering',
  },
  {
    img: arsoImage,
    name: 'Andreas Borneo Arso',
    position: 'Mechanical',
    major: 'Mechatronics Engineering',
  },
  {
    img: erikImage,
    name: 'Moh. Erik Putra',
    position: 'Programmer',
    major: 'Telecommunication Engineering',
  },
  {
    img: vitoImage,
    name: 'Arvito Yoga Stevano',
    position: 'Programmer',
    major: 'Mechatronics Engineering',
  },
];

export const nontechnical: TeamMember[] = [
  {
    img: reginaImage,
    name: 'Regina Adristya',
    position: 'Project Manager',
    major: 'Mechatronics Engineering',
  },
  {
    img: awiImage,
    name: 'Lukman Hakim Badawi',
    position: 'Branding',
    major: 'Multimedia Engineering Technology',
  },
  {
    img: athaImage,
    name: 'Atha Anabella',
    position: 'Branding',
    major: 'Multimedia Engineering Technology',
  },
  {
    img: jasmineImage,
    name: 'Jasmine Aimy Shaaffya',
    position: 'Branding',
    major: 'Multimedia Engineering Technology',
  },
  {
    img: arilImage,
    name: 'Moch Djauharil Ilmi',
    position: 'Branding',
    major: 'Informatics Engineering',
  },
  {
    img: nesaImage,
    name: 'Neza Olivia Balqis',
    position: 'Administration',
    major: 'Power Plant Engineering',
  },
  {
    img: galangImage,
    name: 'Galang Seto Panuntun',
    position: 'Administration',
    major: 'Power Plant Engineering',
  },
  {
    img: inggridImage,
    name: 'Inggrid Twi Angelica',
    position: 'Public Relation',
    major: 'Internet Engineering Technology',
  },
  {
    img: fadhilImage,
    name: 'Fadhil Muhammad Daffa',
    position: 'Public Relation',
    major: 'Informatics Engineering',
  },
  {
    img: kokoImage,
    name: 'Bryan Wilbreto Phan',
    position: 'Public Relation',
    major: 'Power Plant Engineering',
  },
];

export const pastmember: TeamMember[] = [
  {
    img: leaderGen2Image,
    name: 'Brilian Haidar',
    position: 'Leader Gen 2 & Mechanical',
  },
  {
    img: coleaderGen2Image,
    name: 'Rafly Akbar',
    position: 'Co-Leader Gen 2 & Electrical',
  },
  {
    img: billyGen2Image,
    name: 'Billy Lukito',
    position: 'Electrical Gen 2',
  },
  {
    img: chirGen2Image,
    name: 'Rifky Chirmansyah',
    position: 'Mechanical Gen 2',
  },
  {
    img: puntaGen2Image,
    name: 'Bintang Punta',
    position: 'Mechanical Gen 2',
  },
  {
    img: marcelGen2Image,
    name: 'Marcell Nandana',
    position: 'Vision Gen 2',
  },
  {
    img: madeGen2Image,
    name: 'I Made Arya',
    position: 'Vision Gen 2',
  },
  {
    img: wisnuGen2Image,
    name: 'Wisnu Agung',
    position: 'Vision Gen 2',
  },
  {
    img: ikhwalGen2Image,
    name: 'IKhwal Anugrah',
    position: 'Project Manager Gen 2',
  },
  {
    img: devianaGen2Image,
    name: 'Deviana Syifa',
    position: 'Branding Gen 2',
  },
  {
    img: deswiGen2Image,
    name: 'Putri Deswicyntari',
    position: 'Branding Gen 2',
  },
  {
    img: naufalGen2Image,
    name: 'Naufal Maulana',
    position: 'Branding Gen 2',
  },
  {
    img: rizkaGen2Image,
    name: 'Rizka Rasyida',
    position: 'Administration Gen 2',
  },
  {
    img: nadyaGen2Image,
    name: 'Nadya Mutiara',
    position: 'Administration Gen 2',
  },
  {
    img: nisrinaGen2Image,
    name: 'Nisrina Rahma',
    position: 'Sponsorship Gen 2',
  },
  {
    img: zulfiahGen2Image,
    name: 'Zulfiah Rahma',
    position: 'Sponsorship Gen 2',
  },
  {
    img: rakaGen2Image,
    name: 'Rakha Farid',
    position: 'Sponsorship Gen 2',
  },
];

const placeholderPortraits = [
  "https://images.unsplash.com/photo-1587038787166-becd08a156f7?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1672457668822-a5023d2ede43?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1551239883-0d74affcc8ba?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1690166444594-e88da42a3791?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1600770320021-fda891259970?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1624237489159-9dc263f9cc86?auto=format&fit=crop&w=640&q=80",
];

const membersByPosition = (members: TeamMember[], position: string): RosterMember[] =>
  members.filter((member) => member.position === position).map(({ name, major, img }) => [name, major ?? "", img]);

export const rosters: Record<"TECHNICAL" | "NON-TECHNICAL", DivisionRoster[]> = {
  TECHNICAL: [
    ["01", "PROJECT MANAGER", "Mission coordination", membersByPosition(technical, "Project Manager")],
    ["02", "ELECTRICAL", "Power, sensors & control", membersByPosition(technical, "Electrical")],
    ["03", "PROGRAMMING", "Autonomy & flight logic", membersByPosition(technical, "Programmer")],
    ["04", "MECHANICAL", "Airframe & propulsion", membersByPosition(technical, "Mechanical")],
  ],
  "NON-TECHNICAL": [
    ["01", "PROJECT MANAGER", "Partnership & logistics", membersByPosition(nontechnical, "Project Manager")],
    ["02", "ADMINISTRATION", "Operations & documentation", membersByPosition(nontechnical, "Administration")],
    ["03", "BRANDING", "Visual identity & content", membersByPosition(nontechnical, "Branding")],
    ["04", "PUBLIC RELATIONS", "Community & communications", membersByPosition(nontechnical, "Public Relation")],
  ],
};

export const pastArchive = {
  "GEN 01": [
    ["ALUMNI 01", "Applied Electronics Engineering", placeholderPortraits[5]],
    ["ALUMNI 02", "Mechanical Engineering", placeholderPortraits[1]],
    ["ALUMNI 03", "Informatics Engineering", placeholderPortraits[2]],
  ],
  "GEN 02": [
    ["ALUMNI 04", "Applied Electronics Engineering", placeholderPortraits[0]],
    ["ALUMNI 05", "Telecommunications Engineering", placeholderPortraits[4]],
    ["ALUMNI 06", "Mechanical Engineering", placeholderPortraits[5]],
  ],
  "GEN 03": [
    ["ALUMNI 07", "Informatics Engineering", placeholderPortraits[3]],
    ["ALUMNI 08", "Business Management", placeholderPortraits[1]],
    ["ALUMNI 09", "Applied Electronics Engineering", placeholderPortraits[2]],
  ],
  "GEN 04": [
    ["ALUMNI 10", "Mechanical Engineering", placeholderPortraits[4]],
    ["ALUMNI 11", "Creative Media Engineering", placeholderPortraits[0]],
    ["ALUMNI 12", "Informatics Engineering", placeholderPortraits[5]],
  ],
} as const;
