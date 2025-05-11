import React, { useEffect, useState } from "react";
import {
  FaShieldAlt,
  FaReact,
  FaPython,
  FaCamera,
  FaCode,
  FaDesktop,
  FaTrophy,
  FaStar,
  FaAward,
  FaMapMarkedAlt,
  FaBolt,
  FaBullhorn,
  FaDatabase,
} from "react-icons/fa";

const heroText = [
  "Cybersecurity Enthusiast",
  "Full-Stack Dev",
  "Camera Lens Addict",
  "ML Explorer",
  "Frontend Dev",
  "UI/UX Designer",
  "Creative Strategist",
  
];

export default function Portfolio() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = heroText[index];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % heroText.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-16">
      <section className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Holaa, I’m <span className="text-purple-600">Ishrat Noori</span> 👋
        </h1>
        <p className="text-2xl text-gray-700 h-10">
          {text}
          <span className="animate-pulse">|</span>
        </p>
        <div className="flex gap-4">
          <a
            href="https://drive.google.com/file/d/1tro_WhSmw7-jRvkooIddP4EtAfwhJEa8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-2 border border-purple-600 text-purple-600 hover:bg-purple-100 rounded-lg transition"
          >
            View Projects
          </a>
        </div>
      </section>

      <section id="about" className="text-center py-16">
        <h2 className="text-4xl font-bold text-purple-600 mb-4">About Me</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          I'm a passionate developer blending creativity and tech. Whether it's diving deep into cybersecurity, building full-stack applications, crafting ML models, or capturing the perfect shot—I'm always creating.
        </p>
      </section>

      <section id="skills" className="text-center py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Skill icon={<FaShieldAlt />} label="Cybersecurity" />
          <Skill icon={<FaReact />} label="React" />
          <Skill icon={<FaPython />} label="Python" />
          <Skill icon={<FaCamera />} label="Photography" />
          <Skill icon={<FaCode />} label="Full-Stack Dev" />
          <Skill icon={<FaDesktop />} label="UI/UX" />
          <Skill icon={<FaDatabase />} label="SQL" />
        </div>
      </section>

      <section id="projects" className="text-center py-16">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProjectCard title="Swachhata@Svecw" description="A MERN stack web platform enabling students to report campus cleanliness issues with photo uploads and real-time status tracking." />
          <ProjectCard title="BuddyBoard" description="Interactive flashcard deck system to enhance personalized learning experiences using MEAN (Angular) components." />
          <ProjectCard title="Employee Attrition Prediction" description="Ensemble ML model using Random Forest and XGBoost to predict employee attrition with 85% accuracy." />
          <ProjectCard title="Grbify & GoPhish" description="A demo and hands-on workshop to simulate phishing attacks for awareness training using Grbify and GoPhish platforms." />
          <ProjectCard title="Campus Event Scheduler" description="A Python + MySQL project for managing college events, giving organizers full control over scheduling." />
          <ProjectCard title="Building..." description="Coming sooooon!" />
        </div>
      </section>
      <section id="certifications" className="text-center py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-6">
        <Certification
            icon={<FaCode />}
            label="Full Stack Developer"
            provider="IBM (edX)"
          />
          
          <Certification
            icon={<FaShieldAlt />}
            label="Foundations of Cyber Security"
            provider="Coursera (Google)"
          />
          
          <Certification
            icon={<FaDatabase />}
            label="Database Programming with SQL"
            provider="Oracle Academy"
          />
          <Certification
            icon={<FaShieldAlt />}
            label="Ethical Hacking (Kali Linux) & Information Security"
            provider="Cisco"
          />
         
        </div>
      </section>
      <section id="achievements" className="text-center py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">Achievements</h2>
        <div className="flex flex-wrap justify-center gap-6">
        <Achievement icon={<FaAward />} label="Limca Book of Records — Event participant with Toastmasters International"/>
          <Achievement icon={<FaTrophy />} label="300+ Days Badge - LeetCode & CodeChef" />
          <Achievement icon={<FaStar />} label="HackerRank 5★ in C & Python" />
          <Achievement icon={<FaBolt />} label="Hackathon — Socio-Tech 24-Hour Challenge Participant" />
          <Achievement icon={<FaAward />} label="Top Voice - LinkedIn (Social Media & Critical Thinking)" />
          <Achievement icon={<FaMapMarkedAlt />} label="Appathon — Tourist Guide App" />
          <Achievement icon={<FaShieldAlt />} label="Ideathon — Phishing Attacks Awareness" />
          <Achievement icon={<FaBullhorn />} label="Design & Media Lead — TECHNOVA 2025, A National Level College Fest" />
        </div>
      </section>

      

      <footer className="text-center py-8 text-gray-600">
        Made with 💜 by Ishrat Noori
      </footer>
    </div>
  );
}

function Skill({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-purple-600 text-4xl mb-2">{icon}</div>
      <p className="text-gray-800 font-medium">{label}</p>
    </div>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="border border-purple-200 rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function Achievement({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-purple-600 text-4xl mb-2">{icon}</div>
      <p className="text-gray-800 font-medium text-center">{label}</p>
    </div>
  );
}

function Certification({ icon, label, provider }) {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-64">
      <div className="text-purple-600 text-4xl mb-4">{icon}</div>
      <p className="text-gray-800 font-semibold text-lg">{label}</p>
      <p className="text-gray-500 text-sm">{provider}</p>
    </div>
  );
}
