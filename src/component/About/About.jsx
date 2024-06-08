import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./About.css";

function About({ setCurrPage }) {
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
                MURK Technosoft is a IT Services Integrator focused on providing
                world-class IT infrastructure services to customers across
                India. With our comprehensive spectrum of solutions and
                services, we deliver faster and better business. We believe in
                following a structured approach to create and implement
                solutions.{" "}
              </p>
            </blockquote>
          </Card.Body>
        </Card>
        <div className="container">
          <Card border="primary" className="box">
            <Card.Header>Our Vision</Card.Header>
            <Card.Body>
              <Card.Text>
                - To be a trusted advisor for all our customers.
                <br />- To be a leader in system integration and act as a one
                stop shop for all our customer needs.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary" className="box">
            <Card.Header>Our Mission</Card.Header>
            <Card.Body>
              <Card.Text>
                To provide the best IT hardware and software solutions by
                collaborating with the best technologies and become the
                preferred IT solution provider for all our customers.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Button
          variant="success"
          style={{ borderRadius: 10, fontSize: 20, marginTop: 10 }}
          onClick={() => setCurrPage(1)}
        >
          GET STARTED
        </Button>
      </center>
    </div>
  );
}

export default About;
