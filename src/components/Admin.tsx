import React, { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";
import RequestLists from "../pages/dashboard/requestlists/RequestLists";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already authenticated (from previous session)
  useEffect(() => {
    const authStatus = localStorage.getItem("medApprovalAdminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("medApprovalAdminAuth", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("medApprovalAdminAuth");
  };

  return (
    <div>
      {/* {isAuthenticated ? <AdminPanel /> : <AdminLogin  />} */}
      <RequestLists />
    </div>
  );
};

export default Admin;
