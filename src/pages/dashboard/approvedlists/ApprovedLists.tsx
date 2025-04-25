import { useEffect, useState } from "react";
import SubmissionRequestView from "../../../components/SubmissionRquestView";
import RequestModal from "../../../components/RequestModal";
import axios from "axios";
import { base_url } from "../../../constant";
import Swal from "sweetalert2";
import { Edit, Eye, Search, Trash } from "lucide-react";
import RequestSubmissionEdit from "../../../components/RequestSubmissionEdit";

const ApprovedLists = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenRequestModal, setIsOpenRequestModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isRequestEditModalOpen, setIsRequestEditModalOpen] = useState(false);
  const [softwares, setSoftwares] = useState([]);
  const [allSoftwares, setAllSoftwares] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${base_url}/software`);
        if (response.status === 200) {
          setSoftwares(response.data);
          setAllSoftwares(response.data);
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
      setSoftwares(allSoftwares);
    } else {
      const filtered = allSoftwares.filter(
        (software) =>
          software?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          software?.contactPerson
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          software?.emailAddress
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          software?.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
          software?.version.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSoftwares(filtered);
    }
  }, [searchTerm, allSoftwares]);

  const handleDelete = async (softwareId) => {
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
        const response = await axios.delete(
          `${base_url}/software/${softwareId}`
        );
        if (response.status === 200) {
          Swal.fire("Deleted!", "User has been deleted.", "success");
          setSoftwares((prevSoftware) =>
            prevSoftware.filter((software) => software._id !== softwareId)
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

  // const handleApprove = async (softwareId) => {
  //   const result = await Swal.fire({
  //     title: "Are you sure approve this request?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   });

  //   const payload = {
  //     requestStatus: "Approve",
  //   };

  //   if (result.isConfirmed) {
  //     try {
  //       const response = await axios.put(
  //         `${base_url}/software/${softwareId}`,
  //         payload
  //       );
  //       if (response.status === 200) {
  //         Swal.fire("Approved!", "Request has been approved.", "success");
  //         setSoftwares((prevSoftware) =>
  //           prevSoftware.filter((software) => software._id !== softwareId)
  //         );
  //       } else {
  //         Swal.fire("Error!", "Failed to apporved.", "error");
  //       }
  //     } catch (error) {
  //       Swal.fire(
  //         "Error!",
  //         error.response?.data?.message ||
  //           "Something went wrong while approving.",
  //         "error"
  //       );
  //     }
  //   }
  // };
  // const handleReject = async (softwareId) => {
  //   const result = await Swal.fire({
  //     title: "Are you sure reject this request?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   });

  //   const payload = {
  //     requestStatus: "Reject",
  //   };

  //   if (result.isConfirmed) {
  //     try {
  //       const response = await axios.put(
  //         `${base_url}/software/${softwareId}`,
  //         payload
  //       );
  //       if (response.status === 200) {
  //         Swal.fire("Rejected!", "Request has been rejected.", "success");
  //         setSoftwares((prevSoftware) =>
  //           prevSoftware.filter((software) => software._id !== softwareId)
  //         );
  //       } else {
  //         Swal.fire("Error!", "Failed to rejected.", "error");
  //       }
  //     } catch (error) {
  //       Swal.fire(
  //         "Error!",
  //         error.response?.data?.message ||
  //           "Something went wrong while rejecting.",
  //         "error"
  //       );
  //     }
  //   }
  // };

  const handleOpenModal = (request) => {
    setSelectedRequest(request);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setSelectedRequest(null);
  };

  const handleOpenRequestModal = () => {
    setIsOpenRequestModal(true);
  };
  const handleCloseRequestModal = () => {
    setIsOpenRequestModal(false);
  };

  const handleOpenRequestEditModal = (selectedSoftware) => {
    setSelectedRequest(selectedSoftware);
    setIsRequestEditModalOpen(true);
  };
  const handleCloseRequestEditModal = () => {
    setIsRequestEditModalOpen(false);
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
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Software
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Details
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Contact Person
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Email
              </th>
              {/* <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Medical Use Cases
              </th> */}
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Version
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {softwares
              .filter((software) => software?.status === "approved")
              .map((software) => (
                <tr key={software?._id}>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {software?.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {software?.details}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {software?.contactPerson}
                  </td>
                  <td className="">
                    <span className="text-sm font-semibold text-red-600 bg-red-200 p-1 rounded-md">
                      {software?.emailAddress}
                    </span>
                  </td>
                  {/* <td>
                  <span className="text-sm font-semibold text-red-600 bg-red-200 p-1 rounded-md">
                    {software?.medicalUseCases}
                  </span>
                </td> */}
                  <td className="">
                    <span className="text-sm font-semibold text-red-600 bg-red-200 p-1 rounded-md">
                      {software?.version}
                    </span>
                  </td>
                  <td className="">
                    <span className="text-sm font-semibold text-green-600 bg-green-200 p-1 rounded-md">
                      Approved
                    </span>
                  </td>
                  <td className="py-4 text-sm flex items-center gap-2">
                    <button
                      onClick={() => handleOpenModal(software)}
                      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <Eye />
                    </button>
                    <button
                      onClick={() => handleOpenRequestEditModal(software)}
                      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <Edit />
                    </button>
                    <button
                      onClick={() => handleDelete(software?._id)}
                      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <Trash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <RequestModal
        open={isOpenRequestModal}
        onClose={handleCloseRequestModal}
      />
      <SubmissionRequestView
        open={isOpenModal}
        onClose={handleCloseModal}
        requestData={selectedRequest}
      />
      <RequestSubmissionEdit
        open={isRequestEditModalOpen}
        onClose={handleCloseRequestEditModal}
        requestData={selectedRequest}
      />
    </div>
  );
};

export default ApprovedLists;
