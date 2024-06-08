import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./About.css";

function About({ setCurrPage, currPage }) {
  return (
    <div style={{ padding: 80 }}>
      <center>
        <Card style={{ marginBottom: 10 }}>
          <Card.Header>
            <h1>Who are we?</h1>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                Cipher tech infowars Pvt Ltd is a premier IT Services Integrator
                dedicated to delivering world-class IT infrastructure solutions
                to customers across India. Our extensive range of services and
                solutions ensures faster and more efficient business outcomes.
                We adhere to a structured methodology to design and implement
                innovative solutions, ensuring optimal results for our clients.{" "}
              </p>
            </blockquote>
          </Card.Body>
        </Card>
        <div className="container">
          <Card border="primary" className="box">
            <Card.Header>Our Vision</Card.Header>
            <Card.Body>
              <Card.Text>
                Our goal is to become a trusted advisor for all our customers,
                providing unparalleled expertise and guidance. We strive to lead
                the industry in system integration, serving as a comprehensive,
                one-stop solution for all our customers' needs.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary" className="box">
            <Card.Header>Our Mission</Card.Header>
            <Card.Body>
              <Card.Text>
                Our mission is to deliver top-tier IT hardware and software
                solutions by partnering with leading technology providers. We
                aim to become the preferred IT solution provider for all our
                customers through innovation, excellence, and unparalleled
                service.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Button
          variant="success"
          style={{
            borderRadius: 10,
            fontSize: 20,
            marginTop: 10,
            display: currPage === 1 ? "none" : "",
          }}
          onClick={() => setCurrPage(1)}
        >
          GET STARTED
        </Button>
      </center>
    </div>
  );
}

export default About;
