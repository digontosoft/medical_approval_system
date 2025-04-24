// import axios from "axios";
// import { base_url } from "../constant";
// import { toast } from "react-toastify";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserDetails = ({ open, onClose, userDetails }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [passport, setPassport] = useState("");
//   const [nid, setNid] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [address, setAddress] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [userType, setUserType] = useState("");
//   const [userStatus, setUserStatus] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   if (!open) return null;
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // setError("");
//     // try {
//     //   setIsLoading(true);
//     //   const payload = {
//     //     firstName,
//     //     lastName,
//     //     phoneNumber,
//     //     email,
//     //     password,
//     //   };
//     //   await axios.post(`${base_url}/register`, payload).then((response) => {
//     //     if (response.status === 201) {
//     //       toast.success("Registration successful");
//     //       console.log("Registration successful:", response.data);
//     //       setIsLoading(false);
//     //       navigate("/login");
//     //     }
//     //   });
//     //   console.log("registration:", payload);
//     // } catch (error) {
//     //   console.log("registration error:", error);
//     // }
//     const payload = {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       userType,
//       userStatus,
//       passport,
//       nid,
//       postalCode,
//       address,
//       dateOfBirth,
//     };
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <div className="flex justify-between items-start">
//             <h2 className="text-2xl font-bold mb-6">User Details</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//             <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 {error && (
//                   <div className="bg-red-50 border-l-4 border-red-500 p-4">
//                     <div className="flex">
//                       <div className="flex-shrink-0">
//                         <svg
//                           className="h-5 w-5 text-red-400"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                       <div className="ml-3">
//                         <p className="text-sm text-red-700">{error}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     First Name
//                   </label>
//                   <input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     // value={firstName}
//                     defaultValue={userDetails?.firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="lastName"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Last Name
//                   </label>
//                   <input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     // value={lastName}
//                     defaultValue={userDetails?.lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     // value={email}
//                     defaultValue={userDetails?.email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phoneNumber"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     type="text"
//                     // value={phoneNumber}
//                     defaultValue={userDetails?.phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="passport"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Passport
//                   </label>
//                   <input
//                     id="passport"
//                     name="passport"
//                     type="text"
//                     value={passport}
//                     onChange={(e) => setPassport(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="nid"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     NID
//                   </label>
//                   <input
//                     id="nid"
//                     name="nid"
//                     type="text"
//                     value={nid}
//                     onChange={(e) => setNid(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="postalCode"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Postal Code
//                   </label>
//                   <input
//                     id="postalCode"
//                     name="postalCode"
//                     type="text"
//                     value={postalCode}
//                     onChange={(e) => setPostalCode(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="address"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Address
//                   </label>
//                   <input
//                     id="address"
//                     name="address"
//                     type="text"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="dateOfBirth"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Date of Birth
//                   </label>
//                   <input
//                     id="dateOfBirth"
//                     name="dateOfBirth"
//                     type="text"
//                     value={dateOfBirth}
//                     onChange={(e) => setDateOfBirth(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="userType"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     User Type
//                   </label>
//                   <select
//                     id="userType"
//                     name="userType"
//                     value={userType}
//                     onChange={(e) => setUserType(e.target.value)}
//                     className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
//                   >
//                     <option value="" disabled>
//                       Selecet Option
//                     </option>
//                     <option value="Admin">Admin</option>
//                     <option value="User">User</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="userStatus"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     User Status
//                   </label>
//                   <select
//                     id="userStatus"
//                     name="userStatus"
//                     value={userStatus}
//                     onChange={(e) => setUserStatus(e.target.value)}
//                     className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
//                   >
//                     <option value="" disabled>
//                       Selecet Option
//                     </option>
//                     <option value="Active">Active</option>
//                     <option value="Inactive">Inactive</option>
//                   </select>
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="mt-8 flex justify-end space-x-3">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;

import axios from "axios";
import { base_url } from "../constant";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = ({ open, onClose, userDetails }) => {
  const [formData, setFormData] = useState({
    _id: userDetails?._id,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    passport: "",
    nid: "",
    postalCode: "",
    address: "",
    dateOfBirth: "",
    userType: "",
    userStatus: "Active",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with user details when in edit mode
  useEffect(() => {
    setFormData({
      _id: userDetails?._id,
      firstName: userDetails?.firstName || "",
      lastName: userDetails?.lastName || "",
      email: userDetails?.email || "",
      phoneNumber: userDetails?.phoneNumber || "",
      passport: userDetails?.passport || "",
      nid: userDetails?.nid || "",
      postalCode: userDetails?.postalCode || "",
      address: userDetails?.address || "",
      dateOfBirth: userDetails?.dateOfBirth || "",
      userType: userDetails?.userType || "",
      userStatus: userDetails?.userStatus || "Active",
    });
  }, [userDetails, open]);

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
    setError("");
    try {
      setIsLoading(true);
      const response = await axios.put(
        `${base_url}/user/${userDetails?._id}`,
        formData
      );
      if (response.status === 200) {
        setIsLoading(false);
        toast.success("User updated successfully");
        onClose();
      }
    } catch (error) {
      console.error("Error saving user:", error);
      setError("Failed to update user. Please try again.");
      toast.error("Failed to update user");
    } finally {
      setIsLoading(false);
    }
  };

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
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-red-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="passport"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Passport
                  </label>
                  <input
                    id="passport"
                    name="passport"
                    type="text"
                    value={formData.passport}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="nid"
                    className="block text-sm font-medium text-gray-700"
                  >
                    NID
                  </label>
                  <input
                    id="nid"
                    name="nid"
                    type="text"
                    value={formData.nid}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal Code
                  </label>
                  <input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="userType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User Type
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="userStatus"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User Status
                  </label>
                  <select
                    id="userStatus"
                    name="userStatus"
                    value={formData.userStatus}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    Update User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
