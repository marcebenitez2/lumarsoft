import React from "react";
import CardService from "./cardService";
import { Animation } from "./animation";

const SecondSkills = ({ lenguaje }) => {
  return (
    <section
      className="w-full min-h-screen h-full flex flex-col items-center justify-center gap-20 2xln:pt-20 pt-10"
      id="services"
    >
      <Animation
        animationInitial={{ opacity: 0, y: 30 }}
        animationWhileInView={{ opacity: 1, y: 0 }}
        animationViewPort={{ once: true, offset: 0.5 }}
        animationTransition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex flex-col text-center font-bold">
          <span className="text-6xl lgn:text-5xl">{lenguaje.title1}</span>
          <span className="text-6xl text-center text-sky-600 lgn:text-5xl">
            {lenguaje.title2}
          </span>
        </div>
      </Animation>

      <div className="w-full flex gap-10 lgn:flex lgn:flex-col">
        {lenguaje.cardService.map((skill) => (
          <CardService lenguaje={skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
};

export default SecondSkills;
