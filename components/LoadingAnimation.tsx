"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./LoadingAnimation.module.css"

export default function LoadingAnimation() {
  const [stage, setStage] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1000) // Show full name
    const timer2 = setTimeout(() => setStage(2), 2500) // Start letter slide out
    const timer3 = setTimeout(() => setStage(3), 3500) // Show 19
    const timer4 = setTimeout(() => setStage(4), 4500) // Both slide to center
    const timer5 = setTimeout(() => setIsComplete(true), 5500) // Complete

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

  const handleRestart = () => {
    setStage(0)
    setIsComplete(false)
  }

  return (
    <div className={`min-h-screen ${styles.loadingAnimation} bg-black flex items-center justify-center relative overflow-hidden`}>
      <AnimatePresence mode="wait">
        {!isComplete && (
          <motion.div
            key="loading-content"
            className="relative"
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Full name layout */}
            {stage >= 1 && (
              <div className="flex items-center justify-center relative">
                {letters.map((letter, index) => {
                  const isV = index === 0
                  const shouldSlideOut = stage >= 2 && !isV

                  return (
                    <motion.span
                      key={index}
                      className="text-white text-7xl font-light inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: shouldSlideOut ? 0 : 1,
                        y: shouldSlideOut ? -30 : 0,
                        x: isV && stage >= 4 ? "337px" : 0, // V slides to center from left
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

                {/* 19 appears and slides to center from right */}
                {stage >= 3 && (
                  <motion.span
                    className="text-white text-7xl font-light absolute"
                    style={{ right: "0px" }} // Start from right side
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: stage >= 4 ? "-350px" : 0, // Slide to center from right
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
        )}

        {/* Background content */}
        {isComplete && (
          <motion.div
            key="main-content"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl font-light text-white mb-2">V19</h1>
                <p className="text-lg text-gray-400 font-light">Portfolio</p>
              </motion.div>

              <motion.button
                onClick={handleRestart}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="px-6 py-2 border border-white/20 text-white hover:bg-white/5 transition-all duration-300 text-sm font-light tracking-wide rounded"
              >
                REPLAY
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simple progress indicator */}
      {!isComplete && stage > 0 && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-px bg-white/30">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}
