import React from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import SchoolIcon from "@mui/icons-material/School";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import "./CustomCards.css";
import { Stack } from "react-bootstrap";

function CustomCards() {
  const items = [
    "SOLUTIONS",
    "SERVICES",
    "SUCCESS",
    "SUPPORT",
    "KNOWLEDGE",
    "CUSTOMER",
  ];

  function renderIcon(name) {
    switch (name) {
      case "SOLUTIONS":
        return <EmojiObjectsIcon style={{ fontSize: "3em" }} />;
      case "SERVICES":
        return <CleaningServicesIcon style={{ fontSize: "3em" }} />;
      case "SUCCESS":
        return <EmojiEventsIcon style={{ fontSize: "3em" }} />;
      case "SUPPORT":
        return <NotListedLocationIcon style={{ fontSize: "3em" }} />;
      case "KNOWLEDGE":
        return <SchoolIcon style={{ fontSize: "3em" }} />;
      case "CUSTOMER":
        return <SupportAgentIcon style={{ fontSize: "3em" }} />;
    }
  }

  return (
    <div className="container">
      {items.map((item) => {
        return (
          <div key={item} className="box">
            <Stack>
              <div>{renderIcon(item)}</div>
              {item}
            </Stack>
          </div>
        );
      })}
    </div>
  );
}

export default CustomCards;
