import React from "react";

 const Details = ({ title, className, titleStyle, column }) => (
  <p className={className}>{column} <span className={titleStyle}>{title}</span></p>
);
export default Details;
