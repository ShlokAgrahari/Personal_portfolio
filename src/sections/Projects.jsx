import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const projects = [
    
    {
      title: "EduVerse –   E-Learning Platform",
      description:
        "Full-stack learning platform with real-time chat, Razorpay payments, Google login, and course management.",
      tech: "React.js, Node.js, Express.js, MongoDB, Zustand, Razorpay, Socket.io, Tailwind CSS",
      github: "https://github.com/yourusername/eduverse"
    },
    {
      title: "DesignEx – Real-Time Design Collaboration Tool",
      description:
        "Collaborative design tool with OTP signup, Google/GitHub login, real-time co-editing, chat, and video calls.",
      tech: "Next.js, MongoDB, Cloudinary, Liveblocks.js, Pusher, Stream Video SDK, Tailwind CSS",
      github: "https://github.com/yourusername/designex"
    },
    {
      title: "Sonar Data Classification – Naïve Bayes Model",
      description:
        "ML model to classify sonar returns as rock or mine with precision, recall, F1-score, and confusion matrix analysis.",
      tech: "Python, Pandas, scikit-learn",
      github: "https://github.com/yourusername/sonar-classification"
    },{
      title: "AI-Powered Chat Assistant for VS Code",
      description:
        "VS Code extension with React-based Webview UI, AI contextual responses, @filename mentions, and chat history.",
      tech: "React, TypeScript, VS Code Webview API, OpenRouter API (DeepSeek), Axios",
      github: "https://github.com/yourusername/vscode-ai-assistant"
    },
    {
      title: "Interactive Web Experience",
      description:
        "Dynamic website with gooey & magnetic effects, smooth scrolling, and scroll-triggered animations.",
      tech: "HTML, CSS, JavaScript, GSAP, Locomotive Scroll",
      github: "https://github.com/yourusername/interactive-web",
      live: "https://shlokagrahari.github.io/Obys_Agency/"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="hero-text text-center mb-8 text-4xl font-bold">My Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-10 rounded-2xl shadow-xl hover:scale-105 transition-transform min-h-[360px] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:scale-110 transition-transform"
                  >
                    <FontAwesomeIcon
  icon={faRocket}
  style={{ color: "#74C0FC" }}
  size="xl"
/>

                  </a>
                )}
              </div>
              <p className="mb-3 text-gray-300">{project.description}</p>
              <p className="text-sm text-blue-400">{project.tech}</p>
            </div>

            <div className="mt-4 flex gap-3 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} style={{ color: "#f7f7f7" } }  size="xl"/>
                  Source Code
                </a>
              )}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
