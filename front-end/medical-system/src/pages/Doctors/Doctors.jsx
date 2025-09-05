export default function DoctorsPage({ doctors, patients }) {
  return (
    <div>
      <h2>Doctors Page</h2>
      <p>Total doctors: {doctors.length}</p>
      <p>Total patients: {patients.length}</p>
    </div>
  );
}
