import React from "react";

const skillCategories = [
  {
    title: "Languages & Databases",
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Streamlit"]
  },
  {
    title: "Tools",
    skills: [
      "Excel",
      "Git",
      "CI/CD",
      "PowerPoint",
      "MySQL",
      "MongoDB",
      "n8n",
      "LangChain (RAG)",
      "OpenAI API",
      "HuggingFace Transformers"
    ]
  },
  {
    title: "Platforms & IDEs",
    skills: ["PyCharm", "Jupyter Notebook", "Visual Studio Code"]
  },
  {
    title: "Soft Skills",
    skills: [
      "Effective Communication",
      "Team Collaboration",
      "Creative Thinking",
      "Presentation & Technical Writing"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 bg-indigo-100 text-indigo-700 font-medium rounded-full text-sm hover:bg-indigo-200 transition-colors"
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
