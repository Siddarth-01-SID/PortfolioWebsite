import { Mail, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 via-purple-50/30 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-300 to-black/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-scale-pulse"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-purple-100 text-purple-700 rounded-full mb-6 animate-fade-in">
            <Sparkles size={18} />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-purple-600 mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Let's Work Together
          </h2>
          
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <a
              href="mailto:sidh.sharma2001@gmail.com"
              className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-black to-gray-800 text-white rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden hover:from-purple-600 hover:to-black"
            >
              <Mail size={22} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 font-medium">Email Me</span>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200 animate-fade-in">
          <p className="text-gray-500">
            © 2025 Siddarth Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
