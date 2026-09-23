export type SkillTestCandidate = {
  name: string;
  nrp: string;
  status: "SCHEDULED";
};

export type SkillTestSchedule = {
  date: string;
  startTime: string;
  endTime: string;
  division: "Technical";
  wing: "Electrical" | "Mechanical" | "Program";
  venue: string;
  candidates: SkillTestCandidate[];
};

export const selectionSkillTest: SkillTestSchedule[] = [
  {
    date: "2026-09-25",
    startTime: "18:30",
    endTime: "21:00",
    division: "Technical",
    wing: "Electrical",
    venue: "JJ. 210 Control Mechatronics Lab, 2nd Floor, D3 Building",
    candidates: [
      { name: "Rizki Nanda Saputra", nrp: "2225600057", status: "SCHEDULED" },
      { name: "Ryan Saputra", nrp: "4126600093", status: "SCHEDULED" },
      { name: "M. Rif'an Ahya Khoiro Adib", nrp: "2126600069", status: "SCHEDULED" },
      { name: "Athaya Satya Fachrudin", nrp: "3226600062", status: "SCHEDULED" },
      { name: "M. Irfan Nazril Rifa'ie", nrp: "2425600016", status: "SCHEDULED" },
    ],
  },
  {
    date: "2026-09-25",
    startTime: "18:30",
    endTime: "21:00",
    division: "Technical",
    wing: "Mechanical",
    venue: "JJ. 210 Control Mechatronics Lab, 2nd Floor, D3 Building",
    candidates: [
      { name: "Duta Narendra Adjie", nrp: "4125600094", status: "SCHEDULED" },
      { name: "Moh. Haidar Robbani", nrp: "4226600035", status: "SCHEDULED" },
      { name: "Hamyail Hanggar Nurulloh", nrp: "2225500009", status: "SCHEDULED" },
    ],
  },
  {
    date: "2026-09-25",
    startTime: "18:30",
    endTime: "21:00",
    division: "Technical",
    wing: "Program",
    venue: "JJ. 210 Control Mechatronics Lab, 2nd Floor, D3 Building",
    candidates: [
      { name: "Galang Cipta Ramadhan", nrp: "3226600142", status: "SCHEDULED" },
    ],
  },
];

export const findSkillTestByNrp = (nrp: string) => {
  const normalized = nrp.trim();
  return selectionSkillTest.find((schedule) =>
    schedule.candidates.some((candidate) => candidate.nrp === normalized),
  );
};
