import React from "react";
import "./Card.css";
import brandIcon from "../assets/brand-icon.png";

export default function Card({ children }) {
  return (
    <div className="card">
      <img className="icon" src={brandIcon} />
      {children}
    </div>
  );
}

Card.Title = function CardTitle({ children }) {
  return <h3 className="title">{children}</h3>;
};

Card.Message = function CardMessage({ children }) {
  return <p className="message">{children}</p>;
};
