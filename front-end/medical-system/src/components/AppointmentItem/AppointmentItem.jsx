import "./AppointmentItem.css";

export default function AppointmentItem({
  leftIcon,
  title,
  subtitle,
  rightTop,
  rightBottom
}) {
  return (
    <div className="appt">
      <div className="appt__left">{leftIcon}</div>
      <div className="appt__mid">
        <div className="appt__title">{title}</div>
        {subtitle && <div className="appt__sub">{subtitle}</div>}
      </div>
      <div className="appt__right">
        {rightTop && <div className="appt__rt">{rightTop}</div>}
        {rightBottom && <div className="appt__rb">{rightBottom}</div>}
      </div>
    </div>
  );
}
