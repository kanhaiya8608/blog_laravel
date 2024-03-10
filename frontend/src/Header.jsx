import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user information from local storage
    localStorage.removeItem('user');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="flex items-center space-x-4">
      {userInfo ? (
        <div className="flex items-center">
          <span className="text-gray-700 mr-2">Welcome, {userInfo.name}</span>
          <button
            onClick={handleLogout}
            className="bg-gray-700 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <Link to='/login' className="text-gray-700 hover:text-gray-900">Login</Link>
          <Link to='/register' className="text-gray-700 hover:text-gray-900">Register</Link>
        </>
      )}

      {/* Add other links as needed */}
      <Link to='/add' className="text-gray-700 hover:text-gray-900">Add Product</Link>
      <Link to='/update' className="text-gray-700 hover:text-gray-900">Update Product</Link>
    </div>
  );
};

export default Header;
