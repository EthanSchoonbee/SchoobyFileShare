import React, { useState } from "react";

const Profile = () => {
    const [name, setName] = useState("John Doe"); // Initial name
    const [email, setEmail] = useState("johndoe@example.com"); // Initial email
    const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
    const [profileImage, setProfileImage] = useState("https://picsum.photos/150/150"); // Initial profile image

    const handleSave = () => {
        // Add save logic (e.g., API call to update user profile)
        console.log("Profile saved:", { name, email });
        setIsEditing(false);
    };

    const handleChangePassword = () => {
        // Add logic for sending password reset email
        console.log("Password reset email sent to:", email);
        alert("A password reset email has been sent to your email address.");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfileImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex-col p-6 flex items-center justify-center bg-gray-50">
            <div className="p-8 w-full max-w-3xl bg-white shadow-lg rounded-lg">
                {/* Profile Image */}
                <div className="flex flex-col items-center mb-6">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover"
                    />
                    {isEditing && (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-4 text-sm text-gray-600"
                        />
                    )}
                </div>

                {/* Profile Details */}
                <div className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            disabled={!isEditing}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg ${
                                isEditing
                                    ? "border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    : "border-gray-300 bg-gray-100 cursor-not-allowed"
                            }`}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            disabled={!isEditing}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg ${
                                isEditing
                                    ? "border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    : "border-gray-300 bg-gray-100 cursor-not-allowed"
                            }`}
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex space-x-4 justify-center">
                    {isEditing ? (
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-green-500 font-bold text-white rounded-lg hover:bg-green-600"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="px-4 py-2 bg-blue-500 font-bold text-white rounded-lg hover:bg-blue-600"
                        >
                            Edit Profile
                        </button>
                    )}
                    <button
                        onClick={handleChangePassword}
                        className="px-4 py-2 bg-red-500 font-bold text-white rounded-lg hover:bg-red-600"
                    >
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
