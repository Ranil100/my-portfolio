
export const Home = () => {

    return (
        <section 
        id="Home" 
        className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6 bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-purple-600 leading-right">
                    Hi,I'm Ranil
                </h1>
                <h2 className="text-white-400 text-lg mb-8 max-w-lg mx-auto">
                    A Passionate Full-Stack Developer 🙂 
                    | Software Engineer 💻 
                    | AI Enthusiast 🤖 
                </h2>
                <div className="flex justify-center items-center gap-6 mt-8">
                    <a href="https://www.linkedin.com/in/ranil-ece53/" className="px-8 py-3 rounded-full bg-blue-500 backdrop-blur-md text-white font-semibold hover:scale-105 transition">
                        Resume
                    </a>

                    <a href="#contact" className="px-8 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition transform hover:scale-105" >
                        Contact Me
                    </a>
                </div>
            </div>  
        </section>
    );
};