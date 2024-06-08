import { useState } from "react";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import Solutions from "./component/Solutions/Solutions";
import CustomNavbar from "./component/CustomNavbar/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div>© Cipher tech infowars Pvt Ltd</div>
      </div>
    </>
  );
}

export default App;
