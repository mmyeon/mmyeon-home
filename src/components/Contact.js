import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/constant";

const ContactContainer = styled.div`
  min-height: 100vh;
  background: ${COLORS.pastelBlue};
`;

const Contact = () => {
  return <ContactContainer id="contact">Contact</ContactContainer>;
};

export default Contact;
