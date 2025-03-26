import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AchievementsAndExperience from './components/AchievementsAndExperience';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16 space-y-20">
        <About />
        <Skills />
        <Projects />
        <AchievementsAndExperience />
        <Education />
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Siddharth Gupta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;