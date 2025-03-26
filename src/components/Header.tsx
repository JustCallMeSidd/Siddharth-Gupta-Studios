import React from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Siddharth Gupta</h1>
          <p className="text-xl mb-8">AI/ML Engineer & Full Stack Developer</p>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:justcallmesidd@gmail.com"
                className="flex items-center hover:text-indigo-200 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
              <a 
                href="https://linkedin.com/in/justcallmesidd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-indigo-200 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a 
                href="tel:8318983400"
                className="hover:text-indigo-200 transition-colors"
              >
                +91 8318983400
              </a>
            </div>
            <a 
              href="https://drive.google.com/file/d/1ALZaNDhuHd42R6mcMtOaJFPYNOfkSV_D/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}