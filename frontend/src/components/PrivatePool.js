import React from "react";
import {FaDownload} from "react-icons/fa";
const PrivatePool = () => {
// Dummy image data for Family Pool
    const media = [
        {
            src: "https://picsum.photos/300/300",
            username: "John Schoonbee",
            type: "image"
        },
        {
            src: "https://picsum.photos/500/300",
            username: "Jane Schoonbee",
            type: "image"
        },
        {
            src: "https://picsum.photos/200/300",
            username: "John Schoonbee",
            type: "image"
        },
        {
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            username: "Alice Schoonbee",
            type: "video"
        },
        {
            src: "https://picsum.photos/300/300",
            username: "John Schoonbee",
            type: "image"
        },
        {
            src: "https://picsum.photos/500/300",
            username: "Jane Schoonbee",
            type: "image"
        },
        {
            src: "https://picsum.photos/200/300",
            username: "John Schoonbee",
            type: "image"
        },
        {
            src: "https://picsum.photos/300/300",
            username: "John Schoonbee",
            type: "image"
        },
        {
            src: "https://picsum.photos/500/300",
            username: "Jane Schoonbee",
            type: "image"
        },
        {
            src: "https://picsum.photos/200/300",
            username: "John Schoonbee",
            type: "image"
        },
    ];

    return (
        <div className="h-full flex flex-col">
            <div className="flex-1 max-h-fit p-6">
                <div
                    className="grid grid-flow-row-dense gap-y-4 gap-x-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
                    {media.map((item, index) => (
                        <div
                            key={index}
                            className="relative group flex justify-center items-center"
                        >
                            {/* Render Video or Image */}
                            {item.type === "video" ? (
                                <video
                                    src={item.src}
                                    className="rounded-2xl shadow-lg object-cover w-full h-full"
                                    autoPlay
                                    loop
                                    muted
                                />
                            ) : (
                                <img
                                    src={item.src}
                                    alt={`Family Pool ${index + 1}`}
                                    className="rounded-2xl shadow-lg object-cover w-full h-full"
                                />
                            )}

                            {/* Hover overlay */}
                            <div
                                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl duration-300 flex justify-center items-center">
                                {/* Download Button */}
                                <button
                                    onClick={() => alert("Downloading...")}
                                    className="flex flex-row gap-2 bg-green-500 text-white font-bold p-4 rounded-lg shadow-lg hover:bg-green-600"
                                >
                                    <FaDownload size={20}/>
                                    Download
                                </button>
                            </div>

                            {/* Bottom Overlay for profile and date */}
                            <div
                                className="absolute top-0 left-0 w-full bg-gradient-to-b from-black via-black/70 to-transparent text-white p-4 rounded-t-2xl flex items-center space-x-2"
                            >
                                {/* Profile Picture */}
                                <img
                                    src="https://picsum.photos/50/50"
                                    alt={`${item.username} Profile`}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                {/* Username */}
                                <div className="flex flex-row">
                                    <span className="font-bold text-xl">{item.username}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivatePool;