import "./DoctorBadge.css";
export default function DoctorBadge({name, specialty, color}) {
  return (
    <div className="doc">
      <span className="doc__dot" style={{ background: color }} />
      <div className="doc__info">
        <div className="doc__name">{name}</div>
        <div className="doc__spec">{specialty}</div>
      </div>
    </div>
  );
}
