import "./Header.css";
import { Stethoscope } from "lucide-react";

export default function Header({ doctorsCount, patientsCount }) {
  return (
    <header className="hdr">
      <div className="container hdr__inner">
        <div className="hdr__brand">
          <Stethoscope size={28} />
          <h1>Lignum Vitae Medical Cabinet</h1>
        </div>
        <div className="hdr__stats">
          <span className="badge">Total Patients: {patientsCount}</span>
          <span className="badge" style={{ background:"#ecfdf5", color:"#065f46" }}>Doctors: {doctorsCount}</span>
        </div>
      </div>
    </header>
  );
}
