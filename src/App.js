import { useState } from "react";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import Solutions from "./component/Solutions/Solutions";
import CustomNavbar from "./component/CustomNavbar/CustomNavbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";

function App() {
  const [currPage, setCurrPage] = useState(0);

  function renderPage() {
    switch (currPage) {
      case 0:
        return <Home setCurrPage={setCurrPage} currPage={currPage} />;
      case 1:
        return <About setCurrPage={setCurrPage} currPage={currPage} />;
      case 2:
        return <Solutions />;
      case 3:
        return <Services />;
      case 4:
        return <Contact />;
      default:
        return <Home setCurrPage={setCurrPage} currPage={currPage} />;
    }
  }

  return (
    <>
      <CustomNavbar currPage={currPage} setCurrPage={setCurrPage} />
      <div style={{ marginTop: "4%", paddingBottom: 120 }}>{renderPage()}</div>
      <div
        style={{
          background: "black",
          width: "100%",
          height: 100,
          color: "wheat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          left: 0,
          bottom: 0,
        }}
      >
        <Stack
          gap={2}
          className="col-md-5 mx-auto"
          style={{ alignItems: "center", marginTop: 5 }}
        >
          <Stack
            direction="horizontal"
            gap={2}
            style={{ justifyContent: "center" }}
          >
            <div>
              <FacebookIcon style={{ fontSize: "2em" }} />
            </div>
            <div>
              <LinkedInIcon style={{ fontSize: "2em" }} />
            </div>
          </Stack>
          <div>© Cipher tech infowars Pvt Ltd.</div>
        </Stack>
      </div>
    </>
  );
}

export default App;
