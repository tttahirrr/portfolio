const Footer = () => {
  return (
    <footer className="bg-brutal-black brutal-border-t-4 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="font-mono text-sm mb-4 md:mb-0">
            <span className="text-brutal-red">{'>'}</span> Copyright © 2025 TAHIR_TUZUN.exe
          </div>

          {/* Terminal Command */}
          <div className="font-mono text-sm text-brutal-white">
            <span className="text-brutal-green">$ </span>
            echo "Built with React + TypeScript + Tailwind CSS"
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-brutal-white">
          <div className="text-center font-mono text-xs text-brutal-white">
            <div className="mb-2">
              SYSTEM_STATUS: [ONLINE] | LAST_UPDATED: {new Date().toLocaleDateString()}
            </div>
            <div>
              "Designed for recruiters, built for impact."
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 