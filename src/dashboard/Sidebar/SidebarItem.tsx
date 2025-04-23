import { ChevronDown, ListOrdered } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ label, icon, links, open, onClick, active }) => {
  return (
    <React.Fragment>
      <NavLink
        to="#"
        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out bg-teal-900 hover:bg-teal-950 ${
          active ? "bg-teal-950" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {/* <img height={20} width={20} src={icon} stroke={1.5} /> */}
        <ListOrdered size={20} className="text-white" />
        {label}
        <ChevronDown
          className={` absolute right-4 top-1/2 -translate-y-1/2 text-white ${
            open ? "rotate-180" : ""
          }`}
        />
      </NavLink>
      <div
        className={`translate transform overflow-hidden  ${
          !open ? "hidden" : ""
        }`}
      >
        <ul className="flex flex-col gap-2 p-2">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  "group relative flex items-center gap-2.5 rounded-md p-2 font-medium bg-teal-900 hover:bg-teal-950 text-white duration-300 ease-in-out hover:text-white " +
                  (isActive && "!text-white")
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SidebarItem;
