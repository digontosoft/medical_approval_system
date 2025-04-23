const RequestLists = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      contact: "john@example.com",
      submitDate: "2023-09-15",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      contact: "jane@example.com",
      submitDate: "2023-10-02",
      status: "Pending",
    },
    {
      id: 3,
      name: "Alice Johnson",
      contact: "alice@example.com",
      submitDate: "2023-11-20",
      status: "Pending",
    },
    {
      id: 4,
      name: "Michael Brown",
      contact: "michael@example.com",
      submitDate: "2023-12-01",
      status: "Pending",
    },
    {
      id: 5,
      name: "Emily Davis",
      contact: "emily@example.com",
      submitDate: "2023-12-15",
      status: "Pending",
    },
    {
      id: 6,
      name: "Daniel Wilson",
      contact: "daniel@example.com",
      submitDate: "2024-01-05",
      status: "Pending",
    },
    {
      id: 7,
      name: "Sophia Miller",
      contact: "sophia@example.com",
      submitDate: "2024-01-22",
      status: "Pending",
    },
    {
      id: 8,
      name: "Chris Martin",
      contact: "chris@example.com",
      submitDate: "2024-02-10",
      status: "Pending",
    },
    {
      id: 9,
      name: "Olivia Clark",
      contact: "olivia@example.com",
      submitDate: "2024-03-01",
      status: "Pending",
    },
    {
      id: 10,
      name: "David Lee",
      contact: "david@example.com",
      submitDate: "2024-03-18",
      status: "Pending",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Software
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Submitted
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
          {data.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {user.contact}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {user.submitDate}
              </td>
              <td className="">
                <span className=" text-sm font-semibold text-red-600 bg-red-200 p-1 rounded-md">
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">View</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestLists;
