// import { motion } from 'framer-motion';
// import { Check, X } from 'lucide-react';

// const DifferenceSection = () => {
//   const comparisons = [
//     { feature: 'Sugar', clearly: '0g', others: '27g+' },
//     { feature: 'Calories', clearly: '0', others: '110+' },
//     { feature: 'Crash', clearly: 'No', others: 'Yes' },
//     { feature: 'Jitters', clearly: 'No', others: 'Yes' },
//     { feature: 'Artificial Sweeteners', clearly: 'No', others: 'Yes' },
//     { feature: 'Carbonation', clearly: 'No', others: 'Yes' },
//   ];

//   return (
//     <section 
//       data-testid="difference-section"
//       className="py-32 md:py-40 bg-white relative"
//     >
//       <div className="max-w-6xl mx-auto px-6 md:px-12">
//         {/* Section header */}
//         <motion.div 
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black mb-4">
//             What energy should feel like.
//           </h2>
//           <p className="text-lg md:text-xl font-light" style={{ color: '#666666' }}>
//             No sugar. No crash. No nonsense.
//           </p>
//         </motion.div>

//         {/* Comparison table */}
//         <motion.div 
//           className="max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         >
//           {/* Table header */}
//           <div className="grid grid-cols-3 gap-8 pb-6 border-b" style={{ borderColor: '#F0F0F0' }}>
//             <div />
//             <div className="text-center">
//               <span className="text-lg font-bold text-black tracking-tight">
//                 CLEARLY.
//               </span>
//             </div>
//             <div className="text-center">
//               <span className="text-sm uppercase tracking-wider font-medium" style={{ color: '#999999' }}>
//                 Traditional
//               </span>
//             </div>
//           </div>

//           {/* Table rows */}
//           <div>
//             {comparisons.map((item, index) => (
//               <motion.div
//                 key={item.feature}
//                 data-testid={`comparison-row-${index}`}
//                 className="grid grid-cols-3 gap-8 py-6 border-b last:border-b-0"
//                 style={{ borderColor: '#F5F5F5' }}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 {/* Feature name */}
//                 <div className="flex items-center">
//                   <span className="text-base font-medium" style={{ color: '#333333' }}>
//                     {item.feature}
//                   </span>
//                 </div>

//                 {/* CLEARLY value - green check */}
//                 <div className="flex items-center justify-center gap-3">
//                   <div 
//                     className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
//                     style={{ backgroundColor: '#10B981' }}
//                   >
//                     <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
//                   </div>
//                   <span className="text-base font-semibold text-black min-w-[40px]">
//                     {item.clearly}
//                   </span>
//                 </div>

//                 {/* Traditional value - red X */}
//                 <div className="flex items-center justify-center gap-3">
//                   <div 
//                     className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
//                     style={{ backgroundColor: '#FEE2E2' }}
//                   >
//                     <X className="w-3.5 h-3.5" style={{ color: '#EF4444' }} strokeWidth={3} />
//                   </div>
//                   <span className="text-base min-w-[40px]" style={{ color: '#999999' }}>
//                     {item.others}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DifferenceSection;
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const DifferenceSection = () => {
  const comparisons = [
    { feature: 'Sugar', clearly: '0g', others: '27g+' },
    { feature: 'Calories', clearly: '0', others: '110+' },
    { feature: 'Crash', clearly: 'No', others: 'Yes' },
    { feature: 'Jitters', clearly: 'No', others: 'Yes' },
    { feature: 'Artificial Sweeteners', clearly: 'No', others: 'Yes' },
    { feature: 'Carbonation', clearly: 'No', others: 'Yes' },
  ];

  return (
    <section className="relative py-24 md:py-40 bg-[#FAFAFA]">

      {/* subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F5]" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-12">

        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-black mb-5">
            What energy should feel like.
          </h2>

          <p className="text-lg md:text-xl text-[#6A6A6A] font-light tracking-tight">
            No sugar. No crash. No nonsense.
          </p>

        </motion.div>

        {/* Table container */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#ECECEC] shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow hidden"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* Header Row */}
          <div className="grid grid-cols-3 px-4 md:px-10 py-4 md:py-6 border-b border-[#EFEFEF]">

            <div />

            <div className="text-center">
              <span className="text-[15px] md:text-[17px] font-semibold tracking-[-0.01em] text-black">
                CLEARLY.
              </span>
            </div>

            <div className="text-center">
              <span className="text-[13px] uppercase tracking-[0.18em] text-[#9A9A9A] font-medium">
                Traditional
              </span>
            </div>

          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (

            <motion.div
              key={item.feature}
              className="grid grid-cols-3 px-10 py-7 border-b border-[#F2F2F2] last:border-none hover:bg-[#FAFAFA] transition-colors duration-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              {/* Feature */}
              <div className="flex items-center py-4 md:py-5">
                <span className="text-[14px] md:text-[16px] text-[#2A2A2A] font-medium tracking-tight">
                  {item.feature}
                </span>
              </div>

              {/* CLEARLY column */}
              <div className="flex items-center justify-center gap-3">

                <div className="w-6 h-6 rounded-full border border-[#E5E5E5] flex items-center justify-center bg-white shadow-sm">
                  <Check
                    className="w-3.5 h-3.5 text-black"
                    strokeWidth={2.5}
                  />
                </div>

                <span className="text-[15px] md:text-[16px] font-semibold text-black tracking-tight">
                  {item.clearly}
                </span>

              </div>

              {/* Traditional column */}
              <div className="flex items-center justify-center gap-2 md:gap-3 opacity-60">

                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-[#E5E5E5] flex items-center justify-center bg-white">
                  <X
                    className="w-3.5 h-3.5 text-[#888]"
                    strokeWidth={2.5}
                  />
                </div>

                <span className="text-[14px] md:text-[16px] font-medium text-[#888] tracking-tight">
                  {item.others}
                </span>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default DifferenceSection;