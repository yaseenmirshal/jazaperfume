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
      <section
        className="min-h-screen flex items-center justify-center text-white bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(./perfumelonland.png)" }}
      >
        <div className="absolute bg-black opacity-30 inset-0 z-0"></div>

        <div className="absolute top-4 left-4 px-2 z-20 p-0 rounded-2xl shadow-md backdrop-filter backdrop-blur-lg bg-white bg-opacity-15">
          <Link
            href="/"
            className="flex items-center space-x-1 text-white  font-medium"
          >
            <IconButton
              aria-label="back"
              sx={{ color: "inherit", borderRadius: "50%" }}
            >
              <ArrowBack />
            </IconButton>
            <span className="text-sm ">Back to home</span>
          </Link>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-24">
          {/* Left Side Content */}
          <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0 lg:mr-20 hidden lg:block">
            <h1 className="text-3xl lg:text-5xl font-bold tracking-wide">
              Join the Scented Journey
            </h1>
            <p className="text-2xl lg:text-3xl my-4">
              Create an account to explore and indulge in our exclusive
              collection.
            </p>
          </div>

          {/* Right Side Sign-Up Form */}
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-4 lg:p-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
              Glad to see you
            </h2>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { mb: 2, width: "100%" }, // Increased gap between fields
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  input: { color: "black", padding: "0.8rem" },
                  label: { color: "gray" },
                  height: "3rem",
                }}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  input: { color: "black", padding: "0.8rem" },
                  label: { color: "gray" },
                  height: "3rem",
                }}
              />
              <TextField
                id="contact"
                label="Contact"
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
                  input: { color: "black", padding: "0.8rem" },
                  label: { color: "gray" },
                  height: "3rem",
                }}
              />
              <TextField
                id="password"
                label="Password"
                type={passwordVisible ? "text" : "password"}
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
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
              <TextField
                id="confirm-password"
                label="Confirm Password"
                type={passwordVisible ? "text" : "password"}
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
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

              <button className="bg-gray-800 p-2 rounded-lg text-white text-lg mt-4 w-full shadow-md">
                Sign up
              </button>
              {/* Sign Up with Google button */}
              <Button
                variant="outlined"
                color="inherit"
                className=" w-full"
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
                Sign Up with Google
              </Button>

              <Link href="/Login" legacyBehavior>
                <div className=" text-center">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <a href="./Login" className="text-blue-500 hover:underline">
                      Login
                    </a>
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
