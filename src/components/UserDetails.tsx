const UserDetails = ({ open, onClose, userDetails }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold mb-6">Edit User</h2>
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
          <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-2xl transition ">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userDetails.firstName || "-"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userDetails.lastName || "-"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userDetails.email || "-"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userDetails.phoneNumber || "-"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Passport
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userDetails.passport || "-"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                NID
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userDetails.nid || "-"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userDetails.postalCode || "-"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userDetails.address || "-"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userDetails.dateOfBirth || "-"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Type
              </label>
              <p className="mt-1 text-sm text-gray-900 capitalize">
                {userDetails.userType || "-"}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Status
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {userDetails.userStatus || "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
