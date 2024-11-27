import React, { useState } from 'react';
import { BookOpen, Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Wrench } from 'lucide-react';

const CV = () => {
  const [activeSection, setActiveSection] = useState('about');

  const personalInfo = {
    name: "Zachary Smith",
    email: "zsmithwk@outlook.com",
    phone: "07521468923",
    location: "Edinburgh"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900">{personalInfo.name}</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {['about', 'education', 'experience', 'skills', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === section
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* About Section */}
        <section className={`space-y-6 ${activeSection === 'about' ? '' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="text-blue-600" />
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Experienced Mechanical Engineering graduate with a strong foundation in electronics, automation, 
              mechanical design and fluid mechanics. Skilled in AutoCAD, SolidWorks, Ansys, MATLAB, and Python, 
              with deep practical workshop experience.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className={`space-y-6 ${activeSection === 'education' ? '' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap className="text-blue-600" />
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">University of Exeter</h3>
                <p className="text-gray-600">BEng Mechanical Engineering (2:1)</p>
                <p className="text-gray-500 text-sm">Graduated July 2023</p>
                <div className="mt-2">
                  <h4 className="font-medium text-gray-700">Key Modules:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-2">
                    <li>Electronics (91%)</li>
                    <li>Mathematical Modelling (85%)</li>
                    <li>Thermodynamics and Heat Transfer (79%)</li>
                    <li>Finite Element Analysis (79%)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={`space-y-6 ${activeSection === 'experience' ? '' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="text-blue-600" />
              Work Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Committee Member</h3>
                <p className="text-gray-600">Avocados Advocacy</p>
                <p className="text-gray-500 text-sm">September 2020 - December 2023</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Shaped services for individuals with care experience</li>
                  <li>Supported outreach projects and organized drop-in sessions</li>
                  <li>Assisted with fundraising efforts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`space-y-6 ${activeSection === 'skills' ? '' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Wrench className="text-blue-600" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Software & Programming</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>SolidWorks, AutoCAD, ANSYS</li>
                  <li>MATLAB, Python (NumPy, Pandas)</li>
                  <li>C/C++, Arduino IDE</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Engineering & Design</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>FEA, CFD, Thermal Analysis</li>
                  <li>Product Development</li>
                  <li>Mechanical Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`space-y-6 ${activeSection === 'projects' ? '' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Code className="text-blue-600" />
              Notable Projects
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Bridge Pier Analysis</h3>
                <p className="text-gray-600 mt-2">
                  Investigated the impact of woody debris collisions on bridge piers during flood conditions,
                  analyzing over 90,000 data points using Picoscope and MATLAB/Python.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Military Tow Hook Redesign</h3>
                <p className="text-gray-600 mt-2">
                  Redesigned tow hook assembly using ANSYS FEA, optimizing strength-to-weight ratio while
                  maintaining military specifications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CV;
