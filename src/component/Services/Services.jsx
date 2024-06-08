import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { useState } from "react";

function Services() {
  const [toggle, setToggle] = useState(false);
  return (
    <div style={{ marginTop: 100 }}>
      <center>
        <Card style={{ margin: 10 }}>
          <div>
            <DesignServicesIcon style={{ fontSize: "10em", color: "gray" }} />
          </div>
          <Card.Body>
            <Card.Title>Our Services</Card.Title>
            <Card.Text>
              {!toggle ? (
                <>
                  SWe have expertise to provide complete deployment and
                  integration services to ensure a satisfactory user experience
                  & adhere to IT standards.
                  <br />
                  <br />
                  We have capabilities to analyze your existing infrastructure
                  and basis on the requirement we can then plan, design and
                  deploy your network to meet the business needs.
                </>
              ) : (
                <>
                  <CheckCircleIcon style={{ color: "green" }} />
                  Planning
                  <br />
                  <CheckCircleIcon style={{ color: "green" }} />
                  Detailed infrastructure solution
                  <br />
                  <CheckCircleIcon style={{ color: "green" }} />
                  Implementation
                  <br />
                  <CheckCircleIcon style={{ color: "green" }} />
                  Deployment and product installation
                </>
              )}
            </Card.Text>
            <Button
              variant={toggle ? "primary" : "success"}
              onClick={() => setToggle(!toggle)}
            >
              {!toggle ? "Order of Excecution" : "Back"}
            </Button>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
}

export default Services;
