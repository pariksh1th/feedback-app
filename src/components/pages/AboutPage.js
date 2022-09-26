import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React App for leaving feedback on services and products</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Go back</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
