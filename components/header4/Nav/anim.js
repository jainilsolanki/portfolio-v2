export const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5,
            delay: 0.75 + (i * 0.1), 
            ease: [.215,.61,.355,1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut"}
    }
}

export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
        scale: 0.9,
        transformOrigin: "50% 100%",
        filter: "blur(4px)"
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.85,
            delay: 0.5 + (i * 0.1),
            ease: [0.215, 0.61, 0.355, 1],
            opacity: { duration: 0.35 },
            rotateX: {
                type: "spring",
                damping: 15,
                stiffness: 100
            },
            translateY: {
                type: "spring",
                damping: 20,
                stiffness: 120
            },
            scale: {
                duration: 0.65,
                ease: [0.215, 0.61, 0.355, 1]
            },
            filter: { duration: 0.4 }
        }
    }),
    exit: {
        opacity: 0,
        rotateX: -45,
        translateY: 40,
        scale: 0.95,
        filter: "blur(4px)",
        transition: { 
            duration: 0.65, 
            ease: [0.76, 0, 0.24, 1],
            opacity: { duration: 0.35 }
        }
    }
}

// Stagger from side effect
export const slideFromSide = {
    initial: {
        opacity: 0,
        x: -50,
        rotateY: -25
    },
    enter: (i) => ({
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
            duration: 0.6,
            delay: 0.5 + (i * 0.1),
            ease: [0.215, 0.61, 0.355, 1],
            opacity: { duration: 0.35 }
        }
    }),
    exit: {
        opacity: 0,
        x: 50,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
}

// Blur and slide effect
export const blurSlide = {
    initial: {
        opacity: 0,
        x: -30,
        filter: "blur(8px)"
    },
    enter: (i) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            delay: 0.5 + (i * 0.1),
            ease: [0.215, 0.61, 0.355, 1],
            filter: { duration: 0.4 }
        }
    }),
    exit: {
        opacity: 0,
        x: 30,
        filter: "blur(8px)",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    }
}

// Dramatic perspective with twist
export const perspectiveTwist = {
    initial: {
        opacity: 0,
        rotateX: 120,
        rotateY: -20,
        translateY: 100,
        translateZ: -100,
        scale: 0.8,
        transformOrigin: "50% 100%"
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        translateY: 0,
        translateZ: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            delay: 0.5 + (i * 0.1),
            ease: [0.215, 0.61, 0.355, 1],
            rotateX: {
                type: "spring",
                damping: 12,
                stiffness: 90
            },
            rotateY: {
                type: "spring",
                damping: 15,
                stiffness: 100
            }
        }
    }),
    exit: {
        opacity: 0,
        rotateX: -60,
        rotateY: 20,
        translateZ: -100,
        scale: 0.9,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    }
}

// Floating bubbles effect
export const bubbleFloat = {
    initial: {
        opacity: 0,
        y: 100,
        scale: 0.6,
        rotate: Math.random() * 20 - 10
    },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
            delay: 0.3 + (i * 0.12),
            y: {
                type: "spring",
                damping: 8,
                stiffness: 60
            },
            rotate: {
                type: "spring",
                damping: 12,
                stiffness: 90
            }
        }
    }),
    exit: {
        opacity: 0,
        y: -50,
        scale: 0.8,
        rotate: Math.random() * -20 + 10,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    }
}
