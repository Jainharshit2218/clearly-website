// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { useRef } from "react";

// // const HeroSection = () => {
// //   const containerRef = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end start"],
// //   });

// //   // subtle parallax
// //   const canY = useTransform(scrollYProgress, [0, 1], [0, -40]);

// //   return (
// //     <section
// //       ref={containerRef}
// //       data-testid="hero-section"
// //       className="min-h-screen flex items-center relative overflow-hidden bg-white"
// //       style={{
// //         paddingTop: "120px",
// //         paddingBottom: "120px",
// //       }}
// //     >
// //       <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

// //           {/* LEFT SIDE — TEXT */}
// //           <motion.div
// //             className="flex flex-col justify-center order-2 lg:order-1"
// //             initial={{ opacity: 0, x: -60 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
// //           >
// //             <h1
// //               className="font-bold tracking-[-0.05em] leading-[0.92] uppercase mb-6"
// //               style={{
// //                 fontSize: "clamp(52px, 8vw, 110px)",
// //               }}
// //             >
// //               Feels like
// //               <br />
// //               water.
// //             </h1>

// //             <h1
// //               className="tracking-[-0.04em] leading-[0.95] uppercase "
// //               style={{
// //                 fontSize: "clamp(52px, 8vw, 110px)",
// //                     fontWeight: 500,
// //                       color: "#333333",
// //                       opacity: 0.92


// //               }}
// //             >
// //               Works like
// //               <br />
// //               energy.
// //             </h1>

// //             <motion.div
// //               className="mt-12"
// //               initial={{ opacity: 0, y: 25 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.5, duration: 0.7 }}
// //             >
// //               <button
// //                 className="bg-black text-white px-10 py-4 rounded-full font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
// //                 onClick={() =>
// //                   document
// //                     .getElementById("signup")
// //                     ?.scrollIntoView({ behavior: "smooth" })
// //                 }
// //               >
// //                 Get Notified
// //               </button>

// //               <p className="mt-6 text-gray-400 tracking-wide">
// //                 • 0 kcal • 0 sugar • 100mg caffeine • 100mg L-theanine
// //               </p>
// //             </motion.div>
// //           </motion.div>

// //           {/* RIGHT SIDE — COMBINED TWO CAN IMAGE */}
// //           <motion.div
// //             style={{ y: canY }}
// //             className="relative flex items-center justify-center lg:justify-center order-1 lg:order-2"
// //             initial={{ opacity: 0, x: 60 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.9 }}
// //           >

// //             {/* Premium glow */}
// //             <div
// //               className="absolute"
// //               style={{
// //                 width: "650px",
// //                 height: "650px",
// //                 background:
// //                   "radial-gradient(circle, rgba(0,0,0,0.08), transparent 70%)",
// //                 borderRadius: "50%",
// //                 filter: "blur(90px)",
// //                 opacity: 0.6,
// //                 zIndex: 0,
// //               }}
// //             />

// //             {/* Floating combined cans */}
// //             <motion.img
// //               src="/bothcanfinalbgremoved.png"   // <-- PUT YOUR IMAGE IN PUBLIC FOLDER
// //               alt="CLEARLY Clean Energy Water"
// //               className="mx-auto
// //                          w-[380px]
// //                          md:w-[520px]
// //                          lg:w-[650px]
// //                          xl:w-[720px]
// //                          2xl:w-[780px]
// //                          object-contain
// //                          drop-shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
// //               style={{
// //                 height: "clamp(420px, 62vh, 680px)",
// //                 width: "auto",
// //                 filter:
// //                   "drop-shadow(0 80px 120px rgba(0,0,0,0.22)) drop-shadow(0 80px 120px rgba(0,0,0,0.22))",
// //                 zIndex: 2,
// //               }}
// //               animate={{
// //                 y: [0, -14, 0],
// //               }}
// //               transition={{
// //                 duration: 5,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //             />

// //           </motion.div>

// //         </div>
// //       </div>

// //       {/* SCROLL INDICATOR */}
// //       <motion.div
// //         className="absolute bottom-10 left-1/2 -translate-x-1/2"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 1 }}
// //       >
// //         <motion.div
// //           animate={{ y: [0, 8, 0] }}
// //           transition={{
// //             duration: 2,
// //             repeat: Infinity,
// //           }}
// //           className="w-5 h-8 border border-gray-300 rounded-full flex justify-center pt-1"
// //         >
// //           <div className="w-1 h-2 bg-gray-400 rounded-full" />
// //         </motion.div>
// //       </motion.div>

// //     </section>
// //   );
// // };

// // export default HeroSection;
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { useRef } from "react";

// // const HeroSection = () => {
// //   const containerRef = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end start"],
// //   });

// //   const canY = useTransform(scrollYProgress, [0, 1], [0, -40]);

// //   return (
// //     <section
// //       ref={containerRef}
// //       data-testid="hero-section"
// //       className="min-h-screen flex items-center relative overflow-hidden bg-white"
// //       style={{
// //         paddingTop: "120px",
// //         paddingBottom: "120px",
// //       }}
// //     >
// //       {/* wider container for premium feel */}
// //       <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

// //           {/* LEFT SIDE */}
// //           <motion.div
// //             className="flex flex-col justify-center order-2 lg:order-1 max-w-[680px]"
// //             initial={{ opacity: 0, x: -60 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
// //           >

// //             <h1
// //               className="font-semibold tracking-[-0.045em] leading-[0.9] uppercase text-black"
// //               style={{
// //                 fontSize: "clamp(56px, 8vw, 120px)",
// //               }}
// //             >
// //               Feels like water.
// //             </h1>
// //             <h1
// //               className="font-medium tracking-[-0.04em] leading-[0.95] uppercase mt-2"
// //               style={{
// //                 fontSize: "clamp(56px, 8vw, 120px)",
// //                 fontWeight: 500,
// //                 color: "#333333",
// //                 opacity: 0.92,
// //               }}
// //             >
// //               Works like energy.
// //             </h1>

// //             <motion.div
// //               className="mt-8"
// //               initial={{ opacity: 0, y: 25 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.5, duration: 0.7 }}
// //             >

// //               <button
// //                 className="bg-black text-white px-8 py-3.5 rounded-full font-medium text-[15px] tracking-tight hover:bg-[#111] active:scale-[0.98] transition-all duration-300 ease-out shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
// //                 onClick={() =>
// //                   document
// //                     .getElementById("signup")
// //                     ?.scrollIntoView({ behavior: "smooth" })
// //                 }
// //               >
// //                 Get Notified
// //               </button>

// //               <p className="mt-6 text-gray-400 tracking-wide">
// //                 • 0 kcal • 0 sugar • 100mg caffeine • 100mg L-theanine
// //               </p>

// //             </motion.div>

// //           </motion.div>


// //           {/* RIGHT SIDE */}
// //           <motion.div
// //             style={{ y: canY }}
// //             className="relative flex items-center justify-center order-1 lg:order-2"
// //             initial={{ opacity: 0, x: 60 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.9 }}
// //           >

// //             {/* premium glow */}
// //             <div
// //               className="absolute"
// //               style={{
// //                 width: "500px",
// //                 height: "500px",
// //                 background:
// //                   "radial-gradient(circle, rgba(0,0,0,0.06), transparent 70%)",
// //                 borderRadius: "50%",
// //                 filter: "blur(80px)",
// //                 opacity: 0.5,
// //                 zIndex: 0,
// //               }}
// //             />

// //             {/* BIGGER cans */}
// //             <motion.img
// //               src="/bothcanfinalbgremoved.png"
// //               alt="CLEARLY Clean Energy Water"

// //               className="
// //                 mx-auto
// //                 w-[300px]
// //                 md:w-[400px]
// //                 lg:w-[450px]
// //                 xl:w-[500px]
// //                 2xl:w-[580px]
// //                 max-w-none
// //                 object-contain
// //                 drop-shadow-[0_40px_120px_rgba(0,0,0,0.22)]
// //               "

// //               style={{
// //                 height: "auto",
// //                 maxHeight:"580px",
// //                 zIndex: 2,
// //               }}

// //               animate={{
// //                 y: [0, -12, 0],
// //               }}

// //               transition={{
// //                 duration: 5,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //             />

// //           </motion.div>

// //         </div>

// //       </div>


// //       {/* scroll indicator */}
// //       <motion.div
// //         className="absolute bottom-10 left-1/2 -translate-x-1/2"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 1 }}
// //       >
// //         <motion.div
// //           animate={{ y: [0, 8, 0] }}
// //           transition={{
// //             duration: 2,
// //             repeat: Infinity,
// //           }}
// //           className="w-5 h-8 border border-gray-300 rounded-full flex justify-center pt-1"
// //         >
// //           <div className="w-1 h-2 bg-gray-400 rounded-full" />
// //         </motion.div>
// //       </motion.div>

// //     </section>
// //   );
// // };

// // export default HeroSection;
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { useRef } from "react";

// // const HeroSection = () => {
// //   const containerRef = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end start"],
// //   });

// //   const canY = useTransform(scrollYProgress, [0, 1], [0, -40]);

// //   return (
// //     <section
// //       ref={containerRef}
// //       data-testid="hero-section"
// //       className="min-h-[88vh] flex items-center relative overflow-hidden bg-white"
// //       style={{
// //         paddingTop: "120px",
// //         paddingBottom: "80px",
// //       }}
// //     >
// //       {/* wider container */}
// //       <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

// //           {/* LEFT SIDE */}
// //           <motion.div
// //             className="flex flex-col justify-center order-2 lg:order-1 max-w-[720px]"
// //             initial={{ opacity: 0, x: -60 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
// //           >

// //             {/* Primary headline */}
// //             <h1
// //               className="font-semibold tracking-[-0.045em] leading-[0.88] uppercase text-black"
// //               style={{
// //                 fontSize: "clamp(56px, 7.5vw, 116px)",
// //               }}
// //             >
// //               Feels like water.
// //             </h1>

// //             {/* Secondary headline */}
// //             <h1
// //               className="font-medium tracking-[-0.04em] leading-[0.88] uppercase mt-2"
// //               style={{
// //                 fontSize: "clamp(56px, 7.5vw, 116px)",
// //                 color: "#1C1C1C",
// //               }}
// //             >
// //               Works like energy.
// //             </h1>


// //             {/* CTA Block */}
// //             <motion.div
// //               className="mt-10"
// //               initial={{ opacity: 0, y: 24 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{
// //                 delay: 0.4,
// //                 duration: 1,
// //                 ease: [0.16, 1, 0.3, 1],
// //               }}
// //             >

// //               {/* Premium button */}
// //               <button
// //                 className="
// //                   bg-black text-white
// //                   px-8 py-3.5
// //                   rounded-full
// //                   font-medium text-[15px]
// //                   tracking-tight
// //                   hover:bg-[#111]
// //                   active:scale-[0.97]
// //                   transition-all duration-300 ease-out
// //                   shadow-[0_8px_30px_rgba(0,0,0,0.18)]
// //                 "
// //                 onClick={() =>
// //                   document
// //                     .getElementById("signup")
// //                     ?.scrollIntoView({ behavior: "smooth" })
// //                 }
// //               >
// //                 Get Notified
// //               </button>

// //               {/* Premium subtext */}
// //               <p className="mt-6 text-[15px] text-[#6A6A6A] tracking-tight font-normal">
// //                 • 0 kcal • 0 sugar • 100mg caffeine • 100mg L-theanine
// //               </p>

// //             </motion.div>

// //           </motion.div>


// //           {/* RIGHT SIDE */}
// //           <motion.div
// //             style={{ y: canY }}
// //             className="relative flex items-center justify-center order-1 lg:order-2"
// //             initial={{ opacity: 0, x: 60 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
// //           >

// //             {/* Premium soft glow */}
// //             <div
// //               className="absolute"
// //               style={{
// //                 width: "520px",
// //                 height: "520px",
// //                 background:
// //                   "radial-gradient(circle, rgba(0,0,0,0.07), transparent 70%)",
// //                 borderRadius: "50%",
// //                 filter: "blur(90px)",
// //                 opacity: 0.6,
// //                 zIndex: 0,
// //               }}
// //             />

// //             {/* Product image */}
// //             <motion.img
// //               src="/bothcanfinalbgremoved.png"
// //               alt="CLEARLY Clean Energy Water"
// //               className="
// //                 mx-auto
// //                 w-[340px]
// //                 md:w-[460px]
// //                 lg:w-[540px]
// //                 xl:w-[660px]
// //                 2xl:w-[760px]
// //                 max-w-none
// //                 object-contain
// //                 drop-shadow-[0_60px_140px_rgba(0,0,0,0.22)]
// //               "
// //               style={{
// //                 height: "auto",
// //                 maxHeight: "620px",
// //                 zIndex: 2,
// //               }}
// //               animate={{
// //                 y: [0, -14, 0],
// //               }}
// //               transition={{
// //                 duration: 6,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //             />

// //           </motion.div>

// //         </div>

// //       </div>


// //       {/* Scroll indicator */}
// //       <motion.div
// //         className="absolute bottom-10 left-1/2 -translate-x-1/2"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 1.2 }}
// //       >
// //         <motion.div
// //           animate={{ y: [0, 10, 0] }}
// //           transition={{
// //             duration: 2.2,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //           className="w-5 h-8 border border-[#D0D0D0] rounded-full flex justify-center pt-1"
// //         >
// //           <div className="w-1 h-2 bg-[#9A9A9A] rounded-full" />
// //         </motion.div>
// //       </motion.div>

// //     </section>
// //   );
// // };

// // export default HeroSection;
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { useRef } from "react";

// // const HeroSection = () => {
// //   const containerRef = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end start"],
// //   });

// //   const canY = useTransform(scrollYProgress, [0, 1], [0, -40]);

// //   return (
// //     <section
// //       ref={containerRef}
// //       data-testid="hero-section"
// //       className="min-h-[88vh] flex items-center relative overflow-hidden bg-white"
// //       style={{
// //         paddingTop: "120px",
// //         paddingBottom: "80px",
// //       }}
// //     >
// //       <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

// //           {/* LEFT SIDE */}
// //           <motion.div
// //             className="flex flex-col justify-center order-2 lg:order-1 max-w-[720px]"
// //             initial={{ opacity: 0, x: -60 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
// //           >
// //             {/* Emotional Hook */}
// //             <p className="text-[14px] tracking-[-0.045em] uppercase text-[#7A7A7A] mb-6">
// //               Clean     Energy      Water.
// //             </p>

// //             {/* Primary headline */}
// //             <h1
// //               className="font-semibold tracking-[-0.045em] leading-[0.88] uppercase text-black"
// //               style={{ fontSize: "clamp(56px, 7.5vw, 116px)" }}
// //             >
// //               Feels like water.
// //             </h1>

// //             {/* Secondary headline */}
// //             <h1
// //               className="font-medium tracking-[-0.04em] leading-[0.88] uppercase mt-2"
// //               style={{
// //                 fontSize: "clamp(56px, 7.5vw, 116px)",
// //                 color: "#1C1C1C",
// //               }}
// //             >
// //               Works like energy.
// //             </h1>
// //             {/* Emotional Hook
// //             <p className="mt-3 text-[16px] text-[#666666] max-w-[520px] tracking-tight">
// //               Caffeine without the crash.
// //             </p> */}


// //             {/* Clarifier line
// //             <p className="mt-6 text-[18px] text-[#555555] tracking-tight max-w-[520px]">
// //               100mg caffeine+L-theanine.
// //               Smooth focus. No jitters. No crash.
// //             </p> */}
// //             <div className="mt-6">
// //             <p className="text-lg font-medium">
// //               100mg caffeine + L-theanine.
// //              </p>

// //             <p className="mt-2 text-gray-600">
// //               Smooth focus. No jitters. No crash.
// //             </p>
// //             </div>

// //             {/* Social proof + Scarcity */}
// //             <p className="mt-6 text-[14px] text-black font-semibold tracking-tight">
// //               First 500 customers get 50% off at launch.
// //             </p>

// //             {/* CTA Block */}
// //             <motion.div
// //               className="mt-10"
// //               initial={{ opacity: 0, y: 24 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{
// //                 delay: 0.4,
// //                 duration: 1,
// //                 ease: [0.16, 1, 0.3, 1],
// //               }}
// //             >

// //               <button
// //                 className="
// //                   bg-black text-white
// //                   px-12 py-5
// //                   rounded-full
// //                   font-medium text-[16px]
// //                   tracking-tight
// //                   hover:bg-[#111]
// //                   active:scale-[0.97]
// //                   transition-all duration-300 ease-out
// //                   shadow-[0_8px_30px_rgba(0,0,0,0.18)]
// //                 "
// //                 onClick={() =>
// //                   document
// //                     .getElementById("signup")
// //                     ?.scrollIntoView({ behavior: "smooth" })
// //                 }
// //               >
// //                 Join the Waitlist.
// //               </button>

// //               {/* Trust reducer */}
// //               <p className="mt-4 text-[13px] text-[#9A9A9A]">
// //                 No spam. Unsubscribe anytime.
// //               </p>

// //               {/* Ingredient strip */}
// //               <p className="mt-6 text-[14px] text-[#6A6A6A] tracking-tight font-normal">
// //                 • 0 kcal • 0 sugar • 100mg caffeine • 100mg L-theanine
// //               </p>

// //             </motion.div>

// //           </motion.div>

// //           {/* RIGHT SIDE */}
// //           <motion.div
// //             style={{ y: canY }}
// //             className="relative flex items-center justify-center order-1 lg:order-2"
// //             initial={{ opacity: 0, x: 60 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
// //           >

// //             <div
// //               className="absolute"
// //               style={{
// //                 width: "520px",
// //                 height: "520px",
// //                 background:
// //                   "radial-gradient(circle, rgba(0,0,0,0.07), transparent 70%)",
// //                 borderRadius: "50%",
// //                 filter: "blur(90px)",
// //                 opacity: 0.6,
// //                 zIndex: 0,
// //               }}
// //             />

// //             <motion.img
// //               src="/bothcanfinalbgremoved.png"
// //               alt="CLEARLY Clean Energy Water"
// //               className="
// //                 mx-auto
// //                 w-[340px]
// //                 md:w-[460px]
// //                 lg:w-[540px]
// //                 xl:w-[660px]
// //                 2xl:w-[760px]
// //                 max-w-none
// //                 object-contain
// //                 drop-shadow-[0_60px_140px_rgba(0,0,0,0.22)]
// //               "
// //               style={{
// //                 height: "auto",
// //                 maxHeight: "620px",
// //                 zIndex: 2,
// //               }}
// //               animate={{ y: [0, -14, 0] }}
// //               transition={{
// //                 duration: 6,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //             />

// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const HeroSection = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const canY = useTransform(scrollYProgress, [0, 1], [0, -40]);

//   return (
//     <section
//       ref={containerRef}
//       data-testid="hero-section"
//       className="min-h-[88vh] flex items-center relative overflow-hidden bg-white"
//       style={{
//         paddingTop: "120px",
//         paddingBottom: "90px",
//       }}
//     >
//       <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT SIDE */}
//           <motion.div
//             className="flex flex-col justify-center order-2 lg:order-1 max-w-[720px]"
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           >

//             {/* Top label */}
//             <p className="text-[14px] uppercase text-[#7A7A7A] tracking-wide mb-8">
//               Clean Energy Water
//             </p>

//             {/* Headline */}
//             <h1
//               className="font-semibold tracking-[-0.045em] leading-[0.9] uppercase text-black"
//               style={{ fontSize: "clamp(56px, 7.5vw, 116px)" }}
//             >
//               Feels like water.
//             </h1>

//             <h1
//               className="font-medium tracking-[-0.04em] leading-[0.9] uppercase mt-2 text-[#1C1C1C]"
//               style={{ fontSize: "clamp(56px, 7.5vw, 116px)" }}
//             >
//               Works like energy.
//             </h1>

//             {/* Product explanation */}
//             <div className="mt-8">
//               <p className="text-lg font-medium text-black">
//                 100mg caffeine + L-theanine
//               </p>

//               <p className="mt-3 text-gray-600 text-[16px]">
//                 Smooth focus. No jitters. No crash.
//               </p>
//             </div>

//             {/* Scarcity */}
//             <p className="mt-6 text-[14px] text-black font-semibold">
//               First 500 customers get 50% off at launch.
//             </p>

//             {/* CTA */}
//             <motion.div
//               className="mt-10"
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: 0.4,
//                 duration: 1,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//             >
//               <button
//                 className="
//                   bg-black text-white
//                   px-12 py-5
//                   rounded-full
//                   font-medium text-[16px]
//                   tracking-tight
//                   hover:bg-[#111]
//                   active:scale-[0.97]
//                   transition-all duration-300 ease-out
//                   shadow-[0_10px_40px_rgba(0,0,0,0.18)]
//                 "
//                 onClick={() =>
//                   document
//                     .getElementById("signup")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//               >
//                 Join the Waitlist →
//               </button>

//               {/* Trust reducer */}
//               <p className="mt-4 text-[13px] text-[#9A9A9A]">
//                 No spam. Unsubscribe anytime.
//               </p>

//               {/* Ingredient strip */}
//               <p className="mt-6 text-[14px] text-[#6A6A6A] tracking-tight">
//                 • 0 kcal • Zero Sugar • 100mg Natural Caffeine • 100mg L-theanine
//               </p>
//             </motion.div>

//           </motion.div>

//           {/* RIGHT SIDE */}
//           <motion.div
//             style={{ y: canY }}
//             className="relative flex items-center justify-center order-1 lg:order-2"
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           >

//             {/* Glow behind cans */}
//             <div
//               className="absolute"
//               style={{
//                 width: "520px",
//                 height: "520px",
//                 background:
//                   "radial-gradient(circle, rgba(0,0,0,0.07), transparent 70%)",
//                 borderRadius: "50%",
//                 filter: "blur(90px)",
//                 opacity: 0.6,
//                 zIndex: 0,
//               }}
//             />

//             <motion.img
//               src="/bothcanfinalbgremoved.png"
//               alt="CLEARLY Clean Energy Water"
//               className="
//                 mx-auto
//                 w-[380px]
//                 md:w-[500px]
//                 lg:w-[580px]
//                 xl:w-[680px]
//                 2xl:w-[760px]
//                 max-w-none
//                 object-contain
//                 drop-shadow-[0_60px_140px_rgba(0,0,0,0.22)]
//               "
//               style={{
//                 height: "auto",
//                 maxHeight: "860px",
//                 zIndex: 2,
//               }}
//               animate={{ y: [0, -14, 0] }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />

//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const canY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={containerRef}
      data-testid="hero-section"
      className="min-h-[70vh] md:min-h-[88vh] flex items-center relative overflow-hidden bg-white"
      style={{
        paddingTop: "100px",
        paddingBottom: "60px",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            className="flex flex-col justify-center order-2 lg:order-1 max-w-[720px]"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >

            {/* Top label */}
            <p className="text-[13px] md:text-[14px] uppercase text-[#7A7A7A] tracking-wide mb-6 md:mb-8">
              Clean Energy Water
            </p>

            {/* Headline */}
            <h1
              className="font-semibold tracking-[-0.045em] leading-[0.95] uppercase text-black"
              style={{ fontSize: "clamp(40px, 8vw, 116px)" }}
            >
              Feels like water.
            </h1>

            <h1
              className="font-medium tracking-[-0.04em] leading-[0.95] uppercase mt-1 md:mt-2 text-[#1C1C1C]"
              style={{ fontSize: "clamp(40px, 8vw, 116px)" }}
            >
              Works like energy.
            </h1>

            {/* Product explanation */}
            <div className="mt-6 md:mt-8">
              <p className="text-base md:text-lg font-medium text-black">
                100mg caffeine + L-theanine
              </p>

              <p className="mt-2 md:mt-3 text-gray-600 text-[15px] md:text-[16px]">
                Smooth focus. No jitters. No crash.
              </p>
            </div>

            {/* Scarcity */}
            <p className="mt-5 md:mt-6 text-[13px] md:text-[14px] text-black font-semibold">
              First 500 customers get 50% off at launch.
            </p>

            {/* CTA */}
            <motion.div
              className="mt-8 md:mt-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <button
                className="
                  bg-black text-white
                  px-8 md:px-12
                  py-4 md:py-5
                  rounded-full
                  font-medium text-[15px] md:text-[16px]
                  tracking-tight
                  hover:bg-[#111]
                  active:scale-[0.97]
                  transition-all duration-300 ease-out
                  shadow-[0_10px_40px_rgba(0,0,0,0.18)]
                "
                onClick={() =>
                  document
                    .getElementById("signup")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Join the Waitlist →
              </button>

              {/* Trust reducer */}
              <p className="mt-3 md:mt-4 text-[12px] md:text-[13px] text-[#9A9A9A]">
                No spam. Unsubscribe anytime.
              </p>

              {/* Ingredient strip */}
              <p className="mt-5 md:mt-6 text-[13px] md:text-[14px] text-[#6A6A6A] tracking-tight">
                • 0 kcal • Zero Sugar • 100mg Natural Caffeine • 100mg L-theanine
              </p>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            style={{ y: canY }}
            className="relative flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >

            {/* Glow */}
            <div
              className="absolute"
              style={{
                width: "420px",
                height: "420px",
                background:
                  "radial-gradient(circle, rgba(0,0,0,0.07), transparent 70%)",
                borderRadius: "50%",
                filter: "blur(80px)",
                opacity: 0.6,
                zIndex: 0,
              }}
            />

            <motion.img
              src="/bothcanfinalbgremoved.png"
              alt="CLEARLY Clean Energy Water"
              className="
                mx-auto
                w-[260px]
                md:w-[500px]
                lg:w-[580px]
                xl:w-[680px]
                2xl:w-[760px]
                object-contain
                drop-shadow-[0_60px_140px_rgba(0,0,0,0.22)]
              "
              style={{
                height: "auto",
                maxHeight: "860px",
                zIndex: 2,
              }}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;