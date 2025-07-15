import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/api/auth/login", {email, password});
            console.log(response);
        }
        catch(err){
            console.error(err);
        }
    }

    return (
        <div className="flex w-full max-w-4xl bg-white/20 backdrop-blur-md border border-white/0 rounded-lg shadow-2xl overflow-hidden">

            <div className="w-full md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl md:text-3xl font-light text-white leading-8 tracking-tight">
                        Employee Management System
                    </h1>
                    <p className="text-gray-200/80 text-sm font-light tracking-widest">Please log in to continue</p>
                </div>
                <form className="space-y-4"
                    onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-200">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            placeholder="example@example.com"
                            required
                            className="border border-white/30 rounded-md px-3 py-2 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="password" className="text-sm font-medium text-gray-200">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="••••••••"
                            required
                            className="border border-white/30 rounded-md px-3 py-2 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black/60 text-white rounded-md py-2 font-light hover:bg-black/70 transition tracking-widest"
                    >
                        Login
                    </button>
                </form>
            </div>

            <div className="hidden md:flex md:w-1/2 bg-[#5e7185]/30 backdrop-blur-sm border-l border-white/0 items-center justify-center p-2 relative flex-col">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className="relative z-10 w-45 h-45 object-contain"
                />
                <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
                    <span className="text-black">Ai</span>
                    <span className="text-white">VIO</span>
                </h1>


                <p className=" font-extralight relative z-10 text-xs md:text-sm text-gray-300 text-center max-w-xs tracking-widest">Empowering your workflow with smart, seamless automation.</p>
            </div>
        </div>
    );
};

export default Login;
