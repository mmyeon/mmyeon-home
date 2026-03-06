import { useEffect } from "react";
import { LINKS } from "../constants/links";

const Resume = () => {
  useEffect(() => {
    window.location.href = LINKS.resume;
  }, []);

  return null;
};

export default Resume;
