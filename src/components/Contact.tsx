import { useState } from 'react'
import emailjs from '@emailjs/browser'
import TypingTitle from './TypingTitle'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // EmailJS configuration 
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_b4f4nce'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_o2oze5p'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Yp3Bkw1MeYw1CS67S'

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Tahir Tuzun',
        },
        publicKey
      )

      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setIsSubmitting(false)
      setError('Failed to send message. Please try again or contact me directly.')
      console.error('EmailJS error:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const renderFormSection = () => {
    if (submitted) {
      return (
        <div className="bg-brutal-black/90 brutal-border p-6 backdrop-blur-sm">
          <div className="font-mono text-sm mb-6">
            <div className="text-brutal-green">// SEND_MESSAGE</div>
          </div>
          
          <div className="text-center">
            <div className="text-brutal-green text-xl mb-4">
              MESSAGE_SENT_SUCCESSFULLY!
            </div>
            <div className="text-sm mb-6">
              {'>'} Thank you for reaching out. I'll get back to you soon.
            </div>
            <button 
              onClick={() => setSubmitted(false)}
              className="brutal-btn-outline font-mono"
            >
              [SEND_ANOTHER]
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-brutal-black/90 brutal-border p-6 backdrop-blur-sm">
        <div className="font-mono text-sm mb-6">
          <div className="text-brutal-green">// SEND_MESSAGE</div>
        </div>

        {error && (
          <div className="mb-6 bg-brutal-red/10 brutal-border border-brutal-red p-4">
            <div className="font-mono text-sm text-brutal-red">
              ERROR: {error}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-mono text-sm text-brutal-red block mb-2">
              NAME*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-brutal-gray brutal-border p-3 font-mono text-sm focus:outline-none focus:border-brutal-red"
              placeholder="Enter your name..."
            />
          </div>

          <div>
            <label className="font-mono text-sm text-brutal-red block mb-2">
              EMAIL*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-brutal-gray brutal-border p-3 font-mono text-sm focus:outline-none focus:border-brutal-red"
              placeholder="your.email@domain.com"
            />
          </div>

          <div>
            <label className="font-mono text-sm text-brutal-red block mb-2">
              MESSAGE*
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-brutal-gray brutal-border p-3 font-mono text-sm focus:outline-none focus:border-brutal-red resize-none"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="brutal-btn font-mono w-full"
          >
            {isSubmitting ? '[SENDING...]' : '[SEND_MESSAGE]'}
          </button>
        </form>
      </div>
    )
  }
 /* 580 372 */
  return (
    <section 
      id="contact" 
      className="py-20 relative"
      style={{
        backgroundImage: `url(https://giffiles.alphacoders.com/219/219620.gif)`,
        backgroundSize: '290px 186px',
        backgroundRepeat: 'repeat',
        backgroundPosition: '0 0'
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-brutal-black/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <TypingTitle text="CONTACT_INTERFACE" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Contact Info */}
          <div className="space-y-8">
            <div className="bg-brutal-black/90 brutal-border p-6 backdrop-blur-sm">
              <div className="font-mono text-sm">
                <div className="text-brutal-green mb-6">// CONTACT_INFO</div>
                <div className="space-y-4">
                  <a 
                    href="mailto:tahirtuzun1@gmail.com"
                    className="flex items-center justify-between hover:text-brutal-red transition-none cursor-pointer group"
                  >
                    <div>
                      <span className="text-brutal-red">email:</span> "tahirtuzun1@gmail.com"
                    </div>
                    <div className="text-xs opacity-60 group-hover:opacity-100">
                      [CLICK_TO_EMAIL]
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/tahir2001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between hover:text-brutal-red transition-none cursor-pointer group"
                  >
                    <div>
                      <span className="text-brutal-red">linkedin:</span> "/in/tahir2001"
                    </div>
                    <div className="text-xs opacity-60 group-hover:opacity-100">
                      [VISIT_PROFILE]
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/tttahirrr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between hover:text-brutal-red transition-none cursor-pointer group"
                  >
                    <div>
                      <span className="text-brutal-red">github:</span> "/tttahirrr"
                    </div>
                    <div className="text-xs opacity-60 group-hover:opacity-100">
                      [VIEW_CODE]
                    </div>
                  </a>
                  
                  <a 
                    href="/resume.pdf"
                    download="Tahir_Tuzun_Resume.pdf"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between hover:text-brutal-red transition-none cursor-pointer group"
                  >
                    <div>
                      <span className="text-brutal-red">resume:</span> "Tahir_Tuzun_Resume.pdf"
                    </div>
                    <div className="text-xs opacity-60 group-hover:opacity-100">
                      [DOWNLOAD]
                    </div>
                  </a>
                  
                  
                </div>
              </div>
            </div>

            <div className="bg-brutal-black/90 brutal-border p-6 backdrop-blur-sm">
              <div className="font-mono text-sm">
                <div className="text-brutal-green mb-4">// AVAILABILITY</div>
                <div className="space-y-2">
                  <div>{'>'} Open to full-time opportunities</div>
                  <div>{'>'} Available for freelance projects</div>
                  <div>{'>'} Interested in collaboration</div>
                  <div>{'>'} Response time: 1-2 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {renderFormSection()}
        </div>
      </div>
    </section>
  )
}

export default Contact 