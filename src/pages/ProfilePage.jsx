import { useState } from "react";
import Nav from "../components/Nav";
import { FiMail } from "react-icons/fi"; // Import email icon from react-icons library
import { useLogin } from "../components/contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const {loginData, addLogin} = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    setIsEditing(false); // Disable editing mode after submission
  };

  const handleLogout = (e) => {
    e.preventDefault();
    alert("You've been logged out successfully!");
    localStorage.clear();
    addLogin({
      data: {
        token: "",
        email: "",
        name: "",
        role: "",
        status: false
      },
    });
    
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const {status} = loginData;
  useEffect(() => {
    if(status === false) {
      navigate("/");
    }
  }, [status])
  

  return (
    <div className="bg-off-white min-h-screen">
      <Nav />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Top section with user information */}
        <div className="flex items-center mb-8">
          <div className="flex items-center">
            <div className="h-16 w-16 flex items-center justify-center bg-gray-300 rounded-full text-gray-800 text-4xl font-bold">
              {loginData.name.charAt(0)}
            </div>
            <div className="ml-4">
              <p className="font-bold text-lg">{loginData.name} {loginData.name}</p>
              <p className="text-gray-700">{loginData.email}</p>
            </div>
          </div>
          <div className="ml-auto">
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Edit
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Save
              </button>
            )}
          </div>
        </div>

        {/* Form section with user details */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {/* First row */}
          <div className="grid grid-cols-2 gap-4 mb-6 items-center">
            <div className="col-span-1">
              <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={loginData.name}
                onChange={handleChange}
                readOnly={!isEditing}
                className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                placeholder="First Name"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={loginData?.name}
                onChange={handleChange}
                readOnly={!isEditing}
                className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-2 gap-4 mb-6 items-center">
            <div className="col-span-1">
              <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={loginData?.gender}
                onChange={handleChange}
                readOnly={!isEditing}
                className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                placeholder="Gender"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={loginData?.age}
                onChange={handleChange}
                readOnly={!isEditing}
                className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                placeholder="Age"
              />
            </div>
          </div>

          {/* Third row */}
          <div className="grid grid-cols-2 gap-4 mb-6 items-center">
            <div className="col-span-1">
              <label htmlFor="field" className="block text-gray-700 font-bold mb-2">
                Field
              </label>
              <input
                type="text"
                id="field"
                name="field"
                value={loginData?.field}
                onChange={handleChange}
                readOnly={!isEditing}
                className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                placeholder="Field"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={loginData?.dob}
                onChange={handleChange}
                readOnly={!isEditing}
                className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                placeholder="Date of Birth"
              />
            </div>
          </div>

          {/* Email icon and email */}
          <div className="flex items-center mb-4">
            <FiMail className="text-2xl text-gray-700 mr-2" />
            <p className="text-gray-700">{loginData.email}</p>
          </div>
          <div className="flex justify-end">
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            logout
          </button>
        </div>

        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
