import React from 'react';
import { Microscope, Beaker, ClipboardCheck, BarChart2, FileSearch, MessageCircle, CheckCircle2, Settings } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Project</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Streamlining the medical software approval process in Bangladesh through data-driven research and innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <ClipboardCheck className="h-8 w-8 text-teal-600" />
            <h3 className="text-2xl font-semibold ml-3">Our Mission</h3>
          </div>

          <p className="text-gray-600 mb-8">
            We aim to revolutionize Bangladesh's medical software approval system by identifying bottlenecks and implementing efficient solutions that benefit both developers and regulatory bodies.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start p-4 bg-teal-50 rounded-lg">
              <Settings className="h-5 w-5 text-teal-600 mt-1" />
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">Streamlined Process</h4>
                <p className="text-gray-600">Faster approval pathways for low-risk medical software</p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-teal-50 rounded-lg">
              <MessageCircle className="h-5 w-5 text-teal-600 mt-1" />
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">Enhanced Communication</h4>
                <p className="text-gray-600">Better dialogue between developers and regulators</p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-teal-50 rounded-lg">
              <BarChart2 className="h-5 w-5 text-teal-600 mt-1" />
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">Improved Monitoring</h4>
                <p className="text-gray-600">Robust post-approval compliance tracking</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h3 className="text-2xl font-semibold ml-3">Research Methodology</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FileSearch className="h-6 w-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Data Collection</h4>
                <p className="mt-2 text-gray-600">Comprehensive surveys and in-depth interviews with 50+ industry experts, developers, and regulatory professionals</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Beaker className="h-6 w-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Analysis Process</h4>
                <p className="mt-2 text-gray-600">Rigorous evaluation of approval workflows, timelines, and stakeholder feedback across multiple institutions</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Recommendations</h4>
                <p className="mt-2 text-gray-600">Data-driven solutions for improving approval efficiency, transparency, and regulatory compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;