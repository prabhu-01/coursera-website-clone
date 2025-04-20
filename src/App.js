"use client"

/*
 * CourseraHomepage Component
 *
 * This is the main component for the Coursera-like homepage that includes:
 * - Navigation with dropdown menus
 * - Theme switching between light and dark modes
 * - Mobile-responsive design with a hamburger menu
 * - Various content sections (hero, virtual rooms, courses, etc.)
 */

import React from "react"

import {
  ChevronDown,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  GraduationCap,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react"
import { useState } from "react"
import "./App.css"
import courseraLogo from "./Assets/coursera-logo.svg"
import brandImg from "./Assets/brand-image.png"

/**
 * ExploreDropdown Component
 *
 * Renders a mega-menu dropdown with multiple sections of links
 * This appears when hovering over the "Explore" button in the header
 * Organized into sections: roles, categories, certificates, and skills
 */
const ExploreDropdown = () => {
  return (
    <div className="explore-dropdown">
      <div className="explore-dropdown-container">
        <div className="explore-dropdown-section">
          <h3>Explore roles</h3>
          <ul>
            <li>
              <a href="#">Data Analyst</a>
            </li>
            <li>
              <a href="#">Project Manager</a>
            </li>
            <li>
              <a href="#">Cyber Security Analyst</a>
            </li>
            <li>
              <a href="#">Data Scientist</a>
            </li>
            <li>
              <a href="#">Business Intelligence Analyst</a>
            </li>
            <li>
              <a href="#">Digital Marketing Specialist</a>
            </li>
            <li>
              <a href="#">UI / UX Designer</a>
            </li>
            <li>
              <a href="#">Machine Learning Engineer</a>
            </li>
            <li>
              <a href="#">Social Media Specialist</a>
            </li>
            <li>
              <a href="#">Computer Support Specialist</a>
            </li>
          </ul>
          <a href="#" className="view-all-link">
            View all
          </a>
        </div>

        <div className="explore-dropdown-section">
          <h3>Explore categories</h3>
          <ul>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Data Science</a>
            </li>
            <li>
              <a href="#">Information Technology</a>
            </li>
            <li>
              <a href="#">Computer Science</a>
            </li>
            <li>
              <a href="#">Life Sciences</a>
            </li>
            <li>
              <a href="#">Physical Science and Engineering</a>
            </li>
            <li>
              <a href="#">Personal Development</a>
            </li>
            <li>
              <a href="#">Social Sciences</a>
            </li>
            <li>
              <a href="#">Language Learning</a>
            </li>
            <li>
              <a href="#">Arts and Humanities</a>
            </li>
          </ul>
          <a href="#" className="view-all-link">
            View all
          </a>
        </div>

        <div className="explore-dropdown-section">
          <h3>Earn a Professional Certificate</h3>
          <ul>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Computer Science</a>
            </li>
            <li>
              <a href="#">Data Science</a>
            </li>
            <li>
              <a href="#">Information Technology</a>
            </li>
          </ul>
          <a href="#" className="view-all-link">
            View all
          </a>

          <h3 style={{ marginTop: "2rem" }}>Earn an online degree</h3>
          <ul>
            <li>
              <a href="#">Bachelor's Degrees</a>
            </li>
            <li>
              <a href="#">Master's Degrees</a>
            </li>
            <li>
              <a href="#">Postgraduate Programs</a>
            </li>
          </ul>
          <a href="#" className="view-all-link">
            View all
          </a>
        </div>

        <div className="explore-dropdown-section">
          <h3>Explore trending skills</h3>
          <ul>
            <li>
              <a href="#">Python</a>
            </li>
            <li>
              <a href="#">Artificial Intelligence</a>
            </li>
            <li>
              <a href="#">Excel</a>
            </li>
            <li>
              <a href="#">Machine Learning</a>
            </li>
            <li>
              <a href="#">SQL</a>
            </li>
            <li>
              <a href="#">Project Management</a>
            </li>
            <li>
              <a href="#">Power BI</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
          </ul>

          <h3 style={{ marginTop: "2rem" }}>Prepare for a certification exam</h3>
          <a href="#" className="view-all-link">
            View all
          </a>
        </div>

        <div className="explore-dropdown-footer">
          <p>Not sure where to begin?</p>
          <a href="#">Browse free courses</a>
          <span>or</span>
          <a href="#">
            Learn more about Coursera<span className="coursera-plus-badge">PLUS</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function CourseraHomepage() {
  // State for mobile menu, expanded submenu, and theme
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState(null)
  const [theme, setTheme] = useState("light")

  /**
   * Toggles the mobile menu open/closed state
   * Also prevents body scrolling when menu is open for better UX
   */
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setExpandedMenu(null)

    // Prevent body scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  /**
   * Toggles a specific submenu in the mobile navigation
   * If the same menu is clicked again, it will close
   *
   * @param {string} menu - The menu identifier to toggle
   */
  const toggleSubmenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu)
  }

  /**
   * Toggles between light and dark theme
   * Updates both state and HTML attribute for CSS variables
   * Persists theme preference in localStorage
   */
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)

    // Save theme preference to localStorage
    localStorage.setItem("theme", newTheme)
  }

  /**
   * Effect to initialize theme based on:
   * 1. User's saved preference in localStorage
   * 2. System preference (prefers-color-scheme)
   * 3. Default to light theme if neither exists
   */
  React.useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, [])

  return (
    <div className="coursera-homepage">
      {/* Top black navigation bar - hidden on mobile */}
      <div className="bg-black text-white px-4 text-sm flex justify-center top-nav-bar">
        <div className="max-w-screen-xl w-full flex">
          <a href="#" className="mr-6 nav-item">
            For Individuals
            <div className="under-bar"></div>
          </a>
          <a href="#" className="mr-6 nav-item">
            For Businesses
          </a>
          <a href="#" className="mr-6 nav-item">
            For Universities
          </a>
          <a href="#" className="nav-item">
            For Governments
          </a>
        </div>
      </div>

      {/* Main header with logo, navigation, and search */}
      <header className="header border-b border-gray-200">
        <div className="header-container max-w-screen-xl mx-auto">
          <div className="header-left flex items-center">
            <a href="/" className="mr-4">
              <img src={courseraLogo || "/placeholder.svg"} alt="Coursera" className="h-8" />
            </a>
            <div className="explore-button-container">
              <button className="explore-button" aria-expanded="false" aria-haspopup="true">
                Explore <ChevronDown className="icon-small" />
              </button>
              <ExploreDropdown />
            </div>
          </div>

          {/* Header right section with search, links, and theme toggle */}
          <div className="header-right flex items-center gap-4">
            {/* Search bar component */}
            <div className="search-container relative flex-grow max-w-md" style={{ width: "300px" }}>
              <input
                type="text"
                placeholder="🔎 What do you want to learn?"
                className="search-input w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500"
                aria-label="Search courses"
              />
            </div>
            <a href="#" className="hidden md:block text-sm font-medium text-gray-700 hover:text-blue-600">
              Online Degrees
            </a>
            <a href="#" className="hidden md:block text-sm font-medium text-gray-700 hover:text-blue-600">
              Careers
            </a>
            <a href="#" className="hidden md:block text-sm font-medium text-blue-600 hover:underline">
              Log In
            </a>
            <a
              href="#"
              className="hidden md:block text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
            >
              Join for Free
            </a>
            {/* Theme toggle button - switches between light/dark modes */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            {/* Mobile menu toggle - only visible on small screens */}
            <button
              className="md:hidden flex items-center justify-center"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay - darkens the background when menu is open */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      ></div>

      {/* Mobile menu - slides in from right on small screens */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <img src={courseraLogo || "/placeholder.svg"} alt="Coursera" className="h-8" />
          <button onClick={toggleMobileMenu} className="p-1" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mobile-menu-content">
          {/* Conditional rendering based on which submenu is expanded */}
          {expandedMenu === "main" ? (
            <div>
              <button className="flex items-center gap-2 mb-4 text-blue-600" onClick={() => setExpandedMenu(null)}>
                <span className="text-lg">←</span> Main Menu
              </button>
              <h3 className="font-semibold mb-4">Explore roles</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    Data Analyst
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    Project Manager
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    Cyber Security Analyst
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    Data Scientist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    Business Intelligence Analyst
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    Digital Marketing Specialist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    UI / UX Designer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    Machine Learning Engineer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    Social Media Specialist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600">
                    Computer Support Specialist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                    View all
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <ul className="space-y-0">
                <li className="mobile-menu-item">
                  <button className="flex items-center justify-between w-full" onClick={() => toggleSubmenu("main")}>
                    <span>Explore roles</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </li>
                <li className="mobile-menu-item">
                  <button
                    className="flex items-center justify-between w-full"
                    onClick={() => toggleSubmenu("categories")}
                  >
                    <span>Explore categories</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </li>
                <li className="mobile-menu-item">
                  <button className="flex items-center justify-between w-full" onClick={() => toggleSubmenu("skills")}>
                    <span>Trending skills</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </li>
                <li className="mobile-menu-item">
                  <button
                    className="flex items-center justify-between w-full"
                    onClick={() => toggleSubmenu("certificate")}
                  >
                    <span>Earn a professional certificate</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </li>
                <li className="mobile-menu-item">
                  <button className="flex items-center justify-between w-full" onClick={() => toggleSubmenu("degree")}>
                    <span>Earn an online degree</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </li>
                <li className="mobile-menu-item">
                  <a href="#" className="block">
                    Prepare for a certification exam
                  </a>
                </li>
                <li className="mobile-menu-item">
                  <a href="#" className="block text-gray-600">
                    Not sure where to begin?
                  </a>
                </li>
                <li className="mobile-menu-item">
                  <a href="#" className="block">
                    Browse free courses
                  </a>
                </li>
                <li className="mobile-menu-item">
                  <a href="#" className="block">
                    For Businesses
                  </a>
                </li>
                <li className="mobile-menu-item">
                  <a href="#" className="block">
                    For Universities
                  </a>
                </li>
                <li className="mobile-menu-item">
                  <a href="#" className="block">
                    For Governments
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile menu footer with action buttons and theme toggle */}
        <div className="mobile-menu-footer">
          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium mb-3">Join for Free</button>
          <button className="w-full border border-gray-300 text-blue-600 py-3 rounded-md font-medium">Log In</button>
          {/* Theme toggle for mobile - includes text label for clarity */}
          <div className="flex justify-center mt-4">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <div className="flex items-center">
                  <Moon className="h-5 w-5 mr-2" />
                  <span>Switch to Dark Mode</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Sun className="h-5 w-5 mr-2" />
                  <span>Switch to Light Mode</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section - Main promotional area */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Learn without limits</h1>
            <p>
              Start, switch, or advance your career with more than 10,000 courses, Professional Certificates, and
              degrees from world-class universities and companies.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary btn-large">Join For Free</button>
              <button className="btn-secondary btn-large">Try Coursera for Business</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={brandImg || "/placeholder.svg"} alt="Student learning" className="circle-image" />
          </div>
        </section>

        {/* Partners Section - Showcases university and company collaborations */}
        <section className="partners-section">
          <p style={{ fontSize: "1.5rem" }}>We collaborate with 350+ leading universities and companies</p>
          <div className="partner-logos">
            <div className="partner-logo">
              <img src="https://static.cdnlogo.com/logos/u/49/university-of-cambridge.png" alt="Cambridge University" />
            </div>
            <div className="partner-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Uni_Oxford_logo.svg/500px-Uni_Oxford_logo.svg.png"
                alt="Oxford University"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://www.vhv.rs/dpng/d/602-6024294_high-resolution-princeton-university-logo-hd-png-download.png"
                alt="Princeton University"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png"
                alt="Havard"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png"
                alt="MIT"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://branding.web-resources.upenn.edu/sites/default/files/styles/card_3x2/public/2022-03/UniversityofPennsylvania_FullLogo_RGB-4_0.png?h=ab080a2f&itok=tu_jMFEm"
                alt="University of Pennsylvania"
              />
            </div>
          </div>
        </section>

        {/* Role Cards Section - Career path exploration */}
        <section className="role-section-container">
          <div className="role-section-content">
            <h2>Choose your role</h2>
            <p>Gain the knowledge and skills you need to advance.</p>
            <button className="explore-all-roles-btn">Explore all roles</button>
          </div>
          {/* Filter buttons for role categories */}
          <div className="role-filters">
            <button className="role-filter-btn with-dropdown">
              Beginner <ChevronDown size={16} />
            </button>
            <button className="role-filter-btn active">Popular</button>
            <button className="role-filter-btn">Software Engineering & IT</button>
            <button className="role-filter-btn">Business</button>
            <button className="role-filter-btn">Sales & Marketing</button>
            <button className="role-filter-btn">Data Science & Analytics</button>
            <button className="role-filter-btn">Healthcare</button>
          </div>
          {/* Role cards with career information */}
          <div className="role-cards">
            {/* Data Analyst Role Card */}
            <div className="role-card">
              <div className="role-card-header">
                <div className="role-bg">
                  <svg viewBox="0 0 400 150" preserveAspectRatio="none">
                    <path d="M0,0 L400,0 L400,100 Q200,150 0,100 Z" fill="#FFC107" />
                  </svg>
                </div>
                <div className="role-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <img
                  src="https://media-hosting.imagekit.io/21b73552b23c4467/pic2.png?Expires=1839776407&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iGCq~yWWMxS0UlhaMW~Hy7G9aphy2ixm4qPJCBtB93LyTamVPc6DlWBAS-qyTO7SBWnx4mf44qTAR-VjI56TbWNm6OydkcQ~3bbtqdosyucjj~UUSOjeOMsi1GCQLSMxlospS7T9DhoBLofZ1URJaafJffiv7ofXRWLXG6PnpLKzlT5N7C5htNWYyOb7KDYBG2gl7AY1u0lYVNzvaAK3V15zqFuO9hdAmrJZd5rxE7edE7foHMM2SoI33-v~RFrFA8fELTzm~4iks8HwVv6YHrSgjCPhAkdrNizssOxEqzRL5RWsdxgi6i2wI05yKTh7aDmPlX2N5o3~v4AsXOrAig__"
                  alt="Data Analyst"
                  className="role-person-image"
                />
              </div>
              <div className="role-card-content">
                <h3>Data Analyst</h3>
                <p className="role-description">
                  A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to
                  analyze trends and provide insights for decisions.
                </p>
                <p className="role-interests">
                  <span className="interests-label">If you like:</span> analyzing data to find insights, creating
                  reports and visualizations, working with spreadsheets and databases
                </p>
                <p className="role-salary">
                  <span className="salary-amount">₹270,410</span> median salary <sup>1</sup>
                </p>
                <p className="role-jobs">
                  <span className="jobs-amount">25,910</span> jobs available <sup>1</sup>
                </p>
                <div className="role-credentials">
                  <h4>Credentials</h4>
                  <div className="credential">
                    <div className="credential-logo">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                        alt="Google"
                      />
                    </div>
                    <span>Google Data Analytics</span>
                  </div>
                  <div className="credential">
                    <div className="credential-logo">
                      <img
                        src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/bb/62e6a0120b11e8a0dff7963b1c8ab0/deeplearning-thumbnail.png"
                        alt="DeepLearning.AI"
                      />
                    </div>
                    <span>DeepLearning.AI Data Analytics</span>
                  </div>
                  <a href="#" className="more-link">
                    + 5 more
                  </a>
                </div>
              </div>
            </div>

            {/* Data Scientist Role Card */}
            <div className="role-card">
              <div className="role-card-header">
                <div className="role-bg">
                  <svg viewBox="0 0 400 150" preserveAspectRatio="none">
                    <path d="M0,0 L400,0 L400,100 Q200,150 0,100 Z" fill="#FFC107" />
                  </svg>
                </div>
                <div className="role-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <img
                  src="https://media-hosting.imagekit.io/81baacab6b264115/pic3.png?Expires=1839776484&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pH9FKYqdUSXMmm5Nw7kc2~PmOpWjOaC1hxvZOyNwnyL48dqP3G-RGN89ZFfjvfG0itMXYopjCKoodCT-V7zFXNU8jv-XSBzB1jRkAF6-YtLxbfWQuiblYhZkTu22VjgxazbOzPYR5A2uSGTbbHaIz6tz6cSyy9HIVAuHpDyaScJKo6kx-FV64wkOWNiN9ck9HlW3u6mBKeniLm5EnJzcBnVouwSuBQsSvnZxtbMs9uOI~YzJtYENh4k9XddmDz~hqPFfeyHlTedmI90fHRouQ6br5Kdu4Lyy-QS8vGiQ6KT9Z3QrMwDv3N-msZFpN-KFdwgd3kQrznlv5~sDQ3GL8w__"
                  alt="Data Scientist"
                  className="role-person-image"
                />
              </div>
              <div className="role-card-content">
                <h3>Data Scientist</h3>
                <p className="role-description">
                  A Data Scientist analyzes large datasets to uncover insights, using statistics, machine learning, and
                  visualization to inform business strategies.
                </p>
                <p className="role-interests">
                  <span className="interests-label">If you like:</span> analyzing complex datasets, developing machine
                  learning models, solving statistical problems
                </p>
                <p className="role-salary">
                  <span className="salary-amount">₹360,575</span> median salary <sup>1</sup>
                </p>
                <p className="role-jobs">
                  <span className="jobs-amount">23,554</span> jobs available <sup>1</sup>
                </p>
                <div className="role-credentials">
                  <h4>Credentials</h4>
                  <div className="credential">
                    <div className="credential-logo">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
                    </div>
                    <span>IBM Data Science</span>
                  </div>
                  <a href="#" className="more-link">
                    + 3 more
                  </a>
                </div>
              </div>
            </div>

            {/* Cyber Security Analyst Role Card */}
            <div className="role-card">
              <div className="role-card-header">
                <div className="role-bg">
                  <svg viewBox="0 0 400 150" preserveAspectRatio="none">
                    <path d="M0,0 L400,0 L400,100 Q200,150 0,100 Z" fill="#0056d2" />
                  </svg>
                </div>
                <div className="role-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <img
                  src="https://media-hosting.imagekit.io/42d5f63636854d56/pic1.png?Expires=1839776393&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=d4zPpCGKHhVNg1ZYb3sTBHzi9iMZcvplI3029FOD-Y5Hdh5rpq9bccYFpPHPyXOT3-6T8FsyfEx-JZHVa10pGpQCdqlLX2zVXzzhz~gBJ2TennKEFuwqD0tZn2zOQvFVQBGeICuaF~SDaJCC3UTqmMwECjzqtIm-MReUTFQmJ-8BF8LeoQxv9CCu8Ie8YfghwKIxXOhlDjMCszaCW2RL60gXQjCVjDETNf~2ETSYcQwUlAEiDhJKZwj7OqOG3WER92mSwsYQrK2pu~oxwjYF28U~nJSMPNUMFzu6y8UidqgviiszvIustU3wZ9mAc-D3SQCd1UMXWuquWjjYVQexGw__"
                  alt="Cyber Security Analyst"
                  className="role-person-image"
                />
              </div>
              <div className="role-card-content">
                <h3>Cyber Security Analyst</h3>
                <p className="role-description">
                  A Cyber Security Analyst monitors IT systems, analyzes threats, finds vulnerabilities, and implements
                  measures to protect data from cyber attacks.
                </p>
                <p className="role-interests">
                  <span className="interests-label">If you like:</span> protecting networks and data from cyber threats,
                  analyzing security vulnerabilities, developing security protocols
                </p>
                <p className="role-salary">
                  <span className="salary-amount">₹458,680</span> median salary <sup>1</sup>
                </p>
                <p className="role-jobs">
                  <span className="jobs-amount">2,347</span> jobs available <sup>1</sup>
                </p>
                <div className="role-credentials">
                  <h4>Credentials</h4>
                  <div className="credential">
                    <div className="credential-logo">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                        alt="Google"
                      />
                    </div>
                    <span>Google Cloud Cybersecurity</span>
                  </div>
                  <div className="credential">
                    <div className="credential-logo">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                        alt="Microsoft"
                      />
                    </div>
                    <span>Microsoft Cybersecurity Analyst</span>
                  </div>
                  <a href="#" className="more-link">
                    + 3 more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Certificates Section - Showcases in-demand professional certificates */}
        <section className="certificates-section">
          <div className="section-header">
            <h2>Most Popular Certificates</h2>
            <p>Explore our most popular programs, get job-ready for an in-demand career.</p>
          </div>
          <div className="certificate-cards">
            <div className="certificate-card">
              <div className="certificate-image">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Google Data Analytics"
                />
                <div className="certificate-badge">+ New AI skills</div>
              </div>
              <div className="certificate-content">
                <div className="certificate-provider">
                  <div className="provider-icon">G</div>
                  <span>Google</span>
                </div>
                <h3>Google Data Analytics</h3>
                <p>Build toward a degree</p>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
            <div className="certificate-card">
              <div className="certificate-image">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Google Project Management"
                />
                <div className="certificate-badge">+ New AI skills</div>
              </div>
              <div className="certificate-content">
                <div className="certificate-provider">
                  <div className="provider-icon">G</div>
                  <span>Google</span>
                </div>
                <h3>Google Project Management</h3>
                <p>Build toward a degree</p>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
            <div className="certificate-card">
              <div className="certificate-image">
                <img
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Meta Marketing"
                />
                <div className="certificate-badge">+ New AI skills</div>
              </div>
              <div className="certificate-content">
                <div className="certificate-provider">
                  <div className="provider-icon">M</div>
                  <span>Meta</span>
                </div>
                <h3>Meta Social Media Marketing</h3>
                <p>Build toward a degree</p>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
            <div className="certificate-card">
              <div className="certificate-image">
                <img
                  src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="IBM Data Science"
                />
                <div className="certificate-badge">+ New AI skills</div>
              </div>
              <div className="certificate-content">
                <div className="certificate-provider">
                  <div className="provider-icon">IBM</div>
                  <span>IBM</span>
                </div>
                <h3>IBM Data Science</h3>
                <p>Build toward a degree</p>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
          </div>
          <div className="section-footer">
            <button className="btn-text">Show 8 more</button>
            <button className="btn-primary">View all</button>
          </div>
        </section>

        {/* Remaining sections continue with similar structure... */}
        {/* GenAI Section */}
        <div className="genai-section-container">
          <div className="genai-content">
            <h2>Get started with GenAI</h2>
            <p>Identify, develop, and execute impactful GenAI business strategies.</p>
            <button className="view-all-genai-btn">
              View all GenAI <ArrowRight size={16} />
            </button>
          </div>
          <div className="genai-filters">
            <button className="genai-filter-btn active">New</button>
            <button className="genai-filter-btn">Beginner</button>
            <button className="genai-filter-btn">Popular</button>
            <button className="genai-filter-btn">Tools</button>
          </div>
          <div className="genai-cards">
            <div className="genai-card">
              <div className="genai-card-image">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVunsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV
enfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Agentic AI"
                />
              </div>
              <div className="genai-card-content">
                <div className="genai-provider">
                  <div className="provider-logo">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/61/Vanderbilt_Commodores_logo.svg"
                      alt="Vanderbilt University"
                    />
                  </div>
                  <span>Vanderbilt University</span>
                </div>
                <h3 className="genai-card-title">Agentic AI and AI Agents for Leaders</h3>
                <span className="genai-card-type">Specialization</span>
              </div>
            </div>
            <div className="genai-card">
              <div className="genai-card-image">
                <img
                  src="https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Microsoft AI & ML"
                />
              </div>
              <div className="genai-card-content">
                <div className="genai-provider">
                  <div className="provider-logo">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                      alt="Microsoft"
                    />
                  </div>
                  <span>Microsoft</span>
                </div>
                <h3 className="genai-card-title">Microsoft AI & ML Engineering</h3>
                <span className="genai-card-type">Professional Certificate</span>
              </div>
            </div>
            <div className="genai-card">
              <div className="genai-card-image">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="IBM Generative AI"
                />
              </div>
              <div className="genai-card-content">
                <div className="genai-provider">
                  <div className="provider-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
                  </div>
                  <span>IBM</span>
                </div>
                <h3 className="genai-card-title">IBM Generative AI Engineering</h3>
                <span className="genai-card-type">Professional Certificate</span>
              </div>
            </div>
          </div>
        </div>

        {/* New on Coursera Section */}
        <section className="new-section">
          <div className="section-header">
            <p style={{ fontWeight: "bold" }}>Courses and Professional Certificates</p>
            <h2 style={{ fontWeight: "500" }}>New on Coursera</h2>
            <p>Explore our newest programs, focused on delivering in-demand skills.</p>
          </div>
          <div className="new-cards" style={{ color: "black" }}>
            <div className="new-card">
              <div className="new-card-content">
                <img
                  className="new-card-image"
                  src="https://teaching.resources.osu.edu/sites/default/files/styles/max_960x960/public/2020-07/instructor%20introduction.jpg?itok=-OV9GqlU"
                  alt="New on Coursera"
                />
                <div className="new-provider">
                  <div className="provider-icon">DL</div>
                  <span>DeepLearning.AI</span>
                </div>
                <h3>Data Analytics</h3>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
            <div className="new-card ">
              <div className="new-card-content">
                <img
                  className="new-card-image"
                  src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/609701210OnlineInstructor.jpg=ws1280x960"
                  alt="New on Coursera"
                />
                <div className="new-provider">
                  <div className="provider-icon">C</div>
                  <span>Coursera</span>
                </div>
                <h3>UX Design Toolkit</h3>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
            <div className="new-card">
              <div className="new-card-content">
                <img
                  className="new-card-image"
                  src="https://study.com/cimages/multimages/16/man_computer_online_classes.jpeg"
                  alt="New on Coursera"
                />
                <div className="new-provider">
                  <div className="provider-icon">G</div>
                  <span>Google</span>
                </div>
                <h3>Google Cloud Computing</h3>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
            <div className="new-card">
              <div className="new-card-content">
                <img
                  className="new-card-image"
                  src="https://echo360.com/wp-content/uploads/2020/06/iStock-1218531078.jpg"
                  alt="New on Coursera"
                />
                <div className="new-provider">
                  <div className="provider-icon">M</div>
                  <span>Meta</span>
                </div>
                <h3>Front-End Developer</h3>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
          </div>
          <div className="section-footer" style={{ alignItems: "left" }}>
            <button className="btn-text">Show 8 more</button>
            <button className="btn-primary">View all</button>
          </div>
        </section>

        {/* Free Courses Section */}
        <section className="free-courses-section">
          <p className="free-label">100% Free</p>
          <h2>Start learning with free courses</h2>
          <p className="subtitle">Explore free online courses from the world's top universities and companies.</p>
          <div className="free-course-cards">
            <div className="free-course-card">
              <div className="free-course-image">
                <img
                  src="https://media.licdn.com/dms/image/v2/C5612AQF4OJuHF9B35A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1592246181246?e=2147483647&v=beta&t=Vf0YpQw9U9T8WKQJw-r7Csp9OngDzimnei-9Kz24YTk"
                  alt="Learning How to Learn"
                />
                <div className="free-badge">Free</div>
              </div>
              <div className="free-course-content">
                <div className="free-course-provider">
                  <div className="provider-logo">
                    <img
                      src="https://media-hosting.imagekit.io/21b73552b23c4467/pic2.png?Expires=1839776407&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iGCq~yWWMxS0UlhaMW~Hy7G9aphy2ixm4qPJCBtB93LyTamVPc6DlWBAS-qyTO7SBWnx4mf44qTAR-VjI56TbWNm6OydkcQ~3bbtqdosyucjj~UUSOjeOMsi1GCQLSMxlospS7T9DhoBLofZ1URJaafJffiv7ofXRWLXG6PnpLKzlT5N7C5htNWYyOb7KDYBG2gl7AY1u0lYVNzvaAK3V15zqFuO9hdAmrJZd5rxE7edE7foHMM2SoI33-v~RFrFA8fELTzm~4iks8HwVv6YHrSgjCPhAkdrNizssOxEqzRL5RWsdxgi6i2wI05yKTh7aDmPlX2N5o3~v4AsXOrAig__"
                      alt="Deep Teaching Solutions"
                    />
                  </div>
                  <span className="provider-name">Deep Teaching Solutions</span>
                </div>
                <h3 className="free-course-title">
                  Learning How to Learn: Powerful mental tools to help you master tough subjects
                </h3>
                <span className="course-label">Course</span>
              </div>
            </div>
            <div className="free-course-card">
              <div className="free-course-image">
                <img
                  src="https://cdn.corporatefinanceinstitute.com/assets/Statistics-1.jpeg"
                  alt="Introduction to Statistics"
                />
                <div className="free-badge">Free</div>
              </div>
              <div className="free-course-content">
                <div className="free-course-provider">
                  <div className="provider-logo">
                    <img
                      src="https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png"
                      alt="Stanford University"
                    />
                  </div>
                  <span className="provider-name">Stanford University</span>
                </div>
                <h3 className="free-course-title">Introduction to Statistics</h3>
                <span className="course-label">Course</span>
              </div>
            </div>
            <div className="free-course-card">
              <div className="free-course-image">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D12AQG4UgkT4L335w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1682527701918?e=2147483647&v=beta&t=a1bZJoX_RMLHxT5AVUZye9eXJ5mcQcDta_pow8xnecI"
                  alt="Accelerate Your Learning with ChatGPT"
                />
                <div className="free-badge">Free</div>
              </div>
              <div className="free-course-content">
                <div className="free-course-provider">
                  <div className="provider-logo">
                    <img
                      src="https://media-hosting.imagekit.io/81baacab6b264115/pic3.png?Expires=1839776484&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pH9FKYqdUSXMmm5Nw7kc2~PmOpWjOaC1hxvZOyNwnyL48dqP3G-RGN89ZFfjvfG0itMXYopjCKoodCT-V7zFXNU8jv-XSBzB1jRkAF6-YtLxbfWQuiblYhZkTu22VjgxazbOzPYR5A2uSGTbbHaIz6tz6cSyy9HIVAuHpDyaScJKo6kx-FV64wkOWNiN9ck9HlW3u6mBKeniLm5EnJzcBnVouwSuBQsSvnZxtbMs9uOI~YzJtYENh4k9XddmDz~hqPFfeyHlTedmI90fHRouQ6br5Kdu4Lyy-QS8vGiQ6KT9Z3QrMwDv3N-msZFpN-KFdwgd3kQrznlv5~sDQ3GL8w__"
                      alt="Deep Teaching Solutions"
                    />
                  </div>
                  <span className="provider-name">Deep Teaching Solutions</span>
                </div>
                <h3 className="free-course-title">Accelerate Your Learning with ChatGPT</h3>
                <span className="course-label">Course</span>
              </div>
            </div>
            <div className="free-course-card">
              <div className="free-course-image">
                <img
                  src="https://dataanalysis.co.zw/wp-content/uploads/2022/09/Business-Analytics-Using-Excel.jpg"
                  alt="Business Analytics with Excel"
                />
                <div className="free-badge">Free</div>
              </div>
              <div className="free-course-content">
                <div className="free-course-provider">
                  <div className="provider-logo">
                    <img
                      src="https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png"
                      alt="Johns Hopkins University"
                    />
                  </div>
                  <span className="provider-name">Johns Hopkins University</span>
                </div>
                <h3 className="free-course-title">Business Analytics with Excel: Elementary to Advanced</h3>
                <span className="course-label">Course</span>
              </div>
            </div>
          </div>
          <div className="free-course-buttons">
            <button className="show-more-btn">Show 8 more</button>
            <button className="view-all-btn">
              View all
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Degree Programs Section */}
        <section className="degree-section">
          <div className="section-header">
            <h2>Get a head start on a degree today</h2>
            <p>
              With these programs, you can build valuable skills, earn career credentials, and make progress toward a
              degree before you even enroll.
            </p>
          </div>
          <div className="degree-cards">
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Master of Engineering"
                />
              </div>
              <div className="degree-content">
                <div className="degree-provider">
                  <span>University of Colorado Boulder</span>
                </div>
                <h3>Master of Engineering in Engineering Management</h3>
                <button className="btn-outline">Earn a degree</button>
                <span className="degree-type">Degree</span>
              </div>
            </div>
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fHww"
                  alt="Master of Science in Electrical Engineering"
                />
              </div>
              <div className="degree-content">
                <div className="degree-provider">
                  <span>University of Colorado Boulder</span>
                </div>
                <h3>Master of Science in Electrical Engineering</h3>
                <button className="btn-outline">Earn a degree</button>
                <span className="degree-type">Degree</span>
              </div>
            </div>
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Master of Computer Science"
                />
              </div>
              <div className="degree-content">
                <div className="degree-provider">
                  <span>University of Illinois</span>
                </div>
                <h3>Master of Computer Science</h3>
                <button className="btn-outline">Earn a degree</button>
                <span className="degree-type">Degree</span>
              </div>
            </div>
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Master of Computer and Information Technology"
                />
              </div>
              <div className="degree-content">
                <div className="degree-provider">
                  <span>University of Pennsylvania</span>
                </div>
                <h3>Master of Computer and Information Technology</h3>
                <button className="btn-outline">Earn a degree</button>
                <span className="degree-type">Degree</span>
              </div>
            </div>
          </div>
          <div className="section-footer">
            <button className="btn-text">Show 8 more</button>
            <button className="btn-primary">View all</button>
          </div>
        </section>

        {/* Top Degree Section */}

        <section className="top-degree-section">
          <div className="section-header">
            <p className="degree-program-label">Degree Programs</p>
            <h2>Find a top degree that fits your life</h2>
            <p className="subtitle">Breakthrough pricing on 100% online degrees from top universities.</p>
          </div>
          <div className="degree-cards">
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Birla Institute of Technology & Science"
                />
              </div>
              <div className="degree-content">
                <div className="university-info">
                  <div className="university-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg" alt="BITS Logo" />
                  </div>
                  <span className="university-name">Birla Institute of Technology & Science...</span>
                </div>
                <h3 className="degree-title">Bachelor of Science in Computer Science</h3>
                <a href="#" className="earn-degree-link">
                  <GraduationCap size={16} />
                  Earn a degree
                </a>
                <span className="degree-type">Degree</span>
              </div>
            </div>
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80"
                  alt="Indian Institute of Technology Guwahati"
                />
              </div>
              <div className="degree-content">
                <div className="university-info">
                  <div className="university-logo">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/1/12/IIT_Guwahati_Logo.svg"
                      alt="IIT Guwahati Logo"
                    />
                  </div>
                  <span className="university-name">Indian Institute of Technology Guwahati</span>
                </div>
                <h3 className="degree-title">Bachelor of Science in Data Science & AI</h3>
                <a href="#" className="earn-degree-link">
                  <GraduationCap size={16} />
                  Earn a degree
                </a>
                <span className="degree-type">Degree</span>
              </div>
            </div>
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80"
                  alt="IIT Roorkee"
                />
              </div>
              <div className="degree-content">
                <div className="university-info">
                  <div className="university-logo">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/2/2d/Indian_Institute_of_Technology_Roorkee_Logo.svg"
                      alt="IIT Roorkee Logo"
                    />
                  </div>
                  <span className="university-name">IIT Roorkee</span>
                </div>
                <h3 className="degree-title">Executive MBA</h3>
                <a href="#" className="earn-degree-link">
                  <GraduationCap size={16} />
                  Earn a degree
                </a>
                <span className="degree-type">Degree</span>
              </div>
            </div>
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="S.P. Jain Institute of Management and Research"
                />
              </div>
              <div className="degree-content">
                <div className="university-info">
                  <div className="university-logo">
                    <img
                      src="https://www.sbjit.edu.in/wp-content/uploads/2021/06/imageedit_1_4728052003.png"
                      alt="SPJIMR Logo"
                    />
                  </div>
                  <span className="university-name">S.P. Jain Institute of Management and...</span>
                </div>
                <h3 className="degree-title">PG Diploma in Management (PGDM) Online</h3>
                <a href="#" className="earn-degree-link">
                  <GraduationCap size={16} />
                  Earn a degree
                </a>
                <span className="degree-type">Degree</span>
              </div>
            </div>
          </div>
          <div className="degree-buttons">
            <button className="show-more-btn">Show 8 more</button>
            <button className="view-all-btn">
              View all
              <ArrowRight size={16} />
            </button>
          </div>
          <p className="degree-disclaimer">
            ¹Each university determines admission and the number of pre-approved prior learning credits that may count
            toward the degree requirements according to institutional policies, which may consider any existing credits
            you may have.
          </p>
        </section>

        {/* Explore Categories Section */}
        <section className="categories-section">
          <h2>Explore Coursera</h2>
          <div className="categories-grid">
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Data Science"
                />
              </div>
              <div className="category-content">
                <h3>Data Science</h3>
                <p>425 courses</p>
              </div>
            </div>
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Business"
                />
              </div>
              <div className="category-content">
                <h3>Business</h3>
                <p>1095 courses</p>
              </div>
            </div>
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Computer Science"
                />
              </div>
              <div className="category-content">
                <h3>Computer Science</h3>
                <p>668 courses</p>
              </div>
            </div>
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                  alt="Health"
                />
              </div>
              <div className="category-content">
                <h3>Health</h3>
                <p>471 courses</p>
              </div>
            </div>
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Social Sciences"
                />
              </div>
              <div className="category-content">
                <h3>Social Sciences</h3>
                <p>401 courses</p>
              </div>
            </div>
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Personal Development"
                />
              </div>
              <div className="category-content">
                <h3>Personal Development</h3>
                <p>137 courses</p>
              </div>
            </div>
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Arts and Humanities"
                />
              </div>
              <div className="category-content">
                <h3>Arts and Humanities</h3>
                <p>338 courses</p>
              </div>
            </div>
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://online.stanford.edu/sites/default/files/styles/widescreen_tiny/public/2018-03/statisticalmethodsinengineeringphysicalsciences_stats110.jpg?h=66807ab2&itok=WB8u3wVd"
                  alt="Physical Science and Engineering"
                />
              </div>
              <div className="category-content">
                <h3>Physical Science and Engineering</h3>
                <p>413 courses</p>
              </div>
            </div>
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Language Learning"
                />
              </div>
              <div className="category-content">
                <h3>Language Learning</h3>
                <p>150 courses</p>
              </div>
            </div>
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80"
                  alt="Information Technology"
                />
              </div>
              <div className="category-content">
                <h3>Information Technology</h3>
                <p>145 courses</p>
              </div>
            </div>
            <div className="category-item">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Math and Logic"
                />
              </div>
              <div className="category-content">
                <h3>Math and Logic</h3>
                <p>70 courses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Study Rooms Section - Moved to appear after Explore Coursera */}
        <section className="virtual-rooms-section">
          <div className="virtual-rooms-content">
            <h2>Virtual Study Rooms</h2>
            <p>
              Enhance your learning experience with collaborative virtual environments designed for focused study
              sessions.
            </p>

            <div className="virtual-rooms-features">
              {/* Feature 1: 3D Environments */}
              <div className="feature-card">
                <div className="feature-icon">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="3D Environments"
                  />
                </div>
                <h3>Customizable 3D Environments</h3>
                <p>
                  Choose from various themes including library, coffee shop, nature retreat, and more to create your
                  ideal study atmosphere.
                </p>
              </div>

              {/* Feature 2: Avatar Presence */}
              <div className="feature-card">
                <div className="feature-icon">
                  <img
                    src="https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                    alt="Avatar Presence"
                  />
                </div>
                <h3>Avatar Presence</h3>
                <p>
                  Personalized avatars with ambient activity indicators show your study status and help maintain
                  accountability with peers.
                </p>
              </div>

              {/* Feature 3: Shared Whiteboard */}
              <div className="feature-card">
                <div className="feature-icon">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Shared Whiteboard"
                  />
                </div>
                <h3>Shared Whiteboard</h3>
                <p>
                  Collaborate in real-time with interactive whiteboards featuring particle effects for annotations and
                  seamless idea sharing.
                </p>
              </div>

              {/* Feature 4: Spatial Audio */}
              <div className="feature-card">
                <div className="feature-icon">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8&auto=format&fit=crop&w=1634&q=80"
                    alt="Spatial Audio"
                  />
                </div>
                <h3>Spatial Audio Visualization</h3>
                <p>
                  Experience immersive sound with elegant waveform displays that enhance communication and create a
                  focused study environment.
                </p>
              </div>
            </div>

            <button className="btn-primary">Try Virtual Study Rooms</button>
          </div>
          {/* Interactive preview with pulsing dots highlighting features */}
          <div className="virtual-rooms-preview">
            <div className="preview-container">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Virtual Study Room Preview"
                className="main-preview"
              />
              <div className="preview-overlay">
                <div className="preview-dot" style={{ top: "30%", left: "20%" }}></div>
                <div className="preview-dot" style={{ top: "50%", left: "70%" }}></div>
                <div className="preview-dot" style={{ top: "70%", left: "40%" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <div className="outcomes-section-wrapper">
          <section className="outcomes-section">
            <div className="outcomes-content">
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)" }}>Learner outcomes on Coursera</h2>
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", marginBottom: "1.5rem" }}>
                77% of learners report career benefits, such as new skills, increased pay, and new job opportunities.
                2023 Coursera Learner Outcomes Report
              </p>
              <button className="btn-primary">Join for Free</button>
            </div>
            <div className="outcomes-image">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6xXERT0XZPJDXgjPzr8Bve/d858e0cda1a5e5df2cb8accd65d5c1b7/outcomes.png?auto=format%2Ccompress&dpr=1&w=606&h=553&q=40"
                alt="Learner outcomes"
              />
            </div>
          </section>
        </div>

        {/* Community Section */}
        <section className="community-section">
          <h2>From the Coursera community</h2>
          <p className="subtitle">168+ million people have already joined Coursera</p>
          <div className="testimonials">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="https://i.pinimg.com/736x/13/37/f8/1337f8213306e4fee48c6a18a0748aa3.jpg" alt="Kenia R." />
              </div>
              <h3>Kenia R.</h3>
              <p className="testimonial-location">United States</p>
              <div className="testimonial-divider"></div>
              <p className="testimonial-text">
                "Being a mother — especially a working mother means I'm constantly trying to juggle my schedule, my
                kids' schedules, and work. I am very grateful for the flexible and remote learning programs that
                Coursera has to offer."
              </p>
            </div>
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg" alt="Ryan L." />
              </div>
              <h3>Ryan L.</h3>
              <p className="testimonial-location">United States</p>
              <div className="testimonial-divider"></div>
              <p className="testimonial-text">
                "From taking courses on Coursera, I gained a deep understanding of the UX Design process from start to
                finish. With the knowledge I gained, I feel prepared for entry-level jobs and internships. I've been
                able to apply the skills and knowledge I gained to multiple projects and work experiences."
              </p>
            </div>
            <div className="testimonial">
              <div className="testimonial-image">
                <img
                  src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-city-with-arms-crossed_23-2148767033.jpg"
                  alt="Vishal V."
                />
              </div>
              <h3>Vishal V.</h3>
              <p className="testimonial-location">India</p>
              <div className="testimonial-divider"></div>
              <p className="testimonial-text">
                "I really enjoyed my courses. The quizzes, videos, and quick labs provided helpful hands-on experience.
                Learning on Coursera has given me the confidence and ability to excel in my career. I love this
                feeling."
              </p>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <div className="business-section-wrapper">
          <section className="business-section">
            <div className="business-content">
              <h2>Drive your business forward by empowering your talent</h2>
              <p>
                Train teams with industry-leading experts and universities, enhanced by AI tools and recognized
                credentials.
              </p>
              <div className="business-buttons">
                <button className="btn-primary">Discover Coursera for Business</button>
                <p>
                  Upskill a small team?{" "}
                  <a href="#">
                    Check out Coursera for Teams
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            <div className="business-logos">
              <div className="business-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/1280px-L%27Or%C3%A9al_logo.svg.png"
                  alt="L'ORÉAL"
                />
              </div>
              <div className="business-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/1200px-Procter_%26_Gamble_logo.png"
                  alt="P&G"
                />
              </div>
              <div className="business-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/837px-Tata_logo.svg.png"
                  alt="TATA"
                />
              </div>
              <div className="business-logo">
                <img src="https://logos-download.com/wp-content/uploads/2018/02/Danone_Logo_2020.png" alt="DANONE" />
              </div>
              <div className="business-logo">
                <img
                  src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5531df8c0000ff00057ed682/0x0.png"
                  alt="Emirates NBD"
                />
              </div>
              <div className="business-logo">
                <img
                  src="https://logos-world.net/wp-content/uploads/2023/03/Reliance-Industries-Ltd.-Logo.png"
                  alt="Reliance"
                />
              </div>
              <div className="business-logo">
                <img src="https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1720244491" alt="Capgemini" />
              </div>
              <div className="business-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Petrobras_horizontal_logo.svg/2560px-Petrobras_horizontal_logo.svg.png"
                  alt="PETROBRAS"
                />
              </div>
              <div className="business-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Adobe-logo.svg/2560px-Adobe-logo.svg.png"
                  alt="Adobe"
                />
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="cta-section">
          <div style={{ width: "80%", borderRadius: "50%", overflow: "hidden" }}>
            <img
              src="https://media-hosting.imagekit.io/697b1f1e07c948e7/Adobe%20Express%20-%20file.png?Expires=1839762186&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uS2GFfIhUYkByOL5Urjr6InQdqMw5Pi6Io9mYY3uQYiccOr1AcPp77-xwQctPTO3BfK3hAVnsjsXaOfrZqV0uMMB5ENEqY6mbFhMlGw9XH0jw81coMwhI6CnDaRxbmk3CgecGXnW3ukAQHyit7CloRj0H5AiDq1VRA4gJt6Kc1FN5wnnBFDDaxmubMR50fqo0MUPc76uI-uyBsxyPcg3z40vS3XSVwMnE~Q7yiNmUroTMjO42pqkHAbhTIV8JMn01qskmWaKaRLDr5wGzZp92-ZkqlAvIa~qll8DJCPHIzWGBpOGketqe5Ev6MyFY8Tx5MMBSwVpvusDrGcfK~wlgw__"
              alt="Take the next step"
            />
          </div>
          <div className="cta-content">
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              Take the next step toward your personal and professional goals with Coursera.
            </h2>
            <p>Join now to receive personalized recommendations from the full Coursera catalog.</p>
            <button className="btn-primary">Join for Free</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Technical Skills</h3>
            <ul>
              <li>
                <a href="#">ChatGPT</a>
              </li>
              <li>
                <a href="#">Coding</a>
              </li>
              <li>
                <a href="#">Computer Science</a>
              </li>
              <li>
                <a href="#">Cybersecurity</a>
              </li>
              <li>
                <a href="#">DevOps</a>
              </li>
              <li>
                <a href="#">Ethical Hacking</a>
              </li>
              <li>
                <a href="#">Generative AI</a>
              </li>
              <li>
                <a href="#">Java Programming</a>
              </li>
              <li>
                <a href="#">Python</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Analytical Skills</h3>
            <ul>
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
              <li>
                <a href="#">Big Data</a>
              </li>
              <li>
                <a href="#">Business Analysis</a>
              </li>
              <li>
                <a href="#">Data Analytics</a>
              </li>
              <li>
                <a href="#">Data Science</a>
              </li>
              <li>
                <a href="#">Financial Modeling</a>
              </li>
              <li>
                <a href="#">Machine Learning</a>
              </li>
              <li>
                <a href="#">Microsoft Excel</a>
              </li>
              <li>
                <a href="#">Microsoft Power BI</a>
              </li>
              <li>
                <a href="#">SQL</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Business Skills</h3>
            <ul>
              <li>
                <a href="#">Accounting</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">E-commerce</a>
              </li>
              <li>
                <a href="#">Finance</a>
              </li>
              <li>
                <a href="#">Google</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">IBM</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Project Management</a>
              </li>
              <li>
                <a href="#">Social Media Marketing</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Career Resources</h3>
            <ul>
              <li>
                <a href="#">Essential IT Certifications</a>
              </li>
              <li>
                <a href="#">High-Income Skills to Learn</a>
              </li>
              <li>
                <a href="#">How to Get a PMP Certification</a>
              </li>
              <li>
                <a href="#">How to Learn Artificial Intelligence</a>
              </li>
              <li>
                <a href="#">Popular Cybersecurity Certifications</a>
              </li>
              <li>
                <a href="#">Popular Data Analytics Certifications</a>
              </li>
              <li>
                <a href="#">What Does a Data Analyst Do?</a>
              </li>
              <li>
                <a href="#">Career Development Resources</a>
              </li>
              <li>
                <a href="#">Career Aptitude Test</a>
              </li>
              <li>
                <a href="#">Share your Coursera Learning Story</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <h3>Coursera</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">What We Offer</a>
              </li>
              <li>
                <a href="#">Leadership</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Catalog</a>
              </li>
              <li>
                <a href="#">Coursera Plus</a>
              </li>
              <li>
                <a href="#">Professional Certificates</a>
              </li>
              <li>
                <a href="#">MasterTrack® Certificates</a>
              </li>
              <li>
                <a href="#">Degrees</a>
              </li>
              <li>
                <a href="#">For Enterprise</a>
              </li>
              <li>
                <a href="#">For Government</a>
              </li>
              <li>
                <a href="#">For Campus</a>
              </li>
              <li>
                <a href="#">Become a Partner</a>
              </li>
              <li>
                <a href="#">Social Impact</a>
              </li>
              <li>
                <a href="#">Free Courses</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom-right">
            <h3>Community</h3>
            <ul>
              <li>
                <a href="#">Learners</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Beta Testers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">The Coursera Podcast</a>
              </li>
              <li>
                <a href="#">Tech Blog</a>
              </li>
              <li>
                <a href="#">Teaching Center</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom-right">
            <h3>More</h3>
            <ul>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Directory</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
              <li>
                <a href="#">Modern Slavery Statement</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom-right">
            <h3>Learn Anywhere</h3>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="Download on the App Store"
                />
              </a>
              <a href="#" className="app-button">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                  alt="GET IT ON Google Play"
                />
              </a>
            </div>
            <div className="b-corp">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Certified_B_Corporation_B_Corp_Logo_2022_Black_RGB.svg/1200px-Certified_B_Corporation_B_Corp_Logo_2022_Black_RGB.svg.png"
                alt="Certified B Corporation"
              />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 Coursera Inc. All rights reserved.</p>
          <div className="social-icons">
            <a href="#">
              <Facebook className="social-icon" />
            </a>
            <a href="#">
              <Twitter className="social-icon" />
            </a>
            <a href="#">
              <Linkedin className="social-icon" />
            </a>
            <a href="#">
              <Instagram className="social-icon" />
            </a>
            <a href="#">
              <Youtube className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
