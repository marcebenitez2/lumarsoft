import React from "react";
import "./nosotros.css";
import { FaCheck } from "react-icons/fa6";
import { Animation } from "./animation";

const Nosotros = ({ lenguaje }) => {
  return (
    <Animation
      animationInitial={{ opacity: 0, y: 30 }}
      animationWhileInView={{ opacity: 1, y: 0 }}
      animationViewPort={{ once: true, offset: 0.5 }}
      animationTransition={{ duration: 0.7, ease: "easeOut" }}
      style="w-full mt-10 h-full flex flex-col items-center justify-center "
      id="nosotros"
    >
      <div className="space-y-2">
        <div className="space-y-2">
          <div className="items-center flex justify-center">
            <div className="inline-block rounded-lg px-7 py-2 text-5xl font-semibold bg-gray-800 text-sky-500 mb-2 smn:text-4xl">
              {lenguaje.title1}
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter smn:text-xl">
              {lenguaje.subtitle}
            </h2>
            <p className="max-w-3xl text-gray-400 smn:text-base">
              {lenguaje.description}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold smn:text-xl">
              {lenguaje.subtitle2}
            </h3>
            <ul className="grid gap-2 smn:text-base">
              {lenguaje.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <FaCheck className="inline-block h-4 w-4" />
                  <span className="text-sm leading-none">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold smn:text-xl">
              {lenguaje.subtitle3}
            </h3>
            <p className="max-w-3xl text-gray-400 smn:text-base">
              {lenguaje.description2}
            </p>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Nosotros;
