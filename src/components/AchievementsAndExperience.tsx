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
  }
];

export default function AchievementsAndExperience() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Achievements & Experience</h2>
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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