import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loding..."
      style={{ display: "block", margin: "auto", width: "100px" }}
    ></img>
  );
}

export default Spinner;
