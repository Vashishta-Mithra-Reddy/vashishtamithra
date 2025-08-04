"use client"

import { useState, useEffect, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./LoadingAnimation.module.css"

export default function LoadingAnimation({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1000)
    const timer2 = setTimeout(() => setStage(2), 2500)
    const timer3 = setTimeout(() => setStage(3), 3500)
    const timer4 = setTimeout(() => setStage(4), 4500)
    const timer5 = setTimeout(() => setIsComplete(true), 5500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [])

  const fullName = "Vashishta Mithra Reddy"
  const letters = fullName.split("")

  return (
    <div className="relative bg-background">
      {/* Main content hidden until loading finishes */}
      <div className={`${isComplete ? "block" : "hidden"}`}>
        {children}
      </div>

      {/* Loading animation overlay */}
      {!isComplete && (
        <div className={`fixed inset-0 z-40 min-h-screen ${styles.loadingAnimation} bg-background flex items-center justify-center overflow-hidden`}>
          <AnimatePresence mode="wait">
            <motion.div
              key="loading-content"
              className="relative"
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {stage >= 1 && (
                <div className="flex items-center justify-center relative">
                  {letters.map((letter, index) => {
                    const isV = index === 0
                    const shouldSlideOut = stage >= 2 && !isV

                    return (
                      <motion.span
                        key={index}
                        className="text-foreground text-7xl font-light inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: shouldSlideOut ? 0 : 1,
                          y: shouldSlideOut ? -30 : 0,
                          x: isV && stage >= 4 ? "337px" : 0,
                        }}
                        transition={{
                          opacity: {
                            duration: 0.6,
                            delay: stage === 1 ? index * 0.03 : shouldSlideOut ? index * 0.02 : 0,
                            ease: "easeOut",
                          },
                          y: {
                            duration: 0.6,
                            delay: stage === 1 ? index * 0.03 : shouldSlideOut ? index * 0.02 : 0,
                            ease: "easeOut",
                          },
                          x: {
                            duration: 0.8,
                            delay: 0,
                            ease: "easeOut",
                          },
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    )
                  })}

                  {stage >= 3 && (
                    <motion.span
                      className="text-foreground text-7xl font-light absolute"
                      style={{ right: "0px" }}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        x: stage >= 4 ? "-350px" : 0,
                      }}
                      transition={{
                        opacity: { duration: 0.6, delay: 0.2, ease: "easeOut" },
                        x: {
                          duration: 0.8,
                          delay: stage >= 4 ? 0 : 0,
                          ease: "easeOut",
                        },
                      }}
                    >
                      19
                    </motion.span>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Progress indicator */}
          {stage > 0 && (
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-1 bg-background/80 rounded-full">
                <motion.div
                  className="h-full bg-foreground"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.5, ease: "linear" }}
                />
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  )
}
