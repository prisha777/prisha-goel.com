import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import biosensorImage from "@/assets/biosensor_ai_img.png";
import chatbotImage from "@/assets/eduGPT_img.png";
import financialModelImage from "@/assets/financial_model_ai.png";
import driverAIImage from "@/assets/distracted_driver_ai.png";
import cancerDetectionImage from "@/assets/cancer_detect_ai.png";


export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: biosensorImage,
      title: 'Biosensor Software',
      category: 'Biology & Technology'
    },
    {
      url: chatbotImage,
      title: 'Educational Chatbot',
      category: 'AI & Education'
    },
    {
      url: financialModelImage,
      title: 'Financial Modeling',
      category: 'Data Analytics'
    },
    {
      url: driverAIImage,
      title: 'Distracted Driver AI',
      category: 'Machine Learning'
    },
    {
      url: cancerDetectionImage,
      title: 'Cancer Detection Model',
      category: 'AI & Healthcare'
    },
  ];

  return (
    <section id="gallery" className="py-32 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-widest uppercase mb-4 text-purple-400">
            Visual Showcase
          </div>
          <h2 className="text-white mb-6">
            Gallery
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            A curated collection of creative work, design explorations, visual experiments, and fun games.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hoverable"
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-sm uppercase tracking-widest text-purple-300 mb-2"
                  >
                    {image.category}
                  </motion.div>
                  <h3 className="text-white">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xl">+</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-4 right-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl hoverable"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-5xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <ImageWithFallback
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="mt-6 text-center">
                  <div className="text-purple-400 text-sm uppercase tracking-widest mb-2">
                    {galleryImages[selectedImage].category}
                  </div>
                  <h3 className="text-white text-2xl">
                    {galleryImages[selectedImage].title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
