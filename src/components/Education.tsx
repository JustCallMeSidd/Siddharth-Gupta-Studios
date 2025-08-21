import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-4">
          <GraduationCap className="w-6 h-6 text-indigo-600 mr-3" />
          <h3 className="text-2xl font-semibold">Bennett University</h3>
        </div>
        <div className="ml-9">
          <p className="text-lg text-gray-700">B.Tech in Computer Science and Engineering</p>
          <p className="text-gray-600">Specialization: Artificial Intelligence & Machine Learning</p>
          <p className="text-gray-600">GPA: 9.07 / 10</p>
          <p className="text-gray-600">Sep 2022 – Sep 2026</p>
          <p className="text-gray-600">Greater Noida, Uttar Pradesh</p>
        </div>
      </div>
    </section>
  );
}
