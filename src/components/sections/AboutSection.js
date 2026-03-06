import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section 
      data-testid="about-section"
      className="py-32 md:py-40 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-3">
            Energy needed a cleaner form.
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-16" style={{ color: 'rgba(255,255,255,0.3)' }}>
            So we made water that works.
          </h2>
        </motion.div>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.5)' }}>
            CLEARLY is clean energy water.<br />
            No sugar. No artificial sweeteners.<br />
            No crash. No jitters.
          </p>

          <p className="text-lg md:text-xl font-medium text-white">
            Just pure, focused energy.
          </p>
        </motion.div>

        {/* Brand mark */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-6xl md:text-8xl font-bold tracking-tighter" style={{ color: 'rgba(255,255,255,0.08)' }}>
            CLEARLY.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
