"use client";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Forcey LLC",
      location: "Cleveland, USA",
      period: "Jan 2025 – Present",
    },
    {
      role: "Software Developer",
      company: "M Genio",
      location: "Cleveland, USA",
      period: "Jan 2024 – Jan 2025",
    },
    // Add the rest...
    {
      role: "Software Developer",
      company: "M Genio",
      location: "Cleveland, USA",
      period: "Jan 2024 – Jan 2025",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
      <ul className="space-y-4">
        {experiences.map((exp, idx) => (
          <li key={idx} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg">{exp.role}</h3>
            <p className="text-sm text-gray-600">
              {exp.company} – {exp.location} ({exp.period})
            </p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};
