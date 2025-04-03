import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <div className="mt-4 space-x-6">
          <a 
            href="https://www.linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-500"
          >
            GitHub
          </a>
          <a 
            href="mailto:your-email@example.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-red-500"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
