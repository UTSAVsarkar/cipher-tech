import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import "./About.css";
import { Stack } from "react-bootstrap";

function About({ setCurrPage, currPage }) {
  return (
    <div style={{ padding: 80 }}>
      <center>
        <Card style={{ marginBottom: 10 }}>
          <Card.Header>
            <Stack>
              <div>
                <TravelExploreIcon
                  style={{ fontSize: "10em", color: "#097969" }}
                />
              </div>
              <h1>Who are we?</h1>
            </Stack>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                Ciphertech Infoways Pvt Ltd. is a premier IT Services Integrator
                dedicated to delivering world-class IT infrastructure solutions
                to customers across India. With a commitment to excellence and
                innovation, we provide comprehensive and robust IT services
                tailored to meet the unique needs of our clients. At Cipher Tech
                Infowars, we offer an extensive range of services and solutions
                designed to foster faster and more efficient business outcomes.
                Our services include IT infrastructure management, ensuring
                seamless operation and maintenance of hardware and software
                systems, and cloud solutions that help businesses transition
                smoothly to scalable, secure, and cost-effective cloud
                environments. Additionally, we deliver comprehensive
                cybersecurity services to protect businesses from evolving
                threats and ensure data integrity and confidentiality. Our
                network solutions guarantee reliable and high-speed
                connectivity, tailored to support the growing needs of
                businesses, while our IT consulting services provide strategic
                guidance to help leverage technology for growth and competitive
                advantage.{" "}
              </p>
            </blockquote>
          </Card.Body>
        </Card>

        <br />

        <Card style={{ marginBottom: 10 }}>
          <Card.Header>
            <Stack>
              <Stack>
                <div>
                  <LiveTvIcon style={{ fontSize: "10em", color: "#097969" }} />
                </div>
                <h1>Our Vision</h1>
              </Stack>
            </Stack>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              As leaders in system integration, we pride ourselves on our
              ability to seamlessly connect disparate systems and technologies,
              creating cohesive and efficient solutions that drive our
              customers' success. We stay at the forefront of technological
              advancements, continuously innovating and refining our methods to
              offer cutting-edge solutions that deliver measurable results. Our
              comprehensive approach means that we are equipped to handle every
              aspect of our customers' integration needs, from initial
              consultation and planning to implementation and ongoing support.
              We take a holistic view, considering all facets of our customers'
              operations to provide solutions that enhance productivity,
              streamline processes, and reduce costs.
            </blockquote>
          </Card.Body>
        </Card>

        <br />

        <Card style={{ marginBottom: 10 }}>
          <Card.Header>
            <Stack>
              <div>
                <MilitaryTechIcon
                  style={{ fontSize: "10em", color: "#097969" }}
                />
              </div>
              <h1>Our Mission</h1>
            </Stack>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              Our mission is to deliver top-tier IT hardware and software
              solutions by partnering with leading technology providers. We aim
              to become the preferred IT solution provider for all our customers
              through innovation, excellence, and unparalleled service. In a
              world where technology evolves at an unprecedented pace,
              businesses need reliable IT solutions that can keep up with their
              dynamic needs. We are committed to providing our customers with
              the most advanced and effective IT hardware and software solutions
              available. By collaborating with the foremost technology
              providers, we ensure that our offerings are at the cutting edge of
              the industry, combining quality, performance, and reliability.
            </blockquote>
          </Card.Body>
        </Card>

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
