import { useState } from "react";
import { DetailedProjectCard } from "./DetailedProjectCard";
import caseStudyImage from "figma:asset/0e4469dc51e28af2abac8d7ed58207681824bf3d.png";
import ticketBookingImage from "figma:asset/887a4a59d291a05aba799b5a4b1ef22383097d50.png";

const projects = [
  {
    id: 1,
    title: "Elevating Social Media Usability Through Modern UX",
    category: "User Research",
    categoryColor: "bg-purple-100 text-purple-700",
    image: "https://images.unsplash.com/photo-1657974361095-4d5f3fb381fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNhc2UlMjBzdHVkeXxlbnwxfHx8fDE3NjQyNjkxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "This case study highlights my complete end-to-end design process for creating Yaari, a social media app designed to be more intuitive, engaging, and user-focused. The journey began with thorough user research, where I compared multiple existing social media platforms to identify gaps, pain points, and opportunities for improvement. Based on these insights, I defined clear problem statements and crafted meaningful solutions aligned with both user expectations and product goals. Through structured interviews and well-designed research questions, I gathered valuable feedback that guided the direction of the experience. A detailed competitive analysis helped establish usability standards and uncover areas for differentiation in the market. To ensure the product truly represented real users, I developed User Personas, Empathy Maps, and a complete User Journey Map, capturing motivations, frustrations, and behaviors. To organize the experience, I built the Information Architecture and mapped a clear User Flow. Using a well-defined Design System—including typography, color, UI components, and reusable patterns—I ensured consistency, scalability, and visual harmony. The process concluded with Low-Fidelity Wireframes to outline structure and interactions before transitioning into high-fidelity UI screens. This case study demonstrates my ability to combine research, strategy, and design principles to create a meaningful, user-centered product experience.",
    type: "user-research",
    downloadImage: caseStudyImage,
    downloadImageName: "Case_Study.png",
  },
  {
    id: 2,
    title: "Unified Movie & Event Booking Interface",
    category: "User Interface",
    categoryColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3NjQyNjkxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "I have designed my own website UI called TixFlix, created to deliver a seamless and enjoyable movie and event ticket booking experience from start to finish. The journey begins with a visually engaging pre-landing page that sets the overall tone and showcases the platform's purpose. From there, users are guided into clean and intuitive authentication screens—including login, signup, and password reset—ensuring effortless access for both new and returning users. Once authenticated, users arrive at a thoughtfully structured post-landing page where they can easily explore trending movies, upcoming events, schedules, and nearby venues. The interface prioritizes clarity, quick navigation, and visual hierarchy, allowing users to make decisions confidently. As the journey continues, the seat-selection screen offers a refined, clear, and responsive layout, giving users full control over choosing the perfect spot based on availability, pricing, and seating preference. To enhance the booking experience further, I designed a dedicated beverages and checkout process with smooth interactions and simplified steps, making the final stage of securing tickets feel fast, intuitive, and satisfying. Every screen and interaction throughout TixFlix has been carefully crafted with user needs, accessibility, and usability in mind. Overall, this project represents a complete, user-centered booking experience—combining thoughtful design decisions, functional simplicity, and a cohesive visual identity to create a website UI that feels modern, efficient, and truly enjoyable to use.",
    type: "user-interface",
    downloadImage: ticketBookingImage,
    downloadImageName: "Ticket_Booking_Website.png",
  },
];

type TabType = "all" | "user-research" | "user-interface";

export function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter((project) => project.type === activeTab);

  const tabs: { id: TabType; label: string }[] = [
    { id: "all", label: "All" },
    { id: "user-research", label: "User Research" },
    { id: "user-interface", label: "User Interface" },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-50/20 via-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-scale-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with gradient text */}
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-purple-600 mb-12 text-center animate-fade-in-up">
          Projects
        </h2>

        {/* Tabs with enhanced styling */}
        <div className="flex justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          <div className="inline-flex bg-white rounded-full p-2 shadow-xl border border-gray-100 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full transition-all duration-500 relative overflow-hidden ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-black to-purple-600 text-white shadow-lg shadow-purple-500/50 scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span className="relative z-10">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-purple-600 animate-shimmer"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <DetailedProjectCard
                title={project.title}
                category={project.category}
                categoryColor={project.categoryColor}
                image={project.image}
                description={project.description}
                downloadImage={project.downloadImage}
                downloadImageName={project.downloadImageName}
              />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
