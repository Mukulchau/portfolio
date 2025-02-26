"use client"
import React from 'react'
// Import Font Awesome CSS if using npm
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-purple-500 text-center">Get In Touch</h2>
        <div className="max-w-lg mx-auto p-8 flex gap-5 justify-center align-middle rounded-lg shadow-lg w-96 text-center">
          <div className="mb-4">
            <a href="mailto:mukulchauhan64976@gmail.com" className="text-blue-500 hover:underline">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
          </div>
          <div className="mb-4">
            <a href="https://www.instagram.com/mukulrajput________" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
          <div className="mb-4">
            <a href="https://www.linkedin.com/in/mukul-kumar-328a5824b/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
