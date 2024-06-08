import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import GroupIcon from "@mui/icons-material/Group";
import EvStationIcon from "@mui/icons-material/EvStation";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
//ciphertech infoways pvt ltd.
function Solutions() {
  const [net, setNet] = useState(true);
  const [pow, setPow] = useState(true);

  return (
    <div style={{ marginTop: 100 }}>
      <Card style={{ margin: 20 }}>
        <center>
          <div>
            <GroupIcon style={{ fontSize: "10em" }} />
          </div>
          <h1>Networking</h1>
        </center>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first" justify={"center"}>
            <Nav.Item>
              <Nav.Link eventKey="#first" onClick={() => setNet(true)}>
                Description
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#second" onClick={() => setNet(false)}>
                Solutions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {net ? (
              <>
                Networking is the backbone of your IT infrastructure of your
                business.
                <br />
                Connectivity must be fast, scalable, secure and should ensure to
                meet and fulfill the growing demands of business.
                <br />
                To maximize performance and reliability, network has to be built
                on the right routing and switching foundation.
                <br />
                Our network services help you to evaluate current network and
                optimize the same to meet the present and future needs.
              </>
            ) : (
              <>
                <CheckCircleIcon style={{ color: "green" }} /> Networking &
                routing solutions
                <br />
                <CheckCircleIcon style={{ color: "green" }} /> Wireless
                connectivity & mobility
              </>
            )}
          </Card.Text>
        </Card.Body>
      </Card>

      <br />

      <Card style={{ margin: 20 }}>
        <center>
          <div>
            <EvStationIcon style={{ fontSize: "10em" }} />
          </div>
          <h1>UPS / Racks / Power Solutions</h1>
        </center>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first" justify={"center"}>
            <Nav.Item>
              <Nav.Link eventKey="#first" onClick={() => setPow(true)}>
                Description
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#second" onClick={() => setPow(false)}>
                Solutions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {pow ? (
              <>
                Power solutions ensures the business is running 24 x7. In
                today's dynamic world, it is not enough for enterprises to have
                basic power protection. With digital trends constantly emerging
                and transforming the way you do business, business continuity is
                all the more vital.
              </>
            ) : (
              <>
                <CheckCircleIcon style={{ color: "green" }} /> UPS Solutions
                <br />
                <CheckCircleIcon style={{ color: "green" }} /> Cooling solutions
                <br />
                <CheckCircleIcon style={{ color: "green" }} /> PDU’s
                <br />
                <CheckCircleIcon style={{ color: "green" }} /> Racks
              </>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Solutions;
