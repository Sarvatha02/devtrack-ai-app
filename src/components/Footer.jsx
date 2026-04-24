import React from 'react';
import { Terminal, GitBranch, ExternalLink, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary rounded-md">
            <Terminal size={20} className="text-white" />
          </div>
          <span className="font-bold text-white tracking-tight">DevTrack <span className="text-primary">AI</span></span>
        </div>

        <div className="flex gap-8 text-sm font-medium text-text/40">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" aria-label="GitHub" className="p-2 glass rounded-full hover:text-primary transition-all hover:scale-110">
            <GitBranch size={18} />
          </a>
          <a href="#" aria-label="Blog" className="p-2 glass rounded-full hover:text-primary transition-all hover:scale-110">
            <ExternalLink size={18} />
          </a>
          <a href="#" aria-label="Email" className="p-2 glass rounded-full hover:text-primary transition-all hover:scale-110">
            <Mail size={18} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center text-xs text-text/20 font-medium uppercase tracking-widest">
        © {new Date().getFullYear()} DevTrack AI. Built for developers, by developers.
      </div>
    </footer>
  );
};

export default Footer;
