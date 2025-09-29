# FRAMER MOTION DOCUMENTATION NOTES

## 🎯 OVERVIEW
**Framer Motion** is a production-grade animation library for React that provides:
- **Hardware-accelerated animations** (120fps performance)
- **Declarative API** that feels like natural React
- **Animate anything** - no CSS limitations
- **App-like gestures** for touch devices
- **Spring physics** for natural animations

## 📦 INSTALLATION
```bash
npm install motion
```

```jsx
import { motion } from "motion/react"
```

---

## 🎬 BASIC ANIMATION

### Core Motion Component
Every HTML/SVG element can be animated:
```jsx
<motion.div />
<motion.a href="#" />
<motion.circle cx={0} />
```

### Simple Animation
```jsx
<motion.div animate={{ opacity: 1, x: 100 }} />
```

### Enter Animation
```jsx
<motion.button 
  initial={{ scale: 0 }} 
  animate={{ scale: 1 }} 
/>

// Disable enter animation
<motion.button initial={false} animate={{ scale: 1 }} />
```

---

## 🎨 ANIMATABLE VALUES

### Transform Properties (Independent!)
- **Translate:** `x`, `y`, `z`
- **Scale:** `scale`, `scaleX`, `scaleY`
- **Rotate:** `rotate`, `rotateX`, `rotateY`, `rotateZ`
- **Skew:** `skew`, `skewX`, `skewY`
- **Perspective:** `transformPerspective`

```jsx
// Animate transforms independently
<motion.button
  initial={{ y: 10 }}
  animate={{ y: 0 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
/>
```

### Supported Value Types
- **Numbers:** `0`, `100`
- **Strings with numbers:** `"0vh"`, `"10px"`
- **Colors:** Hex, RGBA, HSLA
- **Complex strings:** `box-shadow`, `background-image`
- **Display/Visibility:** `"none"/"block"`, `"hidden"/"visible"`

### Value Type Conversion
```jsx
// Different units can be animated between
<motion.div
  initial={{ x: "100%" }}
  animate={{ x: "calc(100vw - 50%)" }}
/>

// Width/height to "auto"
<motion.div
  initial={{ height: 0 }}
  animate={{ height: "auto" }}
/>
```

### CSS Variables
```jsx
// Animate CSS variables
<motion.ul
  initial={{ '--rotate': '0deg' }}
  animate={{ '--rotate': '360deg' }}
>
  <li style={{ transform: 'rotate(var(--rotate))' }} />
</motion.ul>

// Use CSS variables as targets
<motion.li animate={{ backgroundColor: "var(--action-bg)" }} />
```

---

## ⚡ TRANSITIONS

### Default Behavior
- **Physical properties** (`x`, `scale`) use **spring physics**
- **Visual properties** (`opacity`, `color`) use **duration-based easing**

### Custom Transitions
```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }}
/>

// Spring transition
<motion.div
  animate={{ x: 100 }}
  transition={{ 
    type: "spring", 
    stiffness: 100,
    damping: 20 
  }}
/>
```

### Global Transition Config
```jsx
<MotionConfig transition={{ duration: 0.3 }}>
  <motion.div animate={{ opacity: 1 }} />
</MotionConfig>
```

---

## 🎭 GESTURE ANIMATIONS

### Supported Gestures
```jsx
<motion.button
  whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
  whileTap={{ scale: 0.95 }}
  whileFocus={{ outline: "2px solid blue" }}
  whileDrag={{ scale: 1.2 }}
  whileInView={{ opacity: 1 }}
/>
```

### Event Handlers
```jsx
<motion.button
  onHoverStart={() => console.log('hover started!')}
  onHoverEnd={() => console.log('hover ended!')}
  onTap={() => console.log('tapped!')}
/>
```

---

## 📜 SCROLL ANIMATIONS

### Scroll-Triggered (whileInView)
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
/>
```

### Scroll-Linked (useScroll)
```jsx
import { useScroll, useTransform } from "motion/react"

const { scrollYProgress } = useScroll()
const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

return <motion.div style={{ scale }} />
```

### Advanced Scroll Effects
```jsx
// Parallax
const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

// Color transforms
const backgroundColor = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  ["#f00", "#0f0", "#00f"]
)

// Smooth scrolling
const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
})
```

---

## 🎪 VARIANTS & ORCHESTRATION

### Basic Variants
```jsx
const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
}

<motion.div
  variants={variants}
  initial="hidden"
  whileInView="visible"
/>
```

### Propagation (Parent to Children)
```jsx
const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
}

<motion.ul
  initial="hidden"
  whileInView="visible"
  variants={list}
>
  <motion.li variants={item} />
  <motion.li variants={item} />
</motion.ul>
```

### Staggered Animations
```jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
```

### Dynamic Variants
```jsx
const variants = {
  hidden: { opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    transition: { delay: index * 0.3 }
  })
}

// Use with custom prop
<motion.div custom={index} variants={variants} />
```

---

## 🚪 EXIT ANIMATIONS

### AnimatePresence
```jsx
import { AnimatePresence } from "motion/react"

<AnimatePresence>
  {isVisible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    />
  )}
</AnimatePresence>
```

### Mode Options
```jsx
<AnimatePresence mode="wait">
  {/* Only one element animates at a time */}
</AnimatePresence>

<AnimatePresence mode="popLayout">
  {/* Exiting elements don't affect layout */}
</AnimatePresence>
```

---

## 🎹 KEYFRAMES

### Basic Keyframes
```jsx
<motion.div animate={{ x: [0, 100, 0] }} />

// Use current value as starting point
<motion.div animate={{ x: [null, 100, 0] }} />
```

### Keyframe Timing
```jsx
<motion.circle
  animate={{
    cx: [null, 100, 200],
    transition: { 
      duration: 3, 
      times: [0, 0.2, 1] // Custom timing
    }
  }}
/>
```

---

## 🎛️ LAYOUT ANIMATIONS

### Basic Layout Animation
```jsx
<motion.div layout />
```

### Layout ID (Shared Element)
```jsx
// Animate between different elements
<motion.div layoutId="underline" />
```

### Layout Groups
```jsx
import { LayoutGroup } from "motion/react"

<LayoutGroup>
  <motion.div layoutId="box" />
  <motion.div layoutId="box" />
</LayoutGroup>
```

---

## 🎮 ADVANCED CONTROLS

### useAnimate Hook
```jsx
import { useAnimate, stagger } from "motion/react"

function MyComponent() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate([
      [".item", { opacity: 1 }, { delay: stagger(0.1) }],
      [".box", { x: 100 }]
    ])
  }, [])

  return (
    <div ref={scope}>
      <div className="item" />
      <div className="box" />
    </div>
  )
}
```

### Animation Controls
```jsx
const controls = animate(scope.current, { x: 100 })

// Control playback
controls.play()
controls.pause()
controls.stop()
controls.speed = 0.5
```

---

## 📊 MOTION VALUES

### Creating Motion Values
```jsx
import { useMotionValue, useTransform } from "motion/react"

const x = useMotionValue(0)
const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

<motion.div drag="x" style={{ x, opacity }} />
```

### Animating Motion Values
```jsx
const count = useMotionValue(0)

// Animate the value
animate(count, 100, { duration: 2 })

// Render in component
<motion.div>{count}</motion.div>
```

---

## 🔧 PERFORMANCE TIPS

### Hardware Acceleration
```jsx
// Add willChange for transforms
<motion.div 
  style={{ willChange: "transform" }}
  animate={{ x: 100 }}
/>

// For other properties
<motion.div 
  style={{ willChange: "opacity, backgroundColor" }}
  animate={{ opacity: 1, backgroundColor: "blue" }}
/>
```

### Optimize Hot Functions
```jsx
// In onUpdate, useTransform, etc.
// - Avoid creating objects/arrays
// - Use primitive values when possible
// - Cache expensive calculations
```

---

## 🎯 COMMON PATTERNS FOR LASER SPA

### Fade In Up
```jsx
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}
```

### Staggered Cards
```jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
```

### Glass Container Entrance
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.9, y: 50 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ 
    duration: 1.2, 
    ease: "easeOut",
    delay: 0.2 
  }}
  whileHover={{ 
    scale: 1.02,
    transition: { duration: 0.3 }
  }}
/>
```

### Smooth Section Transitions
```jsx
<motion.section
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeInUp}
>
```

---

## 🚨 COMMON GOTCHAS

### 1. Ref Issues with motion.div
```jsx
// ✅ Correct
const ref = useRef<HTMLDivElement>(null)
<motion.div ref={ref} />
```

### 2. Ease Values
```jsx
// ❌ Wrong
ease: "easeOut"

// ✅ Correct
ease: [0.25, 0.46, 0.45, 0.94] // Bezier array
```

### 3. Exit Animation Keys
```jsx
// ✅ Always provide unique keys for exit animations
<AnimatePresence>
  {show && <motion.div key="unique-key" exit={{ opacity: 0 }} />}
</AnimatePresence>
```

### 4. Layout Animation Performance
```jsx
// ✅ Only use layout on elements that actually change layout
<motion.div layout />
```

---

## 📚 USEFUL RESOURCES

### Essential Hooks
- `useAnimate()` - Imperative animations
- `useScroll()` - Scroll progress
- `useTransform()` - Value transformations  
- `useSpring()` - Smooth values
- `useInView()` - Viewport detection
- `useMotionValue()` - Create motion values

### Dev Tools
- **VS Code Extension:** Motion bezier curve editor
- **AI Documentation:** Enhanced LLM rules for Motion
- **Private Discord:** 600+ Motion developers

### Examples & Learning
- **Motion+ Vault:** 290+ pre-built animations
- **Tutorials:** Step-by-step guides by Motion creator
- **Examples:** https://motion.dev/examples
- **Docs:** https://motion.dev/docs

---

## 📝 TEXT SPLITTING & ANIMATIONS

### Manual Text Splitting (Free Alternative)
Since split text is a Motion+ premium feature, here's how to implement it yourself:

```jsx
// Utility function to split text into characters
const splitTextToChars = (text) => {
  return text.split('').map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.05,
        duration: 0.5
      }}
      style={{ display: 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ))
}

// Usage
<div>
  {splitTextToChars("Performance Perfection Precision")}
</div>
```

### Word-by-Word Animation
```jsx
const splitTextToWords = (text) => {
  return text.split(' ').map((word, wordIndex) => (
    <motion.span
      key={wordIndex}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        delay: wordIndex * 0.3,
        duration: 0.6
      }}
      style={{ display: 'inline-block', marginRight: '0.3em' }}
    >
      {word}
    </motion.span>
  ))
}
```

### Advanced Character Stagger with Variants
```jsx
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
}

const textChild = {
  hidden: { 
    opacity: 0, 
    y: 20,
    rotateX: -90
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

// Component usage
<motion.h1
  variants={textContainer}
  initial="hidden"
  animate="visible"
>
  {"Your Text Here".split('').map((char, index) => (
    <motion.span
      key={index}
      variants={textChild}
      style={{ display: 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ))}
</motion.h1>
```

### Text Effects for Laser Spa

#### Reveal from Bottom
```jsx
const revealText = {
  hidden: { 
    y: '100%', 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

// Wrap each word in overflow hidden container
<div style={{ overflow: 'hidden' }}>
  <motion.span variants={revealText}>
    Laser
  </motion.span>
</div>
```

#### Wavy Text Animation
```jsx
const wavyText = (text, delay = 0) => {
  return text.split('').map((char, index) => (
    <motion.span
      key={index}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        delay: delay + index * 0.1,
        ease: "easeInOut"
      }}
      style={{ display: 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ))
}
```

---

## 🎪 MOTION+ PREMIUM COMPONENTS

Advanced components available in Motion+:
- **Custom Cursor** - Magnetic and morphing effects
- **AnimateNumber** - Ticking counters  
- **Ticker** - Infinite scrolling text
- **Typewriter** - Character-by-character reveals with realistic typing
- **Split Text** - Professional word/character animations with multiple effects

### Typewriter Component (Motion+ Premium)
```jsx
import { Typewriter } from "motion-plus/react"

// Basic usage
<Typewriter>Hello world!</Typewriter>

// Advanced configuration
<Typewriter 
  speed="slow"          // "slow", "normal", "fast", or milliseconds
  variance={0.5}        // Natural typing variation (0-1)
  play={isInView}       // Control with scroll
  backspace="word"      // "character", "word", "all"
  cursorBlinkDuration={1}
  onComplete={() => console.log('Done!')}
>
  {dynamicText}
</Typewriter>

// Scroll-triggered typewriter
const ref = useRef(null)
const isInView = useInView(ref)

<Typewriter ref={ref} play={isInView}>
  Performance Perfection Precision
</Typewriter>
```

### Key Typewriter Features
- **Natural typing speeds** based on real research
- **Dynamic content** with intelligent backspacing
- **Playback control** for scroll-triggered effects
- **Accessible** with proper ARIA labels
- **Customizable** cursor styles and speeds
- **Realistic variance** in typing speed

---

*Created for RX Laser Spa - Elevate your animations with Motion! 🚀*