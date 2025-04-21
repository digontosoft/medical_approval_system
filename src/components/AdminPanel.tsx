import React, { useState } from 'react';
import { Submission } from '../services/submissionService';
import { useSubmissions } from '../context/SubmissionContext';

const AdminPanel = () => {
    const { submissions, updateSubmissionStatus, deleteSubmission } = useSubmissions();
    const [filter, setFilter] = useState('all');
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    const handleStatusChange = (id: number, newStatus: Submission['status']) => {
        updateSubmissionStatus(id, newStatus);
    };

    const handleDeleteSubmission = (id: number) => {
        if (window.confirm('Are you sure you want to delete this submission?')) {
            const deleted = deleteSubmission(id);
            // If the deleted submission was expanded, collapse it
            if (deleted && expandedRow === id) {
                setExpandedRow(null);
            }
        }
    };

    const toggleRowExpansion = (id: number) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    const filteredSubmissions = filter === 'all'
        ? submissions
        : submissions.filter(sub => sub.status === filter);

    const statusColors = {
        pending: "bg-yellow-100 text-yellow-800",
        in_review: "bg-blue-100 text-blue-800",
        approved: "bg-green-100 text-green-800",
        rejected: "bg-red-100 text-red-800"
    };

    const statusLabels = {
        pending: "Pending",
        in_review: "In Review",
        approved: "Approved",
        rejected: "Rejected"
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Software Approval Administration</h2>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Filter:</span>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    >
                        <option value="all">All Submissions</option>
                        <option value="pending">Pending</option>
                        <option value="in_review">In Review</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Software</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredSubmissions.length > 0 ? (
                                filteredSubmissions.map((submission) => (
                                    <React.Fragment key={submission.id}>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">{submission.softwareName}</div>
                                                        <div className="text-sm text-gray-500">Version {submission.version}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{submission.contactPerson}</div>
                                                <div className="text-sm text-gray-500">{submission.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {submission.submittedDate}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[submission.status]}`}>
                                                    {statusLabels[submission.status]}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() => toggleRowExpansion(submission.id)}
                                                    className="text-teal-600 hover:text-teal-900 mr-3"
                                                >
                                                    {expandedRow === submission.id ? 'Hide Details' : 'View Details'}
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteSubmission(submission.id)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                        {expandedRow === submission.id && (
                                            <tr className="bg-gray-50">
                                                <td colSpan={5} className="px-6 py-4">
                                                    <div className="mb-3">
                                                        <h4 className="font-medium text-gray-800">Software Details</h4>
                                                        <p className="text-sm text-gray-600 mt-1">{submission.softwareDetails}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <h4 className="font-medium text-gray-800">Use Cases</h4>
                                                        <p className="text-sm text-gray-600 mt-1">{submission.useCases}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <h4 className="font-medium text-gray-800">Contact Information</h4>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            {submission.contactPerson} • {submission.contactNumber} • {submission.email}
                                                        </p>
                                                    </div>
                                                    <div className="mt-4 flex items-center space-x-2">
                                                        <span className="text-sm text-gray-700">Update status:</span>
                                                        <select
                                                            value={submission.status}
                                                            onChange={(e) => handleStatusChange(submission.id, e.target.value as Submission['status'])}
                                                            className="rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
                                                        >
                                                            <option value="pending">Pending</option>
                                                            <option value="in_review">In Review</option>
                                                            <option value="approved">Approved</option>
                                                            <option value="rejected">Rejected</option>
                                                        </select>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                                        No submissions found matching the current filter.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 text-sm text-gray-500">
                    Showing {filteredSubmissions.length} of {submissions.length} total submissions
                </div>
            </div>
        </div>
    );
};

export default AdminPanel; 