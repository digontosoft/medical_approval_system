const SubmissionRequestView = ({ open, onClose, requestData }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold mb-6">Submission Details</h2>
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

          {requestData && (
            <div className="space-y-4">
              <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-2xl transition ">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Software Name
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {requestData?.name}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Details</h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {requestData?.details}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Contact Person
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {requestData?.contactPerson}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {requestData?.emailAddress}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Medicale Use Cases
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {requestData?.medicalUseCases}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Version</h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {requestData?.version}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Repository Link
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {requestData?.repository_url}
                  </p>
                </div>

                {/* <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <p className="mt-1 text-sm text-gray-900">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {requestData.status}
                    </span>
                  </p>
                </div> */}
              </div>
            </div>
          )}

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

export default SubmissionRequestView;
