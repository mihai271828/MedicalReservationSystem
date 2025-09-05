import "./PatientForm.css";

export default function PatientForm({
  value,
  setValue,
  doctors,
  onSubmit,
  onCancel,
  title
}) {
  return (
    <div className="modal">
      <div className="modal__card">
        <h3>{title}</h3>
        <div className="col">
          <input
            placeholder="Full Name"
            value={value.name}
            onChange={e => setValue({ ...value, name: e.target.value })}
          />
          <input
            placeholder="Email"
            type="email"
            value={value.email}
            onChange={e => setValue({ ...value, email: e.target.value })}
          />
          <input
            placeholder="Phone Number"
            value={value.phone}
            onChange={e => setValue({ ...value, phone: e.target.value })}
          />
          <select
            value={value.doctorId || ""}
            onChange={e => setValue({ ...value, doctorId: Number(e.target.value) })}
          >
            <option value="">Select Doctor</option>
            {doctors.map(d => (
              <option key={d.id} value={d.id}>
                {d.name} - {d.specialty}
              </option>
            ))}
          </select>
          <div className="row">
            <input
              type="date"
              value={value.reservationDate}
              onChange={e => setValue({ ...value, reservationDate: e.target.value })}
            />
            <input
              type="time"
              value={value.reservationTime}
              onChange={e => setValue({ ...value, reservationTime: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Notes (optional)"
            value={value.notes || ""}
            onChange={e => setValue({ ...value, notes: e.target.value })}
            rows={3}
          />
          <div className="row">
            <button className="btn primary" onClick={onSubmit}>Save</button>
            <button className="btn secondary" onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
