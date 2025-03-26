import React from 'react';

const skillCategories = [
  {
    title: "Languages and Databases",
    skills: ["Python", "JavaScript", "HTML", "CSS", "MongoDB", "MySQL"]
  },
  {
    title: "Frontend Technologies",
    skills: ["React", "Next.js", "Streamlit", "Bootstrap", "Tailwind CSS", "Figma"]
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "REST APIs", "Firebase"]
  },
  {
    title: "AI/ML & Data Science",
    skills: ["TensorFlow", "PyTorch", "Keras", "Computer Vision", "Langchain", "Machine Learning"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "CI/CD Pipelines", "React Testing Library", "Excel", "Seaborn", "Matplotlib"]
  }
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}