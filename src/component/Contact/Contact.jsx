import LocationOnIcon from "@mui/icons-material/LocationOn";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <center style={{ marginTop: 50 }}>
      <b style={{ color: "#50c878" }}>Have Any Questions?</b>
      <h1>GET IN TOUCH</h1>
      <p>
        <LocationOnIcon />
        201/9, Bakshi House 40-41, Nehru Place, New Delhi - 110019
      </p>

      <div style={{ width: "60%" }}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Mobile
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />

        <InputGroup>
          <InputGroup.Text>Message</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br />

        <Button variant="contained">Contained</Button>
      </div>
    </center>
  );
}

export default Contact;
