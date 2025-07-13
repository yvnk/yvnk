"use client";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export default function HomePage() {
  const profile = {
    name: "Venkata Narendra Kumar Yerriboina",
    title: "Experienced Flutter and Web Developer",
    profileSummary: [
      {
        id: 1,
        description:
          "Experienced Flutter and Web Developer with 6+ years of expertise in crafting dynamic and scalable digital solutions.",
      },
      {
        id: 2,
        description:
          "Proficient in front-end technologies, adept at creating visually stunning and responsive web applications.",
      },
      {
        id: 3,
        description:
          "Skilled in utilizing React Native and Flutter for Multi-platform mobile app development, ensuring a consistent and engaging user experience. Proven track record of delivering high-quality projects, collaborating effectively with cross-functional teams.",
      },
      {
        id: 4,
        description:
          "Strong understanding of UI/UX principles, coupled with a commitment to staying updated on industry trends.",
      },
      {
        id: 5,
        description:
          "Excels in translating client requirements into efficient, user-friendly, and innovative solutions.",
      },
    ],
  };
  return (
    <>
      {/* <ThemeToggle /> */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-4xl font-bold">{profile.name}</h1>
            <div className="relative group">
              <a
                href="/Narendra.pdf"
                download
                aria-label="Download Resume"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200 shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Download Resume
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-4 border-l-4 border-r-4 border-gray-800 border-l-transparent border-r-transparent h-0 w-0"></div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-4 dark:text-gray-300 font-bold  underline">
            {profile.title}
          </p>

          <div className="space-y-4 mt-6">
            <h2 className="text-2xl font-bold mb-4">Profile Summary</h2>
            <div className="space-y-4">
              {profile.profileSummary.map((summary) => (
                <motion.p
                  key={summary.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * summary.id }}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {summary.id}. {summary.description}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.section>
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}
