import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileSearch, Users, Clock, AlertTriangle, Settings, MessageCircle, CheckCircle2, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How was the data collected for this research?",
      answer: (
        <div className="space-y-4">
          <p className="font-medium">Our data collection process involved:</p>
          <div className="pl-4 border-l-4 border-teal-400 space-y-3">
            <div className="flex items-start text-teal-700">
              <FileSearch className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Survey Research:</span>
                <p className="mt-1">Distributed through professional channels including email, WhatsApp, LinkedIn, and medical forums to gather responses from medical professionals, developers and experts.</p>
              </div>
            </div>
            <div className="flex items-start text-teal-700">
              <Users className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">In-depth Interviews:</span>
                <p className="mt-1">Conducted detailed one-on-one interviews via Zoom, Google Meet, and in-person meetings for qualitative insights.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "How many participants were surveyed and interviewed?",
      answer: (
        <div className="space-y-4">
          <p className="font-medium text-teal-800 flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Total Participants: 80
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-teal-50 p-4 rounded-lg flex items-start">
              <FileSearch className="h-5 w-5 mr-3 mt-1" />
              <div>
                <p className="font-medium">Survey Responses</p>
                <p className="text-teal-700">80 complete responses</p>
              </div>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg flex items-start">
              <MessageCircle className="h-5 w-5 mr-3 mt-1" />
              <div>
                <p className="font-medium">Interviews Conducted</p>
                <p className="text-teal-700">50 detailed interviews</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg flex items-start">
              <AlertTriangle className="h-5 w-5 mr-3 mt-1" />
              <div>
                <p className="font-medium">Declined Participation</p>
                <p className="text-red-700">10 declined interviews</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg flex items-start">
              <Clock className="h-5 w-5 mr-3 mt-1" />
              <div>
                <p className="font-medium">Unreachable</p>
                <p className="text-red-700">20 no response</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "What is pilot testing, and why is it important in this research?",
      answer: (
        <div className="space-y-4">
          <div className="bg-teal-50 p-4 rounded-lg flex items-start">
            <Settings className="h-5 w-5 mr-3 mt-1" />
            <p className="text-teal-800">
              Pilot testing is a small-scale trial conducted before full implementation to check how the medical software approval process works in real-world conditions.
            </p>
          </div>

          <div>
            <p className="font-medium text-teal-800 mb-3 flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Key Benefits of Pilot Testing:
            </p>
            <ul className="space-y-3 pl-4">
              <li className="flex items-start text-teal-700">
                <Settings className="h-5 w-5 mr-3 mt-1" />
                Identifies delays, challenges, and inefficiencies in the approval process
              </li>
              <li className="flex items-start text-teal-700">
                <Clock className="h-5 w-5 mr-3 mt-1" />
                Helps in testing low-risk vs. high-risk software approval timelines
              </li>
              <li className="flex items-start text-teal-700">
                <MessageCircle className="h-5 w-5 mr-3 mt-1" />
                Provides real feedback from medical professionals and developers
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "What are the most common problems in the approval process?",
      answer: (
        <div className="space-y-4">
          <p className="font-medium">Based on our research findings:</p>
          <div className="space-y-3">
            <div className="flex items-start bg-red-50 p-4 rounded-lg">
              <Clock className="h-5 w-5 mr-3 mt-1 text-red-600" />
              <div>
                <p className="font-medium">Lengthy Approval Time</p>
                <p className="text-red-700">Process duration exceeds acceptable timeframes</p>
              </div>
            </div>
            <div className="flex items-start bg-red-50 p-4 rounded-lg">
              <AlertTriangle className="h-5 w-5 mr-3 mt-1 text-red-600" />
              <div>
                <p className="font-medium">Lack of Transparency</p>
                <p className="text-red-700">No clear tracking system available</p>
              </div>
            </div>
            <div className="flex items-start bg-red-50 p-4 rounded-lg">
              <MessageCircle className="h-5 w-5 mr-3 mt-1 text-red-600" />
              <div>
                <p className="font-medium">Poor Communication</p>
                <p className="text-red-700">Limited interaction with regulatory bodies</p>
              </div>
            </div>
            <div className="flex items-start bg-red-50 p-4 rounded-lg">
              <Settings className="h-5 w-5 mr-3 mt-1 text-red-600" />
              <div>
                <p className="font-medium">No Risk Classification</p>
                <p className="text-red-700">Same process for all software types</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "What are the key areas for improvement in the current approval system?",
      answer: (
        <div className="space-y-4">
          <p className="font-medium text-teal-800 flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Priority Improvement Areas:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-teal-50 p-4 rounded-lg flex items-start">
              <AlertTriangle className="h-5 w-5 mr-3 mt-1" />
              <div>
                <p className="font-medium">Transparency</p>
                <p className="text-teal-700">Implement trackable approval process</p>
              </div>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg flex items-start">
              <Clock className="h-5 w-5 mr-3 mt-1" />
              <div>
                <p className="font-medium">Processing Speed</p>
                <p className="text-teal-700">Expedited approval for low-risk software</p>
              </div>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg flex items-start">
              <MessageCircle className="h-5 w-5 mr-3 mt-1" />
              <div>
                <p className="font-medium">Communication</p>
                <p className="text-teal-700">Direct support channels with regulators</p>
              </div>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg flex items-start">
              <Settings className="h-5 w-5 mr-3 mt-1" />
              <div>
                <p className="font-medium">Monitoring</p>
                <p className="text-teal-700">Ongoing quality assurance system</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "What recommendations have been made based on the research?",
      answer: (
        <div className="space-y-4">
          <p className="font-medium text-teal-800 flex items-center">
            <CheckCircle2 className="h-5 w-5 mr-2" />
            Key Recommendations:
          </p>
          <div className="space-y-3">
            <div className="flex items-start bg-teal-50 p-4 rounded-lg">
              <Settings className="h-5 w-5 mr-3 mt-1" />
              <p>Create separate approval tracks for different risk levels</p>
            </div>
            <div className="flex items-start bg-teal-50 p-4 rounded-lg">
              <Clock className="h-5 w-5 mr-3 mt-1" />
              <p>Implement automated processing systems</p>
            </div>
            <div className="flex items-start bg-teal-50 p-4 rounded-lg">
              <MessageCircle className="h-5 w-5 mr-3 mt-1" />
              <p>Establish dedicated communication channels</p>
            </div>
            <div className="flex items-start bg-teal-50 p-4 rounded-lg">
              <AlertTriangle className="h-5 w-5 mr-3 mt-1" />
              <p>Develop post-approval monitoring framework</p>
            </div>
            <div className="flex items-start bg-teal-50 p-4 rounded-lg">
              <Users className="h-5 w-5 mr-3 mt-1" />
              <p>Launch comprehensive training programs</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Common questions about the medical approval system in Bangladesh based on our research findings.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <div className="prose max-w-none">{item.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-teal-50 border border-teal-200 rounded-lg p-6">
          <div className="flex items-start">
            <HelpCircle className="h-6 w-6 mr-3 mt-1 text-teal-700" />
            <div>
              <h3 className="text-lg font-medium text-teal-800 mb-2">Have more questions?</h3>
              <p className="text-teal-700 mb-4">
                If you have additional questions about the medical approval system or our research, please feel free to contact us.
              </p>
              <a
                href="mailto:research@medapprovalbd.org"
                className="inline-flex items-center text-teal-700 hover:text-teal-900 font-medium"
              >
                Contact the research team →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;