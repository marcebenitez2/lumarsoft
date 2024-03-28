"use client";
import React from "react";
import { motion } from "framer-motion";

export const Animation = ({
  children,
  style,
  animationInitial,
  animationAnimate,
  animationTransition,
  animationWhileInView,
  animationViewPort,
  animationVariants
}) => {
  return (
    <motion.div
      className={style}
      initial={animationInitial}
      animate={animationAnimate}
      whileInView={animationWhileInView}
      transition={animationTransition}
      viewport={animationViewPort}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};
