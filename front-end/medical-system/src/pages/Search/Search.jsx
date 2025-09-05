import "./Search.css";

export default function SearchPage({ doctors, patients }) {
  return (
    <div className="search">
      <h2>Search</h2>
      <div className="search__row">
        <div>
          Total doctors: <strong>{doctors.length}</strong>
        </div>
        <div>
          Total patients: <strong>{patients.length}</strong>
        </div>
      </div>
    </div>
  );
}
