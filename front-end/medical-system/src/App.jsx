import { useMemo, useState } from "react";
import { doctors as seedDocs, initialPatients as seedPatients } from "./data/mock.js";

import Header from "./components/Header/Header.jsx";
import NavTabs from "./components/NavTabs/NavTabs.jsx";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import CalendarPage from "./pages/Calendar/Calendar.jsx";
import DoctorsPage from "./pages/Doctors/Doctors.jsx";
import PatientsPage from "./pages/Patients/Patients.jsx";
import SearchPage from "./pages/Search/Search.jsx";
import RemindersPage from "./pages/Reminders/Reminders.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");


  const [doctors] = useState(seedDocs);
  const [patients, setPatients] = useState(seedPatients);

  const getDoctorById = (id) => doctors.find((d) => d.id === id);

  const upcomingReservations = useMemo(() => {
    return patients.filter((p) => {
      const d = new Date(p.reservationDate);
      const t = new Date();
      const l = new Date();
      t.setHours(0, 0, 0, 0);
      l.setHours(0, 0, 0, 0);
      l.setDate(t.getDate() + 3);
      d.setHours(0, 0, 0, 0);
      return d >= t && d <= l;
    });
  }, [patients]);

  const addPatient = (np) => {
    setPatients((p) => [...p, { ...np, id: Date.now() }]);
  };

  const updatePatient = (up) => {
    setPatients((p) => p.map((x) => (x.id === up.id ? up : x)));
  };

  const deletePatient = (id) => {
    setPatients((p) => p.filter((x) => x.id !== id));
  };

  return (
    <div>
      <Header doctorsCount={doctors.length} patientsCount={patients.length} />
      <NavTabs active={activeTab} onChange={setActiveTab} />

      <main className="container" style={{ paddingTop: 24, paddingBottom: 40 }}>
        {activeTab === "dashboard" && (
          <Dashboard doctors={doctors} patients={patients} getDoctorById={getDoctorById} />
        )}
        {activeTab === "calendar" && <CalendarPage patients={patients} />}
        {activeTab === "doctors" && <DoctorsPage doctors={doctors} patients={patients} />}
        {activeTab === "patients" && (
          <PatientsPage
            doctors={doctors}
            patients={patients}
            getDoctorById={getDoctorById}
            onAdd={addPatient}
            onUpdate={updatePatient}
            onDelete={deletePatient}
          />
        )}
        {activeTab === "search" && <SearchPage doctors={doctors} patients={patients} />}
        {activeTab === "reminders" && (
          <RemindersPage upcoming={upcomingReservations} getDoctorById={getDoctorById} />
        )}
      </main>
    </div>
  );
}
