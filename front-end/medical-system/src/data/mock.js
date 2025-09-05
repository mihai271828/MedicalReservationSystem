// src/data/mock.js

/** @type {{ id:number, name:string, specialty:string, email:string, phone:string, color:string }[]} */
export const doctors = [
  { id: 1, name: "Dr. House", specialty: "Diagnostics", email: "house@med.com", phone: "123", color: "#60a5fa" },
  { id: 2, name: "Dr. Cuddy", specialty: "Endocrinology", email: "cuddy@med.com", phone: "456", color: "#34d399" },
];

/** @type {{ id:number, name:string, email:string, phone:string, reservationDate:string, reservationTime:string, doctorId:number, notes?:string }[]} */
export const initialPatients = [
  { id: 101, name: "John Doe",  email: "john@ex.com", phone: "555-111", reservationDate: "2025-09-06", reservationTime: "10:00", doctorId: 1, notes: "" },
  { id: 102, name: "Jane Roe",  email: "jane@ex.com", phone: "555-222", reservationDate: "2025-09-07", reservationTime: "14:30", doctorId: 2, notes: "first visit" },
];
