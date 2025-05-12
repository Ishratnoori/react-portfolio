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
  FaCloud,
  FaLaptopCode,
  FaUserShield,
  FaServer,
  FaShieldVirus,
  
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
          Holaa, I'm <span className="text-purple-600">Ishrat Noori</span> 👋
        </h1>
        <p className="text-2xl text-gray-700 h-10">
          {text}
          <span className="animate-pulse">|</span>
        </p>
        <div className="flex gap-4">
          <a
            href="https://drive.google.com/file/d/1s8ZteP7qciSKh5pPRboDU8-q8ULpAFnA/view?usp=sharing"
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
          <ProjectCard title="Swachhata@Svecw" description="A MERN stack web platform enabling students to report campus cleanliness issues with photo uploads and real-time status tracking." githubLink="https://github.com/Ishratnoori/Swachatha-SVECW" liveDemoLink="https://swachatha-svecw.vercel.app/" />
          <ProjectCard title="BuddyBoard" description="Interactive flashcard deck system to enhance personalized learning experiences using MEAN (Angular) components." githubLink="https://github.com/Ishratnoori/BUDDY_BOARD_Infosys_Internship_Oct2024" liveDemoLink="https://buddyboard.vercel.app/" />
          <ProjectCard title="Employee Attrition Prediction" description="Ensemble ML model using Random Forest and XGBoost to predict employee attrition with 85% accuracy." githubLink="https://github.com/Ishratnoori/Employee-Attrition" />
          <ProjectCard title="Grbify & GoPhish" description="A demo and hands-on workshop to simulate phishing attacks for awareness training using Grbify and GoPhish platforms." />
          <ProjectCard title="Campus Event Scheduler" description="A Python + MySQL project for managing college events, giving organizers full control over scheduling." githubLink="https://github.com/Ishratnoori/CampusEventScheduler" />
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
            certificateLink="https://credentials.edx.org/credentials/a6ef19a91d8842ccb9c501f8de964e4f/"
          />
          
          <Certification
            icon={<FaShieldAlt />}
            label="Foundations of Cybersecurity"
            provider="Coursera (Google)"
            certificateLink="https://www.coursera.org/account/accomplishments/verify/GBY322RVPABM"
          />

          <Certification
            icon={<FaLaptopCode />}
            label="Certified Smart Coder"
            provider="Smart Interviews"
            certificateLink="https://smartinterviews.in/certificate/e9b1e197"
          />
          <Certification
            icon={<FaCloud />}
            label="Prompt Design in VertexAI"
            provider="Google Cloud"
            certificateLink="https://www.credly.com/badges/f6e1c200-8005-4b89-b589-6db5410796b4/linked_in_profile"
          />
          <Certification
            icon={<FaDatabase />}
            label="Database Programming with SQL"
            provider="Oracle Academy"
            certificateLink="https://www.linkedin.com/posts/ishrat-noori-4b3b70254_sql-oracle-databasemanagement-activity-7161317766006722561-NUQY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7R_ccBNCr48JMNMSR01lYvjPZ1dHES7Qw"
          />
          
          <Certification
            icon={<FaShieldVirus />}
            label="Ethical Hacking Essentials (EHE)"
            provider="EC-Council"
            certificateLink="https://courses.edx.org/certificates/995f661f052a40e5acaea17b3a52c952?_gl=1*2dtorf*_gcl_au*MTk3NDQxNzU1OS4xNzQ2MTE0NzUw*_ga*MTgxMDg4MTQ5MC4xNzE1MzMyOTMw*_ga_D3KS4KMDT0*czE3NDY5Mzk5MDgkbzI1JGcxJHQxNzQ2OTM5OTgyJGo0OSRsMCRoMA.."
          />

          <Certification
            icon={<FaServer />}
            label="DevOps on AWS"
            provider="AWS"
            certificateLink="http://credentials.edx.org/credentials/2395dd335e67475c8d9367e38bc4cfa7/"
          />
          
          <Certification
            icon={<FaUserShield />}
            label="CyberSecurity Analyst"
            provider="IBM"
            certificateLink="https://credentials.edx.org/credentials/1129e59537c64987979b00e0819d5f6c/"
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
        Made with 💜 by Ishrat noori
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

function ProjectCard({ title, description, githubLink, liveDemoLink }) {
  return (
    <div className="border border-purple-200 rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0"></div>
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-lg font-medium transition"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      )}
        {liveDemoLink && (
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 hover:bg-green-200 rounded-lg font-medium transition "
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.185 0l9.815 10-9.815 10v-6.563h-6.371v-6.875h6.371v-6.562z" />
            </svg>
            Live Demo
          </a>
      )}
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

function Certification({ icon, label, provider, certificateLink }) {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-64">
      <div className="text-purple-600 text-4xl mb-4">{icon}</div>
      <p className="text-gray-800 font-semibold text-lg">{label}</p>
      <p className="text-gray-500 text-sm mb-4">{provider}</p>
      {certificateLink && (
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-lg font-medium transition"
        >
          View Certificate
        </a>
      )}
    </div>
  );
}
