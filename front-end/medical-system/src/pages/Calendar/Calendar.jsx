import './Calendar.css'
export default function CalendarPage({patients}){
    return (
    <div>
      <h2>Calendar Page</h2>
      <p>Total patients: {patients.length}</p>
    </div>
    );
}

