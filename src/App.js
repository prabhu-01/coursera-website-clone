import { Search, ChevronDown, ChevronRight, Menu } from 'lucide-react'
import "./App.css"
import brandImage from "./Assets/brand-image.png"

export default function CourseraHomepage() {
  return (
    <div className="coursera-homepage">
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            {/* Text logo instead of image */}
            <div className="text-logo">Coursetera</div>
            <nav className="desktop-nav">
              <button className="nav-item">
                Explore <ChevronDown className="icon-small" />
              </button>
              <button className="nav-item">
                Find your New Career <ChevronDown className="icon-small" />
              </button>
              <button className="nav-item">For Enterprise</button>
              <button className="nav-item">For Universities</button>
            </nav>
          </div>
          <div className="header-right">
            <div className="search-container">
              <Search className="search-icon" />
              <input type="text" placeholder="What do you want to learn?" className="search-input" />
            </div>
            <button className="btn-secondary">Log In</button>
            <button className="btn-primary">Join for Free</button>
            <button className="mobile-menu-btn">
              <Menu className="icon-medium" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-title">Learn without limits</div>
            <p>
              Start, switch, or advance your career with more than 10,000 courses, Professional Certificates, and
              degrees from world-class universities and companies.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary btn-large">Join For Free</button>
              <button className="btn-secondary btn-large">Try Coursetera for Business</button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={brandImage}
              alt="Student learning"
              className="circle-image"
            />
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
          <p>We collaborate with 350+ leading universities and companies</p>
          <div className="partner-logos">
            <div className="partner-logo">
              <img
                src="https://static.cdnlogo.com/logos/u/49/university-of-cambridge.png"
                alt="Cambridge University"
              />
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

        {/* Role Cards Section */}
        <section className="role-section">
          <h2>Choose your role</h2>
          <p>Gain the knowledge and skills you need to advance.</p>
          <div className="role-cards">
            <div className="role-card">
              <div className="role-card-header">
                <span className="role-level">Beginner</span>
                <span className="role-popular">Popular</span>
                <span className="role-software">Software E</span>
              </div>
              <h3>Data Analyst</h3>
              <p>
                A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to
                analyze trends and provide insights for decisions.
              </p>
              <button className="btn-outline">Explore all roles</button>
            </div>
            <div className="role-card">
              <div className="role-card-header">
                <span className="role-level">Beginner</span>
                <span className="role-popular">Popular</span>
                <span className="role-software">Software E</span>
              </div>
              <h3>Data Scientist</h3>
              <p>
                A Data Scientist analyzes large datasets to uncover insights, using statistics, machine learning, and
                visualization to inform business strategies.
              </p>
              <button className="btn-outline">Explore all roles</button>
            </div>
            <div className="role-card">
              <div className="role-card-header">
                <span className="role-level">Beginner</span>
                <span className="role-popular">Popular</span>
                <span className="role-software">Software E</span>
              </div>
              <h3>Cyber Security Analyst</h3>
              <p>
                A Cyber Security Analyst monitors IT systems, analyzes threats, finds vulnerabilities, and implements
                measures to protect data from cyber attacks.
              </p>
              <button className="btn-outline">Explore all roles</button>
            </div>
          </div>
          <div className="section-footer">
            <button className="btn-text">Show more roles</button>
            <button className="btn-primary">View all</button>
          </div>
        </section>

        {/* Popular Certificates Section */}
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

        {/* GenAI Section */}
        <section className="genai-section">
          <div className="section-header">
            <h2>Get started with GenAI</h2>
            <p>Identify, develop, and execute impactful GenAI business strategies.</p>
          </div>
          <div className="genai-container">
            <div className="genai-cards">
              <div className="genai-card">
                <div className="genai-card-tags">
                  <span className="tag">New</span>
                  <span className="tag">Beginner</span>
                  <span className="tag">Popular Tools</span>
                </div>
                <div className="genai-provider">
                  <div className="provider-icon">V</div>
                  <span>Vanderbilt University</span>
                </div>
                <h3>Agentic AI and AI Agents for Leaders</h3>
                <span className="certificate-type">Specialization</span>
              </div>
              <div className="genai-card">
                <div className="genai-card-tags">
                  <span className="tag">Intermediate</span>
                  <span className="tag">Popular</span>
                </div>
                <div className="genai-provider">
                  <div className="provider-icon">MS</div>
                  <span>Microsoft</span>
                </div>
                <h3>Microsoft AI & ML Engineering</h3>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
            <div className="genai-image">
              <img
                src="https://www.technewsworld.com/wp-content/uploads/sites/3/2023/03/AI-chip.jpg"
                alt="GenAI"
              />
            </div>
          </div>
          <div className="section-footer">
            <button className="btn-text">
              View all GenAI <ChevronRight className="icon-small" />
            </button>
          </div>
        </section>

        {/* New on Coursera Section */}
        <section className="new-section">
          <div className="section-header">
            <h2>New on Coursetera</h2>
            <p>Explore our newest programs, focused on delivering in-demand skills.</p>
          </div>
          <div className="new-cards">
            <div className="new-card purple">
              <div className="new-card-content">
                <div className="new-provider">
                  <div className="provider-icon">DL</div>
                  <span>DeepLearning.AI</span>
                </div>
                <h3>DeepLearning.AI Data Analytics</h3>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
            <div className="new-card pink">
              <div className="new-card-content">
                <div className="new-provider">
                  <div className="provider-icon">C</div>
                  <span>Coursetera</span>
                </div>
                <h3>UX Design Toolkit</h3>
                <span className="certificate-type">Professional Certificate</span>
                <div className="free-badge">100% Free</div>
              </div>
            </div>
            <div className="new-card blue">
              <div className="new-card-content">
                <div className="new-provider">
                  <div className="provider-icon">G</div>
                  <span>Google</span>
                </div>
                <h3>Google Cloud Computing</h3>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
            <div className="new-card green">
              <div className="new-card-content">
                <div className="new-provider">
                  <div className="provider-icon">M</div>
                  <span>Meta</span>
                </div>
                <h3>Meta Front-End Developer</h3>
                <span className="certificate-type">Professional Certificate</span>
              </div>
            </div>
          </div>
          <div className="section-footer">
            <button className="btn-text">Show 8 more</button>
            <button className="btn-primary">View all</button>
          </div>
        </section>

        {/* Free Courses Section */}
        <section className="free-courses-section">
          <div className="section-header">
            <h2>Start learning with free courses</h2>
            <p>Explore free online courses from the world's top universities and companies.</p>
          </div>
          <div className="free-course-cards">
            <div className="free-course-card">
              <div className="free-badge">Free</div>
              <div className="free-course-image">
                <img
                  src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="AI in National Security"
                />
              </div>
              <div className="free-course-content">
                <div className="free-course-provider">
                  <div className="provider-icon">SCS</div>
                  <span>Special Competitive Studies...</span>
                </div>
                <h3>AI in National Security: Integrating Artificial Intelligence into Public Sector Missions</h3>
                <span className="course-type">Course</span>
              </div>
            </div>
            <div className="free-course-card">
              <div className="free-badge">Free</div>
              <div className="free-course-image">
                <img
                  src="https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                  alt="Open Source Models with Hugging Face"
                />
              </div>
              <div className="free-course-content">
                <div className="free-course-provider">
                  <div className="provider-icon">DL</div>
                  <span>DeepLearning.AI</span>
                </div>
                <h3>Open Source Models with Hugging Face</h3>
                <span className="course-type">Project</span>
              </div>
            </div>
            <div className="free-course-card">
              <div className="free-badge">Free</div>
              <div className="free-course-image">
                <img
                  src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Python Basics"
                />
              </div>
              <div className="free-course-content">
                <div className="free-course-provider">
                  <div className="provider-icon">UM</div>
                  <span>University of Michigan</span>
                </div>
                <h3>Programming for Everybody (Getting Started with Python)</h3>
                <span className="course-type">Course</span>
              </div>
            </div>
            <div className="free-course-card">
              <div className="free-badge">Free</div>
              <div className="free-course-image">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80"
                  alt="Excel Skills"
                />
              </div>
              <div className="free-course-content">
                <div className="free-course-provider">
                  <div className="provider-icon">MU</div>
                  <span>Macquarie University</span>
                </div>
                <h3>Excel Skills for Business: Essentials</h3>
                <span className="course-type">Course</span>
              </div>
            </div>
          </div>
          <div className="section-footer">
            <button className="btn-text">Show 8 more</button>
            <button className="btn-primary">View all</button>
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
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
                  src="https://images.unsplash.com/photo-1581092921461-7031e8fbc93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
            <h2>Find a top degree that fits your life</h2>
            <p>Breakthrough pricing on 100% online degrees from top universities.</p>
          </div>
          <div className="degree-cards">
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Bachelor of Science in Computer Science"
                />
              </div>
              <div className="degree-content">
                <div className="degree-provider">
                  <span>Birla Institute of Technology &...</span>
                </div>
                <h3>Bachelor of Science in Computer Science</h3>
                <button className="btn-outline">Earn a degree</button>
                <span className="degree-type">Degree</span>
              </div>
            </div>
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80"
                  alt="Bachelor of Science in Data Science & AI"
                />
              </div>
              <div className="degree-content">
                <div className="degree-provider">
                  <span>Indian Institute of Technology...</span>
                </div>
                <h3>Bachelor of Science in Data Science & AI</h3>
                <button className="btn-outline">Earn a degree</button>
                <span className="degree-type">Degree</span>
              </div>
            </div>
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                  alt="Bachelor of Science in Computer Science"
                />
              </div>
              <div className="degree-content">
                <div className="degree-provider">
                  <span>University of London</span>
                </div>
                <h3>Bachelor of Science in Computer Science</h3>
                <button className="btn-outline">Earn a degree</button>
                <span className="degree-type">Degree</span>
              </div>
            </div>
            <div className="degree-card">
              <div className="degree-image">
                <img
                  src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Master of Applied Data Science"
                />
              </div>
              <div className="degree-content">
                <div className="degree-provider">
                  <span>University of Michigan</span>
                </div>
                <h3>Master of Applied Data Science</h3>
                <button className="btn-outline">Earn a degree</button>
                <span className="degree-type">Degree</span>
              </div>
            </div>
          </div>
          <div className="section-footer">
            <button className="btn-text">Show 8 more</button>
            <button className="btn-primary">View all</button>
          </div>
          <p className="degree-disclaimer">
            Each university determines admission and the number of pre-approved prior learning credits that may count
            toward the degree requirements according to institutional policies, which may consider any existing credits
            you may have.
          </p>
        </section>

        {/* Explore Categories Section */}
        <section className="categories-section">
          <h2>Explore Coursetera</h2>
          <div className="categories-grid">
            <div className="category-item">
              <h3>Data Science</h3>
              <p>425 courses</p>
            </div>
            <div className="category-item">
              <h3>Business</h3>
              <p>1095 courses</p>
            </div>
            <div className="category-item">
              <h3>Computer Science</h3>
              <p>668 courses</p>
            </div>
            <div className="category-item">
              <h3>Health</h3>
              <p>471 courses</p>
            </div>
            <div className="category-item">
              <h3>Social Sciences</h3>
              <p>401 courses</p>
            </div>
            <div className="category-item">
              <h3>Personal Development</h3>
              <p>137 courses</p>
            </div>
            <div className="category-item">
              <h3>Arts and Humanities</h3>
              <p>338 courses</p>
            </div>
            <div className="category-item">
              <h3>Physical Science and Engineering</h3>
              <p>413 courses</p>
            </div>
            <div className="category-item">
              <h3>Language Learning</h3>
              <p>150 courses</p>
            </div>
            <div className="category-item">
              <h3>Information Technology</h3>
              <p>145 courses</p>
            </div>
            <div className="category-item">
              <h3>Math and Logic</h3>
              <p>70 courses</p>
            </div>
          </div>
        </section>

        {/* Learner Outcomes Section */}
        <section className="outcomes-section">
          <div className="outcomes-content">
            <h2>Learner outcomes on Coursetera</h2>
            <p>
              77% of learners report career benefits, such as new skills, increased pay, and new job opportunities. 2023
              Coursetera Learner Outcomes Report
            </p>
            <button className="btn-primary">Join for Free</button>
          </div>
          <div className="outcomes-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Learner outcomes"
            />
          </div>
        </section>

        {/* Community Section */}
        <section className="community-section">
          <h2>From the Coursetera community</h2>
          <p>168+ million people have already joined Coursetera</p>
          <div className="testimonials">
            <div className="testimonial">
              <div className="testimonial-image">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Kenia R."
                  className="circle-image"
                />
              </div>
              <h3>Kenia R.</h3>
              <p>United States</p>
              <p className="testimonial-text">
                "Being a mother - especially a working mother means I'm constantly trying to juggle my schedule, my
                kids' schedules, and work. I am very grateful for the flexible and remote learning programs that
                Coursetera has to offer."
              </p>
            </div>
            <div className="testimonial">
              <div className="testimonial-image">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="James L."
                  className="circle-image"
                />
              </div>
              <h3>James L.</h3>
              <p>United Kingdom</p>
              <p className="testimonial-text">
                "The courses on Coursetera have been instrumental in helping me transition to a new career in data
                science. The flexibility to learn at my own pace while working full-time was exactly what I needed."
              </p>
            </div>
            <div className="testimonial">
              <div className="testimonial-image">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Priya M."
                  className="circle-image"
                />
              </div>
              <h3>Priya M.</h3>
              <p>India</p>
              <p className="testimonial-text">
                "I completed three specializations on Coursetera and was able to use those credentials to land a job at
                a tech company. The skills I learned were directly applicable to my daily work."
              </p>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section className="business-section">
          <div className="business-logos">
            <div className="business-logo">
              <img
                src="https://images.unsplash.com/photo-1526387780285-a63d85d8e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="L'ORÉAL"
              />
            </div>
            <div className="business-logo">
              <img
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="P&G"
              />
            </div>
            <div className="business-logo">
              <img
                src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="TATA"
              />
            </div>
            <div className="business-logo">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                alt="DANONE"
              />
            </div>
            <div className="business-logo">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                alt="Capgemini"
              />
            </div>
            <div className="business-logo">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                alt="PETROBRAS"
              />
            </div>
            <div className="business-logo">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                alt="Reliance"
              />
            </div>
          </div>
          <div className="business-content">
            <h2>Drive your business forward by empowering your talent</h2>
            <p>
              Train teams with industry-leading experts and universities, enhanced by AI tools and recognized
              credentials.
            </p>
            <div className="business-buttons">
              <button className="btn-primary">Discover Coursetera for Business</button>
              <p>Upskill a small team? Check out Coursetera for Teams</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Take the next step"
            />
          </div>
          <div className="cta-content">
            <h2>Take the next step toward your personal and professional goals with Coursetera.</h2>
            <p>Join now to receive personalized recommendations from the full Coursetera catalog.</p>
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
                <a href="#">Share your Coursetera Learning Story</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <h3>Coursetera</h3>
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
                <a href="#">Coursetera Plus</a>
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
                <a href="#">The Coursetera Podcast</a>
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
                  src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Download on the App Store"
                />
              </a>
              <a href="#" className="app-button">
                <img
                  src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="GET IT ON Google Play"
                />
              </a>
            </div>
            <div className="b-corp">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                alt="Certified B Corporation"
              />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 Coursetera Inc. All rights reserved.</p>
          <div className="social-icons">
            <a href="#">
              <span className="social-icon">f</span>
            </a>
            <a href="#">
              <span className="social-icon">t</span>
            </a>
            <a href="#">
              <span className="social-icon">in</span>
            </a>
            <a href="#">
              <span className="social-icon">ig</span>
            </a>
            <a href="#">
              <span className="social-icon">yt</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
