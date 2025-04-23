import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();

  try {
    const userData = JSON.parse(
      localStorage.getItem("medApprovalAdminAuth") || "{}"
    );

    // Check if user is authenticated (consider using a more secure method)
    const isAuthenticated =
      userData.username === "admin" && userData.password === "password123";

    if (!isAuthenticated) {
      // Redirect to admin login, preserving the location they came from
      return <Navigate to="/admin-login" state={{ from: location }} replace />;
    }

    return children;
  } catch (error) {
    console.error("Error parsing auth data:", error);
    return <Navigate to="/admin-login" state={{ from: location }} replace />;
  }
};

export default ProtectedRoutes;
