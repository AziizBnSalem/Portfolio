import { ArrowDown, ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 pb-32 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/20">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full">
                <span className="block w-4 h-4 rounded-full bg-green-400"></span>
              </div>
            </div>

            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Full-Stack Developer 
                <span className="text-blue-600 dark:text-blue-400"> & Designer</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Building digital experiences with modern technologies. 
                Focused on creating scalable and user-friendly applications.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link 
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Contact Me
                </Link>
              </div>

              <div className="flex justify-center space-x-6 pt-8">
                <a href="https://github.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:your@email.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <a 
              href="#about"
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors animate-bounce"
            >
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['React', 'Node.js', 'Tailwind', 'TypeScript', 'Next.js', 'GraphQL'].map((skill, index) => (
              <div key={index} className="skill-item p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Project One', description: 'A full-stack application built with React and Node.js', link: 'https://github.com' },
              { title: 'Project Two', description: 'An eCommerce site built with Next.js and Tailwind CSS', link: 'https://github.com' },
              { title: 'Project Three', description: 'A blogging platform using GraphQL and React', link: 'https://github.com' }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Link href={project.link} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
                  View Project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            My Experience
          </h2>
          <ul className="space-y-6 max-w-3xl mx-auto">
            {[ 
              { role: 'Full-Stack Developer', company: 'Tech Corp', years: '2020-2023' },
              { role: 'Frontend Developer', company: 'Creative Studio', years: '2018-2020' },
              { role: 'Junior Developer', company: 'Startup Inc.', years: '2016-2018' }
            ].map((exp, index) => (
              <li key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company} ({exp.years})</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <ul className="space-y-6 max-w-3xl mx-auto">
            {[ 
              { degree: 'Bachelor of Science in Computer Science', school: 'University of Tech', years: '2012-2016' },
              { degree: 'Certified Frontend Developer', school: 'FreeCodeCamp', years: '2018' }
            ].map((edu, index) => (
              <li key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300">{edu.school} ({edu.years})</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['AWS Certified Developer', 'Certified Scrum Master', 'Google Developer Expert'].map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-blue-600 dark:bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-sm font-medium text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-6 pt-4">
          <a href="https://github.com" className="hover:text-gray-400">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-400">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" className="hover:text-gray-400">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </footer>
    </div>
  )
}
