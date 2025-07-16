import TypingTitle from './TypingTitle'

const About = () => {
  return (
    <section 
      id="about" 
      className="py-28 relative"
      style={{
        backgroundImage: `url(https://media1.tenor.com/m/3GgX9XG4fe0AAAAd/blue-fly.gif)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-brutal-black/60"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <TypingTitle text="ABOUT_ME" />
        </div>

        {/* Main Biography Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-brutal-black/90 brutal-border p-8 brutal-shadow backdrop-blur-sm">
            <div className="font-mono">
              <div className="text-brutal-green text-lg mb-6">// BIOGRAPHY</div>
              <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-3">
                  <div>{'>'} <span className="text-brutal-red">Name:</span> Tahir Tuzun</div>
                  <div>{'>'} <span className="text-brutal-red">Education:</span> Stony Brook University</div>
                  <div>{'>'} <span className="text-brutal-red">Degree:</span> B.S. Computer Science [2025]</div>
                </div>
                <div className="space-y-3">
                  <div>{'>'} <span className="text-brutal-red">Location:</span> New York</div>
                  <div>{'>'} <span className="text-brutal-red">Current:</span> Potential MSCS Student</div>
                  <div>{'>'} <span className="text-brutal-red">Status:</span> Available for opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey & Interests Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Journey Section */}
          <div className="bg-brutal-black/90 brutal-border p-8 brutal-shadow backdrop-blur-sm">
            <div className="font-mono">
              <div className="text-brutal-green text-lg mb-6">// JOURNEY</div>
              <div className="text-sm text-brutal-white space-y-4 leading-relaxed">
                <p>
                  My journey in computer science began with curiosity about how
                  software shapes our world. At Stony Brook University, I developed
                  a strong foundation in algorithms, data structures, and software
                  engineering principles.
                </p>
                <p>
                  Currently pursuing my Master's degree, I'm focused on expanding
                  my expertise in full-stack development, system design, and
                  emerging technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div className="bg-brutal-black/90 brutal-border p-8 brutal-shadow backdrop-blur-sm">
            <div className="font-mono">
              <div className="text-brutal-green text-lg mb-6">// INTERESTS</div>
              <div className="text-sm space-y-3">
                <div>{'>'} Web Development</div>
                <div>{'>'} Machine Learning</div>
                <div>{'>'} System Design</div>
                <div>{'>'} Open Source</div>
                <div>{'>'} UI/UX Design</div>
                <div>{'>'} Cloud Computing</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default About 