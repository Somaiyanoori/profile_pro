import Row from "./Row";
export default function AccountDetailCard({ details }) {
  return (
    <div className="card infoCard">
      <h2 className="cardTitle">Account Details</h2>
      <div className="rows">
        <Row label="Role" value={details.role}></Row>
        <Row
          label="Status"
          value={<span className="pill">{details.Status}</span>}
        ></Row>
        <Row
          label="Verification"
          value={<span className="verified">{details.Verification}</span>}
        ></Row>
      </div>
    </div>
  );
}
