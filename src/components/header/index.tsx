import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import Clock from "react-live-clock";
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

// eslint-disable-next-line no-empty-pattern
export const Header = ({}: HeaderProps) => {
  const [searchLocation, setSearchLocation] = useState("");
  const navigate = useNavigate();
  const handleSearchClick = () => navigate(`/${searchLocation}`);

  return (
    <header
      style={{
        padding: 0,
        margin: 0,
        height: "10vh",
        width: "100vw",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            margin: "0 1rem",
            height: "50%",
            borderRadius: 5,
            fontSize: "1.5rem",
          }}
          type={"text"}
          onChange={(e) => setSearchLocation(e.target.value)}
          placeholder={"Search..."}
        />
        <FaSearchLocation
          size={"5vh"}
          style={{ cursor: "pointer" }}
          onClick={handleSearchClick}
        />
      </div>
      <div style={{ margin: "0 1rem", fontSize: "1.5rem" }}>
        <Clock format={"HH:mm:ss"} interval={1000} ticking />
      </div>
    </header>
  );
};
