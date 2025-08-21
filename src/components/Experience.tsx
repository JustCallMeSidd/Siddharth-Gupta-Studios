import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const experiences = [
  {
    title: "TumorX Pro",
    period: "Feb 2025 - Mar 2025",
    githubLink: "https://github.com/JustCallMeSidd/TumorX-Pro", // replace with actual repo link
    category: "medical",
    points: [
      "Built an AI-powered platform for brain tumor classification & segmentation",
      "Achieved 94% accuracy across 4 tumor classes using CNN model",
      "Integrated U-Net segmentation for precise tumor localization",
      "Developed an engaging, X/Twitter-inspired UI with glowing result boxes",
      "Deployed Streamlit web app supporting real-time predictions"
    ]
  },
  {
    title: "Canvas AI",
    period: "May 2024 - Aug 2024",
    githubLink: "https://github.com/JustCallMeSidd/Canvas-Ai",
    category: "ai",
    points: [
      "Engineered and deployed Canvas AI, a web application utilizing deep learning and GAN models for advanced image transformations",
      "Style Transfer GAN: Processed 1,000+ images with real-time style conversion",
      "Colorization GAN: Trained model for 150 epochs on 1,000+ Pokémon sketches",
      "Improved output quality by 15-20% through optimization"
    ]
  },
  {
    title: "Cardio Care",
    period: "Jan 2024 - Mar 2024",
    githubLink: "https://github.com/JustCallMeSidd/Heart-ECG-Disease-Classification-",
    category: "medical",
    points: [
      "Designed deep learning-powered platform with 97% classification accuracy",
      "Processed 4,000+ medical images across 6 disease classes",
      "Implemented real-time disease predictions with doctor-saving feature",
      "Utilized TensorFlow and Keras for model performance optimization"
    ]
  },
  {
    title: "Ayurvedic Chatbot & RAG Integration",
    period: "Jan 2025",
    githubLink: "https://github.com/JustCallMeSidd/ShapAyurVeda-ChatBot",
    category: "ai",
    points: [
      "Developed ML-based search system for 10,000+ Ayurvedic remedies",
      "Achieved 90% accuracy in identifying relevant treatments",
      "Improved response accuracy by 30% using RAG integration"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 md:px-16 bg-black">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {experiences.map((exp, index) => {
          const accentColor =
            exp.category === "medical"
              ? "from-blue-500 to-green-400"
              : "from-indigo-500 to-purple-500";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3
                      className={`text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${accentColor}`}
                    >
                      {exp.title}
                    </h3>
                    <a
                      href={exp.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
