import { motion } from 'motion/react';
//import biosensorImage from 'figma:asset/dcf27f1ef12c9efbe63bd6abaec291226100ef43.png';
//import chatbotImage from 'figma:asset/3f40d6dde504f41e2c483b2b60b0610b8625cc1d.png';
//import financialModelImage from 'figma:asset/01141246a54e78f3c239709ffbf5a8313b25c21a.png';
//import driverAIImage from 'figma:asset/b6823e6a62542d82ce42cfee38d9ef8ee46149f4.png';
//import cancerDetectionImage from 'figma:asset/73af345a660b178bb3b20838bdfa8ce6e7302043.png';

import biosensorImage from "@/assets/biosensor_ai_img.png";
import chatbotImage from "@/assets/eduGPT_img.png";
import financialModelImage from "@/assets/financial_model_ai.png";
import driverAIImage from "@/assets/distracted_driver_ai.png";
import cancerDetectionImage from "@/assets/cancer_detect_ai.png";


export function Showcase() {
  // Column 1 - scrolls down
  const column1Images = [
    { src: biosensorImage, alt: 'Biosensor Software' },
    { src: financialModelImage, alt: 'Financial Modeling' },
    { src: cancerDetectionImage, alt: 'Cancer Detection' },
  ];

  // Column 2 - scrolls up
  const column2Images = [
    { src: chatbotImage, alt: 'Educational Chatbot' },
    { src: driverAIImage, alt: 'Distracted Driver AI' },
    { src: biosensorImage, alt: 'Biosensor Software' },
  ];

  // Column 3 - scrolls down
  const column3Images = [
    { src: driverAIImage, alt: 'Distracted Driver AI' },
    { src: chatbotImage, alt: 'Educational Chatbot' },
    { src: financialModelImage, alt: 'Financial Modeling' },
  ];

  // Duplicate arrays for infinite scroll effect
  const duplicateColumn1 = [...column1Images, ...column1Images];
  const duplicateColumn2 = [...column2Images, ...column2Images];
  const duplicateColumn3 = [...column3Images, ...column3Images];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-sm tracking-widest uppercase mb-4 text-purple-400">
            Featured Work
          </div>
          <h2 className="text-white mb-6">
            Project Showcase
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Creating innovative solutions in AI, machine learning, and data science
          </p>
        </motion.div>
      </div>

      {/* Scrolling Columns Container */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 flex gap-6 px-6">
          {/* Column 1 - Scrolls Down */}
          <motion.div
            className="flex-1 flex flex-col gap-6"
            animate={{
              y: [0, -50 * column1Images.length + '%']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicateColumn1.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden flex-shrink-0 hoverable group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column 2 - Scrolls Up */}
          <motion.div
            className="flex-1 flex flex-col gap-6"
            animate={{
              y: [-50 * column2Images.length + '%', 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicateColumn2.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden flex-shrink-0 hoverable group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column 3 - Scrolls Down */}
          <motion.div
            className="flex-1 flex flex-col gap-6"
            animate={{
              y: [0, -50 * column3Images.length + '%']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicateColumn3.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden flex-shrink-0 hoverable group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
