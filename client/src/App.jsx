import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

const AppWrapper = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <div
            className={`min-h-screen flex items-center justify-center relative ${
                isLoginPage ? "" : "bg-[#0d1b2a]"
            }`}
            style={
                isLoginPage
                    ? {
                          backgroundImage: "url('/bgImage.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                      }
                    : {}
            }
        >
            {/* Dark Overlay */}
            {isLoginPage && (
                <div className="absolute inset-0 bg-black/60 z-0"></div>
            )}

            {/* Routes */}
            <div className="relative z-10 w-full flex items-center justify-center">
                <Routes>
                    <Route path="/" element={<Navigate to={"/admin-dashboard"} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                </Routes>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <AppWrapper />
        </BrowserRouter>
    );
};

export default App;
