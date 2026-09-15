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
    date: "2026-09-18",
    startTime: "18:30",
    endTime: "21:00",
    division: "Technical",
    wing: "Electrical",
    venue: "JJ. 208 Mechatronics Lab, 2nd Floor, D3 Building",
    candidates: [
      { name: "Abdurrahman Syauqi", nrp: "4126600082", status: "SCHEDULED" },
      { name: "Anwarus Shidqi", nrp: "2225500009", status: "SCHEDULED" },
      { name: "Djenar Virgiant Sayyid Nashrullah", nrp: "2125600141", status: "SCHEDULED" },
      { name: "Gabriela Accenthiz Pristine", nrp: "4126600038", status: "SCHEDULED" },
      { name: "M Athar Pranadityo Suwono", nrp: "4126600049", status: "SCHEDULED" },
      { name: "Mochamad Abi Raditya Gurtika", nrp: "2125500058", status: "SCHEDULED" },
      { name: "Muhammad Miftahul Fa'izin", nrp: "4126600091", status: "SCHEDULED" },
      { name: "Rizki Nanda Saputra", nrp: "2225600057", status: "SCHEDULED" },
      { name: "Ryan Saputra", nrp: "4126600093", status: "SCHEDULED" },
      { name: "Septian Wahyu Ramadhan", nrp: "2426600084", status: "SCHEDULED" },
      { name: "Shafa Salsabila", nrp: "2226600060", status: "SCHEDULED" },
      { name: "Taufiqur Rahman", nrp: "2125500042", status: "SCHEDULED" },
    ],
  },
  {
    date: "2026-09-18",
    startTime: "18:30",
    endTime: "21:00",
    division: "Technical",
    wing: "Mechanical",
    venue: "D. 303 Otomation Factory Lab, 3rd Floor, D4 Building",
    candidates: [
      { name: "Bima Adifta Tastaftian", nrp: "4126600037", status: "SCHEDULED" },
      { name: "Duta Narendra Adjie", nrp: "4125600094", status: "SCHEDULED" },
      { name: "Angger Akbar wicaksono", nrp: "4125600095", status: "SCHEDULED" },
      { name: "Arara Trilaksa Sentosa Putra", nrp: "4126600123", status: "SCHEDULED" },
      { name: "Aditiya Sanjaya", nrp: "4225600119", status: "SCHEDULED" },
      { name: "Alfandy Firmansyah Putra", nrp: "4225600018", status: "SCHEDULED" },
      { name: "Anatasya Hurin Fakhira", nrp: "4126600136", status: "SCHEDULED" },
      { name: "Hirzy Azzimran Achmad", nrp: "4326600035", status: "SCHEDULED" },
      { name: "Irwansyah La Tahzan Ramadhani", nrp: "2225600033", status: "SCHEDULED" },
      { name: "Izyan Akbar Hartadi", nrp: "4126650001", status: "SCHEDULED" },
      { name: "Dymas Ilham Saputra", nrp: "4225600033", status: "SCHEDULED" },
      { name: "Mochammad Abid Nurmansyah Alam", nrp: "4326600040", status: "SCHEDULED" },
      { name: "Mohammad Haidar Robbani", nrp: "4226600035", status: "SCHEDULED" },
      { name: "Mohammad Zaimus Yadad", nrp: "4226600048", status: "SCHEDULED" },
      { name: "Muhammad Faqih Maulana Riadi", nrp: "4126650009", status: "SCHEDULED" },
      { name: "Muhammad Ilham Alwan", nrp: "4226600012", status: "SCHEDULED" },
      { name: "Muhammad Raiyan Bisyari", nrp: "4226600044", status: "SCHEDULED" },
      { name: "Muhammad Zaki Aflah", nrp: "4126600124", status: "SCHEDULED" },
      { name: "Naufal Dwi Ananda", nrp: "4225600095", status: "SCHEDULED" },
      { name: "Silangga Restu Adiel", nrp: "4225600080", status: "SCHEDULED" },
    ],
  },
  {
    date: "2026-09-18",
    startTime: "18:30",
    endTime: "21:00",
    division: "Technical",
    wing: "Program",
    venue: "JJ. 210 Control Mechatronics Lab, 2nd Floor, D3 Building",
    candidates: [
      { name: "Achmad Wildan Adila El Hakim", nrp: "5325600084", status: "SCHEDULED" },
      { name: "Alief Davin Eriandra", nrp: "4126600137", status: "SCHEDULED" },
      { name: "Ahmad Nabil Bahroin", nrp: "3225600103", status: "SCHEDULED" },
      { name: "Ahmad Saddam Juwardi", nrp: "2426600096", status: "SCHEDULED" },
      { name: "Difqi Alharits", nrp: "3125500044", status: "SCHEDULED" },
      { name: "Gema Langit Dhuha", nrp: "3325600035", status: "SCHEDULED" },
      { name: "Gilbert Janong", nrp: "4126600024", status: "SCHEDULED" },
      { name: "Lugas Madya Hanestyan", nrp: "3125600059", status: "SCHEDULED" },
      { name: "Mohammad Aryasatya A Pratama Putra", nrp: "4126600099", status: "SCHEDULED" },
      { name: "Nasril Ilham Saputra", nrp: "3126600067", status: "SCHEDULED" },
      { name: "Nawwaf Fahri Fridaus", nrp: "4126600140", status: "SCHEDULED" },
      { name: "Pandega Surya Abditama", nrp: "3125600091", status: "SCHEDULED" },
      { name: "Trio Setiawan", nrp: "3325600045", status: "SCHEDULED" },
    ],
  },
];

export const findSkillTestByNrp = (nrp: string) => {
  const normalized = nrp.trim();
  return selectionSkillTest.find((schedule) =>
    schedule.candidates.some((candidate) => candidate.nrp === normalized),
  );
};
