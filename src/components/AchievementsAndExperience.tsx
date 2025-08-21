import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: "Full-Stack Web Development Internship | Edureka",
    period: "Aug 2024 - Oct 2024",
    certificateLink: "https://drive.google.com/file/d/1lGr9UTuHPd5X848PNIZ39xFYOuh3CwkG/view?usp=sharing",
    points: [
      "Successfully completed intensive training in JavaScript, React, Node.js, and MongoDB",
      "Developed and deployed dynamic web applications with responsive front ends",
      "Enhanced application performance through database and UI optimization"
    ]
  },
  {
    title: "Deep Learning A-Z 2025: Neural Networks, AI & ChatGPT Prize",
    certificateLink: "https://drive.google.com/file/d/1AaG4FMPS61R11mgzOJgP6EzhtEP_1su7/view?usp=sharing",
    points: [
      "Completed advanced training in Deep Learning with Python",
      "Mastered neural network architectures and implementation"
    ]
  },
  {
    title: "Capstone Project – TumorX Pro: Brain Tumor Detection",
    period: "2025",
    points: [
      "Built a professional-grade app integrating Classification (94% accuracy) and Segmentation models (U-Net)",
      "Implemented interactive UI for uploading MRI scans with tumor heatmap overlay",
      "Optimized inference for real-time medical image analysis"
    ]
  },
  {
    title: "Research Paper – IEEE Conference Presentation",
    period: "Aug 2025",
    points: [
      "Presented paper titled 'Integrating Deep Learning Concepts with Blood Diagnosis' at GL Bajaj IEEE Conference",
      "Achieved 92.37% accuracy using a hybrid CNN model (Xception + InceptionResNetV2)",
      "Pioneered transforming blood test data into image-like tensors for classification"
    ]
  },
  {
    title: "NGO Connect 360 – Mobile App Project",
    period: "2024",
    points: [
      "Designed and developed an app to connect NGOs with local communities",
      "Implemented features for event discovery, participation, and community engagement",
      "Led QA and Security Testing to ensure scalability and safety"
    ]
  }
];

export default function AchievementsAndExperience() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Achievements & Experience</h2>
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start flex-grow">
                <Award className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  {achievement.period && (
                    <p className="text-gray-600 mb-3">{achievement.period}</p>
                  )}
                  <ul className="space-y-2">
                    {achievement.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {achievement.certificateLink && (
                <a
                  href={achievement.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors ml-4"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
