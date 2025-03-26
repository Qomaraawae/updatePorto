import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
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
} from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e) => {
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
  };

  const handleChevronClick = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl">
              <span className="text-blue-400">ELKA</span>Project
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                href="#about"
                icon={<User className="w-4 h-4" />}
                text="About"
                onClick={handleNavClick}
              />
              <NavLink
                href="#skills"
                icon={<Code className="w-4 h-4" />}
                text="Skills"
                onClick={handleNavClick}
              />
              <NavLink
                href="#projects"
                icon={<Briefcase className="w-4 h-4" />}
                text="Projects"
                onClick={handleNavClick}
              />
              <NavLink
                href="#contact"
                icon={<MessageSquare className="w-4 h-4" />}
                text="Contact"
                onClick={handleNavClick}
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <div
                    className={`absolute inset-0 transform transition-transform duration-300 ${
                      isMenuOpen
                        ? "rotate-180 opacity-0"
                        : "rotate-0 opacity-100"
                    }`}
                  >
                    <Menu className="w-6 h-6" />
                  </div>
                  <div
                    className={`absolute inset-0 transform transition-transform duration-300 ${
                      isMenuOpen
                        ? "rotate-0 opacity-100"
                        : "-rotate-180 opacity-0"
                    }`}
                  >
                    <X className="w-6 h-6" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 max-h-[400px] mobile-menu-enter"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm shadow-lg">
            <MobileNavLink
              href="#about"
              icon={<User className="w-4 h-4" />}
              text="About"
              onClick={handleNavClick}
            />
            <MobileNavLink
              href="#skills"
              icon={<Code className="w-4 h-4" />}
              text="Skills"
              onClick={handleNavClick}
            />
            <MobileNavLink
              href="#projects"
              icon={<Briefcase className="w-4 h-4" />}
              text="Projects"
              onClick={handleNavClick}
            />
            <MobileNavLink
              href="#contact"
              icon={<MessageSquare className="w-4 h-4" />}
              text="Contact"
              onClick={handleNavClick}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen relative flex flex-col justify-center items-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            ELKA PROJECT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Front End Developer & UI/UX Enthusiast
          </p>
          <div className="flex gap-6 justify-center">
            <SocialLink href="https://github.com" icon={<Github />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
            <SocialLink href="mailto:elka@example.com" icon={<Mail />} />
            <SocialLink
              href="https://t.me/elkaproject"
              icon={<MessageCircle />}
            />
            <SocialLink
              href="https://instagram.com/elkaproject"
              icon={<Instagram />}
            />
          </div>
        </div>
        <div
          onClick={handleChevronClick}
          className="absolute bottom-8 animate-bounce w-8 h-8 cursor-pointer hover:text-blue-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-full h-full" />
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi, I'm Luthfi Komara, a front-end developer from Yogyakarta
                with a strong passion for crafting modern and interactive web
                experiences. I hold a degree in Information Systems from
                Universitas Ahmad Dahlan Yogyakarta.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                As a beginner in front-end development, I'm continuously
                learning and expanding my skills in programming languages and
                frameworks. My journey started with a deep curiosity about how
                the web works, and now I'm focused on mastering new technologies
                to build seamless and engaging digital solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Stat icon={<Coffee />} value="500+" label="Cups of Coffee" />
                <Stat icon={<Code />} value="4+" label="Projects Completed" />
                <Stat
                  icon={<Heart />}
                  value="85%"
                  label="Client Satisfaction"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="assets/logo192.png"
                alt="Developer workspace"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 p-4 rounded-lg shadow-lg">
                <Globe className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <SkillCard
              icon={<Code />}
              title="Frontend Development"
              items={["React.js", "Next.js"]}
            />
            <SkillCard
              icon={<Database />}
              title="Databases"
              items={["MySQL"]}
            />
            <SkillCard
              icon={<Cloud />}
              title="Cloud Services"
              items={["Firebase", "Supabase", "Cloudinary"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://terasomah.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectCard
                title="E-Commerce Platform"
                description="A modern e-commerce solution built with React, Node.js, and MongoDB"
                image="assets/project1.png"
                tags={["React.js", "Firebase"]}
              />
            </a>
            <a
              href="https://tasktudu.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectCard
                title="Todo Task"
                description="A responsive todo app built with React.js and support database with Firebase"
                image="assets/project3.png"
                tags={["React.js", "Firebase"]}
              />
            </a>
            <a
              href="https://manageadmin.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectCard
                title="Dashboard Lost Items"
                description="Real-time management platform with instant finding the items"
                image="assets/project2.png"
                tags={["React.js", "Firebase", "Cloudinary"]}
              />
            </a>
            <a
              href="https://aesphoto.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectCard
                title="Aesthetic Photobooth"
                description="a creation from myself to develop an idea, but this website is available desktop only"
                image="assets/project4.png"
                tags={["React.js"]}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Email ContactCard */}
            <a
              href="mailto:luthfikomara04@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactCard
                icon={<Mail />}
                title="Email"
                value="luthfikomara04@gmail.com"
              />
            </a>

            {/* Instagram ContactCard */}
            <a
              href="https://www.instagram.com/qomaraawae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactCard
                icon={<Instagram />}
                title="Instagram"
                value="@qomaraawae"
              />
            </a>

            {/* Telegram ContactCard */}
            <a
              href="https://t.me/qomaraawae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactCard
                icon={<MessageCircle />}
                title="Telegram"
                value="@qomaraawae"
              />
            </a>
          </div>
          <a
            href="mailto:luthfikomara04@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-colors px-8 py-3 rounded-full font-semibold"
          >
            Get in Touch
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                <span className="text-blue-400">ELKA</span>Project
              </h3>
              <p className="text-gray-400">
                Creating exceptional digital experiences through innovative
                development solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    onClick={handleNavClick}
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={handleNavClick}
                    className="hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={handleNavClick}
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={handleNavClick}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <SocialLink
                  href="https://github.com/qomaraawae"
                  icon={<Github />}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/luthfi-komara-729026347/"
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
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} ELKAProject. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, icon, text, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors relative group"
    >
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      {icon}
      {text}
    </a>
  );
}

function MobileNavLink({ href, icon, text, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2"
    >
      {icon}
      {text}
    </a>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full hover:bg-gray-800 transition-colors"
    >
      {icon}
    </a>
  );
}

function ProjectCard({ title, description, image, tags }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-800 hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          {title}
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg">
      <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">{icon}</div>
      <div>
        <div className="font-bold text-xl">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  );
}

function SkillCard({ icon, title, items }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all">
      <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="font-bold mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactCard({ icon, title, value }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl flex items-center gap-4">
      <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">{icon}</div>
      <div className="text-left">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400">{value}</p>
      </div>
    </div>
  );
}

function Database(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function Cloud(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

export default App;
