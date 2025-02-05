import React from "react";
import { AnimatePresence, motion } from "framer-motion"

export const GrowingEnterAnimation = ({
  children,
  className
}) => {
  return (
    <AnimatePresence>
      <motion.div
      className={className}
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const ButtonAnimation = ({
  children,
  disabled,
  link,
  full,
  className
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={`${full ? '' : 'inline-block'} ${className}`}
        initial={
          !disabled
            ? {
                scaleX: 0,
                opacity: 0,
                backgroundColor: "transparent",
              }
            : {}
        }
        animate={
          !disabled
            ? {
                scaleX: 1,
                opacity: 1,
                // transition: {
                //   duration: 0.25,
                // },
              }
            : {}
        }
        whileHover={
          !disabled
            ? {
                scale: 1.025,
              }
            : {}
        }
        whileTap={
          !disabled && !link
            ? {
                scale: 0.975,
              }
            : {}
        }
        whileFocus={
          !disabled
            ? {
                border: "1px solid black",
              }
            : {}
        }
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const LayoutAnimation = ({
  children,
  className
}) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}