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
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaCertificate,
  FaMedal,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import profilePhoto from './images/profile.jpg';

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
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'achievements'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { id: 'home', label: 'Home', icon: <FaHome className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <FaUser className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <FaTools className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram className="w-4 h-4" /> },
    { id: 'certifications', label: 'Certifications', icon: <FaCertificate className="w-4 h-4" /> },
    { id: 'achievements', label: 'Achievements', icon: <FaMedal className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 space-y-16 transition-colors duration-300">
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 backdrop-blur-md rounded-b-3xl shadow-lg border-b border-purple-200/20 dark:border-purple-500/20"></div>
            
            <div className="relative flex justify-between h-20 items-center">
              <div className="flex items-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-4 py-2 bg-white dark:bg-gray-800 ring-1 ring-gray-900/5 dark:ring-gray-100/5 rounded-lg leading-none flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      IN
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === link.id
                        ? 'text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      activeSection === link.id
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                        : 'bg-white/50 dark:bg-gray-800/50 group-hover:bg-indigo-100/50 dark:group-hover:bg-indigo-900/50'
                    }`}></div>
                    <div className="relative flex items-center space-x-2">
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </div>
                  </a>
                ))}
                <button
                  onClick={toggleTheme}
                  className="relative p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 rounded-xl blur-sm"></div>
                  <div className="relative">
                    {isDarkMode ? (
                      <FaSun className="h-5 w-5" />
                    ) : (
                      <FaMoon className="h-5 w-5" />
                    )}
                  </div>
                </button>
              </div>

              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={toggleTheme}
                  className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 rounded-lg blur-sm"></div>
                  <div className="relative">
                    {isDarkMode ? (
                      <FaSun className="h-5 w-5" />
                    ) : (
                      <FaMoon className="h-5 w-5" />
                    )}
                  </div>
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 rounded-lg blur-sm"></div>
                  <div className="relative">
                    {isMobileMenuOpen ? (
                      <FaTimes className="h-6 w-6" />
                    ) : (
                      <FaBars className="h-6 w-6" />
                    )}
                  </div>
                </button>
              </div>
            </div>

            <div
              className={`md:hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className="relative mt-2">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 backdrop-blur-md rounded-xl shadow-lg border border-purple-200/20 dark:border-purple-500/20"></div>
                <div className="relative px-2 pt-2 pb-3 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                        activeSection === link.id
                          ? 'text-white'
                          : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                      }`}
                    >
                      <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                        activeSection === link.id
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600'
                          : 'bg-white/50 dark:bg-gray-800/50 group-hover:bg-indigo-100/50 dark:group-hover:bg-indigo-900/50'
                      }`}></div>
                      <span className="relative transition-transform duration-300 group-hover:scale-110">
                        {link.icon}
                      </span>
                      <span className="relative">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 pt-24">
        <div className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-200 dark:border-indigo-500 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img 
              src={profilePhoto} 
              alt="Ishrat Noori" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
              Holaa, I'm <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Ishrat Noori</span> 👋
            </h1>
            <p className="text-2xl text-gray-700 dark:text-gray-300 h-10">
              {text}
              <span className="animate-pulse">|</span>
            </p>
            <div className="flex gap-4">
              <a
                href="https://drive.google.com/file/d/1s8ZteP7qciSKh5pPRboDU8-q8ULpAFnA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-md transition transform hover:scale-105"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-2 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 rounded-lg transition transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/Ishratnoori" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ishrat-noori-4b3b70254/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:ishratnoori18@gmail.com" className="text-gray-600 hover:text-purple-600 transition">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="text-center py-16 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100 dark:border-indigo-500/20">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I'm a passionate developer blending creativity and tech. Whether it's diving deep into cybersecurity, building full-stack applications, crafting ML models, or capturing the perfect shot—I'm always creating.
        </p>
      </section>

      <section id="skills" className="text-center py-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <FaShieldAlt />, label: "Cybersecurity" },
            { icon: <FaReact />, label: "React" },
            { icon: <FaPython />, label: "Python" },
            { icon: <FaCamera />, label: "Photography" },
            { icon: <FaCode />, label: "Full-Stack Dev" },
            { icon: <FaDesktop />, label: "UI/UX" },
            { icon: <FaDatabase />, label: "SQL" },
          ].map((skill, index) => (
            <div 
              key={index}
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Skill icon={skill.icon} label={skill.label} />
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="text-center py-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProjectCard 
            title="BuddyBoard" 
            description="Interactive flashcard deck system to enhance personalized learning experiences using MEAN (Angular) components." 
            githubLink="https://github.com/Ishratnoori/BUDDY_BOARD_Infosys_Internship_Oct2024" 
            liveDemoLink="https://buddyboard.vercel.app/" 
          />
          <ProjectCard title="Swachhata@Svecw" description="A MERN stack web platform enabling students to report campus cleanliness issues with photo uploads and real-time status tracking." githubLink="https://github.com/Ishratnoori/Swachatha-SVECW" liveDemoLink="https://swachatha-svecw.vercel.app/" />
          <ProjectCard title="Employee Attrition Prediction" description="Ensemble ML model using Random Forest and XGBoost to predict employee attrition with 85% accuracy." githubLink="https://github.com/Ishratnoori/Employee-Attrition" />
          <ProjectCard title="Grbify & GoPhish" description="A demo and hands-on workshop to simulate phishing attacks for awareness training using Grbify and GoPhish platforms." />
          <ProjectCard title="Campus Event Scheduler" description="A Python + MySQL project for managing college events, giving organizers full control over scheduling." githubLink="https://github.com/Ishratnoori/CampusEventScheduler" />
          <ProjectCard title="Building..." description="Coming sooooon!" />
        </div>
      </section>
      <section id="certifications" className="text-center py-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Certifications</h2>
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
      <section id="achievements" className="text-center py-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Achievements</h2>
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

      <footer className="text-center py-8 text-gray-600 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/Ishratnoori" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/ishrat-noori" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-indigo-600 transition">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p>Made with 💜 by Ishrat Noori</p>
      </footer>
    </div>
  );
}

function Skill({ icon, label }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-indigo-100 dark:border-indigo-500/20">
      <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-2">{icon}</div>
      <p className="text-gray-800 dark:text-gray-200 font-medium">{label}</p>
    </div>
  );
}

function ProjectCard({ title, description, githubLink, liveDemoLink }) {
  return (
    <div className="border border-indigo-200 dark:border-indigo-500/20 rounded-xl p-6 bg-white/50 dark:bg-gray-800/50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 rounded-lg font-medium transition"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
        )}
        {liveDemoLink && (
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 rounded-lg font-medium transition"
          >
            <FaBolt className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

function Achievement({ icon, label }) {
  return (
    <div className="flex flex-col items-center bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-indigo-100 dark:border-indigo-500/20 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-2">{icon}</div>
      <p className="text-gray-800 dark:text-gray-200 font-medium text-center">{label}</p>
    </div>
  );
}

function Certification({ icon, label, provider, certificateLink }) {
  return (
    <div className="flex flex-col items-center bg-white/50 dark:bg-gray-800/50 shadow-md rounded-lg p-6 w-64 border border-indigo-100 dark:border-indigo-500/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">{icon}</div>
      <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg">{label}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{provider}</p>
      {certificateLink && (
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 rounded-lg font-medium transition"
        >
          View Certificate
        </a>
      )}
    </div>
  );
}
