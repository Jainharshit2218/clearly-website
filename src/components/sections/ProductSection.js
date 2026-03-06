// import { motion } from 'framer-motion';

// const ProductSection = () => {
//   const products = [
//     {
//       id: 'citrus',
//       name: 'Citrus Twist',
//       image: '/citrusfinal.png',
//       benefits: ['0 kcal', 'Zero sugar', 'No jitters', 'No crash'],
//       descriptor: 'Bright citrus lift',
//     },
//     {
//       id: 'berry',
//       name: 'Berry Burst',
//       image: '/berryfinal.png',
//       benefits: ['0 kcal', 'Zero sugar', 'No jitters', 'No crash'],
//       descriptor: 'Smooth berry focus',
//     }
//   ];

//   return (
//     <section 
//       data-testid="product-section"
//       className="py-28 md:py-36 bg-white relative"
//     >
//       <div className="max-w-6xl mx-auto px-6 md:px-12">
//         {/* Section header */}
//         <motion.div 
//           className="text-center mb-16 md:mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-4">
//             Available in.
//           </h2>
//           <p className="text-lg md:text-xl font-light text-gray-500">
//             Clean energy, your way.
//           </p>
//         </motion.div>

//         {/* Products grid - identical sizing */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               data-testid={`product-card-${product.id}`}
//               className="flex flex-col items-center text-center"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
//             >
//               {/* Can container - fixed identical size */}
//               <div 
//                 className="flex items-center justify-center mb-8"
//                 style={{ 
//                   height: '360px',
//                   width: '100%',
//                 }}
//               >
//                 <motion.img 
//                   src={product.image}
//                   alt={`CLEARLY ${product.name}`}
//                   className="object-contain object-center"
//                   style={{ 
//                     height: '360px',
//                     width: 'auto',
//                     maxWidth: '100%',
//                     filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1))'
//                   }}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </div>

//               {/* Product name */}
//               <h3 className="text-2xl md:text-3xl font-semibold text-black mb-5 tracking-tight">
//                 {product.name}
//               </h3>

//               {/* Benefits list - centered */}
//               <div className="flex flex-col items-center gap-1.5 mb-4">
//                 {product.benefits.map((benefit, i) => (
//                   <span 
//                     key={i}
//                     className="text-base font-normal text-gray-500"
//                   >
//                     {benefit}
//                   </span>
//                 ))}
//               </div>

//               {/* Unique descriptor */}
//               <span className="text-base font-medium text-black mt-1">
//                 {product.descriptor}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;
// import { motion } from "framer-motion";

// const ProductSection = () => {
//   const products = [
//     {
//       id: "citrus",
//       name: "Citrus Twist",
//       image: "/citrusfinal.png",
//       benefits: ["0 kcal", "Zero sugar", "No jitters", "No crash"],
//       descriptor: "Bright citrus lift",
//     },
//     {
//       id: "berry",
//       name: "Berry Burst",
//       image: "/berryfinal.png",
//       benefits: ["0 kcal", "Zero sugar", "No jitters", "No crash"],
//       descriptor: "Smooth berry focus",
//     },
//   ];

//   return (
//     <section
//       data-testid="product-section"
//       className="py-36 md:py-44 bg-white relative"
//     >
//       <div className="max-w-[1200px] mx-auto px-6 md:px-12">

//         {/* Header */}
//         <motion.div
//           className="text-center mb-20 md:mb-24"
//           initial={{ opacity: 0, y: 32 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <h2 className="text-[40px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.02em] text-black mb-4">
//             Available in.
//           </h2>

//           <p className="text-[18px] md:text-[20px] text-[#6A6A6A] tracking-tight">
//             Clean energy, your way.
//           </p>
//         </motion.div>


//         {/* Products */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-[900px] mx-auto">

//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               data-testid={`product-card-${product.id}`}
//               className="flex flex-col items-center text-center"
//               initial={{ opacity: 0, y: 48 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 1,
//                 delay: index * 0.2,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//             >

//               {/* Product Image */}
//               <motion.div
//                 className="relative mb-10"
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.4 }}
//               >

//                 {/* glow */}
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     background:
//                       "radial-gradient(circle, rgba(0,0,0,0.06), transparent 70%)",
//                     filter: "blur(40px)",
//                     transform: "scale(1.2)",
//                     zIndex: 0,
//                   }}
//                 />

//                 <motion.img
//                   src={product.image}
//                   alt={`CLEARLY ${product.name}`}
//                   className="
//                     relative z-10
//                     h-[420px]
//                     md:h-[460px]
//                     lg:h-[500px]
//                     w-auto
//                     object-contain
//                     drop-shadow-[0_40px_100px_rgba(0,0,0,0.18)]
//                   "
//                   whileHover={{ scale: 1.04 }}
//                   transition={{ duration: 0.4 }}
//                 />

//               </motion.div>


//               {/* Product Name */}
//               <h3 className="text-[26px] md:text-[30px] font-semibold tracking-tight text-black mb-5">
//                 {product.name}
//               </h3>


//               {/* Benefits */}
//               <div className="flex flex-col items-center gap-1 mb-5">
//                 {product.benefits.map((benefit, i) => (
//                   <span
//                     key={i}
//                     className="text-[15px] text-[#7A7A7A] tracking-tight"
//                   >
//                     {benefit}
//                   </span>
//                 ))}
//               </div>


//               {/* Descriptor */}
//               <span className="text-[16px] font-medium text-black tracking-tight">
//                 {product.descriptor}
//               </span>

//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;
// import { motion } from "framer-motion";

// const ProductSection = () => {
//   const products = [
//     {
//       id: "citrus",
//       name: "Citrus Twist",
//       image: "/citrusfinal.png",
//       benefits: ["0 kcal", "Zero sugar", "No jitters", "No crash"],
//       descriptor: "Bright citrus lift",
//     },
//     {
//       id: "berry",
//       name: "Berry Burst",
//       image: "/berryfinal.png",
//       benefits: ["0 kcal", "Zero sugar", "No jitters", "No crash"],
//       descriptor: "Smooth berry focus",
//     },
//   ];

//   return (
//     <section
//          id="products"
//          data-testid="product-section"
//          className="pt-24 pb-24 md:pt-28 md:pb-28 bg-white relative"
//       // data-testid="product-section"
//       // className="pt-24 pb-24 md:pt-28 md:pb-28 bg-white relative"
//     >
//       <div className="max-w-[1200px] mx-auto px-6 md:px-12">

//         {/* Header */}
//         <motion.div
//           className="text-center mb-20 md:mb-24"
//           initial={{ opacity: 0, y: 32 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <h2 className="text-[40px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.02em] text-black mb-4">
//             Available in.
//           </h2>

//           <p className="text-[18px] md:text-[20px] text-[#6A6A6A] tracking-tight">
//             Clean energy, your way.
//           </p>
//         </motion.div>


//         {/* Products */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-28 max-w-[900px] mx-auto">

//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               data-testid={`product-card-${product.id}`}
//               className="flex flex-col items-center text-center group"
//               initial={{ opacity: 0, y: 48 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 1,
//                 delay: index * 0.2,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//             >

//               {/* Product Image Container */}
//               <motion.div
//                 className="relative mb-12"
//                 initial="rest"
//                 whileHover="hover"
//                 animate="rest"
//               >

//                 {/* Dynamic premium glow */}
//                 <motion.div
//                   variants={{
//                     rest: {
//                       opacity: 0.35,
//                       scale: 1,
//                     },
//                     hover: {
//                       opacity: 0.6,
//                       scale: 1.15,
//                     },
//                   }}
//                   transition={{
//                     duration: 0.6,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   className="absolute inset-0"
//                   style={{
//                     background:
//                       "radial-gradient(circle, rgba(0,0,0,0.08), transparent 70%)",
//                     filter: "blur(50px)",
//                     zIndex: 0,
//                   }}
//                 />

//                 {/* Can Image with physical lift */}
//                 <motion.img
//                   src={product.image}
//                   alt={`CLEARLY ${product.name}`}
//                   variants={{
//                     rest: {
//                       y: 0,
//                       scale: 1,
//                       filter:
//                         "drop-shadow(0 60px 120px rgba(0,0,0,0.22))",
//                     },
//                     hover: {
//                       y: -18,
//                       scale: 1.05,
//                       filter:
//                         "drop-shadow(0 90px 180px rgba(0,0,0,0.28))",
//                     },
//                   }}
//                   transition={{
//                     duration: 0.7,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   className="
//                     relative z-10
//                     h-[420px]
//                     md:h-[460px]
//                     lg:h-[520px]
//                     w-auto
//                     object-contain
//                     select-none
//                     pointer-events-none
//                   "
//                   draggable="false"
//                 />

//               </motion.div>


//               {/* Product Name */}
//               <h3 className="text-[26px] md:text-[30px] font-semibold tracking-tight text-black mb-5">
//                 {product.name}
//               </h3>


//               {/* Benefits */}
//               <div className="flex flex-col items-center gap-1 mb-5">
//                 {product.benefits.map((benefit, i) => (
//                   <span
//                     key={i}
//                     className="text-[15px] text-[#7A7A7A] tracking-tight"
//                   >
//                     {benefit}
//                   </span>
//                 ))}
//               </div>


//               {/* Descriptor */}
//               <span className="text-[16px] font-medium text-black tracking-tight">
//                 {product.descriptor}
//               </span>

//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;
import { motion } from "framer-motion";

const ProductSection = () => {
  const products = [
    {
      id: "citrus",
      name: "Citrus Twist",
      frontImage: "/citrusfinal.png",
      backImage: "/canbackcitrus.png",
      benefits: ["0 kcal", "Zero sugar", "No jitters", "No crash"],
      descriptor: "Bright citrus lift",
    },
    {
      id: "berry",
      name: "Berry Burst",
      frontImage: "/berryfinal.png",
      backImage: "/canbackberry.png",
      benefits: ["0 kcal", "Zero sugar", "No jitters", "No crash"],
      descriptor: "Smooth berry focus",
    },
  ];

  return (
    <section
      id="products"
      data-testid="product-section"
      className="pt-24 pb-24 md:pt-28 md:pb-28 bg-white relative"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="text-center mb-20 md:mb-24"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[40px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.02em] text-black mb-4">
            Available in.
          </h2>

          <p className="text-[18px] md:text-[20px] text-[#6A6A6A] tracking-tight">
            Clean energy, your way.
          </p>
        </motion.div>


        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-28 max-w-[900px] mx-auto">

          {products.map((product, index) => (

            <motion.div
              key={product.id}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              {/* Image Container */}
              <motion.div
                className="relative mb-12"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >

                {/* Premium glow */}
                <motion.div
                  variants={{
                    rest: { opacity: 0.35, scale: 1 },
                    hover: { opacity: 0.6, scale: 1.15 },
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,0,0,0.08), transparent 70%)",
                    filter: "blur(50px)",
                    zIndex: 0,
                  }}
                />

                {/* Image wrapper */}
                <motion.div
                  variants={{
                    rest: {
                      y: 0,
                      scale: 1,
                      filter:
                        "drop-shadow(0 60px 120px rgba(0,0,0,0.22))",
                    },
                    hover: {
                      y: -18,
                      scale: 1.05,
                      filter:
                        "drop-shadow(0 90px 180px rgba(0,0,0,0.28))",
                    },
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative z-10"
                >

                  {/* FRONT IMAGE */}
                  <img
                    src={product.frontImage}
                    alt={product.name}
                    className="
                      absolute inset-0
                      h-[420px] md:h-[460px] lg:h-[520px]
                      w-auto object-contain
                      transition-opacity duration-500 ease-out
                      group-hover:opacity-0
                      select-none pointer-events-none
                    "
                    draggable="false"
                  />

                  {/* BACK IMAGE */}
                  <img
                    src={product.backImage}
                    alt={`${product.name} back`}
                    className="
                      h-[420px] md:h-[460px] lg:h-[520px]
                      w-auto object-contain
                      opacity-0
                      transition-opacity duration-500 ease-out
                      group-hover:opacity-100
                      select-none pointer-events-none
                    "
                    draggable="false"
                  />

                </motion.div>

              </motion.div>


              {/* Product Name */}
              <h3 className="text-[26px] md:text-[30px] font-semibold tracking-tight text-black mb-5">
                {product.name}
              </h3>


              {/* Benefits */}
              <div className="flex flex-col items-center gap-1 mb-5">
                {product.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="text-[15px] text-[#7A7A7A] tracking-tight"
                  >
                    {benefit}
                  </span>
                ))}
              </div>


              {/* Descriptor */}
              <span className="text-[16px] font-medium text-black tracking-tight">
                {product.descriptor}
              </span>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default ProductSection;