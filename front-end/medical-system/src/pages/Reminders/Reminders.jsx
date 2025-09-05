import "./Reminders.css";

export default function RemindersPage({ upcoming, getDoctorById }) {
  return (
    <div className="rem">
      <h2>Send Reminders</h2>
      <div className="rem__bar">
        <button className="btn success" disabled={upcoming.length === 0}>
          Send Reminders ({upcoming.length})
        </button>
      </div>

      <div className="card">
        {upcoming.length === 0 && (
          <div className="muted">No upcoming appointments.</div>
        )}
        {upcoming.map((p) => {
          const d = getDoctorById(p.doctorId);
          return (
            <div key={p.id} className="rem__item">
              <div className="rem__left">
                <div className="rem__dot" style={{ background: d?.color }} />
                <div className="rem__info">
                  <div className="rem__name">{p.name}</div>
                  <div className="rem__sub">
                    {p.email} · {d?.name} – {d?.specialty}
                  </div>
                </div>
              </div>
              <div className="rem__right">
                <div className="rem__rt">{p.reservationDate}</div>
                <div className="rem__rb">{p.reservationTime}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
