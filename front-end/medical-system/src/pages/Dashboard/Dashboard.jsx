import "./Dashboard.css";
import { upcoming } from "../../utils/date";
import DoctorBadge from "../../components/DoctorBadge/DoctorBadge";
import AppointmentItem from "../../components/AppointmentItem/AppointmentItem";
import { User, Clock, Stethoscope } from "lucide-react";

export default function Dashboard({ doctors, patients, getDoctorById }) {
  const upcoming3 = upcoming(patients, 3);

  return (
    <div className="col">
      <div className="row dash__stats">
        <div className="card dash__stat">
          <div className="dash__icon"><User /></div>
          <div className="dash__meta">
            <div className="dash__label">Total Patients</div>
            <div className="dash__value">{patients.length}</div>
          </div>
        </div>
        <div className="card dash__stat">
          <div className="dash__icon dash__icon--green"><Stethoscope /></div>
          <div className="dash__meta">
            <div className="dash__label">Active Doctors</div>
            <div className="dash__value">{doctors.length}</div>
          </div>
        </div>
        <div className="card dash__stat">
          <div className="dash__icon dash__icon--orange"><Clock /></div>
          <div className="dash__meta">
            <div className="dash__label">Upcoming (3 days)</div>
            <div className="dash__value">{upcoming3.length}</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Appointments by Doctor</h2>
        <div className="dash__doctorGrid">
          {doctors.map(d => {
            const count = patients.filter(p => p.doctorId === d.id).length;
            return (
              <div key={d.id} className="dash__docCard">
                <DoctorBadge name={d.name} specialty={d.specialty} color={d.color} />
                <div className="dash__docCount">{count}</div>
                <div className="dash__docCaption">Total Appointments</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card">
        <h2>Upcoming Appointments</h2>
        <div>
          {upcoming3.length === 0 && (
            <div className="muted">No upcoming appointments in the next 3 days</div>
          )}
          {upcoming3.map(p => {
            const d = getDoctorById(p.doctorId);
            return (
              <AppointmentItem
                key={p.id}
                title={p.name}
                subtitle={`${p.email} · ${d?.name ?? ""} ${d?.specialty ?? ""}`.trim()}
                rightTop={p.reservationDate}
                rightBottom={p.reservationTime}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
