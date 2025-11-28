import { ArrowDown, Linkedin, Facebook, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hello, I am Siddarth";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900/40 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-700 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-scale-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-gray-200 to-purple-400 bg-clip-text text-transparent tracking-tight min-h-[1.2em] animate-fade-in-up">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-purple-400 tracking-wide pb-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            UI/UX Designer
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto pt-3 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Creating intuitive and beautiful digital experiences that put users first. 
            I transform complex problems into elegant, user-friendly solutions.
          </p>
          <div className="flex gap-6 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <a
              href="https://www.linkedin.com/in/siddarth-sharma-854092241/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-black to-gray-800 text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-125 hover:rotate-12 hover:from-purple-600 hover:to-black"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.facebook.com/sidh.sharma2001/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-black to-gray-800 text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-125 hover:rotate-12 hover:from-purple-600 hover:to-black"
            >
              <Facebook size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/_sidd__01/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-black to-gray-800 text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-125 hover:rotate-12 hover:from-purple-600 hover:to-black"
            >
              <Instagram size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        <div className="mt-20 animate-bounce">
          <ArrowDown className="mx-auto text-gray-300 hover:text-purple-400 transition-colors cursor-pointer" size={32} />
        </div>
      </div>
    </section>
  );
}