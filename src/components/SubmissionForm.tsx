import React, { useState } from 'react';
import { useSubmissions } from '../context/SubmissionContext';

const SubmissionForm = () => {
    const { addSubmission } = useSubmissions();
    const [formData, setFormData] = useState({
        softwareName: '',
        softwareDetails: '',
        contactPerson: '',
        contactNumber: '',
        email: '',
        version: '',
        useCases: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Add submission using context
            addSubmission(formData);

            setSubmitSuccess(true);
            setFormData({
                softwareName: '',
                softwareDetails: '',
                contactPerson: '',
                contactNumber: '',
                email: '',
                version: '',
                useCases: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Submit Your Medical Software for Approval</h2>

            {submitSuccess ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-green-700">
                                Your submission has been received. We will review your software and contact you soon.
                            </p>
                            <button
                                onClick={() => setSubmitSuccess(false)}
                                className="mt-2 text-sm font-medium text-green-700 underline"
                            >
                                Submit another
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                    <div>
                        <label htmlFor="softwareName" className="block text-sm font-medium text-gray-700">
                            Software Name *
                        </label>
                        <input
                            type="text"
                            name="softwareName"
                            id="softwareName"
                            required
                            value={formData.softwareName}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="softwareDetails" className="block text-sm font-medium text-gray-700">
                            Software Details *
                        </label>
                        <textarea
                            name="softwareDetails"
                            id="softwareDetails"
                            rows={4}
                            required
                            value={formData.softwareDetails}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Please describe the purpose, functionality, and target users of your software"
                        />
                    </div>

                    <div>
                        <label htmlFor="version" className="block text-sm font-medium text-gray-700">
                            Software Version *
                        </label>
                        <input
                            type="text"
                            name="version"
                            id="version"
                            required
                            value={formData.version}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="useCases" className="block text-sm font-medium text-gray-700">
                            Medical Use Cases *
                        </label>
                        <textarea
                            name="useCases"
                            id="useCases"
                            rows={3}
                            required
                            value={formData.useCases}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Describe specific medical scenarios where your software would be used"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                                Contact Person *
                            </label>
                            <input
                                type="text"
                                name="contactPerson"
                                id="contactPerson"
                                required
                                value={formData.contactPerson}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                                Contact Number *
                            </label>
                            <input
                                type="tel"
                                name="contactNumber"
                                id="contactNumber"
                                required
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit for Approval'}
                        </button>
                    </div>
                </form>
            )}

            <div className="mt-8 text-sm text-gray-500">
                <p>* Required fields</p>
                <p className="mt-2">Your submission will be reviewed by our medical software approval team. The review process typically takes 5-7 business days.</p>
            </div>
        </div>
    );
};

export default SubmissionForm; 