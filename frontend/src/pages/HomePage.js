import React, { useState, useEffect, useRef } from "react";
import FamilyPool from "../components/FamilyPool";
import PrivatePool from "../components/PrivatePool";
import Upload from "../components/Upload";
import Profile from '../components/Profile';
import { FaBars, FaUpload, FaLock, FaUsers,FaUser } from "react-icons/fa";


const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState("familyPool");
    const sidebarRef = useRef(null);

    const handleSidebarToggle = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleMenuItemClick = (page) => {
        setActivePage(page);
        setIsSidebarOpen(false);
    };

    const renderContent = () => {
        switch (activePage) {
            case "upload":
                return <Upload />;
            case "familyPool":
                return <FamilyPool />;
            case "privatePool":
                return <PrivatePool />;
            case "profile":
                return <Profile />
            default:
                return null;
        }
    };

    // Mapping of active page to title
    const pageTitles = {
        familyPool: "Family Pool",
        privatePool: "Private Pool",
        upload: "Upload Files",
        profile: "Profile"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Your content goes here */}
    <div className="flex h-full bg-gray-50">
        {/* Sidebar */}
        <div
                ref={sidebarRef}
                className={`bg-green-700 text-white font-bold ${isSidebarOpen ? "w-64 h-full" : "w-16 h-fit"} transition-all duration-300 fixed h-full z-30`}
            >
                <div className="flex items-center justify-between px-4 py-4">
                    <h1 className={`text-4xl italic font-custom text-center text-white transition-all duration-1000 ${isSidebarOpen ? "block" : "hidden"}`}>
                        Schooby
                    </h1>
                    <button onClick={handleSidebarToggle} className="text-white focus:outline-none">
                        <FaBars size={25} className={`${isSidebarOpen ? "mb-0" : "mb-2.5 ml-0.5 mt-1"}`} />
                    </button>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li onClick={() => handleMenuItemClick("familyPool")}
                            className={`flex items-center justify-right ${isSidebarOpen ? "justify-start" : ""} px-4 py-4 cursor-pointer text-xl ${activePage === "familyPool" ? "bg-green-600" : "hover:bg-green-500"}`}>
                            <div className="flex items-center justify-between">
                                <FaUsers size={30}/>
                                <span
                                    className={`ml-4 transition-all duration-200 whitespace-nowrap ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                                    Family Pool
                                </span>
                            </div>
                        </li>
                        <li onClick={() => handleMenuItemClick("privatePool")}
                            className={`flex items-center justify-right ${isSidebarOpen ? "justify-start" : ""} px-4 py-4 cursor-pointer text-xl ${activePage === "privatePool" ? "bg-green-600" : "hover:bg-green-500"}`}>
                            <div className="flex items-center justify-between">
                                <FaLock size={30}/>
                                <span
                                    className={`ml-4 transition-all duration-200 whitespace-nowrap ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                                    Private Pool
                                </span>
                            </div>
                        </li>
                        <li onClick={() => handleMenuItemClick("upload")}
                            className={`flex items-center justify-right ${isSidebarOpen ? "justify-start" : ""} px-4 py-4 cursor-pointer text-xl ${activePage === "upload" ? "bg-green-600" : "hover:bg-green-500"}`}>
                            <div className="flex items-center justify-between">
                                <FaUpload size={30}/>
                                <span
                                    className={`ml-4 transition-all duration-200 whitespace-nowrap ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                                    Upload Files
                                </span>
                            </div>
                        </li>
                        <li onClick={() => handleMenuItemClick("profile")}
                            className={`flex items-center justify-right ${isSidebarOpen ? "justify-start" : ""} px-4 py-4 cursor-pointer text-xl ${activePage === "profile" ? "bg-green-600" : "hover:bg-green-500"}`}>
                            <div className="flex items-center justify-between">
                                <FaUser size={30}/>
                                <span
                                    className={`ml-4 transition-all duration-200 whitespace-nowrap ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                                    Profile
                                </span>
                            </div>
                        </li>
                    </ul>
                </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50">
            {/* Title */}
            <div className="fixed w-full top-0 z-20 bg-gray-50 shadow-md text-white">
                <div className="mt-4 flex flex-row justify-center ml-16">
                    <h1 className="text-5xl italic font-custom text-green-600 mb-4">
                        Schooby
                    </h1>
                    <span
                        className="text-5xl italic font-custom text-gray-600 mb-4 mx-2">:</span> {/* Add colon here */}
                    <h1 className="text-5xl italic font-custom text-gray-600 mb-4">
                            {pageTitles[activePage]}
                        </h1>
                    </div>
                </div>

                {/* Dynamic Content */}
                <div className="ml-16 mt-[70px] relative z-0">{renderContent()}</div>
            </div>
        </div>
        </div>
    );
};

export default Home;
