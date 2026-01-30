export const Projects = () => {

    return (
        <section id="project" className="min-h-screen items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold font-mono text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
            </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl border border-blue-500/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h2 className="text-xl font-bold mb-2">Personal Portfolio</h2>
                    <p className="text-gray-400 mb-4">
                       Built a responsive personal portfolio using React, Tailwind CSS, and JavaScript to showcase projects, skills, and resume. Implemented modern UI design, smooth interactions, and optimized performance for all devices.
                    </p>
                    <div>
                        {["React", "Tailwind CSS"].map((tech,key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                           hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >   
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a 
                        href="https://my-portfolio-jgml.vercel.app/"
                        className="px-8 py-3 rounded-full bg-blue-500 backdrop-blur-md text-white font-semibold hover:scale-105 transition-all my-6"
                        >
                            View Project    
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-blue-500/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h2 className="text-xl font-bold mb-2">Sticky Notes</h2>
                    <p className="text-gray-400 mb-4">
                       Developed a Sticky Notes application using HTML, CSS, and JavaScript, allowing users to create, edit, and delete notes with a clean and responsive interface.
                    </p>
                    <div>
                        {["HTML", "CSS", "JavaScript"].map((tech,key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                           hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >   
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a 
                        href="https://book-store-six-pi.vercel.app/"
                        className="px-8 py-3 rounded-full bg-blue-500 backdrop-blur-md text-white font-semibold hover:scale-105 transition-all my-6"
                        >
                            View Project    
                        </a>
                    </div>
                </div><div className="p-6 rounded-xl border border-blue-500/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h2 className="text-xl font-bold mb-2">Student Record Management System</h2>
                    <p className="text-gray-400 mb-4">
                       Developed a Student Record Management System using Java and database in IntelliJ to perform CRUD operations on student data. Implemented database connectivity, data validation, and efficient record management.
                    </p>
                    <div>
                        {["Java", "MySQL"].map((tech,key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                           hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >   
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a 
                        href="https://github.com/Ranil100/Student_Record"
                        className="px-8 py-3 rounded-full bg-blue-500 backdrop-blur-md text-white font-semibold hover:scale-105 transition-all my-6"
                        >
                            View Project    
                        </a>
                    </div>
                </div><div className="p-6 rounded-xl border border-blue-500/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h2 className="text-xl font-bold mb-2">Tic-Tac-Toe</h2>
                    <p className="text-gray-400 mb-4">
                       Built a browser-based Tic Tac Toe game using HTML, CSS, and JavaScript with smooth gameplay, turn-based logic, and instant result display.
                    </p>
                    <div>
                        {["HTML", "CSS", "JavaScript"].map((tech,key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                           hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >   
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a 
                        href="https://tic-tac-toe-eight-orpin.vercel.app/"
                        className="px-8 py-3 rounded-full bg-blue-500 backdrop-blur-md text-white font-semibold hover:scale-105 transition-all my-6"
                        >
                            View Project    
                        </a>
                    </div>
                </div>
                  
              </div>
              
            </div>
            <div className="flex justify-between items-center ml-170 mt-10">
                <a href="https://github.com/Ranil100?tab=repositories"
                className="px-8 py-3 rounded-full bg-green-500 backdrop-blur-md text-white font-semibold hover:scale-105 transition-all my-6">
                Other Projects
                </a>
            </div>
        </section>
    )
}