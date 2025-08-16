// Updated src/pages/dashboard/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { 
  FiUser, 
  FiSettings, 
  FiBell, 
  FiLogOut,
  FiTrendingUp,
  FiUsers,
  FiDollarSign,
  FiActivity,
  FiCalendar,
  FiClock,
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit3,
  FiEye,
  FiDownload,
  FiPlus,
  FiArrowRight,
  FiStar,
  FiTarget,
  FiAward,
  FiZap,
  FiMenu // Added for mobile toggle
} from 'react-icons/fi';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) {
      navigate('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Simulate loading notifications
      setTimeout(() => {
        setNotifications([
          {
            id: 1,
            title: 'Welcome to Eddz!',
            message: 'Your account has been successfully created.',
            time: '2 minutes ago',
            type: 'success'
          },
          {
            id: 2,
            title: 'Profile Setup',
            message: 'Complete your profile to get personalized recommendations.',
            time: '1 hour ago',
            type: 'info'
          },
          {
            id: 3,
            title: 'New Feature Available',
            message: 'Check out our latest analytics dashboard.',
            time: '1 day ago',
            type: 'feature'
          }
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const stats = [
    {
      title: 'Total Projects',
      value: '12',
      change: '+2.5%',
      changeType: 'positive',
      icon: <FiTarget className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Tasks',
      value: '28',
      change: '+12%',
      changeType: 'positive',
      icon: <FiActivity className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      title: 'Team Members',
      value: '8',
      change: '+1',
      changeType: 'positive',
      icon: <FiUsers className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      title: 'Revenue',
      value: '$24,500',
      change: '+8.2%',
      changeType: 'positive',
      icon: <FiDollarSign className="w-6 h-6" />,
      color: 'bg-orange-500'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'Project "Website Redesign" completed',
      time: '2 hours ago',
      icon: <FiAward className="w-4 h-4" />,
      color: 'text-green-500'
    },
    {
      id: 2,
      action: 'New team member added to "Mobile App"',
      time: '4 hours ago',
      icon: <FiUsers className="w-4 h-4" />,
      color: 'text-blue-500'
    },
    {
      id: 3,
      action: 'Invoice #1234 sent to client',
      time: '6 hours ago',
      icon: <FiDollarSign className="w-4 h-4" />,
      color: 'text-orange-500'
    },
    {
      id: 4,
      action: 'Meeting scheduled for tomorrow',
      time: '1 day ago',
      icon: <FiCalendar className="w-4 h-4" />,
      color: 'text-purple-500'
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Review project proposals',
      dueDate: 'Today, 3:00 PM',
      priority: 'high',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Client meeting preparation',
      dueDate: 'Tomorrow, 10:00 AM',
      priority: 'medium',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Update portfolio website',
      dueDate: 'Friday, 2:00 PM',
      priority: 'low',
      status: 'pending'
    }
  ];

  const dashboardStyles = `
    .gradient-bg {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .gradient-text {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .glass-effect {
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .card-hover {
      transition: all 0.3s ease;
    }
    .card-hover:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    .fade-in {
      animation: fadeIn 0.6s ease-out;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .slide-in {
      animation: slideIn 0.8s ease-out;
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .pulse-dot {
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
    .priority-high {
      border-left: 4px solid #ef4444;
    }
    .priority-medium {
      border-left: 4px solid #f59e0b;
    }
    .priority-low {
      border-left: 4px solid #10b981;
    }
  `;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{dashboardStyles}</style>
      
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          user={user} 
          onLogout={handleLogout} 
        />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Mobile top bar with hamburger */}
          <div className="lg:hidden sticky top-0 bg-white shadow-md z-30">
            <div className="flex items-center justify-between p-4">
              <h1 className="text-xl font-bold gradient-text">Eddz</h1>
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-600"
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-4 lg:p-8">
            {/* Dashboard Header */}
            <div className="gradient-bg text-white py-8 rounded-xl mb-8">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between">
                  <div className="fade-in">
                    <h1 className="text-3xl font-bold mb-2">
                      Welcome back, {user?.firstName ? `${user.firstName} ${user.lastName}` : user?.name || 'User'}! 👋
                    </h1>
                    <p className="text-blue-100">
                      Here's what's happening with your projects today.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="relative p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                      <FiBell className="w-6 h-6" />
                      {notifications.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {notifications.length}
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card-hover bg-white rounded-xl shadow-sm p-6 border border-gray-100 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className={`text-sm flex items-center mt-2 ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <FiTrendingUp className="w-4 h-4 mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className={`${stat.color} text-white p-3 rounded-lg`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 slide-in">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Recent Activity
                      </h3>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View All
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div
                          key={activity.id}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className={`${activity.color} mt-1`}>
                            {activity.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">
                              {activity.action}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar-like content (Profile, Tasks, Actions) */}
              <div className="space-y-6">
                {/* Profile Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 slide-in" style={{ animationDelay: '0.2s' }}>
                  <div className="text-center">
                    <div className="gradient-bg text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiUser className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {user?.firstName ? `${user.firstName} ${user.lastName}` : user?.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {user?.email}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      {user?.phone && (
                        <div className="flex items-center justify-center space-x-2">
                          <FiPhone className="w-4 h-4" />
                          <span>{user.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-center space-x-2">
                        <FiCalendar className="w-4 h-4" />
                        <span>
                          Joined {new Date(user?.registrationTime || user?.loginTime).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <FiEdit3 className="w-4 h-4" />
                      <span>Edit Profile</span>
                    </button>
                  </div>
                </div>

                {/* Upcoming Tasks */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 slide-in" style={{ animationDelay: '0.3s' }}>
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Upcoming Tasks
                      </h3>
                      <button className="text-blue-600 hover:text-blue-700">
                        <FiPlus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {upcomingTasks.map((task, index) => (
                        <div
                          key={task.id}
                          className={`p-3 rounded-lg border-l-4 bg-gray-50 priority-${task.priority}`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                {task.title}
                              </p>
                              <p className="text-xs text-gray-600 mt-1 flex items-center">
                                <FiClock className="w-3 h-3 mr-1" />
                                {task.dueDate}
                              </p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              task.priority === 'high' 
                                ? 'bg-red-100 text-red-700'
                                : task.priority === 'medium'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {task.priority}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 slide-in" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group">
                      <div className="flex items-center space-x-3">
                        <FiPlus className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">New Project</span>
                      </div>
                      <FiArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group">
                      <div className="flex items-center space-x-3">
                        <FiUsers className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-green-900">Invite Team</span>
                      </div>
                      <FiArrowRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group">
                      <div className="flex items-center space-x-3">
                        <FiDownload className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-medium text-purple-900">Export Data</span>
                      </div>
                      <FiArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            {notifications.length > 0 && (
              <div className="mt-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 slide-in" style={{ animationDelay: '0.5s' }}>
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Recent Notifications
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {notifications.map((notification, index) => (
                        <div
                          key={notification.id}
                          className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 pulse-dot ${
                            notification.type === 'success' 
                              ? 'bg-green-500'
                              : notification.type === 'info'
                              ? 'bg-blue-500'
                              : 'bg-purple-500'
                          }`}></div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900">
                              {notification.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Coming Soon Features */}
            <div className="mt-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center slide-in" style={{ animationDelay: '0.6s' }}>
                <div className="gradient-bg text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiZap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Exciting Features Coming Soon!
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're working on amazing new features to enhance your experience. 
                  Stay tuned for advanced analytics, team collaboration tools, and much more.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <FiActivity className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Advanced Analytics</h4>
                    <p className="text-sm text-gray-600 mt-1">Detailed insights and reports</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <FiUsers className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Team Collaboration</h4>
                    <p className="text-sm text-gray-600 mt-1">Real-time team workspace</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <FiTarget className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Goal Tracking</h4>
                    <p className="text-sm text-gray-600 mt-1">Set and monitor objectives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;