"use client";
import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Kent State University",
      period: "Aug 2022 - Dec 2023",
      description:
        "Machine Learning, Advance Communication Networking, Graph and Social Network Analysis",
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "CMR Engineering College",
      period: "Aug 2015 - May 2019",
      description:
        "Machine Learning, Computer Programming, Design Patterns, Linux Programming, Data Mining, Data Structures, Algorithms, Database Management, and Web Technologies.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-10"
    >
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className="border-l-4 border-green-600 pl-4 py-2"
          >
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-green-600 dark:text-green-400 font-medium">
              {edu.institution}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {edu.period}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
