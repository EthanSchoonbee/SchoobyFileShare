import React, {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement login logic
        console.log("Logging in with:", { email, password });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    //<Logo width="200" height="200" className="mb-5" />

    return (
        <section className="bg-gray-50 min-h-screen">
            <div className="flex flex-col items-center justify-start px-6 py-16 mx-auto md:h-screen">
                <h1 className="text-9xl italic font-custom text-center text- mb-3 text-green-600">
                    Schooby
                </h1>
                <h2 className="text-2xl italic md:text-2xl text-center mb-16 text-gray-500 font-sans">
                    Family File Sharing Made Easy!
                </h2>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-16 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-green-600 md:text-3xl space-y-2">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-m font-medium text-black text-left">
                                    Email:
                                </label>
                                <input type="email" name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                       placeholder="example@email.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-m font-medium text-black text-left">
                                    Password:
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"} // Toggle between text and password
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 font-bold"
                                    >
                                        {showPassword ? "Hide" : "Show"} {/* Button text */}
                                    </button>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-green-600 hover:bg-green-500 focus:ring-2 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center">Sign
                                in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;