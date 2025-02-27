import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur border-t bottom-0 py-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around">
          <div className="w-full sm:w-1/2 mb-1">
            <h2 className="text-xl font-bold mb-2 text-green-500">Quick Links</h2>
            <ul className="text-sm flex  text-green-400 gap-4">
              <li className="mb-1"><a href="about" className="hover:underline">About</a></li>
              <li className="mb-1"><a href="project" className="hover:underline">Projects</a></li>
              <li className="mb-1"><a href="contact" className="hover:underline">Contact</a></li>
              <li className="mb-1"><a href="termcondition" className="hover:underline"> &copy; Term And Condition</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 mb-1">
            <h2 className="text-xl font-bold mb-1 text-green-500">Follow Me</h2>
            <div className="flex text-green-600 space-x-3">
              <a href="https://github.com/Mukulchau" target="_blank" rel="noopener noreferrer" className=" text-xl hover:scale-125 hover:transition-all">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mukul-kumar-328a5824b" target="_blank" rel="noopener noreferrer" className="  text-xl hover:scale-125 hover:transition-all">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className=" text-xl hover:scale-125 hover:transition-all">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
