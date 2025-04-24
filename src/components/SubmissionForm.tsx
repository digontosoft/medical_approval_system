import React, { useState } from "react";
import axios from "axios";
import { base_url } from "../constant";
import { toast } from "react-toastify";

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    version: "",
    contactPerson: "",
    emailAddress: "",
    medicalUseCases: "",
    // file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;

    setFormData((prevData) => ({
      ...prevData,
      // [name]: type === "file" ? files?.[0] ?? null : value,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // const formDataToSend = new FormData();
      // formDataToSend.append("name", formData.name);
      // formDataToSend.append("details", formData.details);
      // formDataToSend.append("contactPerson", formData.contactPerson);
      // formDataToSend.append("emailAddress", formData.emailAddress);
      // formDataToSend.append("version", formData.version);
      // formDataToSend.append("medicalUseCases", formData.medicalUseCases);
      // // if (formData.file) {
      // //   formDataToSend.append("file", formData.file);
      // // }

      const response = await axios.post(`${base_url}/software`, formData);

      if (response.status === 201) {
        toast.success("Software Submitted Successfully");
        setSubmitSuccess(true);
        // Reset form
        // setFormData({
        //   name: "",
        //   details: "",
        //   version: "",
        //   contactPerson: "",
        //   emailAddress: "",
        //   medicalUseCases: "",
        //   file: null,
        // });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Submit Your Medical Software for Approval
      </h2>

      {submitSuccess ? (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                Your submission has been received. We will review your software
                and contact you soon.
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
              htmlFor="contactPerson"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Person *
            </label>
            <input
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
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address *
            </label>
            <input
              type="emailAddress"
              name="emailAddress"
              id="emailAddress"
              required
              value={formData.emailAddress}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 px-3 py-2"
            />
          </div>
          {/* <div>
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              Upload File *
            </label>
            <input
              type="file"
              name="file"
              id="file"
              required
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 px-3 py-2"
            />
          </div> */}

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit for Approval"}
            </button>
          </div>
        </form>
      )}

      <div className="mt-8 text-sm text-gray-500">
        <p>* Required fields</p>
        <p className="mt-2">
          Your submission will be reviewed by our medical software approval
          team. The review process typically takes 5-7 business days.
        </p>
      </div>
    </div>
  );
};

export default SubmissionForm;
