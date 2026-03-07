// // import { motion } from 'framer-motion';
// // import { useState } from 'react';
// // import { toast } from 'sonner';
// // import { ArrowRight } from 'lucide-react';

// // const EmailSignup = () => {
// //   const [email, setEmail] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     if (!email || !email.includes('@')) {
// //       toast.error('Please enter a valid email address');
// //       return;
// //     }

// //     setIsSubmitting(true);
    
// //     // Simulate submission (UI mockup only)
// //     setTimeout(() => {
// //       toast.success("You're on the list!", {
// //         description: "We'll notify you when CLEARLY launches.",
// //       });
// //       setEmail('');
// //       setIsSubmitting(false);
// //     }, 800);
// //   };

// //   return (
// //     <section 
// //       data-testid="email-signup-section"
// //       className="py-32 md:py-40 relative"
// //       style={{ backgroundColor: '#FAFAFA' }}
// //     >
// //       <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: "-100px" }}
// //           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
// //         >
// //           <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black mb-4">
// //             Get notified.
// //           </h2>
// //           <p className="text-lg font-light mb-12" style={{ color: '#666666' }}>
// //             Be the first to know when CLEARLY drops.
// //           </p>
// //         </motion.div>

// //         {/* Email form */}
// //         <motion.form
// //           onSubmit={handleSubmit}
// //           className="relative"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: "-50px" }}
// //           transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
// //         >
// //           <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 bg-white rounded-full sm:pr-2 p-2" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               placeholder="Enter your email"
// //               data-testid="email-input"
// //               className="flex-1 px-6 py-4 text-base bg-transparent border-none outline-none text-black placeholder:text-gray-400 rounded-full"
// //             />
// //             <button
// //               type="submit"
// //               disabled={isSubmitting}
// //               data-testid="notify-btn"
// //               className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               {isSubmitting ? (
// //                 <span>Joining...</span>
// //               ) : (
// //                 <>
// //                   <span>Notify Me</span>
// //                   <ArrowRight className="w-4 h-4" />
// //                 </>
// //               )}
// //             </button>
// //           </div>
// //         </motion.form>

// //         {/* Privacy note */}
// //         <motion.p
// //           className="mt-6 text-sm"
// //           style={{ color: '#999999' }}
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true, margin: "-50px" }}
// //           transition={{ duration: 0.5, delay: 0.4 }}
// //         >
// //           No spam. Unsubscribe anytime.
// //         </motion.p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default EmailSignup;
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { toast } from 'sonner';
// import { ArrowRight } from 'lucide-react';
// import { supabase } from '../../lib/supabase';

// const EmailSignup = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const generateDiscountCode = () => {
//     const random = Math.random().toString(36).substring(2, 8).toUpperCase();
//     return `CLEAR50-${random}`;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !email.includes('@')) {
//       toast.error('Please enter a valid email address');
//       return;
//     }

//     setIsSubmitting(true);

//     const discountCode = generateDiscountCode();

//     const { error } = await supabase
//       .from('waitlist')
//       .insert([
//         {
//           email: email,
//           discount_code: discountCode,
//         },
//       ]);

//     if (error) {
//       console.error(error);
//       toast.error('This email may already be registered.');
//       setIsSubmitting(false);
//       return;
//     }

//     toast.success("You're on the list!", {
//       description: "Check your email soon for your 50% off code.",
//     });

//     setEmail('');
//     setIsSubmitting(false);
//   };

//   return (
//     <section
//       id="contact"
//       data-testid="email-signup-section"
//       className="py-32 md:py-40 relative"
//       style={{ backgroundColor: '#FAFAFA' }}
//     >
//       <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-100px' }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black mb-4">
//             Get notified.
//           </h2>
//           <p className="text-lg font-light mb-12" style={{ color: '#666666' }}>
//             Be the first to know when CLEARLY drops.
//           </p>
//         </motion.div>

//         {/* Email form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           className="relative"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-50px' }}
//           transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <div
//             className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 bg-white rounded-full sm:pr-2 p-2"
//             style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
//           >
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               data-testid="email-input"
//               className="flex-1 px-6 py-4 text-base bg-transparent border-none outline-none text-black placeholder:text-gray-400 rounded-full"
//               required
//             />

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               data-testid="notify-btn"
//               className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? (
//                 <span>Joining...</span>
//               ) : (
//                 <>
//                   <span>Notify Me</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </>
//               )}
//             </button>
//           </div>
//         </motion.form>

//         {/* Privacy note */}
//         <motion.p
//           className="mt-6 text-sm"
//           style={{ color: '#999999' }}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: '-50px' }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           No spam. Unsubscribe anytime.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default EmailSignup;
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { toast } from "sonner";
// import { ArrowRight } from "lucide-react";
// import { supabase } from "../../lib/supabase"; // adjust path if needed

// const EmailSignup = () => {
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const generateDiscountCode = () => {
//     const random = Math.random().toString(36).substring(2, 8).toUpperCase();
//     return `CLEAR50-${random}`;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !email.includes("@")) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const discountCode = generateDiscountCode();

//       // 1️⃣ Save to database
//       const { error } = await supabase
//         .from("waitlist")
//         .insert([{ email, discount_code: discountCode }]);

//       if (error) throw error;
//       // 2️⃣ Call edge function
//       await fetch(
//         `https://tyggnmvdexepkzodaexa.supabase.co/functions/v1/send-discount-email`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization":`Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            
//           },
//           body: JSON.stringify({
//             email,
//             discountCode,
//           }),
//         }
//       );

//       toast.success("You're on the list!", {
//         description: "Check your email for your 50% discount 🎉",
//       });

//       setEmail("");
//     } catch (err) {
//       toast.error("Something went wrong.");
//       console.error(err);
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <section className="py-32 md:py-40 relative" style={{ backgroundColor: "#FAFAFA" }}>
//       <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
//           <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black mb-4">
//             Early Access.
//           </h2>
//           <p className="text-lg font-light mb-12" style={{ color: "#666666" }}>
//             Be among the first to experience CLEARLY.
//           </p>
//         </motion.div>

//         <motion.form onSubmit={handleSubmit} className="relative">
//           <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-full p-2 shadow-md">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="flex-1 px-6 py-4 bg-transparent outline-none text-black rounded-full"
//             />
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2"
//             >
//               {isSubmitting ? "Joining..." : "Join the Waitlist"}
//               {!isSubmitting && <ArrowRight className="w-4 h-4" />}
//             </button>
//           </div>
//         </motion.form>

//         <p className="mt-6 text-sm text-gray-400">
//           No spam. Unsubscribe anytime.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default EmailSignup;
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { supabase } from "../../lib/supabase"; // adjust path if needed

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateDiscountCode = () => {
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `CLEAR50-${random}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const discountCode = generateDiscountCode();

      // 1️⃣ Save to database
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email, discount_code: discountCode }]);

      if (error) throw error;
      // 2️⃣ Call edge function
      await fetch(
        `https://tyggnmvdexepkzodaexa.supabase.co/functions/v1/send-discount-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            
          },
          body: JSON.stringify({
            email,
            discountCode,
          }),
        }
      );

      toast.success("You're on the list!", {
        description: "Check your email for your 50% discount 🎉",
      });

      setEmail("");
    } catch (err) {
      toast.error("Something went wrong.");
      console.error(err);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-40 relative" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-xl mx-auto px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black mb-4">
            Early Access.
          </h2>
          <p className="text-lg font-light mb-12" style={{ color: "#666666" }}>
            Be among the first to experience CLEARLY.
          </p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} className="relative">
          <div className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 w-full sm:w-auto text-[15px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-transparent outline-none text-black rounded-full text-[15px]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 w-full sm:w-auto text-[15px]"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </motion.form>

        <p className="mt-6 text-sm text-gray-400">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default EmailSignup;