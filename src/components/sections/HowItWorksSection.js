import { motion } from 'framer-motion';
import { Zap, Brain, Sparkles } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Zap,
      title: 'Caffeine',
      desc: '100mg clean energy without crash.',
    },
    {
      icon: Brain,
      title: 'L-Theanine',
      desc: 'Improves focus and reduces jitters.',
    },
    {
      icon: Sparkles,
      title: 'Flow State',
      desc: 'Smooth, sustained mental clarity.',
    },
  ];

  return (
    <section 
      data-testid="how-it-works-section"
      className="pt-24 pb-16 md:pt-28 md:pb-20 relative"
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black mb-4">
            How it works.
          </h2>
          <p className="text-lg md:text-xl font-light" style={{ color: '#666666' }}>
            Clean energy, backed by science.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                data-testid={`step-card-${index}`}
                className="bg-white rounded-2xl p-10 text-center transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mx-auto mb-8">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed font-light" style={{ color: '#666666' }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Formula */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 md:gap-5 text-lg md:text-xl font-medium">
            <span className="text-black">Caffeine</span>
            <span style={{ color: '#CCCCCC' }}>+</span>
            <span className="text-black">L-Theanine</span>
            <span style={{ color: '#CCCCCC' }}>=</span>
            <span className="text-black font-semibold">Smooth Energy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
