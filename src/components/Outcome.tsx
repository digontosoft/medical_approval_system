import React from 'react';
import { ShieldCheck, Clock, FileCheck, Laptop, Beaker, CheckCircle2 } from 'lucide-react';
import Summary from './summary';
const Outcome: React.FC = () => {
    const steps = [
        {
            title: "Risk-Based Classification",
            icon: <ShieldCheck className="h-8 w-8 text-teal-600" />,
            description: "Medical software is categorized into low-risk (patient scheduling, billing) and high-risk (AI diagnosis, ICU monitoring) categories.",
            benefits: [
                "Fast-track approval for low-risk software",
                "Strict evaluation for high-risk software",
                "Clear classification criteria"
            ]
        },
        {
            title: "Pre-Submission Phase",
            icon: <Clock className="h-8 w-8 text-teal-600" />,
            description: "Developers submit initial proposal and regulatory body reviews risk category.",
            benefits: [
                "Early risk assessment",
                "Streamlined categorization",
                "Efficient process initiation"
            ]
        },
        {
            title: "Documentation & Compliance",
            icon: <FileCheck className="h-8 w-8 text-teal-600" />,
            description: "Automated validation system for document submission and compliance verification.",
            benefits: [
                "Automated document validation",
                "Dedicated regulatory officer assignment",
                "Reduced manual errors"
            ]
        },
        {
            title: "Testing & Security",
            icon: <Laptop className="h-8 w-8 text-teal-600" />,
            description: "Risk-based testing approach with basic checks for low-risk and comprehensive trials for high-risk software.",
            benefits: [
                "Appropriate testing depth",
                "Security audit integration",
                "Real-time modification feedback"
            ]
        },
        {
            title: "Approval & Monitoring",
            icon: <Beaker className="h-8 w-8 text-teal-600" />,
            description: "Transparent approval process with public status tracking and continuous monitoring.",
            benefits: [
                "Public status tracking",
                "Continuous monitoring",
                "Clear communication channels"
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Approval Process</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    A streamlined, risk-based approach for medical software approval in Bangladesh
                </p>
            </div>

            <div className="max-w-5xl mx-auto relative">
                <div className="absolute w-px h-full bg-teal-200 left-1/2 transform -translate-x-1/2"></div>
                {steps.map((step, index) => (
                    <div key={index} className={`flex ${index % 2 === 0 ? '' : 'flex-row-reverse'} items-center mb-16`}>
                        {/* Content */}
                        <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                <div className="flex items-center mb-4">
                                    {step.icon}
                                    <h3 className="text-xl font-semibold ml-3">{step.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{step.description}</p>
                                <div className="grid grid-cols-1 gap-3">
                                    {step.benefits.map((benefit, benefitIndex) => (
                                        <div key={benefitIndex} className="flex items-start p-3 bg-teal-50 rounded-lg">
                                            <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
                                            <p className="ml-2 text-sm text-gray-700">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Center circle */}
                        <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl mx-4 shrink-0 z-10">
                            {index + 1}
                        </div>

                        {/* Empty space for alternating layout */}
                        <div className="hidden md:block w-5/12"></div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-8 text-white max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Expected Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-10 rounded-lg p-6">
                        <p className="font-semibold">Low-Risk Software</p>
                        <p className="mt-2 text-sm">Approval within 2-4 weeks</p>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-6">
                        <p className="font-semibold">High-Risk Software</p>
                        <p className="mt-2 text-sm">Structured timeline with comprehensive testing</p>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-6">
                        <p className="font-semibold">Real-Time Tracking</p>
                        <p className="mt-2 text-sm">Online status monitoring and updates</p>
                    </div>
                </div>
            </div>
            <Summary />
        </div>
    );
};

export default Outcome;
