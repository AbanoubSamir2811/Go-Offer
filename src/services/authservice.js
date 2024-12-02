"use server";

import axios from "axios";
import { loginSchema } from "../schemas/loginSchema"; // Adjust path as needed
import { registerSchema } from "../schemas/registerSchema";

// API Base URL
const BASE_URL = "https://dashboard.gooffer.net/api";
const HEADERS = {
  Platform: "website", // Replace with the desired platform value
};

/**
 * Handles user registration.
 * @param {Object} params - The registration parameters.
 * @returns {Object} - Response data from the server.
 */
export const registerService = async (params) => {
  // Validate input data using the register schema
  const validation = registerSchema.safeParse(params);
  if (!validation.success) {
    const errorMessages = validation.error.errors.map((err) => err.message);
    throw new Error(errorMessages.join(", "));
  }

  try {
    const response = await axios.post(`${BASE_URL}/register`, params, { headers: HEADERS });
    return response.data; // Adjust based on API response structure
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

/**
 * Handles user login.
 * @param {Object} params - The login parameters.
 * @returns {Object} - Response data from the server.
 */
export const loginService = async ({ email, password }) => {
  // Validate input data using the login schema
  const validation = loginSchema.safeParse({ email, password });
  if (!validation.success) {
    const errorMessages = validation.error.errors.map((err) => err.message);
    throw new Error(errorMessages.join(", "));
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      { email, password },
      { headers: HEADERS }
    );

    const { token } = response.data.data;
    localStorage.setItem("token", token); // Store token in localStorage
    return response.data; // Adjust based on API response structure
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

/**
 * Handles user logout.
 * @returns {Object} - Response data from the server.
 */
export const logoutService = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`, {}, { headers: HEADERS });
    localStorage.removeItem("token"); // Remove token from localStorage
    return response.data; // Adjust based on API response structure
  } catch (error) {
    throw new Error(error.response?.data?.message || "Logout failed");
  }
};
