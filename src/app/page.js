'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Header */}
      <motion.header className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-7xl font-bold">
          Zeeshan Ahmad
        </motion.h1>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="text-3xl mt-4">
          Senior Site Reliability Engineer @ RELEX
        </motion.h2>
        <motion.a
          href="#contact"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-8 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-lg rounded-lg shadow-lg"
        >
          Let’s Connect
        </motion.a>
      </motion.header>

      {/* About Me */}
      <motion.section id="about" className="p-12 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900">
        <h2 className="text-5xl font-bold text-center mb-8">About Me</h2>
        <p className="text-2xl leading-relaxed text-center mx-auto max-w-3xl">
          Keeping servers up more reliably than my ability to resist a good cup of coffee. I’m a Senior Site Reliability Engineer based in Helsinki with over 4 years of experience ensuring high-availability and optimized cloud infrastructure. 
          From troubleshooting and improving system reliability to automating deployments, my goal is to streamline operations and drive seamless performance for organizations at scale.
        </p>
      </motion.section>

      {/* Professional Experience */}
      <motion.section id="experience" className="p-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-900">
        <h2 className="text-5xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-12">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-purple-700">Senior Site Reliability Engineer - RELEX Solutions</h3>
            <p className="mt-2 text-lg">March 2024 - Present | Helsinki, Finland</p>
            <ul className="mt-4 text-xl space-y-2">
              <li>Leading the architecture and optimization of RELEX’s private cloud infrastructure, ensuring high availability and scalability for mission-critical applications.</li>
              <li>Automating complex operational tasks using tools like Terraform, Ansible, and custom CI/CD pipelines to reduce deployment times and improve system resilience.</li>
              <li>Working closely with development teams to enhance system observability and monitoring, using Grafana and Prometheus for advanced metrics and alerting.</li>
              <li>Designed and implemented disaster recovery solutions, ensuring rapid failover and continuity during critical incidents.</li>
              <li>Collaborating with stakeholders to drive infrastructure improvements aligned with business growth, security, and performance requirements.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-purple-700">Site Reliability Engineer - RELEX Solutions</h3>
            <p className="mt-2 text-lg">January 2022 - March 2024 | Helsinki, Finland</p>
            <ul className="mt-4 text-xl space-y-2">
              <li>Ensured the seamless operation of RELEX’s private cloud by managing system health, scaling infrastructure, and resolving critical production issues.</li>
              <li>Implemented automated workflows for continuous integration and delivery, leading to a 40% reduction in deployment time across environments.</li>
              <li>Collaborated with cross-functional teams to troubleshoot complex incidents, minimizing system downtime and improving customer satisfaction.</li>
              <li>Developed a robust monitoring strategy with Splunk, providing detailed insights into application performance, user behavior, and error tracking.</li>
              <li>Proactively updated system components and managed patch deployments, reducing vulnerabilities and ensuring system stability.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-purple-700">Technical Support Engineer - RELEX Solutions</h3>
            <p className="mt-2 text-lg">January 2020 - January 2022 | Helsinki, Finland</p>
            <ul className="mt-4 text-xl space-y-2">
              <li>Provided world-class technical support to customers facing critical production issues, with a focus on fast resolution and root cause analysis.</li>
              <li>Developed comprehensive documentation for troubleshooting processes and workflows, enhancing team efficiency and response times.</li>
              <li>Worked closely with product development teams to improve system performance based on user feedback and real-world data.</li>
              <li>Assisted with global application support requests, resolving issues related to software, hardware, and infrastructure.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section id="education" className="p-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-900">
        <h2 className="text-5xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-12">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-purple-700">Bachelor's in Information Technology - Haaga-Helia University of Applied Sciences</h3>
            <p className="mt-2 text-lg">September 2019 - May 2024 | Helsinki, Finland</p>
            <ul className="mt-4 text-xl space-y-2">
              <li>Focused on cloud computing, network security, and software development.</li>
              <li>Completed projects on cloud infrastructure optimization and automated testing systems, gaining hands-on experience with AWS, Azure, and Kubernetes.</li>
              <li>Developed a deep understanding of DevOps practices and system architecture design.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-purple-700">Full Stack Web Development - Helsinki Business College Oy</h3>
            <p className="mt-2 text-lg">2019 | Helsinki, Finland</p>
            <ul className="mt-4 text-xl space-y-2">
              <li>Learned full stack web development, focusing on both front-end (HTML, CSS, JavaScript) and back-end technologies (Node.js, MongoDB).</li>
              <li>Completed a capstone project that involved building a responsive web application with a custom API and user authentication.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-purple-700">Bachelor’s in Logistics & Supply Chain Management - Tampere University of Applied Sciences</h3>
            <p className="mt-2 text-lg">2016 - 2018 | Tampere, Finland</p>
            <ul className="mt-4 text-xl space-y-2">
              <li>Specialized in optimizing supply chain systems and logistics processes, with a focus on cost reduction and process automation.</li>
              <li>Developed solutions for efficient resource allocation in various industries, including retail and manufacturing.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" className="p-12 bg-gray-100 text-gray-900">
        <h2 className="text-5xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col items-center mt-6 space-y-4">
          <a href="mailto:zeeshanahmad25@hotmail.com" className="text-lg text-blue-600">Email: zeeshanahmad25@hotmail.com</a>
          <a href="https://www.linkedin.com/in/zeeshanahmadsuomi" className="text-lg text-blue-600">LinkedIn: linkedin.com/in/zeeshanahmadsuomi</a>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer className="p-6 bg-black text-white text-center">
        <p className="text-xl">&copy; 2024 Zeeshan Ahmad - Senior Site Reliability Engineer</p>
      </motion.footer>
    </>
  );
}
