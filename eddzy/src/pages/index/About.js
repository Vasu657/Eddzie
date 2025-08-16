import React, { useState, useEffect } from 'react';
import { 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiBookOpen,
  FiBriefcase,
  FiUsers,
  FiAward,
  FiTarget,
  FiHeart,
  FiZap,
  FiShield,
  FiGlobe,
  FiTrendingUp,
  FiClock,
  FiStar,
  FiCheck,
  FiArrowRight,
  FiPlay,
  FiMonitor,
  FiSmartphone,
  FiCloud,
  FiDatabase,
  FiLock,
  FiRefreshCw,
  FiBarChart,
  FiCheckCircle,
  FiArrowUp
} from 'react-icons/fi';
import { 
  FaUniversity,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaApple,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaGraduationCap,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaChartLine
} from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const aboutStyles = `
    .gradient-bg {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .gradient-bg-2 {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }
    .gradient-bg-3 {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    }
    .gradient-text {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .gradient-text-2 {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .parallax-bg {
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .fade-in {
      opacity: 0;
      transform: translateY(50px);
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .fade-in-up {
      opacity: 0;
      transform: translateY(60px);
      transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .fade-in-up.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .slide-in-left {
      opacity: 0;
      transform: translateX(-80px);
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .slide-in-left.visible {
      opacity: 1;
      transform: translateX(0);
    }
    .slide-in-right {
      opacity: 0;
      transform: translateX(80px);
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .slide-in-right.visible {
      opacity: 1;
      transform: translateX(0);
    }
    .scale-in {
      opacity: 0;
      transform: scale(0.8) rotate(5deg);
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .scale-in.visible {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
    .scale-bounce {
      opacity: 0;
      transform: scale(0.3);
      transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .scale-bounce.visible {
      opacity: 1;
      transform: scale(1);
    }
    .rotate-in {
      opacity: 0;
      transform: rotate(-10deg) scale(0.9);
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .rotate-in.visible {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
    .feature-card {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateY(0);
    }
    .feature-card:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    }
    .hover-lift {
      transition: all 0.3s ease;
    }
    .hover-lift:hover {
      transform: translateY(-5px);
    }
    .floating-animation {
      animation: float 6s ease-in-out infinite;
    }
    .floating-slow {
      animation: float 8s ease-in-out infinite;
    }
    .floating-fast {
      animation: float 4s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-10px) rotate(1deg); }
      50% { transform: translateY(-20px) rotate(0deg); }
      75% { transform: translateY(-10px) rotate(-1deg); }
    }
    .pulse-animation {
      animation: pulse 3s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    .bounce-animation {
      animation: bounce 2s infinite;
    }
    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
      40%, 43% { transform: translate3d(0,-15px,0); }
      70% { transform: translate3d(0,-8px,0); }
      90% { transform: translate3d(0,-3px,0); }
    }
    .glow-effect {
      box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
      transition: all 0.3s ease;
    }
    .glow-effect:hover {
      box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
    }
    .morphing-bg {
      background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    }
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .text-reveal {
      overflow: hidden;
      position: relative;
    }
    .text-reveal::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transform: translateX(-100%);
      transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .text-reveal.visible::after {
      transform: translateX(100%);
    }
    .stagger-children > * {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .stagger-children.visible > *:nth-child(1) { transition-delay: 0.1s; opacity: 1; transform: translateY(0); }
    .stagger-children.visible > *:nth-child(2) { transition-delay: 0.2s; opacity: 1; transform: translateY(0); }
    .stagger-children.visible > *:nth-child(3) { transition-delay: 0.3s; opacity: 1; transform: translateY(0); }
    .stagger-children.visible > *:nth-child(4) { transition-delay: 0.4s; opacity: 1; transform: translateY(0); }
    .stagger-children.visible > *:nth-child(5) { transition-delay: 0.5s; opacity: 1; transform: translateY(0); }
    .stagger-children.visible > *:nth-child(6) { transition-delay: 0.6s; opacity: 1; transform: translateY(0); }
    .journey-card {
      position: relative;
      overflow: hidden;
    }
    .journey-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    .journey-card:hover::before {
      left: 100%;
    }
    .glow-ring {
      animation: glow 2s ease-in-out infinite alternate;
    }
    @keyframes glow {
      from { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
      to { box-shadow: 0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.4); }
    }
    .shimmer {
      background: linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%);
      background-size: 200% 200%;
      animation: shimmer 3s ease-in-out infinite;
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `;

  const stats = [
    { number: "10,000+", label: "Course Listings", icon: <FiBookOpen className="w-8 h-8" /> },
    { number: "5,000+", label: "Job Opportunities", icon: <FiBriefcase className="w-8 h-8" /> },
    { number: "500+", label: "Partner Institutions", icon: <FaUniversity className="w-8 h-8" /> },
    { number: "50,000+", label: "Active Students", icon: <FiUsers className="w-8 h-8" /> }
  ];

  const offerings = [
    {
      icon: <FiAward className="w-12 h-12" />,
      title: "University Courses",
      description: "Comprehensive course listings from top universities worldwide including undergraduate, graduate, and certificate programs.",
      features: ["Bachelor's Degrees", "Master's Programs", "PhD Opportunities", "Certificate Courses", "Online Learning", "Campus Programs"]
    },
    {
      icon: <FiBriefcase className="w-12 h-12" />,
      title: "Career Opportunities",
      description: "Full-time job listings across various industries from leading companies and organizations globally.",
      features: ["Entry Level Jobs", "Senior Positions", "Remote Work", "Industry Leaders", "Startup Opportunities", "Global Companies"]
    },
    {
      icon: <FiUsers className="w-12 h-12" />,
      title: "Internship Programs",
      description: "Valuable internship opportunities to gain practical experience and kickstart your professional journey.",
      features: ["Summer Internships", "Co-op Programs", "Research Positions", "Industry Experience", "Mentorship", "Skill Development"]
    },
    {
      icon: <FiTarget className="w-12 h-12" />,
      title: "Specialized Training",
      description: "Professional development programs, workshops, and specialized training from industry experts.",
      features: ["Skill Workshops", "Professional Certifications", "Industry Training", "Leadership Programs", "Technical Skills", "Soft Skills"]
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Partnership Network",
      description: "We collaborate with universities, colleges, and institutions worldwide to gather comprehensive listings."
    },
    {
      step: "02", 
      title: "Quality Verification",
      description: "Every listing is verified for accuracy and relevance before being published on our platform."
    },
    {
      step: "03",
      title: "Smart Categorization",
      description: "Our advanced system organizes opportunities by field, location, level, and other relevant criteria."
    },
    {
      step: "04",
      title: "Continuous Updates",
      description: "Regular updates ensure our database remains current with the latest opportunities and requirements."
    }
  ];

  const values = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly improving our platform with cutting-edge technology and user-centric design."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Integrity",
      description: "Maintaining the highest standards of accuracy and transparency in all our listings."
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Empowerment",
      description: "Empowering individuals to make informed decisions about their education and career."
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to delivering exceptional experiences and connecting you with the best opportunities."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaRocket className="w-12 h-12" />,
      title: "Lightning Fast Results",
      description: "Get instant access to thousands of opportunities with our advanced search and filtering system.",
      features: ["Real-time updates", "Smart recommendations", "Instant notifications"]
    },
    {
      icon: <FaLightbulb className="w-12 h-12" />,
      title: "AI-Powered Matching",
      description: "Our intelligent algorithms match you with the most relevant opportunities based on your profile.",
      features: ["Personalized suggestions", "Career path analysis", "Skill gap identification"]
    },
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: "Verified Partners",
      description: "All our institutional and corporate partners are thoroughly vetted for quality and credibility.",
      features: ["Background verification", "Quality assurance", "Continuous monitoring"]
    },
    {
      icon: <FaChartLine className="w-12 h-12" />,
      title: "Success Tracking",
      description: "Monitor your application progress and get insights to improve your success rate.",
      features: ["Application analytics", "Success metrics", "Performance insights"]
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      icon: <FiMonitor className="w-8 h-8" />
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "GraphQL", "MongoDB"],
      icon: <FiDatabase className="w-8 h-8" />
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      icon: <FiCloud className="w-8 h-8" />
    },
    {
      category: "Security",
      technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "Data Encryption"],
      icon: <FiLock className="w-8 h-8" />
    }
  ];

  const partners = [
    { name: "Google", logo: <FaGoogle className="w-12 h-12" />, category: "Technology" },
    { name: "Microsoft", logo: <FaMicrosoft className="w-12 h-12" />, category: "Technology" },
    { name: "Amazon", logo: <FaAmazon className="w-12 h-12" />, category: "E-commerce" },
    { name: "Apple", logo: <FaApple className="w-12 h-12" />, category: "Technology" },
    { name: "Harvard", logo: <FaUniversity className="w-12 h-12" />, category: "Education" },
    { name: "MIT", logo: <FaGraduationCap className="w-12 h-12" />, category: "Education" }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "Eddz was founded with a vision to democratize access to quality education and career opportunities.",
      icon: <FaRocket className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "First 100 Partners",
      description: "Reached our first milestone of 100 institutional partnerships across 20 countries.",
      icon: <FaHandshake className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched our AI-powered matching system, revolutionizing how students find opportunities.",
      icon: <FaLightbulb className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to over 50 countries with 500+ partner institutions and 10,000+ opportunities.",
      icon: <FiGlobe className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "50K+ Success Stories",
      description: "Celebrated helping over 50,000 students and professionals achieve their dreams.",
      icon: <FiStar className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "👩‍💻",
      quote: "Eddz helped me find the perfect master's program that led to my dream job at Google. The platform's recommendations were spot-on!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "MBA Student at Stanford",
      image: "👨‍🎓",
      quote: "The variety of opportunities on Eddz is incredible. I found scholarships I never knew existed and got into my top choice school.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Microsoft",
      image: "👩‍🔬",
      quote: "From internship to full-time role, Eddz was with me every step of the way. The career guidance was invaluable.",
      rating: 5
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Partner Universities",
      description: "Top-ranked institutions worldwide"
    },
    {
      number: "50+",
      label: "Countries",
      description: "Global reach and opportunities"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Students achieving their goals"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Round-the-clock assistance"
    }
  ];

  return (
    <>
      <style>{aboutStyles}</style>
      
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div 
                id="hero-title"
                data-animate
                className={`fade-in ${isVisible['hero-title'] ? 'visible' : ''}`}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                  About <span className="gradient-text">Eddz</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Your comprehensive platform for educational opportunities, career advancement, 
                  and professional growth. Connecting ambitious individuals with world-class 
                  institutions and leading organizations globally.
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 floating-animation"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-10 floating-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500 rounded-full opacity-10 floating-animation" style={{animationDelay: '4s'}}></div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  id={`stat-${index}`}
                  data-animate
                  className={`text-center scale-in ${isVisible[`stat-${index}`] ? 'visible' : ''}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Mission */}
              <div 
                id="mission"
                data-animate
                className={`slide-in-left ${isVisible['mission'] ? 'visible' : ''}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <FiTarget className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To democratize access to quality education and career opportunities by creating 
                  a comprehensive, user-friendly platform that connects students, professionals, 
                  and institutions worldwide.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe that everyone deserves the opportunity to learn, grow, and achieve 
                  their full potential, regardless of their background or circumstances.
                </p>
              </div>

              {/* Vision */}
              <div 
                id="vision"
                data-animate
                className={`slide-in-right ${isVisible['vision'] ? 'visible' : ''}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                  <FiAward className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To become the world's leading platform for educational and career opportunities, 
                  fostering a global community where learning never stops and potential is unlimited.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We envision a future where geographical boundaries don't limit access to the 
                  best educational institutions and career opportunities available globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="offerings-title"
              data-animate
              className={`text-center mb-16 fade-in ${isVisible['offerings-title'] ? 'visible' : ''}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We <span className="gradient-text">Offer</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive listings and opportunities sourced from trusted institutions 
                and organizations worldwide, all in one convenient platform.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {offerings.map((offering, index) => (
                <div 
                  key={index}
                  id={`offering-${index}`}
                  data-animate
                  className={`feature-card bg-white rounded-2xl p-8 shadow-lg scale-in ${isVisible[`offering-${index}`] ? 'visible' : ''}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="text-blue-600 mb-6">
                    {offering.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {offering.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {offering.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="process-title"
              data-animate
              className={`text-center mb-16 fade-in ${isVisible['process-title'] ? 'visible' : ''}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How We <span className="gradient-text">Work</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures you get access to the most current, 
                relevant, and verified opportunities from trusted sources worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workProcess.map((process, index) => (
                <div 
                  key={index}
                  id={`process-${index}`}
                  data-animate
                  className={`text-center fade-in ${isVisible[`process-${index}`] ? 'visible' : ''}`}
                  style={{animationDelay: `${index * 0.3}s`}}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                      {process.step}
                    </div>
                    {index < workProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="values-title"
              data-animate
              className={`text-center mb-16 fade-in ${isVisible['values-title'] ? 'visible' : ''}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our commitment 
                to serving our global community of learners and professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  id={`value-${index}`}
                  data-animate
                  className={`feature-card bg-white rounded-xl p-6 text-center shadow-lg scale-in ${isVisible[`value-${index}`] ? 'visible' : ''}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="why-choose-title"
              data-animate
              className={`text-center mb-16 fade-in ${isVisible['why-choose-title'] ? 'visible' : ''}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="gradient-text">Eddz</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference with our cutting-edge platform designed 
                to accelerate your educational and professional journey.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  id={`why-choose-${index}`}
                  data-animate
                  className={`feature-card bg-white rounded-2xl p-8 shadow-lg glow-effect scale-in ${isVisible[`why-choose-${index}`] ? 'visible' : ''}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="text-purple-600 mb-6 pulse-animation">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="space-y-3">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <FiCheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 lg:py-32 morphing-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="testimonials-title"
              data-animate
              className={`text-center mb-16 fade-in ${isVisible['testimonials-title'] ? 'visible' : ''}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
                Hear from our community members who achieved their dreams through Eddz
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  id={`testimonial-${index}`}
                  data-animate
                  className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift rotate-in ${isVisible[`testimonial-${index}`] ? 'visible' : ''}`}
                  style={{animationDelay: `${index * 0.3}s`}}
                >
                  <div className="text-6xl mb-4 text-center">{testimonial.image}</div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section - Innovative Design */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="journey-title"
              data-animate
              className={`text-center mb-20 fade-in ${isVisible['journey-title'] ? 'visible' : ''}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the milestones that shaped our mission to transform educational opportunities worldwide
              </p>
            </div>

            {/* Journey Path Container */}
            <div className="relative">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 floating-slow"></div>
                <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-purple-100 rounded-full opacity-20 floating-animation"></div>
                <div className="absolute top-1/2 left-10 w-32 h-32 bg-green-100 rounded-full opacity-20 floating-fast"></div>
              </div>

              {/* Journey Steps Grid */}
              <div className="relative z-10">
                
                {/* Step 1 - Foundation (Top Center) */}
                <div 
                  id="journey-0"
                  data-animate
                  className={`relative mb-16 scale-in ${isVisible['journey-0'] ? 'visible' : ''}`}
                  style={{animationDelay: '0.2s'}}
                >
                  <div className="flex justify-center">
                    <div className="journey-card bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-3xl p-8 max-w-md shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl group">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                          <FaRocket className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-3xl font-bold mb-2">2020</div>
                        <h3 className="text-2xl font-bold mb-4">Foundation</h3>
                        <p className="text-blue-100 leading-relaxed">
                          Eddz was founded with a vision to democratize access to quality education and career opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Path Element */}
                <div className="flex justify-center mb-16">
                  <div className="w-1 h-16 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                {/* Steps 2 & 3 - Side by Side */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                  
                  {/* Step 2 - First Partners */}
                  <div 
                    id="journey-1"
                    data-animate
                    className={`slide-in-left ${isVisible['journey-1'] ? 'visible' : ''}`}
                    style={{animationDelay: '0.4s'}}
                  >
                    <div className="journey-card bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl group lg:mr-8">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                          <FaHandshake className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold mb-2">2021</div>
                          <h3 className="text-xl font-bold mb-3">First 100 Partners</h3>
                          <p className="text-purple-100 leading-relaxed">
                            Reached our first milestone of 100 institutional partnerships across 20 countries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 - AI Integration */}
                  <div 
                    id="journey-2"
                    data-animate
                    className={`slide-in-right ${isVisible['journey-2'] ? 'visible' : ''}`}
                    style={{animationDelay: '0.6s'}}
                  >
                    <div className="journey-card bg-gradient-to-br from-green-500 to-green-700 text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl group lg:ml-8">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                          <FaLightbulb className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold mb-2">2022</div>
                          <h3 className="text-xl font-bold mb-3">AI Integration</h3>
                          <p className="text-green-100 leading-relaxed">
                            Launched our AI-powered matching system, revolutionizing how students find opportunities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Paths */}
                <div className="flex justify-center items-center mb-16">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full pulse-animation"></div>
                    <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-orange-600 rounded-full"></div>
                  </div>
                </div>

                {/* Step 4 - Global Expansion (Centered Large) */}
                <div 
                  id="journey-3"
                  data-animate
                  className={`relative mb-16 scale-in ${isVisible['journey-3'] ? 'visible' : ''}`}
                  style={{animationDelay: '0.8s'}}
                >
                  <div className="flex justify-center">
                    <div className="journey-card bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-3xl p-10 max-w-lg shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl group">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                          <FiGlobe className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-3xl font-bold mb-2">2023</div>
                        <h3 className="text-2xl font-bold mb-4">Global Expansion</h3>
                        <p className="text-orange-100 leading-relaxed text-lg">
                          Expanded to over 50 countries with 500+ partner institutions and 10,000+ opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Achievement Badge */}
                <div 
                  id="journey-4"
                  data-animate
                  className={`relative scale-bounce ${isVisible['journey-4'] ? 'visible' : ''}`}
                  style={{animationDelay: '1s'}}
                >
                  <div className="flex justify-center">
                    <div className="relative">
                      {/* Glowing Ring */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full glow-ring opacity-20 scale-110"></div>
                      
                      {/* Main Badge */}
                      <div className="relative journey-card bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 rounded-full p-12 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:shadow-3xl shimmer">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FiStar className="w-8 h-8 text-yellow-600" />
                          </div>
                          <div className="text-2xl font-bold mb-1">2024</div>
                          <h3 className="text-lg font-bold mb-2">50K+ Success Stories</h3>
                          <p className="text-yellow-900 text-sm leading-relaxed">
                            Celebrating our community's achievements
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Impact Statistics */}
            <div 
              id="journey-stats"
              data-animate
              className={`mt-20 stagger-children ${isVisible['journey-stats'] ? 'visible' : ''}`}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-blue-800 font-medium">Years of Innovation</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-purple-800 font-medium">Global Partners</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-green-800 font-medium">Countries Reached</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
                  <div className="text-orange-800 font-medium">Lives Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="tech-title"
              data-animate
              className={`text-center mb-16 fade-in ${isVisible['tech-title'] ? 'visible' : ''}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built with <span className="gradient-text">Cutting-Edge Technology</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our robust technology stack ensures reliability, scalability, and security
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((stack, index) => (
                <div 
                  key={index}
                  id={`tech-${index}`}
                  data-animate
                  className={`bg-white rounded-xl p-6 shadow-lg text-center feature-card scale-bounce ${isVisible[`tech-${index}`] ? 'visible' : ''}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {stack.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="text-sm text-gray-600 bg-gray-100 rounded-full px-3 py-1 inline-block mr-2 mb-2">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="partners-title"
              data-animate
              className={`text-center mb-16 fade-in ${isVisible['partners-title'] ? 'visible' : ''}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trusted <span className="gradient-text">Partners</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We collaborate with world-renowned institutions and leading companies
              </p>
            </div>

            <div 
              id="partners-grid"
              data-animate
              className={`grid grid-cols-3 md:grid-cols-6 gap-8 stagger-children ${isVisible['partners-grid'] ? 'visible' : ''}`}
            >
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover-lift"
                >
                  <div className="text-gray-600 mb-2 floating-slow" style={{animationDelay: `${index * 0.5}s`}}>
                    {partner.logo}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900">{partner.name}</h4>
                  <p className="text-xs text-gray-500">{partner.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 lg:py-32 gradient-bg-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="achievements-title"
              data-animate
              className={`text-center mb-16 fade-in ${isVisible['achievements-title'] ? 'visible' : ''}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
                Milestones that reflect our commitment to excellence and growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  id={`achievement-${index}`}
                  data-animate
                  className={`text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 scale-bounce ${isVisible[`achievement-${index}`] ? 'visible' : ''}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3 pulse-animation">
                    {achievement.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.label}
                  </h3>
                  <p className="text-white opacity-90 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 lg:py-32 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="cta"
              data-animate
              className={`text-center fade-in ${isVisible['cta'] ? 'visible' : ''}`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-8 bounce-animation">
                <FaRocket className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Join thousands of students and professionals who have already discovered 
                their perfect opportunities through Eddz. Your journey starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 glow-effect">
                  <span className="flex items-center justify-center">
                    Get Started Today
                    <FiArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center">
                    <FiPlay className="w-5 h-5 mr-2" />
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;