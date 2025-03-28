import React, { useState, useEffect, useCallback } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Briefcase,
  User,
  MessageSquare,
  Coffee,
  Heart,
  Globe,
  Instagram,
  MessageCircle,
  Database,
  Cloud,
  Star,
} from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-glow"></div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "glass-effect" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 font-bold text-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">
                ELKA
              </span>
              <span className="text-white">Project</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <NavLink
                href="#about"
                icon={<User className="w-4 h-4" />}
                text="About"
                isActive={activeSection === "about"}
                onClick={handleNavClick}
              />
              <NavLink
                href="#skills"
                icon={<Code className="w-4 h-4" />}
                text="Skills"
                isActive={activeSection === "skills"}
                onClick={handleNavClick}
              />
              <NavLink
                href="#projects"
                icon={<Briefcase className="w-4 h-4" />}
                text="Projects"
                isActive={activeSection === "projects"}
                onClick={handleNavClick}
              />
              <NavLink
                href="#contact"
                icon={<MessageSquare className="w-4 h-4" />}
                text="Contact"
                isActive={activeSection === "contact"}
                onClick={handleNavClick}
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? "opacity-100 h-64" : "opacity-0 h-0"
            } overflow-hidden`}
          >
            <div className="py-4 space-y-2">
              <MobileNavLink
                href="#about"
                icon={<User className="w-5 h-5" />}
                text="About"
                onClick={handleNavClick}
                isActive={activeSection === "about"}
              />
              <MobileNavLink
                href="#skills"
                icon={<Code className="w-5 h-5" />}
                text="Skills"
                onClick={handleNavClick}
                isActive={activeSection === "skills"}
              />
              <MobileNavLink
                href="#projects"
                icon={<Briefcase className="w-5 h-5" />}
                text="Projects"
                onClick={handleNavClick}
                isActive={activeSection === "projects"}
              />
              <MobileNavLink
                href="#contact"
                icon={<MessageSquare className="w-5 h-5" />}
                text="Contact"
                onClick={handleNavClick}
                isActive={activeSection === "contact"}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center z-10 slide-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-glow">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-600">
              ELKA PROJECT
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Front End Developer & UI/UX Enthusiast
          </p>
          <div className="flex justify-center gap-6">
            <SocialLink
              href="https://github.com/qomaraawae"
              icon={<Github />}
            />
            <SocialLink
              href="https://linkedin.com/in/luthfi-komara"
              icon={<Linkedin />}
            />
            <SocialLink
              href="mailto:luthfikomara04@gmail.com"
              icon={<Mail />}
            />
            <SocialLink
              href="https://t.me/qomaraawae"
              icon={<MessageCircle />}
            />
            <SocialLink
              href="https://instagram.com/qomaraawae"
              icon={<Instagram />}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="About Me"
            subtitle="My journey in web development"
            icon={<User className="w-6 h-6" />}
          />
          <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Hi, I'm Luthfi Komara, a front-end developer based in
                Yogyakarta. With a background in Information Systems from
                Universitas Ahmad Dahlan, I combine technical expertise with
                creative problem-solving to build exceptional digital
                experiences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <StatCard
                  icon={<Coffee className="w-6 h-6" />}
                  value="500+"
                  label="Cups of Coffee"
                />
                <StatCard
                  icon={<Code className="w-6 h-6" />}
                  value="4+"
                  label="Projects Completed"
                />
                <StatCard
                  icon={<Heart className="w-6 h-6" />}
                  value="85%"
                  label="Client Satisfaction"
                />
                <StatCard
                  icon={<Star className="w-6 h-6" />}
                  value="3+"
                  label="Years Experience"
                />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="assets/logo192.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-6 glass-effect rounded-2xl">
                <Globe className="w-10 h-10 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Skills & Expertise"
            subtitle="Technologies I work with"
            icon={<Code className="w-6 h-6" />}
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <SkillCard
              icon={<Code className="w-8 h-8" />}
              title="Frontend Development"
              skills={["React.js", "Next.js", "TailwindCSS"]}
            />
            <SkillCard
              icon={<Database className="w-8 h-8" />}
              title="Backend & Database"
              skills={["Node.js", "MySQL", "Firebase"]}
            />
            <SkillCard
              icon={<Cloud className="w-8 h-8" />}
              title="Cloud Services"
              skills={["Firebase", "Supabase", "Cloudinary"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Featured Projects"
            subtitle="Some of my recent work"
            icon={<Briefcase className="w-6 h-6" />}
          />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <ProjectCard
              title="E-Commerce Platform"
              description="A responsive todo app built with React.js and support database with Firebase"
              image="assets/project1.png"
              link="https://terasomah.netlify.app"
              tags={["React.js", "Firebase"]}
            />
            <ProjectCard
              title="Todo Task"
              description="Intuitive task management app with collaborative features"
              image="assets/project3.png"
              link="https://tasktudu.netlify.app"
              tags={["React.js", "Firebase"]}
            />
            <ProjectCard
              title="Dashboard Lost Items"
              description="Real-time management platform with instant finding the items"
              image="assets/project2.png"
              link="https://manageadmin.netlify.app"
              tags={["React.js", "Firebase", "Maps API"]}
            />
            <ProjectCard
              title="Aesthetic Photobooth"
              description="A Creation from myself to develop an idea, but this website is available desktop only"
              image="assets/project4.png"
              link="https://aesphoto.netlify.app"
              tags={["React.js"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Let's Connect"
            subtitle="Get in touch for opportunities or just to say hi"
            icon={<MessageSquare className="w-6 h-6" />}
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <ContactCard
              href="mailto:luthfikomara04@gmail.com"
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              value="luthfikomara04@gmail.com"
            />
            <ContactCard
              href="https://instagram.com/qomaraawae"
              icon={<Instagram className="w-6 h-6" />}
              title="Instagram"
              value="@qomaraawae"
            />
            <ContactCard
              href="https://t.me/qomaraawae"
              icon={<MessageCircle className="w-6 h-6" />}
              title="Telegram"
              value="@qomaraawae"
            />
          </div>
          <div className="mt-16 text-center">
            <a
              href="mailto:luthfikomara04@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-effect hover:bg-white/10 transition-all group"
            >
              <span className="text-lg font-semibold">
                Start a Conversation
              </span>
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">
                  ELKA
                </span>
                Project
              </h3>
              <p className="text-gray-400">
                Creating exceptional digital experiences through innovative
                development solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <FooterLink
                  href="#about"
                  text="About"
                  onClick={handleNavClick}
                />
                <FooterLink
                  href="#skills"
                  text="Skills"
                  onClick={handleNavClick}
                />
                <FooterLink
                  href="#projects"
                  text="Projects"
                  onClick={handleNavClick}
                />
                <FooterLink
                  href="#contact"
                  text="Contact"
                  onClick={handleNavClick}
                />
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Technical Consulting</li>
                <li>Code Review</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Social</h4>
              <div className="flex gap-4">
                <SocialLink
                  href="https://github.com/qomaraawae"
                  icon={<Github />}
                />
                <SocialLink
                  href="https://linkedin.com/in/luthfi-komara"
                  icon={<Linkedin />}
                />
                <SocialLink
                  href="mailto:luthfikomara04@gmail.com"
                  icon={<Mail />}
                />
                <SocialLink
                  href="https://t.me/qomaraawae"
                  icon={<MessageCircle />}
                />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} ELKAProject. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ title, subtitle, icon }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4">
        {icon}
        <span className="text-sm text-gray-300">{subtitle}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">
        {title}
      </h2>
    </div>
  );
}

function NavLink({ href, icon, text, onClick, isActive }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link flex items-center gap-2 ${
        isActive ? "text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function MobileNavLink({ href, icon, text, onClick, isActive }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        isActive
          ? "bg-white/10 text-white"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon p-3 rounded-full glass-effect"
    >
      {icon}
    </a>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="glass-effect rounded-2xl p-6 hover-glow">
      <div className="text-gray-400 mb-4">{icon}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="skill-card glass-effect rounded-2xl p-8">
      <div className="text-gray-400 mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-gray-300">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gray-500 to-gray-300" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, image, link, tags }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="project-card bg-[#1a1a1a]">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-8">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            {title}
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm glass-effect"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

function ContactCard({ href, icon, title, value }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="contact-card glass-effect rounded-2xl p-8">
        <div className="text-gray-400 mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{value}</p>
      </div>
    </a>
  );
}

function FooterLink({ href, text, onClick }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {text}
      </a>
    </li>
  );
}

export default App;
