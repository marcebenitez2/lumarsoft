import { stackTechnologies } from "@/lib/techStack";
import React from "react";
import Icon from "./icon";
import { Animation } from "./animation";

const Technologies = ({ lenguaje }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
        viewport: { once: true, offset: 0.4 },
      },
    },
  };

  const itemAnimado = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="w-full pb-10 flex items-center flex-col"
      id="technologies"
    >
      <Animation
        animationInitial={{ opacity: 0, y: 30 }}
        animationWhileInView={{ opacity: 1, y: 0 }}
        animationViewPort={{ once: true, offset: 0.5 }}
        animationTransition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="flex justify-center">
          <h3 className="text-5xl font-semibold text-center mt-16 lgn:text-5xl text-sky-500 bg-gray-800 rounded-lg  inline-block px-4 py-1">
            {lenguaje.title}
          </h3>
        </span>
        <p className="text-center text-xl mt-4 lgn:text-base text-gray-400">
          {lenguaje.description}
        </p>
      </Animation>

      <Animation
        style="grid grid-cols-6 gap-4 lgn:grid-cols-5 mdn:grid-cols-4 smn:grid-cols-4 mt-6"
        animationVariants={container}
        animationInitial="hidden"
        animationWhileInView="show"
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        {stackTechnologies.map((tech) => (
          <Animation
            style="list-none"
            animationInitial={{ opacity: 0, y: 30 }}
            animationVariants={itemAnimado}
            key={tech.id}
          >
            <Icon
              name={tech.name}
              image={tech.icon}
              url={tech.url}
              key={tech.id}
            />
          </Animation>
        ))}
      </Animation>
    </section>
  );
};

export default Technologies;
