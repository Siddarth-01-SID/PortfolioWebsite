import { Download, Layout, Search, Pen, Layers, Smartphone, Monitor, Figma, Image } from "lucide-react";
import profileImage from "figma:asset/e08f7fe239a2cca78edc0b8a16cc4e0b2912726a.png";
import resumeImage from "figma:asset/1cebfdd0aa4d7bd32a70a9d35f13d4b6b51f152d.png";

const whatIDo = [
  {
    icon: Layout,
    title: "User Interface",
    description: "Crafting pixel-perfect, visually stunning interfaces that engage users",
  },
  {
    icon: Search,
    title: "User Research",
    description: "Understanding user behaviors, needs, and pain points through research",
  },
  {
    icon: Pen,
    title: "Wireframing",
    description: "Creating low-fidelity blueprints to map out structure and flow",
  },
  {
    icon: Layers,
    title: "Prototyping",
    description: "Building interactive prototypes to test and validate design concepts",
  },
  {
    icon: Smartphone,
    title: "App Designing",
    description: "Designing intuitive mobile experiences for iOS and Android platforms",
  },
  {
    icon: Monitor,
    title: "Web Designing",
    description: "Creating responsive, accessible websites that work across all devices",
  },
];

const whatIUse = [
  {
    icon: Figma,
    title: "Figma",
    description: "Primary design and prototyping tool",
  },
  {
    icon: Pen,
    title: "Sketch",
    description: "Vector graphics and interface design",
  },
  {
    icon: Image,
    title: "Adobe Illustrator",
    description: "Creating illustrations and graphics",
  },
  {
    icon: Image,
    title: "Adobe Photoshop",
    description: "Image editing and visual compositing",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-50 to-purple-50/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-scale-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-purple-600 mb-16 text-center animate-fade-in">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Photo */}
          <div className="flex justify-center animate-slide-in-left">
            <div className="relative w-full max-w-md group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700 relative z-10 border-2 border-transparent group-hover:border-purple-300">
                <img
                  src={profileImage}
                  alt="Siddarth Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Description and Button */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-4">
              <p className="text-gray-600">
                I'm Siddarth Sharma, a passionate UI/UX Designer dedicated to crafting thoughtful, intuitive, 
                and visually engaging digital experiences. My work is rooted in empathy, understanding user needs, 
                and transforming ideas into meaningful solutions that balance aesthetics with functionality. 
                I believe great design isn't just beautiful—it solves problems, removes friction, and feels effortless.
              </p>
              <p className="text-gray-600">
                From research and competitive analysis to user flows, wireframes, prototypes, and high-fidelity 
                interfaces, I focus on creating seamless end-to-end experiences. Whether it's designing mobile apps, 
                responsive websites, or product systems, I approach every project with curiosity, clarity, and an 
                attention to detail.
              </p>
              <p className="text-gray-600">
                I enjoy bringing ideas to life through clean layouts, strategic interaction patterns, and consistent 
                design systems that elevate usability while expressing brand identity. My goal is to design products 
                that people love using—not just because they look great, but because they feel natural, purposeful, 
                and human.
              </p>
            </div>
            
            <a 
              href={resumeImage}
              download="Siddarth_Sharma_CV.png"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-purple-600 mb-12 text-center animate-fade-in">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatIDo.map((skill, index) => (
              <div 
                key={skill.title} 
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up border border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-black to-purple-600 text-white rounded-2xl mb-5 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <skill.icon size={28} />
                  </div>
                  <h4 className="text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">{skill.title}</h4>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Use Section */}
        <div>
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-purple-600 mb-12 text-center animate-fade-in">What I Use</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIUse.map((tool, index) => (
              <div 
                key={tool.title} 
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-7 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 text-white rounded-xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-white group-hover:text-gray-900 shadow-lg">
                    <tool.icon size={24} />
                  </div>
                  <h4 className="text-gray-900 mb-1 group-hover:text-white transition-colors duration-300">{tool.title}</h4>
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-sm">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
