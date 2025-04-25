import axios from "axios";
import { useEffect, useState } from "react";
import { base_url } from "../constant";
import { toast } from "react-toastify";

const RequestSubmissionEdit = ({ open, onClose, requestData }) => {
  const [formData, setFormData] = useState({
    _id: requestData?._id,
    name: "",
    details: "",
    version: "",
    contactPerson: "",
    emailAddress: "",
    medicalUseCases: "",
    status: "",
    repository_url: "",
    riskLevel: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with user details when in edit mode
  useEffect(() => {
    setFormData({
      _id: requestData?._id,
      name: requestData?.name || "",
      details: requestData?.details || "",
      version: requestData?.version || "",
      contactPerson: requestData?.contactPerson || "",
      medicalUseCases: requestData?.medicalUseCases || "",
      emailAddress: requestData?.emailAddress || "",
      status: requestData?.status || "",
      repository_url: requestData?.repository_url || "",
      riskLevel: requestData?.riskLevel || "",
    });
  }, [requestData, open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await axios.put(
        `${base_url}/software/${requestData?._id}`,
        formData
      );
      if (response.status === 200) {
        setIsSubmitting(true);
        toast.success("Software updated successfully");
        onClose();
      }
    } catch (error) {
      console.error("Error saving Software:", error);
      toast.error("Failed to update Software");
    } finally {
      setIsSubmitting(false);
    }
    console.log("editing:", formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold mb-6">Submission Update</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-lg shadow-md"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Software Name *
                </label>
                <input
                  disabled
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 px-3 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-700"
                >
                  Software Details *
                </label>
                <textarea
                  disabled
                  name="details"
                  id="details"
                  rows={4}
                  required
                  value={formData.details}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 px-3 py-2"
                  placeholder="Please describe the purpose, functionality, and target users of your software"
                />
              </div>

              <div>
                <label
                  htmlFor="version"
                  className="block text-sm font-medium text-gray-700"
                >
                  Software Version *
                </label>
                <input
                  disabled
                  type="text"
                  name="version"
                  id="version"
                  required
                  value={formData.version}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 px-3 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="medicalUseCases"
                  className="block text-sm font-medium text-gray-700"
                >
                  Medical Use Cases *
                </label>
                <textarea
                  disabled
                  name="medicalUseCases"
                  id="medicalUseCases"
                  rows={3}
                  required
                  value={formData.medicalUseCases}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 px-3 py-2"
                  placeholder="Describe specific medical scenarios where your software would be used"
                />
              </div>
              <div>
                <label
                  htmlFor="medicalUseCases"
                  className="block text-sm font-medium text-gray-700"
                >
                  Risk Level *
                </label>
                <textarea
                  disabled
                  name="medicalUseCases"
                  id="medicalUseCases"
                  rows={3}
                  required
                  value={formData.riskLevel}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 px-3 py-2"
                  placeholder="Describe specific medical scenarios where your software would be used"
                />
              </div>

              <div>
                <label
                  htmlFor="contactPerson"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Person *
                </label>
                <input
                  disabled
                  type="text"
                  name="contactPerson"
                  id="contactPerson"
                  required
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 px-3 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="repositoryUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Repository Url *
                </label>
                <input
                  disabled
                  type="text"
                  name="repositoryUrl"
                  id="repositoryUrl"
                  required
                  value={formData.repository_url}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 px-3 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address *
                </label>
                <input
                  disabled
                  type="emailAddress"
                  name="emailAddress"
                  id="emailAddress"
                  required
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 px-3 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Update Status *
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                >
                  <option value="" disabled>
                    Selecet Option
                  </option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="reject">Rejected</option>
                </select>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Update Software"}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSubmissionEdit;
