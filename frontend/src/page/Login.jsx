import React from "react";
import { Github } from "lucide-react";

const Login = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-4 py-8 lg:py-0 bg-gray-50">
      {/* Image Section */}
      <div className="w-full max-w-md lg:w-1/2 lg:max-w-lg xl:max-w-xl mb-8 lg:mb-0 lg:mr-12">
        <div className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Login illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md lg:w-1/2 lg:max-w-lg">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          {/* Social Login */}
          <div className="text-center mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-4">
              Sign in with
            </label>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Sign in with Google"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-800 hover:bg-gray-900 text-white shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Sign in with GitHub"
              >
                <Github size={20} />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 font-medium">Or</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <input
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <input
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
              <label className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                <input 
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                  type="checkbox" 
                />
                <span>Remember Me</span>
              </label>
              <a
                className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 text-white font-medium rounded-lg text-sm tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              type="submit"
            >
              Sign In
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                className="text-red-600 hover:text-red-700 hover:underline font-medium transition-colors duration-200"
                href="#"
              >
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;