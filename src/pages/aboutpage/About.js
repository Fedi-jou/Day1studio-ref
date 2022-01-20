import React from "react";
import { homeObjOne, homeObjTwo } from "./Data";
import { InfoSection } from "../../components";

function About() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default About;
