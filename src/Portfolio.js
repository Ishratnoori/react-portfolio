import React, { useEffect, useState, useRef } from "react";
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
  FaCoffee,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

// Import images
import hiddensunundersky from './images/photography/hiddensunundersky.jpg';
import orange from './images/photography/orange.jpg';
import cake from './images/photography/cake.jpg';
import sky from './images/photography/sky.jpg';
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

// Add the photography data
const photographyData = [
  {
    id: 1,
    title: "Nature's Beauty",
    description: "Hidden Sun in the Clouds",
    imageUrl: hiddensunundersky,
  },
  {
    id: 2,
    title: "Orange Glow",
    description: "Citrus meets creativity in the dark.",
    imageUrl: orange,
  },
  {
    id: 3,
    title: "Birthday Delight",
    description: "Cake, candlelight, and a heartfelt wish.",
    imageUrl: cake,
  },
  {
    id: 4,
    title: "Sky High Dreams",
    description: "The beauty of man-made structures",
    imageUrl: sky,
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Initialize EmailJS
emailjs.init("vi8czVmKluUQkMS7E");

// Add Timeline component
function TimelineItem({ date, title, subtitle, description, icon, type }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-indigo-400 flex items-center justify-center">
        {icon}
      </div>

      {/* Content */}
      <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-lg border border-indigo-100 dark:border-indigo-500/20 hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-indigo-600 dark:text-indigo-400">{subtitle}</p>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <FaCalendarAlt className="text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{date}</span>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [emailError, setEmailError] = useState('');
  const formRef = useRef();

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
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'achievements', 'photography'];
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: <FaHome className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <FaUser className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <FaTools className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram className="w-4 h-4" /> },
    { id: 'certifications', label: 'Certifications', icon: <FaCertificate className="w-4 h-4" /> },
    { id: 'achievements', label: 'Achievements', icon: <FaMedal className="w-4 h-4" /> },
    { id: 'photography', label: 'Photography', icon: <FaCamera className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const email = formRef.current.user_email.value;
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending...' });

    emailjs.sendForm(
      'service_cu4z01e',
      'template_kunufli',
      formRef.current,
      'vi8czVmKluUQkMS7E'
    )
      .then((result) => {
        setFormStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        formRef.current.reset();
        setEmailError('');
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setFormStatus({ 
          type: 'error', 
          message: 'Failed to send message. Please try again or email me directly at ishratnoori18@gmail.com' 
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 space-y-16 transition-colors duration-300">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-indigo-100 dark:border-indigo-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
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
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
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
                </button>
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
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`group flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 w-full ${
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
                  </button>
                ))}
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
              Holaa, I'm <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ishrat noori</span> 👋
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
                Work With Me
              </a>
              <a
                href="#projects"
                className="px-6 py-2 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 rounded-lg transition transform hover:scale-105"
              >
                Explore My Work
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
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">🤹‍♀️ Dev. Hacker. Shutterbug. Me.</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I'm a passionate developer blending creativity and tech. Whether it's diving deep into cybersecurity, building full-stack applications, crafting ML models, or capturing the perfect shot—I'm always creating.
        </p>
      </section>

      {/* Add Timeline section after About section */}
      <section id="timeline" className="text-center py-16 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100 dark:border-indigo-500/20">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Journey So Far</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center justify-center">
              <FaGraduationCap className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Education
            </h3>
            <div className="space-y-4">
              <TimelineItem
                date="2022 - Present"
                title="B.Tech in Computer Science"
                subtitle="Shri Vishnu Engineering College for Women"
                description="CSE with Specialization in Cybersecurity. Active member of technical clubs and coding communities."
                icon={<FaGraduationCap className="text-indigo-600 dark:text-indigo-400" />}
                type="education"
              />
              <TimelineItem
                date="2020 - 2022"
                title="Intermediate Education"
                subtitle="Sri Chaitanya Junior College"
                description="Completed coursework in Mathematics, Physics & Chemistry (MPC) with a 9.3 GPA."


                icon={<FaGraduationCap className="text-indigo-600 dark:text-indigo-400" />}
                type="education"
              />
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center justify-center">
              <FaBriefcase className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Experience
            </h3>
            <div className="space-y-4">
              <TimelineItem
                date="Nov 2024- Jan 2025"
                title="Full Stack Developer Intern"
                subtitle="Infosys"
                description="Developed BuddyBoard - A MEAN stack Interactive flashcard deck system. Implemented full-stack features and collaborated with cross-functional teams."
                icon={<FaBriefcase className="text-indigo-600 dark:text-indigo-400" />}
                type="experience"
              />
              <TimelineItem
                date="2024"
                title="Cybersecurity Awareness Coordinator"
                subtitle="Awareness Initiative"
                description="Helped educate juniors on cybersecurity topics through sessions covering ethical hacking, phishing simulations, and online safety best practices."
                icon={<FaBriefcase className="text-indigo-600 dark:text-indigo-400" />}
                type="experience"
              />
              <TimelineItem
                date="2025"
                title="Design & Media Lead"
                subtitle="TECHNOVA 2025, A College Fest"
                description="Led the design and media team for the national-level college fest, managing digital content and visual communications."
                icon={<FaBriefcase className="text-indigo-600 dark:text-indigo-400" />
}
                type="experience"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="text-center py-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <FaShieldAlt className="w-8 h-8" />, label: "Cybersecurity" },
            { icon: <FaReact className="w-8 h-8" />, label: "React" },
            { icon: <FaPython className="w-8 h-8" />, label: "Python" },
            { icon: <FaCamera className="w-8 h-8" />, label: "Photography" },
            { icon: <FaCode className="w-8 h-8" />, label: "Full-Stack Dev" },
            { icon: <FaDesktop className="w-8 h-8" />, label: "UI/UX" },
            { icon: <FaServer className="w-8 h-8" />, label: "Node.js" },
            { icon: <FaCloud className="w-8 h-8" />, label: "AWS" },
            { icon: <FaShieldVirus className="w-8 h-8" />, label: "Ethical Hacking" },
            { icon: <FaGithub className="w-8 h-8" />, label: "Git & GitHub" },
            { icon: <FaDatabase className="w-8 h-8" />, label: "SQL" },
            { icon: <FaBolt className="w-8 h-8" />, label: "DevOps" },
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
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Projects </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProjectCard 
            title="BuddyBoard" 
            description="A MEAN stack Interactive flashcard deck system to enhance personalized learning experiences."
            techStack={[ "Node.js", "Express","MongoDB", "Angular"]}
            role="Full-stack developer, implemented MEAN stack components"
            githubLink="https://github.com/Ishratnoori/BUDDY_BOARD_Infosys_Internship_Oct2024" 
            liveDemoLink="https://buddyboard.vercel.app/" 
          />
          <ProjectCard 
            title="Swachhata@Svecw" 
            description="A MERN stack web platform enabling students to report campus cleanliness issues."
            techStack={[ "Node.js", "Express","MongoDB","React"]}
            role="Lead developer, implemented real-time status tracking"
            githubLink="https://github.com/Ishratnoori/Swachatha-SVECW" 
            liveDemoLink="https://swachatha-svecw.vercel.app/" 
          />
          <ProjectCard 
            title="Employee Attrition Prediction" 
            description="Ensemble ML model using Random Forest and XGBoost to predict employee attrition with 85% accuracy."
            techStack={["Python", "Machine Learning", "XGBoost", "Random Forest"]}
            role="ML model development and optimization"
            githubLink="https://github.com/Ishratnoori/Employee-Attrition" 
          />
          <ProjectCard 
            title="Grbify & GoPhish" 
            description="A demo and hands-on workshop to simulate phishing attacks for awareness training,  Live data capture techniques using Grbify (IP, location, browser data)."
            techStack={["Python", "Cybersecurity", "GoPhish"]}
            role="Cyber Awareness Lead"
          />
          <ProjectCard 
            title="Campus Event Scheduler" 
            description="A Python + MySQL project for managing college events, giving organizers full control over scheduling."
            techStack={["Python", "MySQL", "Tkinter"]}
            role="Developer"
            githubLink="https://github.com/Ishratnoori/CampusEventScheduler" 
          />
          <ProjectCard 
            title="Building..." 
            description="Coming sooooon!"
            techStack={[]}
            role=""
          />
        </div>
      </section>

      <section id="certifications" className="text-center py-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Certified & Skilled</h2>
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
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Milestones & Moments</h2>
        <div className="flex flex-wrap justify-center gap-6">
        <Achievement icon={<FaAward />} label="Limca Book of Records — Event participant with Toastmasters International"/>
          <Achievement icon={<FaTrophy />} label="400+ Days Badge - LeetCode & CodeChef" />
          <Achievement icon={<FaStar />} label="HackerRank 5★ in C & Python" />
          <Achievement icon={<FaBolt />} label="Hackathon — Socio-Tech 24-Hour Challenge Participant" />
          <Achievement icon={<FaAward />} label="Top Voice - LinkedIn (Social Media & Critical Thinking)" />
          <Achievement icon={<FaMapMarkedAlt />} label="Appathon — Tourist Guide App" />
          <Achievement icon={<FaShieldAlt />} label="Ideathon — Phishing Attacks Awareness" />
          <Achievement icon={<FaBullhorn />} label="Design & Media Lead — TECHNOVA 2025, A National Level College Fest" />
        </div>
      </section>

      <section id="photography" className="text-center py-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Through My Lens</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        Every picture tells a story — I don't just capture what I see, I frame what I feel.
        </p>
        <PhotographyGallery />
      </section>

      <section id="contact" className="text-center py-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">Get in Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              variants={fadeInUp}
              className="text-left space-y-6"
            >
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-md border border-indigo-100 dark:border-indigo-500/20">
                <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Let's Connect</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:ishratnoori18@gmail.com"
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FaEnvelope className="w-5 h-5" />
                    <span>ishratnoori18@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ishrat-noori-4b3b70254/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href="https://github.com/Ishratnoori"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-md border border-indigo-100 dark:border-indigo-500/20">
                <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Quick Links</h3>
                <div className="space-y-4">
                  <a
                    href="https://drive.google.com/file/d/1s8ZteP7qciSKh5pPRboDU8-q8ULpAFnA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FaFileAlt className="w-5 h-5" />
                    <span>Download Resume</span>
                  </a>
                  <a
                    href="#projects"
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FaProjectDiagram className="w-5 h-5" />
                    <span>View Projects</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-indigo-100 dark:border-indigo-500/20 hover:shadow-xl transition-all duration-300"
            >
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <motion.div variants={fadeInUp} className="relative group">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/70 dark:bg-gray-800/70 border-2 border-indigo-100 dark:border-indigo-500/20 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-indigo-300 dark:group-hover:border-indigo-400"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:via-indigo-500/10 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none"></div>
                </motion.div>
                <motion.div variants={fadeInUp} className="relative group">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    onChange={handleEmailChange}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    className={`w-full px-6 py-4 rounded-xl bg-white/70 dark:bg-gray-800/70 border-2 ${
                      emailError 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-indigo-100 dark:border-indigo-500/20'
                    } focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-indigo-300 dark:group-hover:border-indigo-400`}
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:via-indigo-500/10 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none"></div>
                  {emailError && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-6 left-0 text-sm text-red-500 dark:text-red-400"
                    >
                      {emailError}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div variants={fadeInUp} className="relative group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="w-full px-6 py-4 rounded-xl bg-white/70 dark:bg-gray-800/70 border-2 border-indigo-100 dark:border-indigo-500/20 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-indigo-300 dark:group-hover:border-indigo-400 resize-none"
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:via-indigo-500/10 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none"></div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-white/10 to-indigo-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative flex items-center justify-center space-x-2">
                      <FaEnvelope className="w-5 h-5" />
                      <span>Send Message</span>
                    </span>
                  </button>
                </motion.div>
                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm font-medium ${
                      formStatus.type === 'success' ? 'text-green-600 dark:text-green-400' :
                      formStatus.type === 'error' ? 'text-red-600 dark:text-red-400' :
                      'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <footer className="text-center py-8 text-gray-600 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg mx-4 border border-indigo-100">
        <div className="flex justify-center space-x-4 mb-4">
          <a 
            href="https://github.com/Ishratnoori" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-indigo-600 transition transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ishrat-noori-4b3b70254/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-indigo-600 transition transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="mailto:ishratnoori18@gmail.com" 
            className="text-gray-600 hover:text-indigo-600 transition transform hover:scale-110"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © 2025 Ishrat Noori | Built with 💜 and <FaCoffee className="inline-block" />
        </p>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <FaChevronLeft className="w-6 h-6 transform rotate-90" />
        </button>
      )}
    </div>
  );
}

function Skill({ icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-indigo-100 dark:border-indigo-500/20"
    >
      <div className="text-indigo-600 dark:text-indigo-400 mb-2">{icon}</div>
      <p className="text-gray-800 dark:text-gray-200 font-medium">{label}</p>
    </motion.div>
  );
}

function ProjectCard({ title, description, techStack = [], role = "", githubLink, liveDemoLink }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="border border-indigo-200 dark:border-indigo-500/20 rounded-xl p-6 bg-white/50 dark:bg-gray-800/50 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      {role && (
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 italic">{role}</p>
      )}
      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 rounded-lg font-medium transition transform hover:scale-105"
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 rounded-lg font-medium transition transform hover:scale-105"
          >
            <FaBolt className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
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

// Add the PhotographyGallery component
function PhotographyGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photographyData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photographyData.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
        <div 
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photographyData.map((photo, index) => (
            <div
              key={photo.id}
              className="absolute top-0 left-0 w-full h-full"
              style={{ transform: `translateX(${index * 100}%)` }}
            >
              <div className="relative w-full h-full group">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onLoad={() => setIsLoading(false)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                    <p className="text-sm text-gray-200">{photo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg"
        aria-label="Previous photo"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg"
        aria-label="Next photo"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {photographyData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? 'bg-indigo-600 dark:bg-indigo-400'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
