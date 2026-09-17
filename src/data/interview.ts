export type InterviewDivision = "Technical" | "Non-Technical";
export type InterviewWing =
  | "Electrical"
  | "Mechanical"
  | "Program"
  | "Internal"
  | "Branding"
  | "Public Relations";

export type InterviewSchedule = {
  date: string;
  startTime: string;
  endTime: string;
  code: string;
  division: InterviewDivision;
  wing: InterviewWing;
  venue: string;
  name: string;
  nrp: string;
  status: "SCHEDULED";
};

const interviewVenueByDate: Record<string, string> = {
  "2026-09-19": "D. 303 Otomation Factory Lab, 3rd Floor, D4 Building",
  "2026-09-20": "D. 303 Otomation Factory Lab, 3rd Floor, D4 Building",
  "2026-09-22": "JJ. 210 Control Mechatronics Lab, 2nd Floor, D3 Building",
  "2026-09-23": "JJ. 210 Control Mechatronics Lab, 2nd Floor, D3 Building",
  "2026-09-24": "JJ. 210 Control Mechatronics Lab, 2nd Floor, D3 Building",
  "2026-09-26": "D. 303 Otomation Factory Lab, 3rd Floor, D4 Building",
};

const schedule = (
  date: string,
  startTime: string,
  endTime: string,
  code: string,
  division: InterviewDivision,
  wing: InterviewWing,
  name: string,
  nrp: string,
): InterviewSchedule => ({
  date,
  startTime,
  endTime,
  code,
  division,
  wing,
  venue: interviewVenueByDate[date],
  name,
  nrp,
  status: "SCHEDULED",
});

export const selectionInterview: InterviewSchedule[] = [
  schedule("2026-09-19", "08:00", "08:30", "B1", "Non-Technical", "Branding", "Anisa Nur Mutia", "2225600082"),
  schedule("2026-09-19", "08:30", "09:00", "B2", "Non-Technical", "Branding", "Fira Kuswah Hasanah", "5325600046"),
  schedule("2026-09-19", "09:00", "09:30", "B3", "Non-Technical", "Branding", "Galang Surya Admaja", "5426600079"),
  schedule("2026-09-19", "09:30", "10:00", "B4", "Non-Technical", "Branding", "Ilham Rizqy", "2425600081"),
  schedule("2026-09-19", "10:00", "10:30", "B5", "Non-Technical", "Branding", "Muhammad Akmal Ramadhan", "4226600120"),
  schedule("2026-09-19", "10:30", "11:00", "B6", "Non-Technical", "Branding", "Neyo Nagata Uthman", "2126600098"),
  schedule("2026-09-19", "11:00", "11:30", "B7", "Non-Technical", "Branding", "Nisrina Maryam Setizli", "4126600104"),
  schedule("2026-09-19", "12:30", "13:00", "B8", "Non-Technical", "Branding", "Panji shofwan Abroor", "4226600091"),
  schedule("2026-09-19", "13:00", "13:30", "B9", "Non-Technical", "Branding", "Zahra Hadiyarti Sumayya", "4226600028"),
  schedule("2026-09-19", "13:30", "14:00", "I1", "Non-Technical", "Internal", "Acyhfa Lukman", "2526600023"),
  schedule("2026-09-19", "14:00", "14:30", "I2", "Non-Technical", "Internal", "Azka Sibila Millati", "2325600072"),
  schedule("2026-09-19", "14:30", "15:00", "I3", "Non-Technical", "Internal", "Azza Hamizan Muzaffar", "3126600012"),
  schedule("2026-09-19", "15:00", "15:30", "I4", "Non-Technical", "Internal", "Dara Calistha Putri Kindy", "3125600016"),
  schedule("2026-09-19", "15:30", "16:00", "I5", "Non-Technical", "Internal", "Lulu'atul Mahfudoh", "3125600075"),
  schedule("2026-09-19", "16:00", "16:30", "I6", "Non-Technical", "Internal", "Mohammad Daniyal Ramadhan", "2125600147"),
  schedule("2026-09-19", "16:30", "17:00", "I7", "Non-Technical", "Internal", "Muh. Rifai Nababbil Munsir", "3126500001"),
  schedule("2026-09-19", "17:00", "17:30", "I8", "Non-Technical", "Internal", "Najwa Tsania", "2225600004"),

  schedule("2026-09-20", "08:00", "08:30", "P1", "Technical", "Program", "Achmad Wildan Adila El Hakim", "5325600084"),
  schedule("2026-09-20", "08:30", "09:00", "P2", "Technical", "Program", "Alief Davin Eriandra", "4126600137"),
  schedule("2026-09-20", "09:00", "09:30", "P3", "Technical", "Program", "Ahmad Nabil Bahroin", "3225600103"),
  schedule("2026-09-20", "09:30", "10:00", "P4", "Technical", "Program", "Ahmad Saddam Juwardi", "2426600096"),
  schedule("2026-09-20", "10:00", "10:30", "P5", "Technical", "Program", "Difqi Alharits", "3125500044"),
  schedule("2026-09-20", "10:30", "11:00", "P6", "Technical", "Program", "Gema Langit Dhuha", "3325600035"),
  schedule("2026-09-20", "11:00", "11:30", "P7", "Technical", "Program", "Gilbert Janong", "4126600024"),
  schedule("2026-09-20", "12:30", "13:00", "PR1", "Non-Technical", "Public Relations", "Anisa Awaliyah", "4226600048"),
  schedule("2026-09-20", "13:00", "13:30", "PR2", "Non-Technical", "Public Relations", "Annisa Amelia Raihani", "2125600135"),
  schedule("2026-09-20", "13:30", "14:00", "PR3", "Non-Technical", "Public Relations", "Afra Thalita Sakhi", "3126500040"),
  schedule("2026-09-20", "14:00", "14:30", "PR4", "Non-Technical", "Public Relations", "Aya Putri Salsabilla", "2526600043"),
  schedule("2026-09-20", "14:30", "15:00", "PR5", "Non-Technical", "Public Relations", "Elang Airlangga Rismanto", "4225600028"),
  schedule("2026-09-20", "15:00", "15:30", "PR6", "Non-Technical", "Public Relations", "Hans Marvin Marcello Okawida", "3125500041"),
  schedule("2026-09-20", "15:30", "16:00", "PR7", "Non-Technical", "Public Relations", "Muhammad Nabih Rifky Elmahasin", "4126600061"),
  schedule("2026-09-20", "16:00", "16:30", "PR8", "Non-Technical", "Public Relations", "Nasywa Faatin Arieta", "3125600021"),
  schedule("2026-09-20", "16:30", "17:00", "PR9", "Non-Technical", "Public Relations", "Rara Sea Izatuz Zahra", "3326600075"),
  schedule("2026-09-20", "17:00", "17:30", "PR10", "Non-Technical", "Public Relations", "Tanisha Kartika Irma Azaria", "4226600065"),

  schedule("2026-09-22", "18:20", "18:50", "P8", "Technical", "Program", "Lugas Madya Hanestyan", "3125600059"),
  schedule("2026-09-22", "18:50", "19:20", "P9", "Technical", "Program", "Mohammad Aryasatya A Pratama Putra", "4126600099"),
  schedule("2026-09-22", "19:20", "19:50", "P10", "Technical", "Program", "Nasril Ilham Saputra", "3126600067"),
  schedule("2026-09-22", "19:50", "20:20", "P11", "Technical", "Program", "Nawwaf Fahri Fridaus", "4126600140"),
  schedule("2026-09-22", "20:20", "20:50", "P12", "Technical", "Program", "Pandega Surya Abditama", "3125600091"),
  schedule("2026-09-22", "20:50", "21:20", "P13", "Technical", "Program", "Trio Setiawan", "3325600045"),

  schedule("2026-09-23", "18:20", "18:50", "E1", "Technical", "Electrical", "Abdurrahman Syauqi", "4126600082"),
  schedule("2026-09-23", "18:50", "19:20", "E2", "Technical", "Electrical", "Anwarus Shidqi", "2225500009"),
  schedule("2026-09-23", "19:20", "19:50", "E3", "Technical", "Electrical", "Djenar Virgiant Sayyid Nashrullah", "2125600141"),
  schedule("2026-09-23", "19:50", "20:20", "E4", "Technical", "Electrical", "Gabriela Accenthiz Pristine", "4126600038"),
  schedule("2026-09-23", "20:20", "20:50", "E5", "Technical", "Electrical", "M Athar Pranadityo Suwono", "4126600049"),
  schedule("2026-09-23", "20:50", "21:20", "E6", "Technical", "Electrical", "Mochamad Abi Raditya Gurtika", "2125500058"),

  schedule("2026-09-24", "18:20", "18:50", "E7", "Technical", "Electrical", "Muhammad Miftahul Fa'izin", "4126600091"),
  schedule("2026-09-24", "18:50", "19:20", "E8", "Technical", "Electrical", "Rizki Nanda Saputra", "2225600057"),
  schedule("2026-09-24", "19:20", "19:50", "E9", "Technical", "Electrical", "Ryan Saputra", "4126600093"),
  schedule("2026-09-24", "19:50", "20:20", "E10", "Technical", "Electrical", "Septian Wahyu Ramadhan", "2426600084"),
  schedule("2026-09-24", "20:20", "20:50", "E11", "Technical", "Electrical", "Shafa Salsabila", "2226600060"),
  schedule("2026-09-24", "20:50", "21:20", "E12", "Technical", "Electrical", "Taufiqur Rahman", "2125500042"),

  schedule("2026-09-26", "08:00", "08:30", "M1", "Technical", "Mechanical", "Bima Adifta Tastaftian", "4126600037"),
  schedule("2026-09-26", "08:30", "09:00", "M2", "Technical", "Mechanical", "Duta Narendra Adjie", "4125600094"),
  schedule("2026-09-26", "09:00", "09:30", "M3", "Technical", "Mechanical", "Angger Akbar wicaksono", "4125600095"),
  schedule("2026-09-26", "09:30", "10:00", "M4", "Technical", "Mechanical", "Arara Trilaksa Sentosa Putra", "4126600123"),
  schedule("2026-09-26", "10:00", "10:30", "M5", "Technical", "Mechanical", "Aditiya Sanjaya", "4225600119"),
  schedule("2026-09-26", "10:30", "11:00", "M6", "Technical", "Mechanical", "Alfandy Firmansyah Putra", "4225600018"),
  schedule("2026-09-26", "11:00", "11:30", "M7", "Technical", "Mechanical", "Anatasya Hurin Fakhira", "4126600136"),
  schedule("2026-09-26", "12:30", "13:00", "M8", "Technical", "Mechanical", "Hirzy Azzimran Achmad", "4326600035"),
  schedule("2026-09-26", "13:00", "13:30", "M9", "Technical", "Mechanical", "Irwansyah La Tahzan Ramadhani", "2225600033"),
  schedule("2026-09-26", "13:30", "14:00", "M10", "Technical", "Mechanical", "Izyan Akbar Hartadi", "4126650001"),
  schedule("2026-09-26", "14:00", "14:30", "M11", "Technical", "Mechanical", "Dymas Ilham Saputra", "4225600033"),
  schedule("2026-09-26", "14:30", "15:00", "M12", "Technical", "Mechanical", "Mochammad Abid Nurmansyah Alam", "4326600040"),
  schedule("2026-09-26", "15:30", "16:00", "M13", "Technical", "Mechanical", "Mohammad Zaimus Yadad", "4225600048"),
  schedule("2026-09-26", "16:00", "16:30", "M14", "Technical", "Mechanical", "Muhammad Faqih Maulana Riadi", "4126650009"),
  schedule("2026-09-26", "16:30", "17:00", "M15", "Technical", "Mechanical", "Muhammad Ilham Alwan", "4226600012"),
  schedule("2026-09-26", "17:00", "17:30", "M16", "Technical", "Mechanical", "Muhammad Raiyan Bisyari", "4226600044"),
  schedule("2026-09-26", "18:30", "19:00", "M17", "Technical", "Mechanical", "Muhammad Zaki Aflah", "4126600124"),
  schedule("2026-09-26", "19:00", "19:30", "M18", "Technical", "Mechanical", "Naufal Dwi Ananda", "4225600095"),
  schedule("2026-09-26", "19:30", "20:00", "M19", "Technical", "Mechanical", "Silangga Restu Adiel", "4225600080"),
  schedule("2026-09-26", "20:00", "20:30", "M20", "Technical", "Mechanical", "Mohammad Haidar Robbani", "4226600035"),
];

export const findInterviewByNrp = (nrp: string) =>
  selectionInterview.find((interview) => interview.nrp === nrp.trim());
