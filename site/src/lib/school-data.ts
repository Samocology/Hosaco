export const SUBJECT_RESULTS = [
  { subject: "Mathematics", ca: 38, exam: 53, total: 91, grade: "A1", remark: "Excellent" },
  { subject: "English Language", ca: 35, exam: 51, total: 86, grade: "A1", remark: "Very good" },
  { subject: "Physics", ca: 30, exam: 48, total: 78, grade: "B2", remark: "Good" },
  { subject: "Chemistry", ca: 34, exam: 50, total: 84, grade: "A1", remark: "Excellent" },
  { subject: "Biology", ca: 39, exam: 53, total: 92, grade: "A1", remark: "Outstanding" },
  { subject: "Literature", ca: 32, exam: 48, total: 80, grade: "B2", remark: "Good" },
];

export const STUDENTS = [
  { id: "chidera-okafor", name: "Chidera Okafor", classId: "sss-2-science", klass: "SSS 2 Science", avg: 88, attendance: 96, fees: "₦125,000", rank: 4, status: "Excellent" },
  { id: "tomiwa-adebayo", name: "Tomiwa Adebayo", classId: "sss-3-science", klass: "SSS 3 Science", avg: 92, attendance: 98, fees: "Paid", rank: 1, status: "Outstanding" },
  { id: "ifeoma-eze", name: "Ifeoma Eze", classId: "jss-3", klass: "JSS 3", avg: 81, attendance: 94, fees: "Paid", rank: 11, status: "Strong" },
  { id: "bola-adekunle", name: "Bola Adekunle", classId: "sss-1-commercial", klass: "SSS 1 Commercial", avg: 76, attendance: 91, fees: "₦48,000", rank: 18, status: "Watch" },
  { id: "aisha-bello", name: "Aisha Bello", classId: "jss-2", klass: "JSS 2", avg: 84, attendance: 97, fees: "Paid", rank: 8, status: "Strong" },
  { id: "femi-ojo", name: "Femi Ojo", classId: "sss-2-arts", klass: "SSS 2 Arts", avg: 79, attendance: 89, fees: "₦72,000", rank: 14, status: "Improving" },
  { id: "ngozi-umeh", name: "Ngozi Umeh", classId: "sss-3-science", klass: "SSS 3 Science", avg: 95, attendance: 99, fees: "Paid", rank: 1, status: "Outstanding" },
  { id: "kelechi-nwosu", name: "Kelechi Nwosu", classId: "jss-1", klass: "JSS 1", avg: 73, attendance: 92, fees: "₦90,000", rank: 22, status: "Mentoring" },
  { id: "maryam-yusuf", name: "Maryam Yusuf", classId: "sss-1-science", klass: "SSS 1 Science", avg: 90, attendance: 96, fees: "Paid", rank: 2, status: "Excellent" },
  { id: "david-olaniyi", name: "David Olaniyi", classId: "jss-1", klass: "JSS 1", avg: 86, attendance: 95, fees: "Paid", rank: 6, status: "Strong" },
];

export const CLASSES = [
  { id: "jss-1", name: "JSS 1", arms: 3, students: 180, lead: "Mrs. Ade", room: "Junior Block A" },
  { id: "jss-2", name: "JSS 2", arms: 3, students: 175, lead: "Mr. Okafor", room: "Junior Block B" },
  { id: "jss-3", name: "JSS 3", arms: 3, students: 185, lead: "Mrs. Adeyemi", room: "Junior Block C" },
  { id: "sss-1-science", name: "SSS 1 Science", arms: 2, students: 110, lead: "Mr. Eze", room: "Science Wing" },
  { id: "sss-1-commercial", name: "SSS 1 Commercial", arms: 2, students: 70, lead: "Mr. Bello", room: "Commercial Wing" },
  { id: "sss-1-arts", name: "SSS 1 Arts", arms: 1, students: 50, lead: "Mr. Johnson", room: "Arts Studio" },
  { id: "sss-2-science", name: "SSS 2 Science", arms: 2, students: 105, lead: "Dr. Adamu", room: "Science Wing" },
  { id: "sss-2-arts", name: "SSS 2 Arts", arms: 1, students: 58, lead: "Mrs. Adeyemi", room: "Arts Studio" },
  { id: "sss-3-science", name: "SSS 3 Science", arms: 2, students: 105, lead: "Mr. Bello", room: "Exam Block" },
];

export function getClassById(id: string) {
  return CLASSES.find((klass) => klass.id === id);
}

export function getStudentById(id: string) {
  return STUDENTS.find((student) => student.id === id);
}

export function getStudentsByClass(classId: string) {
  return STUDENTS.filter((student) => student.classId === classId);
}
