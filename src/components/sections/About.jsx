export const About = () => {
   const FrontendSkills = [
    "HTML ",
    "CSS ",
    "JavaScript ",
    "React ",
    "TailwindCSS "
   ];

   const BackendSkills = [
    "Node.js ",
    "Express.js ",
    "MongoDB ",
    "SQL ",
    "RESTful APIs "
   ];

     return (
        <section id="about">
            <div className="max-w-3xl mx-auto px-4 text-center justify-center">
                <h2 className="text-3xl font-bold font-mono mb-8 bg-gradient-to-r from-blue-500 to-purple-500
                bg-clip-text text-transparent"
                >
                    About Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-white-500">Frontend</h3>
                        <div className="flex flex-wrap gap-4">
                            {FrontendSkills.map((tech,key)=>(
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >   
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-white-500">Backend</h3>
                        <div className="flex flex-wrap gap-4">
                            {BackendSkills.map((tech,key)=>(
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="grid grid-cols-2 px-100 gap-12">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                 <h3 className="text-xl font-bold font-mono mb-4"
                 >🏫 Education</h3>
                 <ul className=" list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        (B.E) - Velammal College of Engineering and Technology, Madurai
                    </li>
                    <li>
                        (HSC) - Dolphin Matriculation Higher Secondary School, Madurai
                    </li>
                 </ul>
              </div>

              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                 <h3 className="text-xl font-bold font-mono mb-4"
                 >💼 Internship - Hashcode Technologies MERN Stack Intern</h3>
                 <ul className=" list-disc list-inside text-gray-300 space-y-2">
                    <li>
                       Developed responsive web applications using React.js, JavaScript, HTML, and CSS, 
                       focusing on reusable components and clean UI design.
                    </li>
                    <li>
                        Integrated frontend components with backend APIs, improving performance 
                        through effective state management and debugging.
                    </li>
                 </ul>
              </div>
            </div>
        </section>
     );
};