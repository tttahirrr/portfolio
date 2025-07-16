import TypingTitle from './TypingTitle'

const Skills = () => {

  return (
    <section id="skills" className="py-20 bg-brutal-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <TypingTitle text="TECHNICAL_STACK" />
        </div>

        {/* Skills JSON Display */}
        <div className="mb-12">
          <div className="bg-brutal-gray brutal-border p-6 max-w-4xl mx-auto">
            <div className="font-mono text-sm">
              <div className="text-brutal-green">SKILLS_OBJECT = {`{`}</div>
              <div className="pl-4 space-y-2">
                <div>
                  <span className="text-brutal-red">"languages"</span>: 
                  <span className="text-brutal-white"> ["Python", "C", "Java", "JavaScript", "TypeScript", "SQL", "R", "OCaml", "MIPS"],</span>
                </div>
                <div>
                  <span className="text-brutal-red">"frameworks"</span>: 
                  <span className="text-brutal-white"> ["React", "Node.js", "Express", "Flask", "PyTorch", "TensorFlow"],</span>
                </div>
                <div>
                  <span className="text-brutal-red">"databases"</span>: 
                  <span className="text-brutal-white"> ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "AWS RDS"],</span>
                </div>
                <div>
                  <span className="text-brutal-red">"tools"</span>: 
                  <span className="text-brutal-white"> ["Git", "Docker", "Postman", "Jira", "Figma", "Vim", "Linux", "AWS"],</span>
                </div>
              </div>
              <div className="text-brutal-green">{`}`}</div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-brutal-gray brutal-border p-6">
            <div className="font-brutal text-3xl text-brutal-red mb-2">7+</div>
            <div className="font-mono text-sm">YEARS_CODING</div>
          </div>
          <div className="text-center bg-brutal-gray brutal-border p-6">
            <div className="font-brutal text-3xl text-brutal-red mb-2">10+</div>
            <div className="font-mono text-sm">PROJECTS_COMPLETED</div>
          </div>
          <div className="text-center bg-brutal-gray brutal-border p-6">
            <div className="font-brutal text-3xl text-brutal-red mb-2">2</div>
            <div className="font-mono text-sm">DEGREES_PURSUING</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills 