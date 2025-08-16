import React, { useState, useEffect } from 'react';
import { 
  FiArrowRight, 
  FiPlay, 
  FiCheck, 
  FiStar,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiUsers,
  FiAward,
  FiTarget,
  FiGlobe,
  FiCode,
  FiSmartphone,
  FiMonitor,
  FiBookOpen,
  FiBriefcase,
  FiClock,
  FiMapPin,
  FiDollarSign,
  FiGraduationCap,
  FiHeart,
  FiThumbsUp,
  FiTrendingDown
} from 'react-icons/fi';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaAmazon,
  FaUniversity,
  FaGraduationCap,
  FaBuilding,
  FaIndustry
} from 'react-icons/fa';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Auto-slide for hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  const heroSlides = [
    {
      title: "Unlock Your Potential",
      subtitle: "World-class education and career opportunities",
      description: "Connect with top universities, discover exciting courses, and find your dream job or internship through our comprehensive platform.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      cta: "Start Your Journey"
    },
    {
      title: "Learn from the Best",
      subtitle: "Premium courses from leading institutions",
      description: "Access high-quality education from prestigious universities and industry experts. Build skills that matter in today's competitive world.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      cta: "Explore Courses"
    },
    {
      title: "Launch Your Career",
      subtitle: "Discover opportunities that match your ambitions",
      description: "Find internships and jobs at top companies worldwide. Take the next step in your professional journey with confidence.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      cta: "Find Opportunities"
    }
  ];

  const features = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance that delivers results at the speed of light"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Expert Team",
      description: "Dedicated professionals with years of industry experience"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Technology that grows with your business needs"
    }
  ];

  const services = [
    {
      icon: <FiCode className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React & Next.js", "Node.js Backend", "Cloud Deployment", "SEO Optimized"],
      price: "Starting at $2,999"
    },
    {
      icon: <FiSmartphone className="w-12 h-12" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
      price: "Starting at $4,999"
    },
    {
      icon: <FiMonitor className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,999"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Eddz transformed our digital presence completely. The team's expertise and dedication are unmatched.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      content: "The mobile app they developed exceeded our expectations. Highly recommend their services.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Professional, reliable, and results-driven. Eddz is our go-to partner for all digital projects.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Featured Courses Data
  const featuredCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "Dr. Sarah Mitchell",
      university: "Stanford University",
      duration: "12 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 2847,
      price: "$299",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Master modern web development with React, Node.js, and MongoDB. Build real-world projects and deploy to the cloud.",
      tags: ["React", "Node.js", "MongoDB", "JavaScript"]
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      instructor: "Prof. James Wilson",
      university: "MIT",
      duration: "16 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 1923,
      price: "$399",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Dive deep into data science, machine learning algorithms, and AI. Work with real datasets and build predictive models.",
      tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"]
    },
    {
      id: 3,
      title: "Mobile App Development",
      instructor: "Maria Garcia",
      university: "UC Berkeley",
      duration: "10 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 3156,
      price: "$249",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Create stunning mobile apps for iOS and Android using React Native. From concept to app store deployment.",
      tags: ["React Native", "iOS", "Android", "Firebase"]
    }
  ];

  // Job & Internship Opportunities Data
  const jobOpportunities = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Google",
      location: "Mountain View, CA",
      type: "Internship",
      duration: "3 months",
      salary: "$8,000/month",
      posted: "2 days ago",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Join our engineering team to work on cutting-edge projects that impact billions of users worldwide.",
      requirements: ["Computer Science degree", "Python/Java proficiency", "Problem-solving skills"],
      remote: false
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Microsoft",
      location: "Seattle, WA",
      type: "Full-time",
      duration: "Permanent",
      salary: "$120,000/year",
      posted: "1 week ago",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Build scalable web applications using modern technologies in our Azure cloud platform team.",
      requirements: ["3+ years experience", "React/Angular", "Cloud platforms", "Agile methodology"],
      remote: true
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      company: "Amazon",
      location: "Austin, TX",
      type: "Internship",
      duration: "6 months",
      salary: "$6,500/month",
      posted: "3 days ago",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Analyze large datasets to drive business decisions and improve customer experience across our platforms.",
      requirements: ["Statistics/Math background", "SQL proficiency", "Python/R experience", "Data visualization"],
      remote: false
    }
  ];



  // University Highlights Data
  const universityHighlights = [
    {
      id: 1,
      name: "Stanford University",
      location: "California, USA",
      ranking: "#2 Global",
      students: "17,000+",
      courses: "200+",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Leading innovation in technology and entrepreneurship with world-class faculty and cutting-edge research facilities.",
      specialties: ["Computer Science", "Engineering", "Business", "Medicine"]
    },
    {
      id: 2,
      name: "Massachusetts Institute of Technology",
      location: "Massachusetts, USA",
      ranking: "#1 Global",
      students: "11,000+",
      courses: "180+",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Pioneering technological advancement and scientific discovery through rigorous academic programs and groundbreaking research.",
      specialties: ["Engineering", "Computer Science", "Physics", "Economics"]
    },
    {
      id: 3,
      name: "Harvard University",
      location: "Massachusetts, USA",
      ranking: "#3 Global",
      students: "23,000+",
      courses: "250+",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Prestigious institution known for academic excellence, influential alumni, and comprehensive liberal arts education.",
      specialties: ["Law", "Medicine", "Business", "Liberal Arts"]
    }
  ];

  // Scrolling Partners Data
  const scrollingPartners = [
    { name: "STANFORD", style: "text-5xl font-black text-blue-600 tracking-wider" },
    { name: "mit", style: "text-3xl font-light text-purple-500 italic" },
    { name: "HARVARD", style: "text-6xl font-bold text-red-500 uppercase" },
    { name: "berkeley", style: "text-4xl font-medium text-green-600 lowercase" },
    { name: "OXFORD", style: "text-5xl font-extrabold text-indigo-700 tracking-widest" },
    { name: "cambridge", style: "text-3xl font-thin text-orange-500 italic lowercase" },
    { name: "YALE", style: "text-7xl font-black text-blue-800 tracking-tight" },
    { name: "princeton", style: "text-4xl font-semibold text-purple-600 lowercase italic" },
    { name: "COLUMBIA", style: "text-5xl font-bold text-teal-600 tracking-wide" },
    { name: "chicago", style: "text-3xl font-light text-pink-500 lowercase" },
    { name: "CALTECH", style: "text-6xl font-extrabold text-cyan-600 tracking-wider" },
    { name: "cornell", style: "text-4xl font-medium text-amber-600 lowercase italic" },
    { name: "GOOGLE", style: "text-5xl font-black text-blue-500 tracking-wide" },
    { name: "microsoft", style: "text-3xl font-light text-green-500 lowercase" },
    { name: "APPLE", style: "text-6xl font-bold text-gray-800 tracking-tight" },
    { name: "amazon", style: "text-4xl font-medium text-orange-600 lowercase" },
    { name: "META", style: "text-5xl font-extrabold text-blue-600 tracking-widest" },
    { name: "netflix", style: "text-3xl font-thin text-red-500 lowercase italic" },
    { name: "TESLA", style: "text-7xl font-black text-red-600 tracking-wider" },
    { name: "spacex", style: "text-4xl font-semibold text-gray-700 lowercase" },
    { name: "IBM", style: "text-5xl font-bold text-blue-700 tracking-wide" },
    { name: "intel", style: "text-3xl font-light text-cyan-500 lowercase" },
    { name: "NVIDIA", style: "text-6xl font-extrabold text-green-500 tracking-tight" },
    { name: "adobe", style: "text-4xl font-medium text-red-400 lowercase italic" },
    { name: "SALESFORCE", style: "text-5xl font-black text-blue-400 tracking-wider" },
    { name: "uber", style: "text-3xl font-light text-black lowercase" },
    { name: "AIRBNB", style: "text-6xl font-bold text-pink-500 tracking-wide" },
    { name: "spotify", style: "text-4xl font-medium text-green-400 lowercase" },
    { name: "TWITTER", style: "text-5xl font-extrabold text-blue-400 tracking-widest" },
    { name: "linkedin", style: "text-3xl font-thin text-blue-700 lowercase italic" },
    { name: "FACEBOOK", style: "text-5xl font-bold text-blue-600 tracking-wide" },
    { name: "instagram", style: "text-4xl font-medium text-pink-400 lowercase" },
    { name: "YOUTUBE", style: "text-6xl font-black text-red-500 tracking-tight" },
    { name: "tiktok", style: "text-3xl font-semibold text-black lowercase" },
    { name: "DISCORD", style: "text-5xl font-extrabold text-indigo-500 tracking-wider" },
    { name: "slack", style: "text-4xl font-light text-purple-500 lowercase italic" }
  ];

  // Why Choose Us Data
  const whyChooseUs = [
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Global Network",
      description: "Access opportunities from top universities and companies worldwide through our extensive partner network."
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Quality Assured",
      description: "All courses and opportunities are vetted by our expert team to ensure the highest quality and relevance."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Community Support",
      description: "Join a thriving community of learners, mentors, and industry professionals who support your growth."
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Career Focused",
      description: "Every program is designed with career outcomes in mind, helping you achieve your professional goals."
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Cutting-Edge Content",
      description: "Stay ahead with the latest industry trends, technologies, and best practices in your field."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Trusted Platform",
      description: "Secure, reliable, and user-friendly platform trusted by thousands of students and professionals."
    }
  ];

  const homeStyles = `
    .gradient-bg {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .gradient-text {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-slide {
      transition: all 0.8s ease-in-out;
    }
    .animate-fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }
    .animate-slide-up {
      animation: slideUp 0.8s ease-out forwards;
    }
    .animate-scale {
      animation: scale 0.6s ease-out forwards;
    }
    .animate-slide-left {
      animation: slideLeft 0.8s ease-out forwards;
    }
    .animate-slide-right {
      animation: slideRight 0.8s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes scale {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    .card-hover {
      transition: all 0.3s ease;
    }
    .card-hover:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    .tech-icon {
      transition: all 0.3s ease;
    }
    .tech-icon:hover {
      transform: scale(1.1);
      color: #667eea;
    }
    .parallax-bg {
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .course-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: all 0.3s ease;
      border: 1px solid rgba(0,0,0,0.05);
    }
    .course-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    }
    .job-card {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      transition: all 0.3s ease;
      border-left: 4px solid transparent;
    }
    .job-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      border-left-color: #667eea;
    }
    .university-card {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      transition: all 0.4s ease;
      background: white;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .university-card:hover {
      transform: scale(1.02) translateY(-8px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.25);
    }
    .university-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transform: scaleX(0);
      transition: transform 0.3s ease;
      z-index: 10;
    }
    .university-card:hover::before {
      transform: scaleX(1);
    }
    .university-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
      display: flex;
      flex-direction: column;
      justify-content: end;
      padding: 32px;
      color: white;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .university-card:hover .university-overlay {
      opacity: 1;
    }

    .benefit-card {
      background: white;
      padding: 32px;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      transition: all 0.3s ease;
      border: 1px solid rgba(0,0,0,0.05);
      position: relative;
      overflow: hidden;
    }
    .benefit-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    .benefit-card:hover::before {
      transform: scaleX(1);
    }
    .benefit-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    }

    /* Scrolling Partners Animations */
    .scrolling-container {
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      height: 120px;
      display: flex;
      align-items: center;
      mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 5%,
        black 95%,
        transparent 100%
      );
      -webkit-mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 5%,
        black 95%,
        transparent 100%
      );
    }

    .scrolling-content {
      display: flex;
      align-items: center;
      animation: scroll-left 80s linear infinite;
      will-change: transform;
      min-width: 200%;
    }

    .scrolling-content-reverse {
      display: flex;
      align-items: center;
      animation: scroll-right 70s linear infinite;
      will-change: transform;
      min-width: 200%;
    }

    .scrolling-content-slow {
      display: flex;
      align-items: center;
      animation: scroll-left 90s linear infinite;
      will-change: transform;
      min-width: 200%;
    }

    /* Pause animation on hover/touch */
    .scrolling-container:hover .scrolling-content,
    .scrolling-container:hover .scrolling-content-reverse,
    .scrolling-container:hover .scrolling-content-slow,
    .scrolling-container:active .scrolling-content,
    .scrolling-container:active .scrolling-content-reverse,
    .scrolling-container:active .scrolling-content-slow {
      animation-play-state: paused;
    }

    /* Touch device support */
    @media (hover: none) and (pointer: coarse) {
      .scrolling-container:active .scrolling-content,
      .scrolling-container:active .scrolling-content-reverse,
      .scrolling-container:active .scrolling-content-slow {
        animation-play-state: paused;
      }
    }

    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes scroll-right {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0);
      }
    }

    .partner-name {
      display: inline-flex;
      align-items: center;
      margin: 0 3rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: default;
      user-select: none;
      white-space: nowrap;
      position: relative;
    }

    .partner-name:hover {
      transform: scale(1.15) translateY(-2px);
      filter: brightness(1.3) saturate(1.2);
      text-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }



    .scrolling-bg {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 30%, #f1f5f9 70%, #f8fafc 100%);
      position: relative;
      overflow: hidden;
    }

    .scrolling-bg::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 60%);
      pointer-events: none;
    }

    .scrolling-bg::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(45deg, transparent 48%, rgba(102, 126, 234, 0.02) 49%, rgba(102, 126, 234, 0.02) 51%, transparent 52%),
        linear-gradient(-45deg, transparent 48%, rgba(118, 75, 162, 0.02) 49%, rgba(118, 75, 162, 0.02) 51%, transparent 52%);
      background-size: 60px 60px;
      pointer-events: none;
      opacity: 0.3;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .scrolling-container {
        height: 80px;
      }
      
      .partner-name {
        margin: 0 1.5rem;
      }
      
      .partner-name.text-7xl { font-size: 3rem; }
      .partner-name.text-6xl { font-size: 2.5rem; }
      .partner-name.text-5xl { font-size: 2rem; }
      .partner-name.text-4xl { font-size: 1.5rem; }
      .partner-name.text-3xl { font-size: 1.25rem; }
    }

    @media (max-width: 480px) {
      .scrolling-container {
        height: 60px;
      }
      
      .partner-name {
        margin: 0 1rem;
      }
      
      .partner-name.text-7xl { font-size: 2rem; }
      .partner-name.text-6xl { font-size: 1.75rem; }
      .partner-name.text-5xl { font-size: 1.5rem; }
      .partner-name.text-4xl { font-size: 1.25rem; }
      .partner-name.text-3xl { font-size: 1rem; }
    }
  `;

  return (
    <>
      <style>{homeStyles}</style>
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Slides */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 hero-slide ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
          ))}

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light">
                {heroSlides[currentSlide].subtitle}
              </p>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity flex items-center space-x-2">
                  <span>{heroSlides[currentSlide].cta}</span>
                  <FiArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors flex items-center space-x-2">
                  <FiPlay className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section 
          id="features" 
          data-animate
          className={`py-20 bg-gray-50 ${isVisible.features ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Core <span className="gradient-text">Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with creative excellence to deliver solutions that drive real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="card-hover bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="gradient-bg text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section 
          id="courses" 
          data-animate
          className={`py-20 ${isVisible.courses ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Featured <span className="gradient-text">Courses</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover trending courses from top universities and institutions worldwide. Start your learning journey today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <div key={course.id} className="course-card">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-semibold text-gray-900">
                        {course.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{course.university}</span>
                      <div className="flex items-center space-x-1">
                        <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <FiClock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiUsers className="w-4 h-4" />
                        <span>{course.students} students</span>
                      </div>
                    </div>
                    
                    <button className="w-full gradient-bg text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity flex items-center space-x-2 mx-auto">
                <span>View All Courses</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Job & Internship Highlights Section */}
        <section 
          id="jobs" 
          data-animate
          className={`py-20 bg-gray-50 ${isVisible.jobs ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Job & Internship <span className="gradient-text">Highlights</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore exciting career opportunities from leading companies. Find your perfect match and take the next step in your career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpportunities.map((job, index) => (
                <div key={job.id} className="job-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{job.company}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <FiMapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                          {job.remote && (
                            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">
                              Remote
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{job.posted}</span>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FiBriefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiClock className="w-4 h-4" />
                        <span>{job.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-lg font-semibold gradient-text">
                      <FiDollarSign className="w-5 h-5" />
                      <span>{job.salary}</span>
                    </div>
                    <button className="gradient-bg text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity flex items-center space-x-2 mx-auto">
                <span>View All Opportunities</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* University Highlights Section */}
        <section 
          id="universities" 
          data-animate
          className={`py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 ${isVisible.universities ? 'animate-slide-left' : 'opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                <FaUniversity className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                World-Class <span className="gradient-text">Universities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Learn from the best institutions globally. Access courses and programs from prestigious universities that shape tomorrow's leaders.
              </p>
              <div className="flex justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Top Rankings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span>Global Recognition</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Excellence in Education</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {universityHighlights.map((university, index) => (
                <div key={university.id} className="university-card group">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-80 object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                        {university.ranking}
                      </span>
                      <FaUniversity className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{university.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{university.location}</p>
                    
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold">{university.students}</div>
                        <div className="opacity-75">Students</div>
                      </div>
                      <div>
                        <div className="font-semibold">{university.courses}</div>
                        <div className="opacity-75">Courses</div>
                      </div>
                      <div>
                        <div className="font-semibold">A+</div>
                        <div className="opacity-75">Rating</div>
                      </div>
                    </div>
                  </div>

                  <div className="university-overlay">
                    <h3 className="text-2xl font-bold mb-3">{university.name}</h3>
                    <p className="text-sm mb-4 opacity-90">{university.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {university.specialties.map((specialty, specIndex) => (
                          <span key={specIndex} className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Explore Programs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scrolling Partners Section */}
        <section className="scrolling-bg py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
                <FiGlobe className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Global</span> Network
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connecting you with the world's most prestigious institutions and leading companies. 
                Hover over any name to pause and explore our partnerships.
              </p>
              <div className="flex justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  <span>500+ Universities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                  <span>1000+ Companies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>Global Reach</span>
                </div>
              </div>
            </div>
          </div>

          {/* First Row - Left to Right (Slow) */}
          <div className="scrolling-container mb-12">
            <div className="scrolling-content">
              {[...scrollingPartners, ...scrollingPartners].map((partner, index) => (
                <span
                  key={`row1-${index}`}
                  className={`partner-name ${partner.style}`}
                >
                  {partner.name}
                </span>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left (Medium Speed) */}
          <div className="scrolling-container mb-12">
            <div className="scrolling-content-reverse">
              {[...scrollingPartners.slice().reverse(), ...scrollingPartners.slice().reverse()].map((partner, index) => (
                <span
                  key={`row2-${index}`}
                  className={`partner-name ${partner.style}`}
                >
                  {partner.name}
                </span>
              ))}
            </div>
          </div>

          {/* Third Row - Left to Right (Very Slow) */}
          <div className="scrolling-container mb-16">
            <div className="scrolling-content-slow">
              {[...scrollingPartners.slice(12), ...scrollingPartners.slice(0, 12), ...scrollingPartners.slice(12), ...scrollingPartners.slice(0, 12)].map((partner, index) => (
                <span
                  key={`row3-${index}`}
                  className={`partner-name ${partner.style}`}
                >
                  {partner.name}
                </span>
              ))}
            </div>
          </div>


        </section>

        {/* Why Choose Us Section */}
        <section 
          id="why-choose-us" 
          data-animate
          className={`py-20 bg-gray-50 ${isVisible['why-choose-us'] ? 'animate-slide-right' : 'opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="gradient-text">Eddz</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of students and professionals who trust Eddz for their educational and career advancement needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="gradient-bg text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
                    <div className="text-gray-600">Active Students</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                    <div className="text-gray-600">Partner Universities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
                    <div className="text-gray-600">Job Opportunities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          id="services" 
          data-animate
          className={`py-20 ${isVisible.services ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to your business needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="card-hover bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="gradient-bg text-white w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <FiCheck className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold gradient-text">
                        {service.price}
                      </span>
                      <button className="gradient-bg text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="animate-scale">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg md:text-xl opacity-90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section 
          id="tech" 
          data-animate
          className={`py-20 bg-gray-50 ${isVisible.tech ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Technologies We <span className="gradient-text">Master</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with the latest and most reliable technologies to build robust solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
              <FaReact className="tech-icon w-12 h-12 text-gray-600" />
              <FaNodeJs className="tech-icon w-12 h-12 text-gray-600" />
              <FaPython className="tech-icon w-12 h-12 text-gray-600" />
              <FaAws className="tech-icon w-12 h-12 text-gray-600" />
              <FaGoogle className="tech-icon w-12 h-12 text-gray-600" />
              <FaMicrosoft className="tech-icon w-12 h-12 text-gray-600" />
              <FaApple className="tech-icon w-12 h-12 text-gray-600" />
              <FaAmazon className="tech-icon w-12 h-12 text-gray-600" />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          id="testimonials" 
          data-animate
          className={`py-20 ${isVisible.testimonials ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card-hover bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of students and professionals who are advancing their careers through Eddz. Your future starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <span>Start Learning Today</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">
                Explore Opportunities
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;