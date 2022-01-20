import React from "react";
import Typewriter from "typewriter-effect";

const Typeeffect = () => {
  return (
    <div>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(writer) => {
          writer
            .typeString("Day 1 Studio")
            .pauseFor(1500)
            .deleteAll()
            .typeString("Let the Journey begin")
            .pauseFor(1500)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default Typeeffect;
