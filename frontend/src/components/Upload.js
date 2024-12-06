import { useState, useRef } from "react";

function App() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [error, setError] = useState("");

    const fileInputRef = useRef(null);
    const acceptedFileExtensions = ["jpg", "png", "jpeg"];
    const acceptedFileTypesString = acceptedFileExtensions.map((ext) => `.${ext}`).join(",");

    const handleSubmit = () => {
        if (selectedFiles.length === 0) {
            setError("File is required");
        } else if (!error) {
            setSelectedFiles([]);
            setError("");
        }
    };

    const handleFileChange = (event) => {
        const newFilesArray = Array.from(event.target.files);
        processFiles(newFilesArray);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        processFiles(droppedFiles);
    };

    const processFiles = (filesArray) => {
        const newSelectedFiles = [...selectedFiles];
        let hasError = false;
        const fileTypeRegex = new RegExp(acceptedFileExtensions.join("|"), "i");
        filesArray.forEach((file) => {
            if (newSelectedFiles.some((f) => f.name === file.name)) {
                setError("File names must be unique");
                hasError = true;
            } else if (!fileTypeRegex.test(file.name.split(".").pop())) {
                setError(`Only ${acceptedFileExtensions.join(", ")} files are allowed`);
                hasError = true;
            } else {
                newSelectedFiles.push(file);
            }
        });

        if (!hasError) {
            setError("");
            setSelectedFiles(newSelectedFiles);
        }
    };

    const handleCustomButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileDelete = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };

    return (
        <div>
            <div className="min-h-fit p-6 flex items-center justify-center" color={"#f9fafb"}>
                <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Drag and Drop Section */}
                        <div
                            className="min-h-[23rem] border-4 border-dashed border-green-500 bg-green-100 rounded-lg p-4 flex flex-col justify-center items-center space-y-4"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                        >
                            <p className="text-lg font-semibold">Drag and Drop the files</p>
                            <p className="text-lg font-bold">or</p>
                            <button
                                type="button"
                                onClick={handleCustomButtonClick}
                                className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
                            >
                                Browse Files
                            </button>
                            <input
                                type="file"
                                id="files"
                                name="files"
                                multiple
                                accept={acceptedFileTypesString}
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>

                        {/* Uploaded Files Section */}
                        <div className="border-2 border-gray-300 rounded-lg py-4 max-h-[23rem] overflow-auto">
                            {selectedFiles.length > 0 ? (
                                <ul className="px-4">
                                    {selectedFiles.map((file, index) => (
                                        <li
                                            key={file.name}
                                            className="flex justify-between items-center border-b py-2"
                                        >
                                            <span className="text-base">{file.name}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleFileDelete(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="h-full flex justify-center items-center">
                                    <p className="text-lg text-gray-500">No Files Uploaded Yet</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

                    <div className="flex justify-center mt-8">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="px-6 py-2 bg-green-500 font-bold text-white rounded-lg hover:bg-green-600"
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
