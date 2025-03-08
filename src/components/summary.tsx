import React from 'react';
import { Rocket, Zap, Shield, Eye, MessageSquare, BarChart3, Globe } from 'lucide-react';

const Summary: React.FC = () => {
    const benefits = [
        {
            icon: <Zap className="w-8 h-8 text-teal-600" />,
            title: "Faster Approval = More Innovation",
            currentIssue: "Approval process in Bangladesh is slow & inefficient, causing delays in launching medical software.",
            improvements: [
                "Low-risk software will get fast-track approval (2-4 weeks)",
                "Startups & tech companies can innovate faster",
                "Hospitals & clinics will get modern software quickly"
            ],
            impact: "Digital health solutions will expand faster, reducing healthcare gaps"
        },
        {
            icon: <Shield className="w-8 h-8 text-teal-600" />,
            title: "Risk-Based Approval = Safer Software",
            currentIssue: "One-size-fits-all approach for medical software approval",
            improvements: [
                "Strict testing for high-risk medical software",
                "Fast-track approval for low-risk software"
            ],
            impact: "Ensures proper evaluation while avoiding unnecessary delays"
        },
        {
            icon: <Eye className="w-8 h-8 text-teal-600" />,
            title: "Transparency & Real-Time Tracking",
            currentIssue: "Lack of transparency leads to delays & possible corruption",
            improvements: [
                "Online tracking system for real-time progress",
                "Increased accountability for regulatory officers",
                "Automated notifications for missing documents"
            ],
            impact: "Ensures a fair & corruption-free approval process"
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-teal-600" />,
            title: "Better Communication",
            currentIssue: "Difficult communication between developers & regulators",
            improvements: [
                "Dedicated communication platform",
                "Instant notification system",
                "Clear documentation guidelines"
            ],
            impact: "Faster & smoother approval process with less back-and-forth"
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-teal-600" />,
            title: "Post-Approval Monitoring",
            currentIssue: "No regular monitoring after software approval",
            improvements: [
                "Regular compliance checks",
                "Automatic security alerts",
                "Periodic quality reports"
            ],
            impact: "Maintains high software quality & safety standards"
        },
        {
            icon: <Globe className="w-8 h-8 text-teal-600" />,
            title: "International Recognition",
            currentIssue: "Limited global recognition & foreign investment",
            improvements: [
                "Alignment with global standards",
                "Increased foreign investment",
                "Export opportunities"
            ],
            impact: "Bangladesh becomes a recognized medical software hub"
        }
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
                <div className="flex justify-center mb-4">
                    <Rocket className="w-12 h-12 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of the Recommended System</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    A comprehensive breakdown of how this system will revolutionize Bangladesh's medical technology ecosystem
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            {benefit.icon}
                            <h3 className="text-xl font-semibold ml-3">{benefit.title}</h3>
                        </div>

                        <div className="mb-4">
                            <p className="text-red-500 text-sm font-medium mb-2">Current Issue:</p>
                            <p className="text-gray-600 text-sm">{benefit.currentIssue}</p>
                        </div>

                        <div className="mb-4">
                            <p className="text-teal-600 text-sm font-medium mb-2">Improvements:</p>
                            <ul className="space-y-2">
                                {benefit.improvements.map((improvement, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-teal-500 mr-2">✓</span>
                                        <span className="text-sm text-gray-600">{improvement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-sm text-gray-800">
                                <span className="font-medium text-teal-600">Impact: </span>
                                {benefit.impact}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-8 text-white max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Final Outcome</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                        <p className="font-semibold mb-2">For Healthcare Providers</p>
                        <p className="text-sm">Faster access to safe, modern medical software leading to better patient care</p>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                        <p className="font-semibold mb-2">For Developers</p>
                        <p className="text-sm">Streamlined process with less bureaucracy enabling faster innovation</p>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                        <p className="font-semibold mb-2">For Regulators</p>
                        <p className="text-sm">Transparent process reducing corruption and improving efficiency</p>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                        <p className="font-semibold mb-2">For Bangladesh</p>
                        <p className="text-sm">International recognition and increased foreign investment opportunities</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;

