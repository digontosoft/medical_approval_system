import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClickOutside from "../ClickOutside";
import { ChevronDown, Circle, CircleUser, LogOut } from "lucide-react";

// import useAuth from '../../hooks/useAuth';
// import Logout from '../../pages/auth/Logout';
// import ClickOutside from '../ClickOutside';
// import UserOne from '/user/user-01.png';
// import useSingleUser from '../../hooks/useSingleUser';
import profile from "../../assets/profile.jpg";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("medApprovalAdminAuth");
    navigate("/admin-login"); // Redirect to login page after logout
    setDropdownOpen(false); // Close the dropdown
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        {/* <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {getUser.firstName || "User"}
          </span>
          <span className="block text-xs">{getUser.userType}</span>
        </span> */}

        <span className="h-12 w-12 rounded-full">
          <img src={profile} alt="User" className="rounded-full" />
        </span>

        {/* <img
          src="/chevron-down.svg"
          stroke={1.25}
          className="hidden sm:block"
        /> */}
        {/* <ChevronDown className={` hidden sm:block text-white `} /> */}
      </Link>

      {/* <!-- Dropdown --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-60 flex-col rounded-sm border bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-2 border-b py-5">
            <li className="hover:bg-gray-200 p-2">
              <Link
                to="/user-profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                onClick={() => setDropdownOpen(false)}
              >
                <CircleUser size={20} />
                My Profile
              </Link>
            </li>
            {/* {isAuthenticated && ( */}
            <li
              onClick={handleLogout}
              className="flex items-center gap-3.5 hover:bg-gray-200 p-2 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base cursor-pointer"
            >
              <LogOut size={20} />
              Log Out
            </li>
            {/* )} */}
          </ul>

          {/* <Logout /> */}
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
