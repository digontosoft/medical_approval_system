const user = {
  name: "Kamrul Hasan Kawser",
  email: "kamrul@example.com",
  avatar: "https://i.pravatar.cc/150?img=3",
  role: "Admin",
  joined: "March 2023",
  status: "Active",
};

const UserProfile = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 transition-all duration-300 hover:shadow-xl">
        {/* Avatar and Name */}
        <div className="flex-shrink-0">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-28 h-28 rounded-full ring-4 ring-blue-500 object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 w-full">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-xs text-gray-500">Role</p>
              <p className="text-sm font-medium text-gray-700">{user.role}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <p className="text-xs text-gray-500">Joined</p>
              <p className="text-sm font-medium text-gray-700">{user.joined}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl">
              <p className="text-xs text-gray-500">Status</p>
              <p className="text-sm font-medium text-gray-700">{user.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
