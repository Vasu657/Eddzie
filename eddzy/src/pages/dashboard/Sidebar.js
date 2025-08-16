import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiTarget, 
  FiActivity, 
  FiUsers, 
  FiDollarSign, 
  FiSettings, 
  FiLogOut, 
  FiX,
  FiMenu // Added for toggle icon
} from 'react-icons/fi';

const Sidebar = ({ isOpen, setIsOpen, user, onLogout }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:static lg:translate-x-0 lg:block ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-2xl font-bold gradient-text">Eddz</h1>
          <button 
            className="lg:hidden text-gray-600"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            <li>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsOpen(false)} // Close sidebar on link click (mobile)
              >
                <FiTarget className="w-5 h-5 mr-3" />
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dashboard/projects" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FiActivity className="w-5 h-5 mr-3" />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dashboard/tasks" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FiUsers className="w-5 h-5 mr-3" />
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dashboard/team" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FiDollarSign className="w-5 h-5 mr-3" />
                Team
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dashboard/settings" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FiSettings className="w-5 h-5 mr-3" />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* User profile and logout */}
        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full gradient-bg text-white flex items-center justify-center font-bold">
              {user?.firstName?.[0] || 'U'}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {user?.firstName ? `${user.firstName} ${user.lastName}` : user?.name || 'User'}
              </p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </div>
          <button 
            onClick={() => {
              onLogout();
              setIsOpen(false);
            }}
            className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg text-gray-700 transition-colors"
          >
            <FiLogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;