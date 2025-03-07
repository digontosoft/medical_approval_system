import React from 'react';
import { Activity, BookOpen, FileText, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Activity className="h-8 w-8 text-teal-400" />
              <span className="ml-2 text-xl font-bold">MedApproval BD</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your comprehensive resource for medical software approval guidelines and documentation in Bangladesh.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="h-5 w-5 text-teal-400 mr-2" />
              Navigation
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#statistics" className="text-gray-400 hover:text-teal-400 transition-colors">Statistics</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-teal-400 transition-colors">FAQ</a></li>
              <li><a href="#outcome" className="text-gray-400 hover:text-teal-400 transition-colors">Outcome</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 text-teal-400 mr-2" />
              Resources
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Documentation Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Approval Process</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Technical Requirements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Best Practices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Research Papers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MedApproval BD - Medical Software Approval Resources. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;