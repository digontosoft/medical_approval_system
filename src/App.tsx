// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Statistics from "./components/Statistics";
// import About from "./components/About";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
// import Outcome from "./components/Outcome";
// import SubmissionForm from "./components/SubmissionForm";
// import Admin from "./components/Admin";
// import { SubmissionProvider } from "./context/SubmissionContext";
// import { RouterProvider } from "react-router-dom";
// import { routes } from "./Routes/Routes";

// function App() {
//   const [activeSection, setActiveSection] = useState("home");
//   const [showAdmin, setShowAdmin] = useState(false);

//   const scrollToSection = (sectionId: string) => {
//     if (sectionId === "admin") {
//       setShowAdmin(true);
//     } else {
//       setShowAdmin(false);
//       setActiveSection(sectionId);
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   // Check if the URL has #admin hash
//   React.useEffect(() => {
//     if (window.location.hash === "#admin") {
//       setShowAdmin(true);
//     }
//   }, []);

//   return (
//     <div>
//       <SubmissionProvider>
//         {showAdmin ? (
//           <Admin />
//         ) : (
//           <div className="min-h-screen bg-gray-50">
//             <Navbar
//               activeSection={activeSection}
//               scrollToSection={scrollToSection}
//             />

//             <main>
//               <section id="home">
//                 <Hero />
//               </section>

//               <section id="statistics" className="py-16 bg-white">
//                 <Statistics />
//               </section>

//               <section id="about" className="py-16 bg-gray-50">
//                 <About />
//               </section>

//               <section id="submission" className="py-16 bg-white">
//                 <SubmissionForm />
//               </section>

//               <section id="faq" className="py-16 bg-gray-50">
//                 <FAQ />
//               </section>

//               <section id="outcome" className="py-16 bg-white">
//                 <Outcome />
//               </section>
//             </main>

//             <Footer />
//           </div>
//         )}
//       </SubmissionProvider>
//       <RouterProvider router={routes} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Outcome from "./components/Outcome";
import SubmissionForm from "./components/SubmissionForm";
import Admin from "./components/Admin";
import { SubmissionProvider } from "./context/SubmissionContext";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import DefaultLayout from "./dashboard/DefaultLayout/DefaultLayout";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import RequestLists from "./pages/dashboard/requestlists/RequestLists";
import ApprovedLists from "./pages/dashboard/approvedlists/ApprovedLists";
import UserLists from "./pages/dashboard/userlists/UserLists";
import AdminStatistics from "./pages/dashboard/statistics/AdminStatistics";
import UserProfile from "./pages/dashboard/userprofile/UserProfile";

function MainAppContent() {
  const [activeSection, setActiveSection] = useState("home");
  // const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Don't render the main app content if we're on the login or admin routes
  // if (location.pathname === "/login" || location.pathname === "/admin") {
  //   return null;
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="statistics" className="py-16 bg-white">
          <Statistics />
        </section>

        <section id="about" className="py-16 bg-gray-50">
          <About />
        </section>

        <section id="submission" className="py-16 bg-white">
          <SubmissionForm />
        </section>

        <section id="faq" className="py-16 bg-gray-50">
          <FAQ />
        </section>

        <section id="outcome" className="py-16 bg-white">
          <Outcome />
        </section>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SubmissionProvider>
        <Routes>
          <Route path="/" element={<MainAppContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/sign-up" element={<Registration />} />

          {/* Protected Admin Route */}
          <Route element={<DefaultLayout />}>
            <Route
              path="/admin"
              element={
                <ProtectedRoutes>
                  <Admin />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/request-lists"
              element={
                <ProtectedRoutes>
                  <RequestLists />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/approved-lsits"
              element={
                <ProtectedRoutes>
                  <ApprovedLists />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/statistics"
              element={
                <ProtectedRoutes>
                  <AdminStatistics />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/user-lists"
              element={
                <ProtectedRoutes>
                  <UserLists />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/user-profile"
              element={
                <ProtectedRoutes>
                  <UserProfile />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Routes>
      </SubmissionProvider>
    </BrowserRouter>
  );
}

export default App;
