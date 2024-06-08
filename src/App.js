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
        return <Home />;
      case 1:
        return <About />;
      case 2:
        return <Solutions />;
      case 3:
        return <Services />;
      case 4:
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (
    <>
      <CustomNavbar currPage={currPage} setCurrPage={setCurrPage} />
      <div style={{ marginTop: "4%" }}>{renderPage()}</div>
    </>
  );
}

export default App;
