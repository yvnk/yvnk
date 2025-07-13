"use client";
import { motion } from "framer-motion";

export const Skills = () => {
  const skills = [
    {
      title: "Programming Languages",
      items: ["JavaScript / TypeScript", "Java", "Python", "Dart"],
    },
    {
      title: "Frontend Frameworks",
      items: [
        "React",
        "React Native",
        "Flutter",
        "Next.js",
        "Tailwind CSS",
        "HTML & CSS",
      ],
    },
    {
      title: "Backend & Databases",
      items: ["Firebase", "SQL", "MongoDB", "GraphQL"],
    },
    {
      title: "Tools & Libraries",
      items: [
        "Go-Router",
        "Dio",
        "Axios",
        "React Query",
        "VS Code",
        "Git & Bitbucket",
        "Zustand",
        "Riverpod",
        "Bloc",
        "Provider",
      ],
    },
    {
      title: "Soft Skills",
      items: ["Critical Thinking", "Teamwork", "Communication"],
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>

      {skills.map((skill) => (
        <div key={skill.title}>
          <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
          <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-3 gap-2">
            {skill.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.section>
  );
};
