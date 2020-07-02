import React from "react";

function Footer() {
  return (
    <div
      className="text-muted mx-auto py-3"
      style={{
        textAlign: "center",
        width: "100%",
      }}
    >
      <div style={{ padding: "6px" }}>
        &copy; 2020 TidakCOVID-19 | Oleh:{" "}
        <a
          href="https://github.com/ardabudi"
          target="blank"
          style={{ textDecoration: "none" }}
        >
          Arda Budi Santoso
        </a>
      </div>
    </div>
  );
}

export default Footer;
