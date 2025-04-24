import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// import Logo from "../../assets/school-logo.png";
// import User from "../../assets/user.png";
// import Students from "../../assets/students.png";
// import result from "../../assets/result.png";
// import Setting from "../../assets/Setting.png";
// import Report from "../../assets/report.png";
// import useAuth from "../../hooks/useAuth";
import SidebarItem from "./SidebarItem";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { Book, Home, XIcon } from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  // const { auth } = useAuth();
  // const userType = auth.userType;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const adminMenuItems = [
    {
      label: "Orders",
      icon: <Book />,
      links: [
        { to: "/request-lists", label: "Request Lists" },
        { to: "/approved-lsits", label: "Approved Lists" },
        { to: "/statistics", label: "Statistics" },
      ],
      activeCondition:
        pathname.includes === "orders" || pathname.includes("dashboard"),
    },
    {
      label: "Users",
      icon: <Book />,
      links: [{ to: "/user-lists", label: "User Lists" }],
      activeCondition:
        pathname.includes === "users" || pathname.includes("dashboard"),
    },
  ];

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-teal-800 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between sm:justify-center gap-2 px-6 py-5 lg:py-6">
        <NavLink to="/" className="flex items-center justify-center gap-4">
          <span className="uppercase font-bold tracking-wide text-white text-lg">
            Back to home
          </span>
          <Home className="h-30 w-30 text-white" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          {/* <img src="/x.svg" stroke={2} color="#fff" /> */}
          <XIcon className="text-white" />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {adminMenuItems.map((item, idx) => (
                <SidebarLinkGroup
                  key={idx}
                  activeCondition={item.activeCondition}
                >
                  {(handleClick, open) => (
                    <SidebarItem
                      label={item.label}
                      icon={item.icon}
                      links={item.links}
                      open={open}
                      onClick={() =>
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true)
                      }
                      active={item.activeCondition}
                    />
                  )}
                </SidebarLinkGroup>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
