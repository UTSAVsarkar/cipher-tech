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
                Cipher Tech Infowars Pvt Ltd is a premier IT Services Integrator
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
        <div className="container">
          <Card border="primary" className="box">
            <Card.Header>
              <Stack>
                <LiveTvIcon style={{ fontSize: "10em", color: "#097969" }} />
                Our Vision
              </Stack>
            </Card.Header>
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
            <Card.Header>
              <Stack>
                <MilitaryTechIcon
                  style={{ fontSize: "10em", color: "#097969" }}
                />
                Our Mission
              </Stack>
            </Card.Header>
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
