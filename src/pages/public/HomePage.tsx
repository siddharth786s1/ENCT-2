import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            filter: "brightness(0.6)"
          }}
        ></div>
        
        {/* Content */}
        <div className="container-custom mx-auto relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Empowering Minds, <br className="hidden md:block" />
              <span className="text-accent-500">Engineering</span> the Future
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join ENCT and be part of a community dedicated to excellence in engineering education and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/admissions" className="btn btn-primary px-8 py-3 text-lg">
                Apply Now
              </Link>
              <Link to="/about" className="btn btn-outline text-white border-white hover:bg-white/10 px-8 py-3 text-lg">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronRight size={30} className="rotate-90" />
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">45+</h3>
              <p className="text-neutral-700">Years of Excellence</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">150+</h3>
              <p className="text-neutral-700">Faculty Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">5,000+</h3>
              <p className="text-neutral-700">Students Enrolled</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">98%</h3>
              <p className="text-neutral-700">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-primary-500 mb-4">
                  Welcome to ENCT
                </h2>
                <p className="text-lg text-neutral-700 mb-6">
                  Established in 1975, ENCT has been at the forefront of engineering education for over four decades. 
                  We are committed to providing a holistic educational experience that prepares students for the challenges 
                  of the modern technological landscape.
                </p>
                <p className="text-lg text-neutral-700 mb-6">
                  Our institution is renowned for its cutting-edge research facilities, distinguished faculty, 
                  and industry-aligned curriculum that ensures our graduates are well-equipped for successful careers.
                </p>
                <Link to="/about" className="btn btn-primary inline-flex items-center">
                  Discover Our Story <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="ENCT Campus" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="section bg-white">
        <div className="container-custom mx-auto">
          <div className="section-title">
            <h2>Our Academic Programs</h2>
            <p>Discover our diverse range of undergraduate and graduate programs designed to prepare you for success in your chosen field.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="mb-4 text-primary-500">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Computer Science & Engineering</h3>
              <p className="text-neutral-600 mb-4">
                Learn cutting-edge programming, algorithms, artificial intelligence, and software development principles.
              </p>
              <Link to="/departments/computer-science" className="text-primary-500 hover:text-primary-600 inline-flex items-center font-medium">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
            
            {/* Program 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="mb-4 text-primary-500">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Electrical Engineering</h3>
              <p className="text-neutral-600 mb-4">
                Study power systems, electronics, control systems, and telecommunications in our state-of-the-art labs.
              </p>
              <Link to="/departments/electrical" className="text-primary-500 hover:text-primary-600 inline-flex items-center font-medium">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
            
            {/* Program 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="mb-4 text-primary-500">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Mechanical Engineering</h3>
              <p className="text-neutral-600 mb-4">
                Explore thermodynamics, mechanics, manufacturing processes, and mechanical design.
              </p>
              <Link to="/departments/mechanical" className="text-primary-500 hover:text-primary-600 inline-flex items-center font-medium">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/departments" className="btn btn-outline">
              View All Programs
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-primary-500 text-white">
        <div className="container-custom mx-auto">
          <div className="section-title">
            <h2 className="text-white">Why Choose ENCT?</h2>
            <p className="text-primary-100">Discover what sets us apart and makes ENCT a leading institution for engineering education.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-accent-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accredited Programs</h3>
              <p className="text-primary-100">
                All our programs are accredited by national and international engineering education bodies.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-accent-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
              <p className="text-primary-100">
                Learn from industry experts and researchers with extensive academic and professional experience.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={28} className="text-accent-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
              <p className="text-primary-100">
                Access state-of-the-art laboratories, workshops, and research centers equipped with the latest technology.
              </p>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={28} className="text-accent-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Connections</h3>
              <p className="text-primary-100">
                Benefit from our strong ties with leading companies for internships, projects, and job placements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* News & Events Section */}
      <section className="section bg-white">
        <div className="container-custom mx-auto">
          <div className="section-title">
            <h2>Latest News & Events</h2>
            <p>Stay updated with the latest happenings, announcements, and upcoming events at ENCT.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Research Symposium" 
                className="w-full h-48 object-cover mb-4"
              />
              <div className="p-4">
                <span className="text-sm text-primary-500 font-medium">July 15, 2025</span>
                <h3 className="text-xl font-bold my-2">Annual Research Symposium</h3>
                <p className="text-neutral-600 mb-4">
                  Join us for the Annual Research Symposium showcasing groundbreaking research by our faculty and students.
                </p>
                <Link to="/news-events/1" className="text-primary-500 hover:text-primary-600 inline-flex items-center font-medium">
                  Read More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            {/* News 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Industry Partnership" 
                className="w-full h-48 object-cover mb-4"
              />
              <div className="p-4">
                <span className="text-sm text-primary-500 font-medium">June 28, 2025</span>
                <h3 className="text-xl font-bold my-2">New Industry Partnership</h3>
                <p className="text-neutral-600 mb-4">
                  ENCT partners with TechCorp to provide enhanced internship and employment opportunities for students.
                </p>
                <Link to="/news-events/2" className="text-primary-500 hover:text-primary-600 inline-flex items-center font-medium">
                  Read More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            {/* News 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Workshop Series" 
                className="w-full h-48 object-cover mb-4"
              />
              <div className="p-4">
                <span className="text-sm text-primary-500 font-medium">August 5, 2025</span>
                <h3 className="text-xl font-bold my-2">Summer Workshop Series</h3>
                <p className="text-neutral-600 mb-4">
                  Enroll in our summer workshops covering AI, robotics, renewable energy, and more cutting-edge topics.
                </p>
                <Link to="/news-events/3" className="text-primary-500 hover:text-primary-600 inline-flex items-center font-medium">
                  Read More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/news-events" className="btn btn-outline">
              View All News & Events
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey at ENCT?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards a successful career in engineering and technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/admissions" className="btn btn-accent px-8 py-3 text-lg">
                Apply Now
              </Link>
              <Link to="/contact" className="btn text-white border-white hover:bg-white/10 px-8 py-3 text-lg">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;