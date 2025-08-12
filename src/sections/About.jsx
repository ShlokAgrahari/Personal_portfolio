import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className="hero-text flex flex-row justify-center items-center flex-nowrap gap-x-2">
        <span>Education</span>
        <span className="text-blue-500">&</span>
        <span>Skills</span>
      </h1>

     {/* education */}
<div className="education max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg text-white space-y-8">
  <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">Education</h2>

  {[
    {
      title: "Motilal Nehru National Institute of Technology",
      year: "2023 - 2027",
      sub: "Bachelor of Technology",
      score: "CPI: 8.64"
    },
    {
      title: "St. Mary's Convent School",
      year: "2023",
      sub: "Senior Secondary Examination, I.C.S.E.",
      score: "Percentage: 95.60%"
    },
    {
      title: "St. Mary's Convent School",
      year: "2021",
      sub: "Higher Secondary Examination, I.C.S.E.",
      score: "Percentage: 96.83%"
    }
  ].map((edu, index) => (
    <div
      key={index}
      className="bg-white/10 p-6 rounded-lg shadow-md transform transition-all duration-500 ease-in-out hover:scale-[1.03]"
      style={{ willChange: "transform" }}
    >
      <p className="flex justify-between font-semibold text-xl">
        <span>{edu.title}</span>
        <span>{edu.year}</span>
      </p>
      <p className="flex justify-between text-base opacity-80">
        <span>{edu.sub}</span>
        <span>{edu.score}</span>
      </p>
    </div>
  ))}
</div>


<div className="skills max-w-4xl m-4 mx-auto p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg text-white">
  <h2 className="text-3xl font-bold border-b border-gray-700 pb-2 mb-6">Skills</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* First column */}
    <div className="space-y-6">
      {/* Programming Languages */}
      <div>
        <h3 className="text-xl font-semibold text-blue-400 mb-2">Programming Languages</h3>
        <p>C++, Python, JavaScript, SQL</p>
      </div>

      {/* Web Development */}
      <div>
        <h3 className="text-xl font-semibold text-blue-400 mb-2">Web Development</h3>
        <p>React.js, Next.js, Node.js, Express.js</p>
      </div>

      {/* Databases */}
      <div>
        <h3 className="text-xl font-semibold text-blue-400 mb-2">Databases</h3>
        <p>MongoDB, PostgreSQL, MySQL</p>
      </div>
    </div>

    {/* Second column */}
    <div className="space-y-6">
      {/* Tools & Platforms */}
      <div>
        <h3 className="text-xl font-semibold text-blue-400 mb-2">Tools & Platforms</h3>
        <p>GitHub, VS Code, Postman</p>
      </div>

      {/* Machine Learning & Data Science */}
      <div>
        <h3 className="text-xl font-semibold text-blue-400 mb-2">Machine Learning & Data Science</h3>
        <p>Pandas,Scikit-Learn,Supervised learning,Model Evaluation</p>
      </div>

      {/* Areas of Interest */}
      <div>
        <h3 className="text-xl font-semibold text-blue-400 mb-2">Areas of Interest</h3>
        <p>Full-stack Development, Competitive Programming, Applied Machine Learning</p>
      </div>
    </div>
  </div>
</div>




    </div>
  )
}

export default About
