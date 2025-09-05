import "./NavTabs.css";
import { Calendar, Users, Search, Mail, Stethoscope, CalendarDays } from "lucide-react";

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: Calendar },
  { id: "calendar", label: "Calendar View", icon: CalendarDays },
  { id: "doctors", label: "Doctors", icon: Stethoscope },
  { id: "patients", label: "All Patients", icon: Users },
  { id: "search", label: "Search", icon: Search },
  { id: "reminders", label: "Send Reminders", icon: Mail },
];

export default function NavTabs({ active, onChange }) {
  return (
    <nav className="tabs">
      <div className="container tabs__row">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`tabs__btn ${active === id ? "is-active" : ""}`}
            onClick={() => onChange(id)}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
