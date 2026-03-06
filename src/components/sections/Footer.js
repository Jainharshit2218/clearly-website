// import { Instagram, Linkedin, Mail } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-white mt-32">

//       {/* Container */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12">

//         {/* TOP SECTION */}
//         <div className="flex flex-col md:flex-row justify-between items-start gap-16 pb-16">

//           {/* LEFT */}
//           <div>

//             {/* Brand */}
//             <h2 className="text-xl font-semibold tracking-tight mb-5">
//               CLEARLY.
//             </h2>

//             {/* Tagline */}
//             <p className="text-gray-500 leading-relaxed mb-8 max-w-xs">
//               Clean Energy Water<br/>
//               Feels like water.<br/>
//               Works like energy.
//             </p>

//             {/* Contact */}
//             <div className="space-y-4 text-gray-500">

//               <a
//                 href="#"
//                 className="flex items-center gap-3 hover:text-black transition-colors duration-200"
//               >
//                 <Instagram size={16}/>
//                 @tryclearly
//               </a>

//               <a
//                 href="mailto:hello@tryclearly.in"
//                 className="flex items-center gap-3 hover:text-black transition-colors duration-200"
//               >
//                 <Mail size={16}/>
//                 hello@tryclearly.in
//               </a>

//               <a
//                 href="#"
//                 className="flex items-center gap-3 hover:text-black transition-colors duration-200"
//               >
//                 <Linkedin size={16}/>
//                 LinkedIn
//               </a>

//             </div>

//           </div>


//           {/* RIGHT NAV */}
//           <div className="flex flex-col gap-4 text-gray-500">

//             <a href="#" className="hover:text-black transition-colors duration-200">
//               Products
//             </a>

//             <a href="#" className="hover:text-black transition-colors duration-200">
//               How it Works
//             </a>

//             <a href="#" className="hover:text-black transition-colors duration-200">
//               About
//             </a>

//             <a href="#" className="hover:text-black transition-colors duration-200">
//               Contact
//             </a>

//           </div>

//         </div>


//         {/* PREMIUM DIVIDER */}
//         <div className="flex justify-center mb-10">
//           <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"/>
//         </div>


//         {/* BOTTOM */}
//         <div className="flex flex-col md:flex-row justify-between items-center pb-10 text-sm text-gray-400">

//           <p>
//             • 0 Sugar • 0 Calories • 100mg Caffeine • No Artificial Sweeteners
//           </p>

//           <p className="mt-3 md:mt-0">
//             © 2026 CLEARLY. All rights reserved.
//           </p>

//         </div>

//       </div>

//     </footer>
//   );
// }
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="bg-white mt-28">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 pb-16">

          {/* LEFT */}
          <div>

            {/* Brand */}
            <h2 className="text-[18px] font-semibold tracking-tight mb-5">
              CLEARLY.
            </h2>

            {/* Tagline */}
            <p className="text-[#6A6A6A] leading-relaxed mb-8 max-w-xs text-[15px]">
              Clean Energy Water<br />
              Feels like water.<br />
              Works like energy.
            </p>

            {/* Contact */}
            <div className="space-y-4 text-[#6A6A6A]">

              <a
                href="https://instagram.com/tryclearly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-black transition-colors duration-300"
              >
                <Instagram size={16} />
                @tryclearly
              </a>

              <a
                href="mailto:hello@tryclearly.in"
                className="flex items-center gap-3 hover:text-black transition-colors duration-300"
              >
                <Mail size={16} />
                hello@tryclearly.in
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-black transition-colors duration-300"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

            </div>

          </div>


          {/* RIGHT NAV */}
          <div className="flex flex-col gap-4 text-[#6A6A6A] text-[15px]">

            <button
              onClick={() => scrollTo("products")}
              className="hover:text-black transition-colors duration-300 text-left"
            >
              Products
            </button>

            <button
              onClick={() => scrollTo("how-it-works")}
              className="hover:text-black transition-colors duration-300 text-left"
            >
              How it Works
            </button>

            <button
              onClick={() => scrollTo("about")}
              className="hover:text-black transition-colors duration-300 text-left"
            >
              About
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="hover:text-black transition-colors duration-300 text-left"
            >
              Contact
            </button>

          </div>

        </div>


        {/* Divider */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>


        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-10 text-[14px] text-[#9A9A9A]">

          <p>
           • 0 Sugar • 0 Calories • 100mg Caffeine • No Artificial Sweeteners
          </p>

          <p className="mt-3 md:mt-0">
            © 2026 CLEARLY. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}