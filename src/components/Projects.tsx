import React from 'react';
import { Calendar, Github } from 'lucide-react';

const projects = [
  {
    title: "Canvas AI",
    period: "May 2024 - Aug 2024",
    githubLink: "https://github.com/JustCallMeSidd/Canvas-Ai",
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
    points: [
      "Developed ML-based search system for 10,000+ Ayurvedic remedies",
      "Achieved 90% accuracy in identifying relevant treatments",
      "Improved response accuracy by 30% using RAG integration"
    ]
  }
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.period}
                </div>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                View Project
              </a>
            </div>
            <ul className="space-y-3">
              {project.points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}