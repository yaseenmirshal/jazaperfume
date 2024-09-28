"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff, ArrowBack } from "@mui/icons-material";

function Page() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-white">
        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <Link href="/" className="flex items-center space-x-2 text-gray-600">
            <IconButton
              aria-label="back"
              sx={{ color: "inherit", borderRadius: "50%" }}
            >
              <ArrowBack />
            </IconButton>
            
          </Link>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center w-full px-4 lg:px-16">
          {/* Left Side Content */}
          <div className="hidden lg:block lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome Back!
            </h1>
            <p className="text-xl text-gray-500 mt-4">
              Log in to rediscover our fragrances.
            </p>
          </div>

          {/* Right Side Login Form */}
          <div className="w-full mt-10 md:mt-0 lg:w-1/3 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Login
            </h2>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { mb: 3, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              {/* Email Input */}
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                  input: { color: "black", padding: "0.8rem" },
                  label: { color: "gray" },
                  height: "3rem",
                }}
              />

              {/* Password Input */}
              <TextField
                id="password"
                label="Password"
                type={passwordVisible ? "text" : "password"}
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                  input: { color: "black", padding: "0.8rem" },
                  label: { color: "gray" },
                  height: "3rem",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisibility}
                        edge="end"
                      >
                        {passwordVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Login Button */}
              <button className="bg-black text-white w-full p-3 rounded-lg text-lg shadow-md hover:bg-gray-800 transition">
                Login
              </button>

              {/* Sign Up with Google Button */}
              <Button
                variant="outlined"
                color="inherit"
                className="mt-4 w-full"
                sx={{
                  borderColor: "#4285F4",
                  color: "#4285F4",
                  "&:hover": { borderColor: "#357AE8", color: "#357AE8" },
                }}
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google logo"
                  className="w-5 h-5 mr-2"
                />
                Login with Google
              </Button>

              {/* Sign Up Link */}
              <Link href="/Signup" legacyBehavior>
                <div className="text-center mt-4">
                  <p className="text-gray-500">
                    Don't have an account?{" "}
                    <a className="text-blue-500 hover:underline">Signup</a>
                  </p>
                </div>
              </Link>
            </Box>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
