export const Contact = () => {
  
    return (
        <section 
        id="contact">
            <div className="max-w-5xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold font-mono text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <div className="flex justify-center">
                    <a 
                        href="mailto:ranilk691@gmail.com"
                        className="text-blue-500"
                    >
                        📩 ranilk691@gmail.com
                    </a>
                </div>
                <div className="flex justify-center mt-4">
                      <a 
                        href="https://www.linkedin.com/in/ranil-ece53/"
                        className="text-blue-500"
                    >
                        🔗‍️ https://www.linkedin.com/in/ranil-ece53/
                    </a>
                </div>
                <div className="flex justify-center mt-4">
                   <a 
                        className="text-blue-500"
                    >
                         📱 +91-8825985792
                    </a>
                </div>
                 <div className="flex justify-center mt-4">
                   <a 
                        className="text-blue-500"
                    >
                       📍 Madurai, Tamil Nadu, India
                    </a>
                </div>
            </div>
        </section>
    )

}