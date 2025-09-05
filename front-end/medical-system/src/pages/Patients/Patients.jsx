import "./Patients.css";
import { useMemo, useState } from "react";
import PatientForm from "../../components/PatientForm/PatientForm";
import DoctorBadge from "../../components/DoctorBadge/DoctorBadge";
import { Edit, Trash2, Plus, User } from "lucide-react";

export default function PatientsPage({
  doctors,
  patients,
  getDoctorById,
  onAdd,
  onUpdate,
  onDelete,
}) {
  const [selectedDoctor, setSelectedDoctor] = useState("all");
  const [search, setSearch] = useState("");

  // ADD modal state
  const empty = {
    name: "",
    email: "",
    phone: "",
    reservationDate: "",
    reservationTime: "",
    doctorId: 0,
    notes: "",
  };
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState(empty);

  // EDIT modal state
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(null); // will hold a patient object

  const filtered = useMemo(() => {
    return patients.filter((p) => {
      const s = search.toLowerCase();
      const matchS =
        !s ||
        p.name.toLowerCase().includes(s) ||
        p.email.toLowerCase().includes(s) ||
        p.phone.includes(search);
      const matchD = selectedDoctor === "all" || p.doctorId === Number(selectedDoctor);
      return matchS && matchD;
    });
  }, [patients, search, selectedDoctor]);

  const openAdd = () => {
    setAddForm(empty);
    setShowAdd(true);
  };

  const openEdit = (p) => {
    setEditForm(p);
    setIsEditing(true);
  };

  return (
    <div className="col">
      <div className="row patients__bar">
        <h2>All Patients</h2>
        <div className="row" style={{ marginLeft: "auto" }}>
          <input
            placeholder="Search…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="all">All Doctors</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} - {d.specialty}
              </option>
            ))}
          </select>
          <button className="btn primary" onClick={openAdd}>
            <Plus size={16} style={{ marginRight: 6 }} />
            Add Patient
          </button>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Contact</th>
              <th>Doctor</th>
              <th>Appointment</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => {
              const d = getDoctorById(p.doctorId);
              return (
                <tr key={p.id}>
                  <td>
                    <div className="row" style={{ alignItems: "center" }}>
                      <div className="avatar">
                        <User size={16} />
                      </div>
                      <div>{p.name}</div>
                    </div>
                  </td>
                  <td>
                    <div>{p.email}</div>
                    <div className="muted">{p.phone}</div>
                  </td>
                  <td>
                    <DoctorBadge
                      name={d?.name || ""}
                      specialty={d?.specialty || ""}
                      color={d?.color || "#999"}
                    />
                  </td>
                  <td>
                    <div>{p.reservationDate}</div>
                    <div className="muted">{p.reservationTime}</div>
                  </td>
                  <td className="truncate">{p.notes || "No notes"}</td>
                  <td>
                    <button className="iconBtn" onClick={() => openEdit(p)}>
                      <Edit size={16} />
                    </button>
                    <button
                      className="iconBtn danger"
                      onClick={() => onDelete(p.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add modal */}
      {showAdd && (
        <PatientForm
          title="Add New Patient"
          value={addForm}
          setValue={setAddForm}
          doctors={doctors}
          onSubmit={() => {
            onAdd(addForm);
            setShowAdd(false);
          }}
          onCancel={() => setShowAdd(false)}
        />
      )}

      {/* Edit modal */}
      {isEditing && editForm && (
        <PatientForm
          title="Edit Patient"
          value={editForm}
          setValue={setEditForm}
          doctors={doctors}
          onSubmit={() => {
            onUpdate(editForm);
            setIsEditing(false);
            setEditForm(null);
          }}
          onCancel={() => {
            setIsEditing(false);
            setEditForm(null);
          }}
        />
      )}
    </div>
  );
}
