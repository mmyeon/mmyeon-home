import React from "react";
import { COLORS } from "../styles/constant";
import Button from "./Button";

const HireMeButton = () => {
  return (
    <a href="mailto:mindfulyeon@gmail.com?subject=당신과 함께 일해보고 싶어요.">
      <Button title="HIRE ME" backgroundColor={`${COLORS.orange}`} />
    </a>
  );
};

export default HireMeButton;
