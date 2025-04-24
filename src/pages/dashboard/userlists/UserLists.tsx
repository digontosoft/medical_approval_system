import axios from "axios";
import { useEffect, useState } from "react";
import { base_url } from "../../../constant";
import Swal from "sweetalert2";
import { Delete, Edit, EyeIcon, Search, Trash } from "lucide-react";
import EditUser from "../../../components/EditUser";
import UserDetails from "../../../components/UserDetails";

const UserLists = () => {
  const [users, setUsers] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenUserDetailsModal, setIsOpenUserDetailsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${base_url}/users`);
        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Filter softwares based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setUsers(allUsers);
    } else {
      const filtered = allUsers.filter(
        (software) =>
          software?.firstName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          software?.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          software?.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUsers(filtered);
    }
  }, [searchTerm, allUsers]);

  const handleDelete = async (userId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`${base_url}/user/${userId}`);
        if (response.status === 200) {
          Swal.fire("Deleted!", "User has been deleted.", "success");
          setUsers((prevUsers) =>
            prevUsers.filter((user) => user._id !== userId)
          );
        } else {
          Swal.fire("Error!", "Failed to delete user.", "error");
        }
      } catch (error) {
        Swal.fire(
          "Error!",
          error.response?.data?.message ||
            "Something went wrong while deleting.",
          "error"
        );
      }
    }
  };

  const handleOpenModal = (user) => {
    setIsOpenModal(true);
    setSelectedUser(user);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleOpenUserDetailsModal = (user) => {
    setIsOpenUserDetailsModal(true);
    setSelectedUser(user);
  };
  const handleCloseUserDetailsModal = () => {
    setIsOpenUserDetailsModal(false);
  };

  return (
    <div>
      <div className="mb-4 relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search requests..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Role
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user?._id}>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {user?.firstName} {user?.lastName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {user?.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 capitalize">
                  {user?.userType}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-2">
                  <span onClick={() => handleOpenUserDetailsModal(user)}>
                    <EyeIcon className="cursor-pointer text-black" />
                  </span>
                  <span onClick={() => handleOpenModal(user)}>
                    <Edit className="cursor-pointer text-black" />
                  </span>
                  <span onClick={() => handleDelete(user?._id)}>
                    <Trash className="cursor-pointer text-red-400" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <EditUser
          open={isOpenModal}
          onClose={handleCloseModal}
          userDetails={selectedUser}
        />
        <UserDetails
          open={isOpenUserDetailsModal}
          onClose={handleCloseUserDetailsModal}
          userDetails={selectedUser}
        />
      </div>
    </div>
  );
};

export default UserLists;
