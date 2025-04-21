import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if user is already authenticated (from previous session)
    useEffect(() => {
        const authStatus = localStorage.getItem('medApprovalAdminAuth');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
        localStorage.setItem('medApprovalAdminAuth', 'true');
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('medApprovalAdminAuth');
    };

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <div className="bg-white shadow">
                        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                            <h1 className="text-xl font-bold text-gray-800">Medical Software Approval Admin</h1>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                    <AdminPanel />
                </div>
            ) : (
                <AdminLogin onLogin={handleLogin} />
            )}
        </div>
    );
};

export default Admin; 