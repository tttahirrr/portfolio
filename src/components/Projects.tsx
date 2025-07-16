import TypingTitle from './TypingTitle'

const Projects = () => {
  const projects = [
    {
      id: '001',
      name: 'Parking Management System',
      description: 'Full-stack parking management platform for SBU delivering live space availability, reservations, digital permits, & citation payments across 5 user roles',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Mapbox API'],
      status: 'DEPLOYED',
      github: 'https://github.com/antenmanuuel/p4sbu-sbu11/tree/tahir',
      live: 'https://p4sbu-parking-app-8897a44819c2.herokuapp.com/',
      featured: true
    },
    {
      id: '002',
      name: 'Resume Optimization Tool',
      description: 'AI-powered Chrome extension for resume optimization featuring resume analysis, cover letter generation, and ATS compatibilty scoring for job seekers',
      tech: ['FastAPI', 'PostgreSQL', 'Docker', 'Cloud Deployment', 'OpenAI API'],
      status: 'UNDER_PUBLICATION_REVIEW',
      github: 'https://github.com/tttahirrr/CVTweak-AI',
      live: 'https://www.youtube.com/watch?v=3pexKTxxeJI',
      featured: true
    },
    {
      id: '003',
      name: 'Next-Location Prediction Research',
      description: 'Reproduced and extended the REPLAY model for human mobility prediction on Gowalla and Foursquare datasets—combining exploratory data analysis, a PyTorch implementation with flashback and smoothed timestamp embeddings, attention-based and dual-distribution extensions, and lightweight Flask demos',
      tech: ['PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Flask', 'Google Colab'],
      status: 'COMPLETED',
      github: 'https://docs.google.com/document/d/1PncvjuSZ8RYqBiek6ugOSrPZG10Gdfaqc5ggFdw57Ac/edit?tab=t.0#heading=h.j8b0qixj3elr',
      live: null,
      featured: false
    },
    {
      id: '004',
      name: 'AI Browser Agent',
      description: 'Building a browser-based AI agent that autonomously navigates, queries, and summarizes web content in real time using large language models',
      tech: ['TypeScript', 'JavaScript', 'Node.js', 'OpenAI API'],
      status: 'IN_DEVELOPMENT',
      github: 'https://github.com/tahirtuzun/ml-classifier',
      live: null,
      featured: false
    }
  ]

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className={`bg-brutal-gray brutal-border p-6 ${project.featured ? 'brutal-shadow-red' : ''}`}>
      <div className="font-mono">
        {/* Project Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg mb-1">
              PROJECT_{project.id}: "{project.name}"
            </h3>
            <div className="text-sm text-brutal-red">
              STATUS: [{project.status}]
            </div>
          </div>
          {project.featured && (
            <div className="bg-brutal-red text-brutal-black px-2 py-1 text-xs font-bold">
              FEATURED
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-4 text-sm">
          <div className="text-brutal-green mb-2">// DESCRIPTION</div>
          <p>{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="text-brutal-green text-sm mb-2">// TECH_STACK</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="bg-brutal-black text-brutal-white px-2 py-1 text-xs brutal-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-brutal-red transition-none"
          >
            [VIEW_SOURCE]
          </a>
          {project.live && (
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-brutal-red transition-none"
            >
              [LIVE_DEMO]
            </a>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-20 bg-brutal-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <TypingTitle text="PROJECT_PORTFOLIO" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center">
          <a 
            href="https://github.com/tttahirrr"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn font-mono"
          >
            [VIEW_ALL_ON_GITHUB]
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects 