import Card from "../components/multi/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Super Cool Project:</h1>
        <p>
          {" "}
          I followed an awesome Udemy Course to refresh my skills in React and
          made this!{" "}
        </p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
