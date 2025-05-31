import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Compass, Users, BookOpen, Building } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            filter: "brightness(0.6)"
          }}
        ></div>
        <div className="container-custom mx-auto relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">About ENCT</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Shaping the future through excellence in engineering education since 1975
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-primary-500 ml-4">Our Vision</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                To be a globally recognized institution of excellence in engineering education, 
                research, and innovation, producing leaders who contribute to technological 
                advancement and societal well-being.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <Compass className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-primary-500 ml-4">Our Mission</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                To provide world-class engineering education, foster innovative research, 
                promote industry collaboration, and instill ethical values and leadership 
                qualities in our students.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-neutral-50" id="history">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-500 mb-4">Our History</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Since our establishment in 1975, ENCT has been at the forefront of engineering education, 
              consistently evolving to meet the challenges of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">1975</h3>
              <p className="text-neutral-600">Establishment of ENCT with three core departments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">1990</h3>
              <p className="text-neutral-600">Achieved National Accreditation for all programs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">2005</h3>
              <p className="text-neutral-600">Introduced postgraduate programs and research centers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">2025</h3>
              <p className="text-neutral-600">Celebrating 50 years of academic excellence</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white" id="leadership">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-500 mb-4">Our Leadership</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Meet the dedicated team of professionals who guide our institution towards excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src="https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Dr. Sarah Johnson"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">Dr. Sarah Johnson</h3>
              <p className="text-primary-500 font-medium mb-2">Principal Director</p>
              <p className="text-neutral-600">
                Ph.D. in Engineering Management with over 25 years of academic leadership experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Prof. Michael Chen"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">Prof. Michael Chen</h3>
              <p className="text-primary-500 font-medium mb-2">Dean of Academics</p>
              <p className="text-neutral-600">
                Renowned researcher and educator with expertise in emerging technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src="https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Dr. Emily Rodriguez"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">Dr. Emily Rodriguez</h3>
              <p className="text-primary-500 font-medium mb-2">Head of Research</p>
              <p className="text-neutral-600">
                Leading innovator in sustainable engineering and industry collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Accreditation & Recognition</h2>
            <p className="text-primary-100 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by leading accreditation bodies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">National Board of Accreditation</h3>
              <p className="text-primary-100">
                All engineering programs accredited with highest grade
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
              <p className="text-primary-100">
                Certified for quality management systems in education
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">ABET Accreditation</h3>
              <p className="text-primary-100">
                International recognition for engineering programs
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;